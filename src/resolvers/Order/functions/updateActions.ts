import { IOrderDoc, IOrderInputDetail } from "../../../models/Order/order.types"
import orderStatus from "../../../constants/orderStatus"

export const calculateDistance = (from: string, to: string) => {
    return 100
}

export const calculateETA = (from: string, to: string) => {
    return new Date()
}

export const updateOrderByStatus = (status: string, order: IOrderDoc, detail: IOrderInputDetail): IOrderDoc | null => {
    switch (status) {
        case orderStatus.ORDER_CREATED: {
            const address: any = detail.address ? detail.address : order.orderInfo?.address
            const totalDistance = calculateDistance(address.from, address.to)
            const response: any = {
                ...order,
                _id: order._id,
                status: orderStatus.ORDER_CREATED,
                orderInfo: {
                    ...order.orderInfo,
                    address: {
                        from: address.from,
                        to: address.to
                    },
                    totalDistance,
                    estimatedDeliveryTime: calculateETA(address.from, address.to),
                    orderedTime: order.createdAt,
                    deliveryPerson: detail.deliveryPerson
                }
            } as IOrderDoc
            return {
                status: response.status,
                orderInfo: response.orderInfo
            } as any
        }

        case orderStatus.ORDER_ACCEPTED: {
            const address: any = detail.address ? detail.address : order.orderInfo?.address
            const totalDistance = calculateDistance(address.from, address.to)
            const response: any = {
                ...order,
                _id: order._id,
                status: orderStatus.ORDER_ACCEPTED,
                orderInfo: {
                    ...order.orderInfo,
                    address: {
                        from: address.from,
                        to: address.to
                    },
                    totalDistance,
                    estimatedDeliveryTime: calculateETA(address.from, address.to),
                    orderedTime: order.createdAt,
                    deliveryPerson: detail.deliveryPerson
                }
            } as IOrderDoc
            return {
                status: response.status,
                orderInfo: response.orderInfo
            } as any
        }

        case orderStatus.ORDER_PICKED: {
            const address: any = detail.address ? detail.address : order.orderInfo?.address
            const totalDistance = calculateDistance(address.from, address.to)
            const response: any = {
                ...order,
                _id: order._id,
                status: orderStatus.ORDER_PICKED,
                orderInfo: {
                    ...order.orderInfo,
                    address: {
                        from: address.from,
                        to: address.to
                    },
                    totalDistance,
                    estimatedDeliveryTime: calculateETA(address.from, address.to),
                    orderedTime: order.createdAt,
                    deliveryPerson: detail.deliveryPerson
                }
            } as IOrderDoc
            return {
                status: response.status,
                orderInfo: response.orderInfo
            } as any
        }
        
        case orderStatus.ORDER_ARRIVED: {
            const address: any = detail.address ? detail.address : order.orderInfo?.address
            const totalDistance = calculateDistance(address.from, address.to)
            const response: any = {
                ...order,
                _id: order._id,
                status: orderStatus.ORDER_ARRIVED,
                orderInfo: {
                    ...order.orderInfo,
                    address: {
                        from: address.from,
                        to: address.to
                    },
                    totalDistance,
                    estimatedDeliveryTime: calculateETA(address.from, address.to),
                    orderedTime: order.createdAt,
                    deliveryPerson: detail.deliveryPerson
                }
            } as IOrderDoc
            return {
                status: response.status,
                orderInfo: response.orderInfo
            } as any
        }

        case orderStatus.ORDER_PAYED: {
            const address: any = detail.address ? detail.address : order.orderInfo?.address
            const totalDistance = calculateDistance(address.from, address.to)
            const response: any = {
                ...order,
                _id: order._id,
                status: orderStatus.ORDER_PAYED,
                orderInfo: {
                    ...order.orderInfo,
                    address: {
                        from: address.from,
                        to: address.to
                    },
                    totalDistance,
                    estimatedDeliveryTime: calculateETA(address.from, address.to),
                    orderedTime: order.createdAt,
                    deliveryPerson: detail.deliveryPerson
                }
            } as IOrderDoc
            return {
                status: response.status,
                orderInfo: response.orderInfo
            } as any
        }

        default: {
            // tslint:disable-next-line: no-console
            console.error("Please pass the right status")
            return null
        }
    }
}