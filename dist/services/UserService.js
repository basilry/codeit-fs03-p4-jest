"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    users = [];
    async getAllUsers() {
        return this.users;
    }
    async createUser(user) {
        const newUser = { id: Date.now(), ...user };
        this.users.push(newUser);
        return newUser;
    }
}
exports.UserService = UserService;
