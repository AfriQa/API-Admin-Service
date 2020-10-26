import { Document, Model, Query } from "mongoose"

export { Query }

export interface IUser {
    firstName: string
    lastName: string
    phoneNumber: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IUserDoc {
    _id: string
    firstName: string
    lastName: string
    phoneNumber: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IUserEdit {
    _id: string
    firstName?: string
    lastName?: string
    phoneNumber?: string
}

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends IUser, Model<IUserDocument> {}