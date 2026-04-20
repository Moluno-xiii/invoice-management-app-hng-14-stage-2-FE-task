import Input from "@/components/shared/Input";
import SectionLabel from "@/components/shared/SectionLabel";
import type { Address, InvoiceFormValue } from "@/types";

type Props = {
  value: InvoiceFormValue;
  set: <K extends keyof InvoiceFormValue>(
    key: K,
    v: InvoiceFormValue[K],
  ) => void;
  setClient: (field: keyof Address, v: string) => void;
};

const InvoiceFormClientAddressContainer: React.FC<Props> = ({
  value,
  set,
  setClient,
}) => {
  return (
    <section>
      <SectionLabel text="Bill To" />
      <div className="flex flex-col gap-y-6">
        <Input
          label="Client's Name"
          value={value.clientName}
          onChange={(e) => set("clientName", e.target.value)}
        />
        <Input
          label="Client's Email"
          type="email"
          placeholder="e.g. email@example.com"
          value={value.clientEmail}
          onChange={(e) => set("clientEmail", e.target.value)}
        />
        <Input
          label="Street Address"
          value={value.clientAddress.street}
          onChange={(e) => setClient("street", e.target.value)}
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          <Input
            label="City"
            value={value.clientAddress.city}
            onChange={(e) => setClient("city", e.target.value)}
          />
          <Input
            label="Post Code"
            value={value.clientAddress.postCode}
            onChange={(e) => setClient("postCode", e.target.value)}
          />
          <Input
            label="Country"
            wrapperClassName="col-span-2 md:col-span-1"
            value={value.clientAddress.country}
            onChange={(e) => setClient("country", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default InvoiceFormClientAddressContainer;
