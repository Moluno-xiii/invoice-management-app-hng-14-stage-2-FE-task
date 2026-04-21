import { openDB, type DBSchema, type IDBPDatabase } from "idb";
import type { Invoice, InvoiceFormValue } from "@/types";
import { InvoiceSchema } from "./schemas";
import { mockInvoices } from "./mock-invoices";

interface InvoicrDB extends DBSchema {
  invoices: {
    key: string;
    value: Invoice;
    indexes: { "by-status": Invoice["status"] };
  };
}

const DB_NAME = "invoicr";
const DB_VERSION = 1;
const STORE = "invoices";

let dbPromise: Promise<IDBPDatabase<InvoicrDB>> | null = null;

const getDB = () => {
  if (!dbPromise) {
    dbPromise = openDB<InvoicrDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        const store = db.createObjectStore(STORE, { keyPath: "id" });
        store.createIndex("by-status", "status");
      },
    });
  }
  return dbPromise;
};

const seedIfEmpty = async () => {
  const db = await getDB();
  const count = await db.count(STORE);
  if (count > 0) return;
  const tx = db.transaction(STORE, "readwrite");
  await Promise.all(mockInvoices.map((invoice) => tx.store.put(invoice)));
  await tx.done;
};

const getAllInvoices = async (): Promise<Invoice[]> => {
  const db = await getDB();
  const all = await db.getAll(STORE);
  return all.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
};

const getInvoiceById = async (id: string): Promise<Invoice | undefined> => {
  const db = await getDB();
  return db.get(STORE, id);
};

const getRandomId = () => {
  const letters = Array.from({ length: 2 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  ).join("");
  const digits = String(Math.floor(1000 + Math.random() * 9000));
  return `${letters}${digits}`;
};

const paymentDueFrom = (createdAt: string, terms: number) => {
  const date = new Date(createdAt);
  date.setDate(date.getDate() + terms);
  return date.toISOString().slice(0, 10);
};

const createInvoice = async (
  input: InvoiceFormValue,
  status: Invoice["status"] = "pending",
): Promise<Invoice> => {
  const candidate: Invoice = {
    ...input,
    id: getRandomId(),
    status,
    paymentDue: paymentDueFrom(input.createdAt, input.paymentTerms),
  };
  const parsed = InvoiceSchema.parse(candidate);
  const db = await getDB();
  await db.put(STORE, parsed);
  return parsed;
};

const updateInvoice = async (
  id: string,
  input: InvoiceFormValue,
): Promise<Invoice> => {
  const db = await getDB();
  const existing = await db.get(STORE, id);
  if (!existing) throw new Error(`Invoice ${id} not found`);
  const candidate: Invoice = {
    ...input,
    id: existing.id,
    status: existing.status,
    paymentDue: paymentDueFrom(input.createdAt, input.paymentTerms),
  };
  const parsed = InvoiceSchema.parse(candidate);
  await db.put(STORE, parsed);
  return parsed;
};

const deleteInvoice = async (id: string): Promise<void> => {
  const db = await getDB();
  await db.delete(STORE, id);
};

const markInvoiceAsPaid = async (id: string): Promise<Invoice> => {
  const db = await getDB();
  const existing = await db.get(STORE, id);
  if (!existing) throw new Error(`Invoice ${id} not found`);
  const next: Invoice = { ...existing, status: "paid" };
  await db.put(STORE, next);
  return next;
};

export {
  seedIfEmpty,
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  markInvoiceAsPaid,
};
