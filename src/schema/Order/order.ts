import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
    fetchAdminOrders: [AdminOrderDoc!]
    fetchAdminOrderByID(_id: String!): AdminOrderDoc
}

extend type Mutation {
    postAdminOrder(authID: String!, AdminOrderInput: AdminOrderInput!): AdminOrderDoc
    editAdminOrder(authID: String!, AdminOrderInput: AdminOrderInputEdit!): AdminOrderDoc
    removeAdminOrder(authID: String!, _id: String!): AdminOrderDoc
    updateOrderStatus(authID: String!, AdminOrderUpdate: AdminOrderUpdateInput): AdminOrderUpdate
}

extend type Subscription {
    orderCreated: AdminOrderDoc
    orderUpdated(_id: String!): AdminOrderUpdate
}

type AdminOrderDoc {
    _id: String
    customer: String
    items: [OrderItem]
    orderInfo: AdminOrderInfo
    status: String
    createdAt: String
    updatedAt: String
    error: Error
}

type AdminOrderUpdate {
    _id: String
    status: String
    orderInfo: AdminOrderInfo
}

type AdminOrderInfo {
    address: AdminOrderAddress
    totalDistance: Float
    orderedTime: String
    estimatedDeliveryTime: String
}

type AdminOrderAddress {
    from: String
    to: String
}

input AdminOrderInput {
    customer: String!
    amount: Int!
    items: [ItemInput!]!
}

input ItemInput {
    selectedColor: String
    selectedSize: String
    amount: Int
    _id: String
}

type OrderItem {
    selectedColor: String
    selectedSize: String
    amount: Int
    _id: String
}

input AdminOrderInputEdit {
    _id: String!
    customer: String
    items: [ItemInput]
    status: String
}

input AdminOrderUpdateInput {
    _id: String!
    status: String!
    detail: AdminOrderDetail
}

input AdminOrderDetail {
    address: AdminAddressInput!
    totalDistance: Float!
}

input AdminAddressInput {
    from: String!
    to: String!
}

`