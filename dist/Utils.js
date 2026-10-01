"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
function hello() {
    console.log("Hello, world!");
}
function add(a, b) {
    return a + b;
}
function addTax07(price) {
    return price + (price * 0.07);
}
function splitBill(total, people) {
    if (people <= 0) {
        throw new Error("Number of people must be greater than 0");
    }
    return total / people;
}
exports.utils = { hello, add, addTax07, splitBill };
