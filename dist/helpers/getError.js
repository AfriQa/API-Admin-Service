"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getError = void 0;
var getError = function (type, message) {
    console.error(message);
    return {
        error: {
            type: type,
            message: String(message)
        }
    };
};
exports.getError = getError;
