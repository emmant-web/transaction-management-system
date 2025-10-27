function TransactionTable({ transactions }) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* ===== DESKTOP / LAPTOP TABLE ===== */}
      <div className="hidden md:block">
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <table className="min-w-full border-separate border-spacing-0 table-fixed">
            <colgroup>
              <col className="w-[20%]" /> {/* Transaction Date */}
              <col className="w-[20%]" /> {/* Account Number */}
              <col className="w-[25%]" /> {/* Account Holder */}
              <col className="w-[20%]" /> {/* Amount */}
              <col className="w-[15%]" /> {/* Status */}
            </colgroup>

            <thead className="bg-[#F6F4FF]">
              <tr>
                <th className="p-4 text-left uppercase text-[#8370FE]">
                  Transaction Date
                </th>
                <th className="p-4 text-left uppercase text-[#8370FE]">
                  Account Number
                </th>
                <th className="p-4 text-right uppercase text-[#8370FE]">
                  Account Holder
                </th>
                <th className="p-4 text-left uppercase text-[#8370FE]">
                  Amount
                </th>
                <th className="p-4 text-left uppercase text-[#8370FE]">
                  Status
                </th>
              </tr>
            </thead>

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
                    <StatusBadge status={t["Status"]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== MOBILE STACKED CARD VIEW ===== */}
      <div className="md:hidden space-y-4">
        {transactions.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl border border-gray-100 p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-500">{t["Transaction Date"]}</p>
              <StatusBadge status={t["Status"]} />
            </div>
            <div className="space-y-1">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Account Number:</span>{" "}
                {t["Account Number"]}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Account Holder:</span>{" "}
                {t["Account Holder Name"]}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Amount:</span> {t["Amount"]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== STATUS BADGE COMPONENT (your original styling kept) ===== */
function StatusBadge({ status }) {
  const color =
    status === "Pending"
      ? "bg-yellow-100 text-yellow-700 md:py-2 md:px-4 md:text-base"
      : status === "Settled"
      ? "bg-green-100 text-green-700 md:py-2 md:px-4 md:text-base"
      : "bg-red-100 text-red-700 md:py-2 md:px-4 md:text-base";

  const icon =
    status === "Pending" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 md:w-5 md:h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        />
      </svg>
    ) : status === "Settled" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 md:w-5 md:h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 md:w-5 md:h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    );

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${color}`}
    >
      {icon}
      {status}
    </span>
  );
}

export default TransactionTable;
