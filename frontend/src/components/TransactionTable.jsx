function TransactionTable({ transactions }) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* ===== Table Header ===== */}
      <div className="overflow-hidden rounded-t-2xl border border-gray-200">
        <table className="min-w-full border-separate border-spacing-0 table-fixed">
          <colgroup>
            <col className="w-[15%]" /> {/* Date */}
            <col className="w-[25%]" /> {/* Account Number */}
            <col className="w-[25%]" /> {/* Account Holder */}
            <col className="w-[15%]" /> {/* Amount */}
            <col className="w-[15%]" /> {/* Status */}
          </colgroup>

          <thead className="bg-[#F6F4FF]">
            <tr>
              <th className="p-4 text-left uppercase text-[#8370FE]">Date</th>
              <th className="p-4 text-left uppercase text-[#8370FE]">
                Account Number
              </th>
              <th className="p-4 text-right uppercase text-[#8370FE]">
                Account Holder
              </th>
              <th className="p-4 text-left uppercase text-[#8370FE]">Amount</th>
              <th className="p-4 text-left uppercase text-[#8370FE]">
                Status
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* ===== Table Body ===== */}
      <div className="overflow-hidden rounded-b-2xl border border-gray-200 border-t-0">
        <table className="min-w-full border-separate border-spacing-0 table-fixed">
          <colgroup>
            <col className="w-[15%]" />
            <col className="w-[25%]" />
            <col className="w-[25%]" />
            <col className="w-[15%]" />
            <col className="w-[15%]" />
          </colgroup>

          <tbody className="bg-white">
            {transactions.map((t, index) => (
              <tr
                key={index}
                className="border-t border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="p-4">{t["Transaction Date"]}</td>
                <td className="p-4">{t["Account Number"]}</td>
                <td className="p-4 text-right">{t["Account Holder Name"]}</td>
                <td className="p-4">{t["Amount"]}</td>
                <td className="p-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-base font-medium
                      ${
                        t["Status"] === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : t["Status"] === "Settled"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {t["Status"] === "Pending" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                    )}

                    {t["Status"] === "Settled" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    )}

                    {t["Status"] === "Failed" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    )}
                    {t["Status"]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
