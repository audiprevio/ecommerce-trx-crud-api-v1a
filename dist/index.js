"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_1 = require("./data");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(express_1.default.json());
// Get all transactions
app.get("/transactions", (req, res) => {
    res.status(200).json({
        messages: "Successfully retrieved all user transaction data. Here they are:",
        transactions: data_1.transactions,
    });
});
// Get a specific transaction by ID
app.get("/transactions/:id", (req, res) => {
    const id = req.params.id;
    const transaction = data_1.transactions.find((t) => t.id === id);
    if (transaction) {
        res.json(transaction);
    }
    else {
        res.status(404).json({ message: "Transaction not found" });
    }
});
// Create a new transaction
app.post("/transactions", (req, res) => {
    const { userid, description, amount } = req.body;
    const newTransaction = {
        id: (0, data_1.generateNewId)(),
        userid,
        description,
        amount,
    };
    data_1.transactions.push(newTransaction);
    res.status(201).json(newTransaction);
});
// Update an existing transaction by ID
app.put("/transactions/:id", (req, res) => {
    const id = req.params.id;
    const { userid, description, amount } = req.body;
    const transactionIndex = data_1.transactions.findIndex((t) => t.id === id);
    if (transactionIndex !== -1) {
        data_1.transactions[transactionIndex] = Object.assign(Object.assign({}, data_1.transactions[transactionIndex]), { userid,
            description,
            amount });
        res.json(data_1.transactions[transactionIndex]);
    }
    else {
        res.status(404).json({ message: "Transaction not found" });
    }
});
// Partially update an existing transaction by ID
app.patch("/transactions/:id", (req, res) => {
    const id = req.params.id;
    const { description, amount } = req.body;
    const transactionIndex = data_1.transactions.findIndex((t) => t.id === id);
    if (transactionIndex !== -1) {
        data_1.transactions[transactionIndex] = Object.assign(Object.assign(Object.assign({}, data_1.transactions[transactionIndex]), (description && { description })), (amount && { amount }));
        res.json(data_1.transactions[transactionIndex]);
    }
    else {
        res.status(404).json({ message: "Transaction not found" });
    }
});
// Delete an existing transaction by ID
app.delete("/transactions/:id", (req, res) => {
    const id = req.params.id;
    const transactionIndex = data_1.transactions.findIndex((t) => t.id === id);
    if (transactionIndex !== -1) {
        const deletedTransaction = data_1.transactions.splice(transactionIndex, 1);
        res.json(deletedTransaction[0]);
    }
    else {
        res.status(404).json({ message: "Transaction not found" });
    }
});
app.listen(3000, '0.0.0.0', () => {
    console.log(`[server]: Server is running on port 3000`);
});
