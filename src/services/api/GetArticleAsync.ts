import type {INewsSuccessResponse} from "@nb.frontend/helpers/Types/INewsSuccessResponse";
import type {INewsErrorResponse} from "@nb.frontend/helpers/Types/INewsErrorResponse";
import type {IArticle} from "@nb.frontend/helpers/Types/IArticle";

export const PrepareNewsRoute = (): string =>
    `${process.env.API_HOST}?apikey=${process.env.API_KEY_1}&language=en&country=au,us,gb`;

export async function GetArticleAsync(): Promise<INewsErrorResponse | INewsSuccessResponse> {
    try {
        const response = await fetch(PrepareNewsRoute(), {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });
        //nothing

        const data = await response.json();
        const results: IArticle[] = data.results;
        const filteredResults: IArticle[] = [];

        results.forEach((x) =>{
            const isExist = filteredResults.find(y => x.title.includes(y.title));
            if(!isExist) filteredResults.push(x);
        });
        data.results = filteredResults;
        data.totalResults = filteredResults.length;
                
        return (response.ok) ? (data as INewsSuccessResponse) : (data as INewsErrorResponse);
    }
    catch (error) {
        if(error instanceof Error) {
            console.error(error.message);
        }

        return {
            status: "internal-server",
            results: {
                message: "Sorry we experienced ....",
                code: "internal-server"
            }
        } as INewsErrorResponse;
    }
}