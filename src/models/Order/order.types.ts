import { Document, Model, Query } from "mongoose"

export { Query }

export interface OrderItem {
    selectedColor: string
    selectedSize: string
    amount: number
    _id: string
}

export interface IOrder {
    customer: string
    items: OrderItem[]
    orderInfo?: IOrderDetail
    status?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface Address {
    from: string
    to: string
}

export interface IOrderDetail {
    address: Address
    totalDistance: number
    orderedTime: Date
    estimatedDeliveryTime: Date
}

export interface IOrderUpdateInput {
    _id: string
    status: string
    detail?: IOrderInputDetail
}

export interface IOrderInputDetail {
    address: Address
    totalDistance: number
    deliveryPerson: string
}

export interface IOrderInput {
    customer: string
    items: OrderItem[]
}

export interface IOrderPostResponse {
    _id: string
    customer: string
    items: OrderItem[]
    status: string
    orderInfo?: IOrderDetail
    createdAt?: Date
    updatedAt?: Date
}

export interface IOrderDoc {
    _id: string
    customer: string
    items: OrderItem[]
    status?: string
    orderInfo?: IOrderDetail
    createdAt?: Date
    updatedAt?: Date
}

export interface IOrderEdit {
    _id: string
    customer?: string
    items?: OrderItem[]
    status?: string
}

export interface IOrderDocument extends IOrder, Document {}

export interface IOrderModel extends IOrder, Model<IOrderDocument> {}