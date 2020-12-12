import { OrderModel } from "../../../models/Order/order.model"
import { IOrderUpdateInput, IOrderDoc } from "../../../models/Order/order.types"
import { getError } from "../../../helpers/getError"
import { updateOrderByStatus } from "./updateActions"

const updateOrderStatus = async (orderUpdate: IOrderUpdateInput): Promise<IOrderDoc> => {
    const foundOrder = await OrderModel.findOne({ _id: orderUpdate._id })
    if (!foundOrder) {
        return getError(400, "Could not find order")
    }

    const updatedOrder = updateOrderByStatus(orderUpdate.status, foundOrder, orderUpdate.detail as any)
    return await OrderModel.updateOne({ _id: orderUpdate._id }, {
        status: orderUpdate.status,
        ...updatedOrder,
        updatedAt: new Date()
    }).then(() => {
        return {
            _id: orderUpdate._id,
            ...updatedOrder
        }
    })
        .catch(err => {
            return getError(500, err)
        })
}

export default updateOrderStatus