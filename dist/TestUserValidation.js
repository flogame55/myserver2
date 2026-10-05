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
const test_user_validation = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("--- Starting User Validation Unit Test (Email & Age) ---");
    // ==========================================
    // 1. ทดสอบ Email Validation
    // ==========================================
    // 1.1 Email ถูกต้อง
    if ((0, Utils_1.validateEmail)("user@example.com") === true) {
        console.log("✅ Email Test 1 Passed: valid email (user@example.com)");
    }
    else {
        console.log("❌ Email Test 1 Failed");
        process.exit(1);
    }
    // 1.2 Email ไม่มีเครื่องหมาย @ (ต้องไม่ผ่าน)
    if ((0, Utils_1.validateEmail)("userexample.com") === false) {
        console.log("✅ Email Test 2 Passed: correctly rejected missing @");
    }
    else {
        console.log("❌ Email Test 2 Failed");
        process.exit(1);
    }
    // 1.3 Email ไม่มี Domain (ต้องไม่ผ่าน)
    if ((0, Utils_1.validateEmail)("user@") === false) {
        console.log("✅ Email Test 3 Passed: correctly rejected missing domain");
    }
    else {
        console.log("❌ Email Test 3 Failed");
        process.exit(1);
    }
    // 1.4 Email ค่าว่าง (ต้องไม่ผ่าน)
    if ((0, Utils_1.validateEmail)("") === false) {
        console.log("✅ Email Test 4 Passed: correctly rejected empty string");
    }
    else {
        console.log("❌ Email Test 4 Failed");
        process.exit(1);
    }
    // ==========================================
    // 2. ทดสอบ Age Validation (Boundary Value Analysis)
    // ==========================================
    // 2.1 อายุ 18 ปี (ค่าปกติ - ผ่าน)
    if ((0, Utils_1.validateAge)(18) === true) {
        console.log("✅ Age Test 1 Passed: valid age 18");
    }
    else {
        console.log("❌ Age Test 1 Failed");
        process.exit(1);
    }
    // 2.2 อายุ 1 ปี (ขอบล่างสุด - ผ่าน)
    if ((0, Utils_1.validateAge)(1) === true) {
        console.log("✅ Age Test 2 Passed: boundary lower limit age 1");
    }
    else {
        console.log("❌ Age Test 2 Failed");
        process.exit(1);
    }
    // 2.3 อายุ 120 ปี (ขอบบนสุด - ผ่าน)
    if ((0, Utils_1.validateAge)(120) === true) {
        console.log("✅ Age Test 3 Passed: boundary upper limit age 120");
    }
    else {
        console.log("❌ Age Test 3 Failed");
        process.exit(1);
    }
    // 2.4 อายุติดลบ -1 ปี (ต้องไม่ผ่าน)
    if ((0, Utils_1.validateAge)(-1) === false) {
        console.log("✅ Age Test 4 Passed: correctly rejected negative age (-1)");
    }
    else {
        console.log("❌ Age Test 4 Failed");
        process.exit(1);
    }
    // 2.5 อายุ 0 ปี (ต้องไม่ผ่าน)
    if ((0, Utils_1.validateAge)(0) === false) {
        console.log("✅ Age Test 5 Passed: correctly rejected age 0");
    }
    else {
        console.log("❌ Age Test 5 Failed");
        process.exit(1);
    }
    // 2.6 อายุเกินมนุษย์ปกติ 150 ปี (ต้องไม่ผ่าน)
    if ((0, Utils_1.validateAge)(150) === false) {
        console.log("✅ Age Test 6 Passed: correctly rejected out-of-range age (150)");
    }
    else {
        console.log("❌ Age Test 6 Failed");
        process.exit(1);
    }
    console.log("--- All Email & Age Unit Tests Passed! ---");
});
test_user_validation();
