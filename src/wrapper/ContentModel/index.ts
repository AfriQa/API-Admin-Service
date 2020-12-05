import { Document, Model } from "mongoose"

// tslint:disable-next-line: no-empty-interface
export interface IModelDocument extends Document {}

export interface IModel extends Model<IModelDocument> {}

export interface Doc {
    _id: string
}

export default class ContentModel {
    stateName: string
    objectModel: any
    testing: boolean
    constructor(stateName: string, objectModel: any) {
        this.stateName = stateName
        this.objectModel = objectModel
        this.testing = false
    }


    mockModel = () => {
        this.testing = true
    }

    removeMock = () => {
        this.testing = false
    }

    findOne = async (doc: any) => {
        if (this.testing) {
            return {
                _id: "some"
            }
        }

        const model = this.objectModel as any
        return await model.findOne({ _id: doc._id })
    }
}