"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisteredUserModel = void 0;
var mongoose_1 = require("mongoose");
var registered_user_schema_1 = __importDefault(require("./registered_user.schema"));
exports.RegisteredUserModel = mongoose_1.model("admin_registered_users_v1", registered_user_schema_1.default);
