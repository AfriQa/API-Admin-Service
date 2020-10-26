import { UserModel } from "../../models/User/user.model"
import { IUser, IUserDoc } from "../../models/User/user.types"

const postCustomer = async (customer: IUser): Promise<IUserDoc> => {
    return await UserModel.create({ ...customer })
        .then(createdUser => createdUser)
        .catch(err => {
            // tslint:disable-next-line: no-console
            console.error(err)
            return {
                error: {
                    type: 500,
                    message: String(err)
                }
            } as any
        })
}

export default postCustomer