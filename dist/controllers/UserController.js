"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async getAllUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.json({ success: true, users });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
    async createUser(req, res) {
        try {
            const { name, email } = req.body;
            const newUser = await this.userService.createUser({ name, email });
            res.status(201).json({ success: true, user: newUser });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
}
exports.UserController = UserController;
