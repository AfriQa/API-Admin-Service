import { UserModel } from "../../models/User/user.model"
import { IUserDoc } from "../../models/User/user.types"
import { getError } from "../../helpers/getError"

const fetchUserByID = async (_id: string): Promise<IUserDoc> => {
    const foundUser = await UserModel.findOne({ _id })
    if (!foundUser) {
        return getError(400, "User could not be found")
    }
    return foundUser
}

export default fetchUserByID