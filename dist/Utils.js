"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
exports.validateEmail = validateEmail;
exports.validateAge = validateAge;
function hello() {
    console.log("Hello, world!");
}
function add(a, b) {
    return a + b;
}
// ตรวจสอบรูปแบบ Email (ต้องมี @ และ domain)
function validateEmail(email) {
    if (!email || typeof email !== 'string')
        return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// ตรวจสอบอายุ (ต้องเป็นตัวเลข 1 - 120 ปี)
function validateAge(age) {
    if (typeof age !== 'number' || isNaN(age))
        return false;
    return age >= 1 && age <= 120;
}
exports.utils = { hello, add, validateEmail, validateAge };
