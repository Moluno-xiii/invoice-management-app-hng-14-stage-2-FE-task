import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import TextArea from "@/components/shared/TextArea";
import { paymentTermOptions } from "@/data";
import type { InvoiceFormErrors } from "@/lib/form-errors";
import type { Address, Invoice, InvoiceFormValue } from "@/types";
import InvoiceFormClientAddressContainer from "./InvoiceFormClientAddressContainer";
import InvoiceFormItemList from "./InvoiceFormItemList";
import InvoiceFormSenderAddressContainer from "./InvoiceFormSenderAddressContainer";

interface Props {
  value: InvoiceFormValue;
  onChange: (next: InvoiceFormValue) => void;
  errors?: InvoiceFormErrors;
}

const InvoiceForm: React.FC<Props> = ({ value, onChange, errors }) => {
  const set = <K extends keyof InvoiceFormValue>(
    key: K,
    v: InvoiceFormValue[K],
  ) => onChange({ ...value, [key]: v });

  const setClient = (field: keyof Address, v: string) =>
    set("clientAddress", { ...value.clientAddress, [field]: v });

  return (
    <div className="flex flex-col gap-y-12">
      <InvoiceFormSenderAddressContainer
        value={value}
        set={set}
        errors={errors}
      />
      <InvoiceFormClientAddressContainer
        value={value}
        setClient={setClient}
        set={set}
        errors={errors}
      />
      <section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input
            label="Invoice Date"
            type="date"
            value={value.createdAt}
            onChange={(e) => set("createdAt", e.target.value)}
            error={errors?.["createdAt"]}
          />
          <Select
            label="Payment Terms"
            value={String(value.paymentTerms)}
            onChange={(v) =>
              set("paymentTerms", Number(v) as Invoice["paymentTerms"])
            }
            options={paymentTermOptions}
            error={errors?.["paymentTerms"]}
          />
        </div>
        <div className="mt-6">
          <TextArea
            label="Project Description"
            placeholder="e.g. Graphic Design Service"
            value={value.description}
            onChange={(e) => set("description", e.target.value)}
            rows={2}
            error={errors?.["description"]}
          />
        </div>
      </section>
      <InvoiceFormItemList value={value} set={set} errors={errors} />
    </div>
  );
};

export default InvoiceForm;
