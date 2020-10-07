import { IResolvers } from "graphql-tools"
import faker from "faker"

const resolverMap: IResolvers = {
    Query: {
        async users() {
            return Array((Math.random() % 10)).fill("").map(() => ({
                _id: faker.internet.ipv6,
                firstName: faker.name.firstName,
                lastName: faker.name.lastName,
                phoneNumber: faker.phone.phoneNumber,
                email: faker.internet.email
            }))
        }
    }
}

export default resolverMap