"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("./User/"));
var RegisteredUser_1 = __importDefault(require("./RegisteredUser/"));
var Customer_1 = __importDefault(require("./Customer/"));
var Product_1 = __importDefault(require("./Product/"));
var Category_1 = __importDefault(require("./Category/"));
var Shop_1 = __importDefault(require("./Shop/"));
var Order_1 = __importDefault(require("./Order/"));
exports.default = [
    User_1.default, Customer_1.default, Product_1.default, Category_1.default,
    Shop_1.default, RegisteredUser_1.default, Order_1.default
];
