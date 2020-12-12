"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __importDefault(require("./schema"));
var user_1 = __importDefault(require("./User/user"));
var customer_1 = __importDefault(require("./Customer/customer"));
var product_1 = __importDefault(require("./Product/product"));
var category_1 = __importDefault(require("./Category/category"));
var shop_1 = __importDefault(require("./Shop/shop"));
var registered_user_1 = __importDefault(require("./RegisteredUser/registered_user"));
var order_1 = __importDefault(require("./Order/order"));
exports.default = [
    schema_1.default, user_1.default, customer_1.default, product_1.default, category_1.default,
    shop_1.default, registered_user_1.default, order_1.default
];
