"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __importDefault(require("./schema"));
var user_1 = __importDefault(require("./User/user"));
exports.default = [schema_1.default, user_1.default];
