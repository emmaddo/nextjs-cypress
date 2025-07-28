import type {IArticle} from "@nb.frontend/helpers/Types/IArticle";

export interface INewsSuccessResponse {
    status: string;
    totalResults: number;
    results: IArticle[];
    nextPage: number;
}