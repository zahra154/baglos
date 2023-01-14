export interface AbstractApiModel<Result> {
    errorInfo: string;
    statusCode: number;
    errorMessage: string;
    success: boolean;
    result?: Result;
}
