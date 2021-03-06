import { IResolvers } from "graphql-tools"
import fetchUsers from "./fetchUsers"
import fetchUserByID from "./fetchUserByID"
import postUser from "./postUser"
import editUser from "./editUser"
import removeUser from "./removeUser"

const UserResolver : IResolvers = {
    Query: {
        async fetchAdminUsers() {
            const result = await fetchUsers()
            return result
        },

        async fetchAdminUserByID(_: any, prop: any) {
            return await fetchUserByID(prop._id)
        }
    },

    Mutation: {
        async postAdminUser(_: any, prop: any) {
            const result = await postUser(prop.adminUserInput, prop.authID)
            return result
        },

        async editAdminUser(_: any, prop: any) {
            const result = await editUser(prop.adminUserInput)
            return result
        },

        async removeAdminUser(_: any, prop: any) {
            const result = await removeUser(prop._id)
            return result
        }
    }
}

export default UserResolver