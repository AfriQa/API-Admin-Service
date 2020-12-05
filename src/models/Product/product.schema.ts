import { Schema } from "mongoose"

const UserSchema = new Schema({
    productName: {
        type: String, unique: false
    },
    productDescription: {
        type: String, unique: false
    },
    productQuantity: {
        type: Number, unique: false
    },
    productTags: [
        { type: String, unique: false }
    ],
    productPrice: {
        type: Number, unique: false
    },
    productDiscount: {
        type: Number, unique: false, default: 0
    },
    productCategory: {
        type: String, unique: false
    },
    productImages: [
        { type: String, unique: false }
    ],
    salesCount: {
        type: Number, unique: false, default: 0
    },
    createdAt: {
        type: Date, unique: false, default: new Date()
    },
    updatedAt: {
        type: Date, unique: false, default: new Date()
    }
})

export default UserSchema