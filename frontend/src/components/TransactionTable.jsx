function TransactionTable({ transactions }) {
  return (
    <table className="min-w-full border border-gray-300 rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Date</th>
          <th className="p-2 text-left">Account Number</th>
          <th className="p-2 text-left">Account Holder</th>
          <th className="p-2 text-left">Amount</th>
          <th className="p-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t, index) => (
          <tr key={index} className="border-t">
            <td className="p-2">{t["Transaction Date"]}</td>
            <td className="p-2">{t["Account Number"]}</td>
            <td className="p-2">{t["Account Holder Name"]}</td>
            <td className="p-2">{t["Amount"]}</td>
            <td
              className={`p-2 font-medium ${
                t["Status"] === "Pending"
                  ? "text-yellow-600"
                  : t["Status"] === "Settled"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
            {t["Status"]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;