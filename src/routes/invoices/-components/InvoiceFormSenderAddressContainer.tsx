import Input from "@/components/shared/Input";
import SectionLabel from "@/components/shared/SectionLabel";
import type { InvoiceFormErrors } from "@/lib/form-errors";
import type { Address, InvoiceFormValue } from "@/types";

interface Props {
  value: InvoiceFormValue;
  set: <K extends keyof InvoiceFormValue>(
    key: K,
    v: InvoiceFormValue[K],
  ) => void;
  errors?: InvoiceFormErrors;
}

const InvoiceFormSenderAddressContainer: React.FC<Props> = ({
  value,
  set,
  errors,
}) => {
  const setSender = (field: keyof Address, v: string) =>
    set("senderAddress", { ...value.senderAddress, [field]: v });
  return (
    <section>
      <SectionLabel text="Bill From" />
      <Input
        label="Street Address"
        value={value.senderAddress.street}
        onChange={(e) => setSender("street", e.target.value)}
        error={errors?.["senderAddress.street"]}
      />
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
        <Input
          label="City"
          value={value.senderAddress.city}
          onChange={(e) => setSender("city", e.target.value)}
          error={errors?.["senderAddress.city"]}
        />
        <Input
          label="Post Code"
          value={value.senderAddress.postCode}
          onChange={(e) => setSender("postCode", e.target.value)}
          error={errors?.["senderAddress.postCode"]}
        />
        <Input
          label="Country"
          wrapperClassName="col-span-2 md:col-span-1"
          value={value.senderAddress.country}
          onChange={(e) => setSender("country", e.target.value)}
          error={errors?.["senderAddress.country"]}
        />
      </div>
    </section>
  );
};

export default InvoiceFormSenderAddressContainer;
