"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitBill = splitBill;
function splitBill(total, people) {
    if (people <= 0) {
        throw new Error("Number of people must be greater than 0");
    }
    return total / people;
}
