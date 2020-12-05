import { OrderModel } from "../../../models/Order/order.model"
import { IOrderUpdateInput, IOrderDoc, Address } from "../../../models/Order/order.types"
import { getError } from "../../../helpers/getError"
import orderStatus from "../../../constants/orderStatus"

export const calculateDistance = (from: string, to: string) => {
    return 100
}

export const calculateETA = (from: string, to: string) => {
    return new Date()
}

const updateOrderByStatus = (status: string, order: IOrderDoc): IOrderDoc | null => {
    switch(status) {
        case orderStatus.ORDER_CREATED: {
            return order
        }

        case orderStatus.ORDER_ACCEPTED: {
            const address = order.orderInfo?.address as any
            const totalDistance = calculateDistance(address.from, address.to)
            const response = {
                ...order,
                _id: order._id,
                status: orderStatus.ORDER_ACCEPTED,
                orderInfo: {
                    ...order.orderInfo,
                    address: address.address,
                    totalDistance,
                    estimatedDeliveryTime: calculateETA(address.from, address.to),
                    orderedTime: order.createdAt
                }
            } as IOrderDoc
            return response
        }

        default: {
            // tslint:disable-next-line: no-console
            console.error("Please pass the right status")
            return null
        }
    }
}

const updateOrderStatus = async (orderUpdate: IOrderUpdateInput): Promise<IOrderDoc> => {
    const foundOrder = await OrderModel.findOne({ _id: orderUpdate._id })
    if (!foundOrder) {
        return getError(400, "Could not find order")
    }

    const updatedOrder = updateOrderByStatus(orderUpdate.status, foundOrder)
    return await OrderModel.updateOne({ _id: orderUpdate._id }, {
        _id: String(orderUpdate._id),
        status: orderUpdate.status,
        orderInfo: {
            ...foundOrder.orderInfo,
            address: orderUpdate.detail as any,
            totalDistance: orderUpdate.detail?.totalDistance as any,
            estimatedDeliveryTime: new Date(),
            orderedTime: new Date()
        },
        updatedAt: new Date()
    }).then(() => {
        return updatedOrder
    })
    .catch(err => {
        return getError(500, err)
    })
}

export default updateOrderStatus