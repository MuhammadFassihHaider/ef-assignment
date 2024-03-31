export const customError = (message: string, code: number) => {
    return new Error(JSON.stringify({ message, code }));
};
