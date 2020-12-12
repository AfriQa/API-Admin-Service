"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var mongoose_1 = require("mongoose");
var product_schema_1 = __importDefault(require("./product.schema"));
exports.Product = mongoose_1.model("admin_products", product_schema_1.default);
