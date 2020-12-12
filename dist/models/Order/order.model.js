"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
var mongoose_1 = require("mongoose");
var order_schema_1 = __importDefault(require("./order.schema"));
exports.OrderModel = mongoose_1.model("admin_orders", order_schema_1.default);
