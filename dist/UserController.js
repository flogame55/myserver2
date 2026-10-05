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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const User_1 = __importDefault(require("./User"));
const Utils_1 = require("./Utils");
// create
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, age } = req.body;
        // ตรวจสอบ email และ age
        if (!(0, Utils_1.validateEmail)(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        if (!(0, Utils_1.validateAge)(Number(age))) {
            return res.status(400).json({ message: 'Invalid age: must be between 1 and 120' });
        }
        const newUser = new User_1.default({ name, email, password, age });
        yield newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creatinguser', error });
    }
});
exports.createUser = createUser;
// get
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Errorretrieving users', error });
    }
});
exports.getUsers = getUsers;
// get by id
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Errorretrieving user', error });
    }
});
exports.getUserById = getUserById;
// delete
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        res.status(200).json({ message: 'Userdeleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Errordeleting user', error });
    }
});
exports.deleteUser = deleteUser;
// update by id
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateData = req.body;
    // ตรวจสอบ email และ age ถ้ามีการส่งมาอัปเดต
    if (updateData.email && !(0, Utils_1.validateEmail)(updateData.email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    if (updateData.age !== undefined && !(0, Utils_1.validateAge)(Number(updateData.age))) {
        return res.status(400).json({ message: 'Invalid age: must be between 1 and 120' });
    }
    try {
        const updatedUser = yield User_1.default.findByIdAndUpdate(id, updateData, {
            new: true, // resend update data
            runValidators: true, // checking schema
        });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
});
exports.updateUser = updateUser;
