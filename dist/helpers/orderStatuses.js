"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStatus = void 0;
var statuses = [
    "Created", "Payed", "Shipped", "Delivered"
];
var checkStatus = function (status) {
    var index = statuses.findIndex(function (item) { return item === status; });
    return index >= 0;
};
exports.checkStatus = checkStatus;
exports.default = statuses;
