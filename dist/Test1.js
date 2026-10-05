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
const addTax07_1 = require("./addTax07");
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    if ((0, splitBill_1.splitBill)(100, 4) === 25) {
        console.log("Test case 1 passed (splitBill: 100 / 4 = 25)");
    }
    else {
        console.log("Test case 1 Failed if (splitBill(100, 4) === 25)");
        process.exit(1);
    }
    if ((0, addTax07_1.addTax07)(100) === 107) {
        console.log("Test case 2 passed (addTax07: 100 + 7% = 107)");
    }
    else {
        console.log("Test case 2 Failed if (addTax07(100) === 107)");
        process.exit(1);
    }
});
unit_test();
