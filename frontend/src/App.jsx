import { useEffect, useState } from "react";
import './index.css'

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Transactions</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th>Date</th>
            <th>Account Number</th>
            <th>Account Holder</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, index) => (
            <tr key={index}>
              <td>{t["Transaction Date"]}</td>
              <td>{t["Account Number"]}</td>
              <td>{t["Account Holder Name"]}</td>
              <td>{t["Amount"]}</td>
              <td>{t["Status"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
