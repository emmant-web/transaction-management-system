import { useState, useEffect } from "react";
import TransactionTable from "../components/TransactionTable";
import AddTransactionModal from "../components/AddTransactionModal";

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all transactions in transactions.csv
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  }, []);

  // Add new transaction
  const handleAddTransaction = (newTransaction) => {
    fetch("http://localhost:3000/api/v1/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then(() => {
        // Re-fetch after adding
        return fetch("http://localhost:3000/api/v1/transactions");
      })
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6">

      <div className="md:flex justify-between mx-auto mb-4 md:max-w-7xl">

        <div className="mb-4 text-center md:text-start">
          <h1 className="text-3xl font-bold">
          Transaction Management System
        </h1>
        <p className="text-gray-400">Overview of transactions</p>
        </div>
        
        <div className="flex justify-center">
           <button
          onClick={() => setIsModalOpen(true)}
          className="text-white px-4 py-2 rounded-full flex justify-center items-center gap-2 mb-4 bg-[#8370FE]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Add Transaction
        </button>
        </div>
       

      </div>

      <TransactionTable transactions={transactions} />

      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTransaction}
      />
    </div>
  );
}

export default TransactionsPage;
