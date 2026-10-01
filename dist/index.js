"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const utils = require("./Utils").utils;
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/split", (req, res) => {
    const total = Number(req.query.total);
    const people = Number(req.query.people);
    const withTax = req.query.withTax === "true";
    if (isNaN(total) || isNaN(people) || people <= 0) {
        res.status(400).json({ error: "Invalid total or people count" });
        return;
    }
    try {
        const finalTotal = withTax ? utils.addTax07(total) : total;
        const perPerson = utils.splitBill(finalTotal, people);
        res.json({ total: finalTotal, perPerson });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.listen(3000, () => {
    console.log("Server started on port 3000 (http://localhost:3000)");
});
