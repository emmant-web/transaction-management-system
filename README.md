# 💳 Transaction Management System

## 📘 Overview

This project is a **Transaction Management System** built with a **React (Vite)** frontend and a **Rails API** backend.  
It allows users to **view and add transactions**, with all data stored in a **CSV file** instead of a database.

---

## ⚙️ Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS
- Fetch API for HTTP requests

### Backend

- Ruby on Rails (API-only mode)
- Rack CORS for cross-origin access
- CSV for data persistence (no database)

---

## 🧩 Features

- View all transactions (fetched from CSV)
- Add a new transaction via modal form
- CSV automatically updates with new records
- CORS-enabled connection between React (port `5173`) and Rails (port `3000`)

---

### 📝 Add Transaction Modal Fields

The modal form includes the following inputs:
- **Transaction Date** (date input)
- **Account Number** (text input)
- **Account Holder Name** (text input)
- **Amount** (number input)

A random **Status** (Pending, Settled, or Failed) is automatically assigned when adding a new transaction.

--

## 🗂️ Project Structure

```
root/
├── backend/              # Rails API (CSV-based)
│   ├── app/
│   ├── config/
│   ├── data/ # Contains transactions.csv
│   └── ...
├── frontend/             # React + Vite + Tailwind frontend
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── ...
├── README.md
└── .gitignore
```

---

## 🧩 Prerequisites

Before setting up the project, ensure the following software is installed:

| Tool     | Version                                  | Notes                                     |
| -------- | ---------------------------------------- | ----------------------------------------- |
| Node.js  | v22.20.0                                 | Required for React frontend               |
| npm      | Included with Node.js                    | Package manager for frontend dependencies |
| Ruby     | 3.3.1                                    | Backend API development                   |
| Rails    | 7.2.2.2                                  | Backend API framework                     |
| OS       | Windows 11 with Ubuntu 22.04.5 LTS (WSL) | Development environment                   |
| Database | CSV file                                 | Stores transaction data                   |


### 🧪 Optional Tool

| Tool     | Purpose |
| -------- | -------- |
| Postman  | Used for testing API endpoints (GET and POST requests) |

---

## 🚀 Setup and Usage

### 1. Clone the repository

```bash
git clone https://github.com/emmant-web/transaction-management-system.git
cd transaction-management-system
```

### 2. Backend Setup

```bash
# do this with Ubuntu 22.04.5 LTS (WSL)

cd backend
bundle install
rails s
```

**Rails server runs on:** `http://localhost:3000`

**CORS allows access from:** `http://localhost:5173`

#### CSV File Location

Transactions are stored in:

```bash
backend/db/transactions.csv
```

⚠️ **The CSV file must exist before starting the backend.**

### 3. Frontend Setup

```bash
# do this with Ubuntu 22.04.5 LTS (WSL)

cd frontend
npm install
npm run dev
```

**React server runs on:** `http://localhost:5173`

---

## 🔗 Frontend–Backend Connection

Your frontend connects to the Rails API through `fetch()` calls.

```javascript
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
```

### CORS Configuration (Rails)

Located in: `backend/config/initializers/cors.rb`

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:5173"
    resource "*",
      headers: :any,
      methods: [:get, :post, :options]
  end
end
```

This allows the React frontend to communicate with the Rails backend locally.

---

## 🧪 API Endpoints

### GET `/api/v1/transactions`

Returns all transactions.

**Response Example:**

```json
[
  {
    "Transaction Date": "2025-03-01",
    "Account Number": "7289-3445-1121",
    "Account Holder Name": "Maria Johnson",
    "Amount": "150.00",
    "Status": "Settled"
  }
]
```

### POST `/api/v1/transactions`

Adds a new transaction to the CSV.

**Request Example:**

```json
{
  "Transaction Date": "2025-10-28",
  "Account Number": "1111-1111-1111",
  "Account Holder Name": "Landers Market",
  "Amount": "687.00",
  "Status": "Settled"
}
```

**Response Example:**

```json
{
  "message": "Transaction added successfully",
  "status": "Pending"
}
```

---

## 🧪 Testing

This section explains how to verify that both the frontend and backend work correctly.

### 1. Backend Testing (API Endpoints)

Use **Postman** or **cURL**.

**Fetch all transactions (GET):**

```bash
GET http://localhost:3000/api/v1/transactions
```

**Add a new transaction (POST):**

```bash
POST http://localhost:3000/api/v1/transactions
Content-Type: application/json
```

**Body example:**

```json
{
  "Transaction Date": "2025-10-28",
  "Account Number": "1234-1234-1234",
  "Account Holder Name": "John Doe",
  "Amount": "250.00",
  "Status": "Pending"
}
```

✅ Check the CSV file to confirm the new transaction was added.

### 2. Frontend Testing

Start backend and frontend:

```bash
# Terminal 1
cd backend
rails s

# Terminal 2
cd frontend
npm run dev
```

**Open browser:** `http://localhost:5173`

**Check:**

- Transactions table displays existing data
- Add Transaction modal works
- Newly added transactions appear instantly in the table

### 3. CSV Data Verification

Check `backend/db/transactions.csv` to ensure new entries are appended.

---

## ✅ Expected Outcome

- ✓ Rails API correctly reads/writes CSV data
- ✓ React frontend dynamically updates the table
- ✓ API responses match expected JSON
- ✓ No CORS or network errors occur
- ✓ Each newly added transaction is automatically assigned one of three statuses: **Pending**, **Settled**, or **Failed**.


---

## 🧑‍💻 Developer Notes

- All transactions are stored in CSV format (no database required)
- Transaction dates should follow YYYY-MM-DD format
- Account numbers follow XXXX-XXXX-XXXX format

---

## 🎨 Status Color Legend

| Status  | Color  |
|----------|--------|
| Pending  | 🟡 Yellow |
| Settled  | 🟢 Green  |
| Failed   | 🔴 Red    |

---


## 👨‍💻 Created By
- Emmanuel Toribio
- 🔗 GitHub: emmant-web
