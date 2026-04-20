import Input from "@/components/shared/Input";
import { formatAmount } from "@/lib/invoice";
import type { InvoiceFormValue, InvoiceItem } from "@/types";
import { FaTrash } from "react-icons/fa6";

interface Props {
  value: InvoiceFormValue;
  set: <K extends keyof InvoiceFormValue>(
    key: K,
    v: InvoiceFormValue[K],
  ) => void;
}

const InvoiceFormItemList: React.FC<Props> = ({ value, set }) => {
  const updateItem = (index: number, patch: Partial<InvoiceItem>) => {
    const next = value.items.map((item, i) =>
      i === index ? { ...item, ...patch } : item,
    );
    set("items", next);
  };

  const addItem = () =>
    set("items", [...value.items, { name: "", quantity: 1, price: 0 }]);

  const removeItem = (index: number) =>
    set(
      "items",
      value.items.filter((_, i) => i !== index),
    );

  return (
    <section>
      <p className="mb-6 text-[18px] font-bold tracking-[-0.38px] text-[#777F98]">
        Item List
      </p>
      <ul className="flex flex-col gap-y-12 md:gap-y-4">
        {value.items.map((item, index) => (
          <li
            key={index}
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] gap-x-4 gap-y-6 md:grid-cols-[1fr_80px_100px_100px_16px] md:items-end md:gap-x-4"
          >
            <Input
              label="Item Name"
              wrapperClassName="col-span-4 md:col-span-1"
              value={item.name}
              onChange={(e) => updateItem(index, { name: e.target.value })}
            />
            <Input
              label="Qty."
              wrapperClassName="col-span-1"
              type="number"
              min={0}
              value={item.quantity}
              onChange={(e) =>
                updateItem(index, { quantity: Number(e.target.value) || 0 })
              }
            />
            <Input
              label="Price"
              wrapperClassName="col-span-1"
              type="number"
              min={0}
              step="0.01"
              value={item.price}
              onChange={(e) =>
                updateItem(index, { price: Number(e.target.value) || 0 })
              }
            />
            <div className="col-span-1 flex flex-col gap-y-2.25">
              <span className="text-text-accent text-sml font-medium tracking-[-0.1px]">
                Total
              </span>
              <span className="text-text-accent text-nm flex h-12 items-center font-bold tracking-[-0.25px]">
                {formatAmount(item.quantity * item.price)}
              </span>
            </div>
            <button
              type="button"
              aria-label="Remove item"
              onClick={() => removeItem(index)}
              className="text-text-accent hover:text-error col-span-1 pb-2 transition-colors duration-200 md:pb-4"
            >
              <FaTrash size={16} />
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={addItem}
        className="bg-inverse-btn-bg hover:bg-inverse-btn-hover text-inverse-btn-text text-nm mt-12 mb-5 h-12 w-full rounded-full font-bold tracking-[-0.25px] transition-colors md:mt-4"
      >
        + Add New Item
      </button>
    </section>
  );
};

export default InvoiceFormItemList;
