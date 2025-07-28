import type {FC} from "react";
import {GetArticleAsync} from "@nb.frontend/services/api/GetArticleAsync";
import type {INewsSuccessResponse} from "@nb.frontend/helpers/Types/INewsSuccessResponse";
import {formatDate} from "@nb.frontend/helpers/Misc/dateUtils";

const Page: FC = async () => {
    const data = await GetArticleAsync();
    const isSuccess = ("nextPage" in data);

    return (
        <div
            className={`${isSuccess ? "active" : "inactive"}-news p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12`}
            data-element-name={"news-article-container"}
        >
            {
                isSuccess ?
                (data as INewsSuccessResponse).results.map((article, index) => (
                  <div key={article.article_id || index}>
                    <img
                    className="w-full h-48 object-cover" 
                    src={article.image_url}
                    alt={article.title}
                    />

                    <h1 className="text-base font-bold"
                        data-element-name={"news-title"}
                    >
                        {article.title}
                    </h1>

                    {article.description && 
                    <p className="text-sm mb-3 mt-3 line-clamp-3"
                       data-element-name={"news-description"}
                    >
                       {article.description}
                    </p>
                    }

                    {article.pubDate &&
                    <p className="mt-auto text-xs text-gray-500"
                       data-element-name={"news-pubdate"}
                    >
                       {formatDate(article.pubDate)}
                    </p>
                    }

                    {article.source_name &&
                    <p className="mt-auto text-xs text-gray-500"
                       data-element-name={"news-source"}
                    >
                       {article.source_name}
                    </p>
                    }
                  </div>
                )) :
                <div data-element-name={"news-error-notice"}>{"Error"}</div>
            }
        </div>
    );
};

export default Page;