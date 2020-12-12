"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var RegisteredUserSchema = new mongoose_1.Schema({
    phoneNumber: {
        type: String, unique: false, default: String(null)
    },
    email: {
        type: String, unique: false, default: String(null)
    },
    isVerified: {
        type: Boolean, unique: false, default: false
    },
    createdAt: {
        type: Date, unique: false, default: new Date()
    },
    updatedAt: {
        type: Date, unique: false, default: new Date()
    }
});
exports.default = RegisteredUserSchema;
