"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopModel = void 0;
var mongoose_1 = require("mongoose");
var shop_schema_1 = __importDefault(require("./shop.schema"));
exports.ShopModel = mongoose_1.model("admin_shops", shop_schema_1.default);
