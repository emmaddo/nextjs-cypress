export interface INewsErrorResponse {
    status: string;
    results: {
        message: string;
        code: string;
    }
}