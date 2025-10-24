import { useState, useEffect } from "react";
import TransactionTable from "../components/TransactionTable";

function TransactionsPage(){
    const [transactions, setTransactions] =  useState([]);

    // Fetch all transactions in transactions.csv
    useEffect(() => {
        fetch("http://localhost:3000/api/v1/transactions")
        .then((res) => res.json())
        .then((data) => setTransactions(data))
        .catch((err) => console.error(err))
    }, [])

    return(
        <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Transaction Management System</h1>
            <TransactionTable transactions={transactions} />
        </div>
    )
}

export default TransactionsPage