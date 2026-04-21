import { z } from "zod";

const requiredString = (field: string) =>
  z.string().trim().min(1, `${field} can't be empty`);

const AddressSchema = z.object({
  street: requiredString("Street Address"),
  city: requiredString("City"),
  postCode: requiredString("Post Code"),
  country: requiredString("Country"),
});

const InvoiceItemSchema = z.object({
  name: requiredString("Item Name"),
  quantity: z.number().int().min(1, "Quantity must be at least 1"),
  price: z.number().min(0, "Price can't be negative"),
});

const InvoicePaymentStatusSchema = z.enum(["pending", "paid", "draft"]);

const PaymentTermsSchema = z.union([
  z.literal(1),
  z.literal(7),
  z.literal(14),
  z.literal(30),
]);

const InvoiceFormValueSchema = z.object({
  senderAddress: AddressSchema,
  clientName: requiredString("Client's Name"),
  clientEmail: z.email("Enter a valid email"),
  clientAddress: AddressSchema,
  createdAt: requiredString("Invoice Date"),
  paymentTerms: PaymentTermsSchema,
  description: requiredString("Project Description"),
  items: z.array(InvoiceItemSchema).min(1, "Add at least one item"),
});

const InvoiceSchema = InvoiceFormValueSchema.extend({
  id: requiredString("Invoice ID"),
  status: InvoicePaymentStatusSchema,
  paymentDue: requiredString("Payment Due"),
});

type Address = z.infer<typeof AddressSchema>;
type InvoiceItem = z.infer<typeof InvoiceItemSchema>;
type InvoicePaymentStatus = z.infer<typeof InvoicePaymentStatusSchema>;
type Invoice = z.infer<typeof InvoiceSchema>;
type InvoiceFormValue = z.infer<typeof InvoiceFormValueSchema>;

export {
  AddressSchema,
  InvoiceItemSchema,
  InvoicePaymentStatusSchema,
  InvoiceFormValueSchema,
  InvoiceSchema,
};
export type {
  Address,
  InvoiceItem,
  InvoicePaymentStatus,
  Invoice,
  InvoiceFormValue,
};
