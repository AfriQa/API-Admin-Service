"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    extend type Query {\n        users: [User!]\n    }\n\n    type User {\n        _id: String\n        firstName: String\n        lastName: String\n        phoneNumber: String\n        email: String\n    }\n"], ["\n    extend type Query {\n        users: [User!]\n    }\n\n    type User {\n        _id: String\n        firstName: String\n        lastName: String\n        phoneNumber: String\n        email: String\n    }\n"])));
var templateObject_1;
