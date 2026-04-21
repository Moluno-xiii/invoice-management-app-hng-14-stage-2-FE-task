import { deleteInvoice } from "@/lib/db";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteInvoice(id),
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.removeQueries({ queryKey: ["invoices", id] });
    },
  });
};

export default useDeleteInvoice;
