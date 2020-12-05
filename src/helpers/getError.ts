export const getError = (type: number, message: any): any => {
    // tslint:disable-next-line: no-console
    console.error(message)
    return {
        error: {
            type, message: String(message)
        }
    }
}