"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("./UserController");
const router = express_1.default.Router();
router.post('/users', UserController_1.createUser); // create
router.get('/users', UserController_1.getUsers); // get all
router.get('/users/:id', UserController_1.getUserById); // get
router.delete('/users/:id', UserController_1.deleteUser); // delete
router.put('/users/:id', UserController_1.updateUser); //update
exports.default = router;
