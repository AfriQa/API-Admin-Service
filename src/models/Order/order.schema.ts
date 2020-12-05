import { Schema } from "mongoose"
import status from "../../constants/orderStatus"
import Default from "./order.default"

const OrderSchema = new Schema({
    customer: {
        type: String, unique: false
    },
    items: [{
        type: Object, unique: false
    }],
    status: {
        type: String, unique: false, default: status.ORDER_CREATED
    },
    orderInfo: {
        type: Object, unique: false, default: Default.orderInfo
    },
    createdAt: {
        type: Date, unique: false, default: new Date()
    },
    updatedAt: {
        type: Date, unique: false, default: new Date()
    }
})

export default OrderSchema