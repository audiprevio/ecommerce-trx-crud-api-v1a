import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { transactions, Transaction, generateNewId } from "./data";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// Get all transactions
app.get("/transactions", (req: Request, res: Response) => {
  res.status(200).json({
    messages: "Successfully retrieved all user transaction data. Here they are:",
    transactions: transactions,
  });
});

// Get a specific transaction by ID
app.get("/transactions/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const transaction = transactions.find((t) => t.id === id);
  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ message: "Transaction not found" });
  }
});

// Create a new transaction
app.post("/transactions", (req: Request, res: Response) => {
  const { userid, description, amount } = req.body;
  const newTransaction: Transaction = {
    id: generateNewId(), // Generate a new unique ID
    userid,
    description,
    amount,
  };
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
});

// Update an existing transaction by ID
app.put("/transactions/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const { userid, description, amount } = req.body;
  const transactionIndex = transactions.findIndex((t) => t.id === id);
  if (transactionIndex !== -1) {
    transactions[transactionIndex] = {
      ...transactions[transactionIndex],
      userid,
      description,
      amount,
    };
    res.json(transactions[transactionIndex]);
  } else {
    res.status(404).json({ message: "Transaction not found" });
  }
});

// Partially update an existing transaction by ID
app.patch("/transactions/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const { description, amount } = req.body;
  const transactionIndex = transactions.findIndex((t) => t.id === id);
  if (transactionIndex !== -1) {
    transactions[transactionIndex] = {
      ...transactions[transactionIndex],
      ...(description && { description }),
      ...(amount && { amount }),
    };
    res.json(transactions[transactionIndex]);
  } else {
    res.status(404).json({ message: "Transaction not found" });
  }
});

// Delete an existing transaction by ID
app.delete("/transactions/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const transactionIndex = transactions.findIndex((t) => t.id === id);
  if (transactionIndex !== -1) {
    const deletedTransaction = transactions.splice(transactionIndex, 1);
    res.json(deletedTransaction[0]);
  } else {
    res.status(404).json({ message: "Transaction not found" });
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log(`[server]: Server is running on port 3000`);
});
