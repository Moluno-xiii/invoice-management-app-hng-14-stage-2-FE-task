import Input from "@/components/shared/Input";
import SectionLabel from "@/components/shared/SectionLabel";
import type { Address, InvoiceFormValue } from "@/types";

interface Props {
  value: InvoiceFormValue;
  set: <K extends keyof InvoiceFormValue>(
    key: K,
    v: InvoiceFormValue[K],
  ) => void;
}

const InvoiceFormSenderAddressContainer: React.FC<Props> = ({ value, set }) => {
  const setSender = (field: keyof Address, v: string) =>
    set("senderAddress", { ...value.senderAddress, [field]: v });
  return (
    <section>
      <SectionLabel text="Bill From" />
      <Input
        label="Street Address"
        value={value.senderAddress.street}
        onChange={(e) => setSender("street", e.target.value)}
      />
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
        <Input
          label="City"
          value={value.senderAddress.city}
          onChange={(e) => setSender("city", e.target.value)}
        />
        <Input
          label="Post Code"
          value={value.senderAddress.postCode}
          onChange={(e) => setSender("postCode", e.target.value)}
        />
        <Input
          label="Country"
          wrapperClassName="col-span-2 md:col-span-1"
          value={value.senderAddress.country}
          onChange={(e) => setSender("country", e.target.value)}
        />
      </div>
    </section>
  );
};

export default InvoiceFormSenderAddressContainer;
