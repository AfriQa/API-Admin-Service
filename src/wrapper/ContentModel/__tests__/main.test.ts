import ContentModel from "../index"

describe('Content Model', () => {
    test('try outs', async () => {
        const NewOne = new ContentModel("someone", {})
        NewOne.mockModel()
        const response = await NewOne.findOne({ _id: "1" })
        expect(response).toEqual({
            _id: "some"
        })
    })
})