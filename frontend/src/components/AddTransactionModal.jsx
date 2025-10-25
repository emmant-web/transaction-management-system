import { useState } from "react";

function AddTransactionModal({ isOpen, onClose, onAdd }) {
  const [form, setform] = useState({
    transaction_date: "",
    account_number: "",
    account_holder_name: "",
    amount: "",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setform({
      transaction_date: "",
      account_number: "",
      account_holder_name: "",
      amount: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-2xl">
        <h2 className="text-xl font-bold">Add Transaction</h2>
        <p className="text-gray-400 mb-4">Please fill in your details</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="date"
            name="transaction_date"
            value={form.transaction_date}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded-full"
            required
          />
          <input
            type="text"
            name="account_number"
            placeholder="1234-1234-1234"
            value={form.account_number}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded-full outline-none"
            pattern="\d{4}-\d{4}-\d{4}"
            title="Enter account number in format 1234-1234-1234"
            required
          />
          <input
            type="text"
            name="account_holder_name"
            placeholder="Account Holder Name"
            value={form.account_holder_name}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded-full"
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            onBlur={(e) => {
              const value = parseFloat(e.target.value);
              if (!isNaN(value)) {
                setform({ ...form, amount: value.toFixed(2) });
              }
            }}
            className="border border-gray-300 px-4 py-2 w-full rounded-full"
            required
          />

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-400 rounded-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#8370FE] text-white rounded-full hover:bg-[#594BAF]"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTransactionModal;
