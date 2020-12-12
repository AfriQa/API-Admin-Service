"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var orderStatus_1 = __importDefault(require("../../constants/orderStatus"));
var order_default_1 = __importDefault(require("./order.default"));
var OrderSchema = new mongoose_1.Schema({
    customer: {
        type: String, unique: false
    },
    items: [{
            type: Object, unique: false
        }],
    status: {
        type: String, unique: false, default: orderStatus_1.default.ORDER_CREATED
    },
    orderInfo: {
        type: Object, unique: false, default: order_default_1.default.orderInfo
    },
    createdAt: {
        type: Date, unique: false, default: new Date()
    },
    updatedAt: {
        type: Date, unique: false, default: new Date()
    }
});
exports.default = OrderSchema;
