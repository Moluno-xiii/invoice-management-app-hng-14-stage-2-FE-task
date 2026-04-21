import { getAllInvoices, getInvoiceById } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";

const useGetInvoices = () => {
  return useQuery({
    queryKey: ["invoices"],
    queryFn: getAllInvoices,
    staleTime: Infinity,
  });
};

const useGetInvoiceById = (invoiceId: string) => {
  return useQuery({
    queryKey: ["invoices", invoiceId],
    queryFn: async () => {
      const invoice = await getInvoiceById(invoiceId);
      if (!invoice) throw new Error(`Invoice ${invoiceId} not found`);
      return invoice;
    },
    enabled: Boolean(invoiceId),
    staleTime: Infinity,
  });
};

export { useGetInvoices, useGetInvoiceById };
export default useGetInvoices;
