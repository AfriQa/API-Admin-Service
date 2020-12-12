"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderByStatus = exports.calculateETA = exports.calculateDistance = void 0;
var orderStatus_1 = __importDefault(require("../../../constants/orderStatus"));
var calculateDistance = function (from, to) {
    return 100;
};
exports.calculateDistance = calculateDistance;
var calculateETA = function (from, to) {
    return new Date();
};
exports.calculateETA = calculateETA;
var updateOrderByStatus = function (status, order, detail) {
    var _a, _b, _c, _d, _e;
    switch (status) {
        case orderStatus_1.default.ORDER_CREATED: {
            var address = detail.address ? detail.address : (_a = order.orderInfo) === null || _a === void 0 ? void 0 : _a.address;
            var totalDistance = exports.calculateDistance(address.from, address.to);
            var response = __assign(__assign({}, order), { _id: order._id, status: orderStatus_1.default.ORDER_CREATED, orderInfo: __assign(__assign({}, order.orderInfo), { address: {
                        from: address.from,
                        to: address.to
                    }, totalDistance: totalDistance, estimatedDeliveryTime: exports.calculateETA(address.from, address.to), orderedTime: order.createdAt, deliveryPerson: detail.deliveryPerson }) });
            return {
                status: response.status,
                orderInfo: response.orderInfo
            };
        }
        case orderStatus_1.default.ORDER_ACCEPTED: {
            var address = detail.address ? detail.address : (_b = order.orderInfo) === null || _b === void 0 ? void 0 : _b.address;
            var totalDistance = exports.calculateDistance(address.from, address.to);
            var response = __assign(__assign({}, order), { _id: order._id, status: orderStatus_1.default.ORDER_ACCEPTED, orderInfo: __assign(__assign({}, order.orderInfo), { address: {
                        from: address.from,
                        to: address.to
                    }, totalDistance: totalDistance, estimatedDeliveryTime: exports.calculateETA(address.from, address.to), orderedTime: order.createdAt, deliveryPerson: detail.deliveryPerson }) });
            return {
                status: response.status,
                orderInfo: response.orderInfo
            };
        }
        case orderStatus_1.default.ORDER_PICKED: {
            var address = detail.address ? detail.address : (_c = order.orderInfo) === null || _c === void 0 ? void 0 : _c.address;
            var totalDistance = exports.calculateDistance(address.from, address.to);
            var response = __assign(__assign({}, order), { _id: order._id, status: orderStatus_1.default.ORDER_PICKED, orderInfo: __assign(__assign({}, order.orderInfo), { address: {
                        from: address.from,
                        to: address.to
                    }, totalDistance: totalDistance, estimatedDeliveryTime: exports.calculateETA(address.from, address.to), orderedTime: order.createdAt, deliveryPerson: detail.deliveryPerson }) });
            return {
                status: response.status,
                orderInfo: response.orderInfo
            };
        }
        case orderStatus_1.default.ORDER_ARRIVED: {
            var address = detail.address ? detail.address : (_d = order.orderInfo) === null || _d === void 0 ? void 0 : _d.address;
            var totalDistance = exports.calculateDistance(address.from, address.to);
            var response = __assign(__assign({}, order), { _id: order._id, status: orderStatus_1.default.ORDER_ARRIVED, orderInfo: __assign(__assign({}, order.orderInfo), { address: {
                        from: address.from,
                        to: address.to
                    }, totalDistance: totalDistance, estimatedDeliveryTime: exports.calculateETA(address.from, address.to), orderedTime: order.createdAt, deliveryPerson: detail.deliveryPerson }) });
            return {
                status: response.status,
                orderInfo: response.orderInfo
            };
        }
        case orderStatus_1.default.ORDER_PAYED: {
            var address = detail.address ? detail.address : (_e = order.orderInfo) === null || _e === void 0 ? void 0 : _e.address;
            var totalDistance = exports.calculateDistance(address.from, address.to);
            var response = __assign(__assign({}, order), { _id: order._id, status: orderStatus_1.default.ORDER_PAYED, orderInfo: __assign(__assign({}, order.orderInfo), { address: {
                        from: address.from,
                        to: address.to
                    }, totalDistance: totalDistance, estimatedDeliveryTime: exports.calculateETA(address.from, address.to), orderedTime: order.createdAt, deliveryPerson: detail.deliveryPerson }) });
            return {
                status: response.status,
                orderInfo: response.orderInfo
            };
        }
        default: {
            console.error("Please pass the right status");
            return null;
        }
    }
};
exports.updateOrderByStatus = updateOrderByStatus;
