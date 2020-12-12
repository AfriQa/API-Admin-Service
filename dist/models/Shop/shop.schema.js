"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ShopSchema = new mongoose_1.Schema({
    shopName: {
        type: String, unique: false
    },
    shopCategory: {
        type: String, unique: false
    },
    shopOwner: {
        type: String, unique: false
    },
    createdAt: {
        type: Date, unique: false, default: new Date()
    },
    updatedAt: {
        type: Date, unique: false, default: new Date()
    }
});
exports.default = ShopSchema;
