"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
const UserService_1 = require("../services/UserService");
const router = express_1.default.Router();
const userService = new UserService_1.UserService();
const userController = new UserController_1.UserController(userService);
router.get("/users", (req, res) => userController.getAllUsers(req, res));
router.post("/users", (req, res) => userController.createUser(req, res));
exports.default = router;
