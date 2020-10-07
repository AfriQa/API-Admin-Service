import { IResolvers } from "graphql-tools"
import * as faker from "faker"

const resolverMap: IResolvers = {
    Query: {
        users: () => {
            return Array((Math.floor(Math.random() * 10) + 1)).fill("").map(() => ({
                _id: faker.internet.ipv6(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                phoneNumber: faker.phone.phoneNumber(),
                email: faker.internet.email()
            }))
        }
    }
}

export default resolverMap