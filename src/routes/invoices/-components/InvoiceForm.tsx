import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";
import TextArea from "@/components/shared/TextArea";
import { paymentTermOptions } from "@/data";
import type { Address, Invoice, InvoiceFormValue } from "@/types";
import InvoiceFormClientAddressContainer from "./InvoiceFormClientAddressContainer";
import InvoiceFormItemList from "./InvoiceFormItemList";
import InvoiceFormSenderAddressContainer from "./InvoiceFormSenderAddressContainer";

interface Props {
  value: InvoiceFormValue;
  onChange: (next: InvoiceFormValue) => void;
}

const InvoiceForm: React.FC<Props> = ({ value, onChange }) => {
  const set = <K extends keyof InvoiceFormValue>(
    key: K,
    v: InvoiceFormValue[K],
  ) => onChange({ ...value, [key]: v });

  const setClient = (field: keyof Address, v: string) =>
    set("clientAddress", { ...value.clientAddress, [field]: v });

  return (
    <div className="flex flex-col gap-y-12">
      <InvoiceFormSenderAddressContainer value={value} set={set} />
      <InvoiceFormClientAddressContainer
        value={value}
        setClient={setClient}
        set={set}
      />
      <section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input
            label="Invoice Date"
            type="date"
            value={value.createdAt}
            onChange={(e) => set("createdAt", e.target.value)}
          />
          <Select
            label="Payment Terms"
            value={String(value.paymentTerms)}
            onChange={(v) =>
              set("paymentTerms", Number(v) as Invoice["paymentTerms"])
            }
            options={paymentTermOptions}
          />
        </div>
        <div className="mt-6">
          <TextArea
            label="Project Description"
            placeholder="e.g. Graphic Design Service"
            value={value.description}
            onChange={(e) => set("description", e.target.value)}
            rows={2}
          />
        </div>
      </section>
      <InvoiceFormItemList value={value} set={set} />
    </div>
  );
};

export default InvoiceForm;
