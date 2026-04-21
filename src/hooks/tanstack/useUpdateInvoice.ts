import { markInvoiceAsPaid, updateInvoice } from "@/lib/db";
import type { InvoiceFormValue } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type UpdateInvoiceInput = {
  id: string;
  value: InvoiceFormValue;
};

const useUpdateInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, value }: UpdateInvoiceInput) => updateInvoice(id, value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
  });
};

const useMarkInvoiceAsPaid = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => markInvoiceAsPaid(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
  });
};

export { useMarkInvoiceAsPaid };
export default useUpdateInvoice;
