type InvoicePaymentStatus = "pending" | "paid" | "draft";

interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
}

interface Invoice {
  id: string;
  status: InvoicePaymentStatus;
  createdAt: string;
  paymentDue: string;
  paymentTerms: 1 | 7 | 14 | 30;
  description: string;
  clientName: string;
  clientEmail: string;
  senderAddress: Address;
  clientAddress: Address;
  items: InvoiceItem[];
}

type InvoiceFormValue = {
  senderAddress: Address;
  clientName: string;
  clientEmail: string;
  clientAddress: Address;
  createdAt: string;
  paymentTerms: Invoice["paymentTerms"];
  description: string;
  items: InvoiceItem[];
};

export type {
  Address,
  Invoice,
  InvoiceItem,
  InvoicePaymentStatus,
  InvoiceFormValue,
};
