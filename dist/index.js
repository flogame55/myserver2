"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3000, () => {
    console.log("Server started on port 3000 (http://localhost:3000)");
});
