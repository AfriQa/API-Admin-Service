"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var user_schema_1 = __importDefault(require("./user.schema"));
exports.UserModel = mongoose_1.model("admin_users", user_schema_1.default);
