import { createInvoice } from "@/lib/db";
import type { Invoice, InvoiceFormValue } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type CreateInvoiceInput = {
  value: InvoiceFormValue;
  status?: Invoice["status"];
};

const useCreateInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ value, status }: CreateInvoiceInput) =>
      createInvoice(value, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
  });
};

export default useCreateInvoice;
