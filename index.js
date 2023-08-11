"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var data_1 = require("./data");
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT || 8000;
app.use(express_1.default.json());
// Get all transactions
app.get("/transactions", function (req, res) {
    res.status(200).json({
        messages: "Successfully retrieved all user transaction data. Here they are:",
        transactions: data_1.transactions,
    });
});
// Get a specific transaction by ID
app.get("/transactions/:id", function (req, res) {
    var id = req.params.id;
    var transaction = data_1.transactions.find(function (t) { return t.id === id; });
    if (transaction) {
        res.json(transaction);
    }
    else {
        res.status(404).json({ message: "Transaction not found" });
    }
});
// Create a new transaction
app.post("/transactions", function (req, res) {
    var _a = req.body, userid = _a.userid, description = _a.description, amount = _a.amount;
    var newTransaction = {
        id: (0, data_1.generateNewId)(),
        userid: userid,
        description: description,
        amount: amount,
    };
    data_1.transactions.push(newTransaction);
    res.status(201).json(newTransaction);
});
// Update an existing transaction by ID
app.put("/transactions/:id", function (req, res) {
    var id = req.params.id;
    var _a = req.body, userid = _a.userid, description = _a.description, amount = _a.amount;
    var transactionIndex = data_1.transactions.findIndex(function (t) { return t.id === id; });
    if (transactionIndex !== -1) {
        data_1.transactions[transactionIndex] = __assign(__assign({}, data_1.transactions[transactionIndex]), { userid: userid, description: description, amount: amount });
        res.json(data_1.transactions[transactionIndex]);
    }
    else {
        res.status(404).json({ message: "Transaction not found" });
    }
});
// Partially update an existing transaction by ID
app.patch("/transactions/:id", function (req, res) {
    var id = req.params.id;
    var _a = req.body, description = _a.description, amount = _a.amount;
    var transactionIndex = data_1.transactions.findIndex(function (t) { return t.id === id; });
    if (transactionIndex !== -1) {
        data_1.transactions[transactionIndex] = __assign(__assign(__assign({}, data_1.transactions[transactionIndex]), (description && { description: description })), (amount && { amount: amount }));
        res.json(data_1.transactions[transactionIndex]);
    }
    else {
        res.status(404).json({ message: "Transaction not found" });
    }
});
// Delete an existing transaction by ID
app.delete("/transactions/:id", function (req, res) {
    var id = req.params.id;
    var transactionIndex = data_1.transactions.findIndex(function (t) { return t.id === id; });
    if (transactionIndex !== -1) {
        var deletedTransaction = data_1.transactions.splice(transactionIndex, 1);
        res.json(deletedTransaction[0]);
    }
    else {
        res.status(404).json({ message: "Transaction not found" });
    }
});
app.listen(3000, '0.0.0.0', function () {
    console.log("[server]: Server is running on port 3000");
});
