export interface IArticle {
    article_id: string;
    title: string;
    link: string;
    keywords: null;
    creator: [];
    description: string;
    content: string;
    pubDate: string;
    pubDateTZ: string;
    image_url: string;
    video_url: null;
    source_id: string;
    source_name: string;
    source_priority: number;
    source_url: string;
    source_icon: string;
    language: string;
    country: [];
    category: [];
    sentiment: string;
    sentiment_stats: string;
    ai_tag: string;
    ai_region: string;
    ai_org: string;
    duplicate: boolean;
}