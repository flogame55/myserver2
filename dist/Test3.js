"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const test_with_tax = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("--- Starting Test (With Tax 7%) ---");
    const price = 100;
    const people = 4;
    const totalWithTax = Utils_1.utils.addTax07(price);
    const perPerson = Utils_1.utils.splitBill(totalWithTax, people);
    if (totalWithTax === 107 && perPerson === 26.75) {
        console.log("✅ Test Passed: 100 + 7% = 107, 107 / 4 = 26.75");
    }
    else {
        console.log("❌ Test Failed: Expected 107 and 26.75, got", { totalWithTax, perPerson });
        process.exit(1);
    }
});
test_with_tax();
