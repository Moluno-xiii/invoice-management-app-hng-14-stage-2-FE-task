import type { ZodError } from "zod";

type InvoiceFormErrors = Record<string, string>;

const flattenIssues = (error: ZodError): InvoiceFormErrors => {
  const map: InvoiceFormErrors = {};
  for (const issue of error.issues) {
    const path = issue.path.join(".");
    if (!map[path]) map[path] = issue.message;
  }
  return map;
};

export { flattenIssues };
export type { InvoiceFormErrors };
