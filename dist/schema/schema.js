"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Error {\n        type: Int\n        message: String\n    }\n\n    type Query {\n        _: String!\n    }\n\n    type Mutation {\n        _: String!\n    }\n\n    type Subscription {\n        _: String!\n    }\n"], ["\n    type Error {\n        type: Int\n        message: String\n    }\n\n    type Query {\n        _: String!\n    }\n\n    type Mutation {\n        _: String!\n    }\n\n    type Subscription {\n        _: String!\n    }\n"])));
var templateObject_1;
