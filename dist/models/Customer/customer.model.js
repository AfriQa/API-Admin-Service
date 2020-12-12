"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
var mongoose_1 = require("mongoose");
var customer_schema_1 = __importDefault(require("./customer.schema"));
exports.CustomerModel = mongoose_1.model("customers", customer_schema_1.default);
