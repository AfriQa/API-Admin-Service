import { IResolvers } from "graphql-tools"
import fetchOrders from "./functions/fetchOrders"
import postOrder from "./functions/postOrder"
import editOrder from "./functions/editOrder"
import removeOrder from "./functions/removeOrder"
import fetchOrderByID from "./functions/fetchOrderByID"
import updateOrderStatus from "./functions/updateOrderStatus"
import { PubSub, withFilter } from 'apollo-server'
import status from "../../constants/orderStatus"

const pubsub = new PubSub()

const OrderResolver : IResolvers = {
    Query: {
        async fetchAdminOrders() {
            const result = await fetchOrders()
            return result
        },

        async fetchAdminOrderByID(_: any, prop: any) {
            const result = await fetchOrderByID(prop._id)
            return result
        }
    },

    Mutation: {
        async postAdminOrder(_: any, prop: any) {
            const result = await postOrder(prop.AdminOrderInput)
            await pubsub.publish(status.ORDER_CREATED, { orderCreated: result })
            return result
        },

        async editAdminOrder(_: any, prop: any) {
            const result = await editOrder(prop.AdminOrderInput)
            return result
        },

        async removeAdminOrder(_: any, prop: any) {
            const result = await removeOrder(prop._id)
            return result
        },

        async updateOrderStatus(_: any, prop: any) {
            const result = await updateOrderStatus(prop.AdminOrderUpdate)
            await pubsub.publish(status.ORDER_CHANGED, { orderUpdated: result })
            return result
        }
    },
    Subscription: {
        orderCreated: {
            subscribe: () => pubsub.asyncIterator([status.ORDER_CREATED]),
        },
        orderUpdated: {
            subscribe: withFilter(
              () => pubsub.asyncIterator(status.ORDER_CHANGED),
              (payload, variables) => {
                return String(payload.orderUpdated._id) === String(variables._id)
              },
            ),
        },
    }
}

export default OrderResolver