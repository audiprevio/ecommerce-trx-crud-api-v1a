"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNewId = exports.transactions = void 0;
exports.transactions = [
    { id: "1", userid: "081234567890", description: "buy", amount: 20000 },
    { id: "2", userid: "082345678901", description: "buy", amount: 25000 },
    { id: "3", userid: "083456789012", description: "sell", amount: 55000 },
    { id: "4", userid: "081234567890", description: "sell", amount: 30000 },
    { id: "5", userid: "082345678901", description: "buy", amount: 15000 },
    { id: "6", userid: "083456789012", description: "sell", amount: 10000 },
    { id: "7", userid: "081234567890", description: "buy", amount: 22000 },
    { id: "8", userid: "082345678901", description: "sell", amount: 18000 },
    { id: "9", userid: "083456789012", description: "buy", amount: 17000 },
    { id: "10", userid: "081234567890", description: "buy", amount: 35000 },
    { id: "11", userid: "082345678901", description: "sell", amount: 42000 },
    { id: "12", userid: "083456789012", description: "sell", amount: 27000 },
    { id: "13", userid: "081234567890", description: "buy", amount: 23000 },
    { id: "14", userid: "082345678901", description: "sell", amount: 28000 },
    { id: "15", userid: "083456789012", description: "buy", amount: 12000 },
];
let currentId = exports.transactions.length + 1;
function generateNewId() {
    return String(currentId++);
}
exports.generateNewId = generateNewId;
