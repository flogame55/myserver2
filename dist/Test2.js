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
const splitBill_1 = require("./splitBill");
const test_no_tax = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("--- Starting Test (No Tax) ---");
    const total = 100;
    const people = 4;
    const perPerson = (0, splitBill_1.splitBill)(total, people);
    if (perPerson === 25) {
        console.log("✅ Test Passed: 100 / 4 = 25");
    }
    else {
        console.log("❌ Test Failed: Expected 25, but got " + perPerson);
        process.exit(1);
    }
});
test_no_tax();
