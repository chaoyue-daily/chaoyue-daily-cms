
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateArticleInput {
    title?: string;
    image_url?: string;
    content?: string;
    date?: Date;
    type?: number;
}

export class Article {
    id?: number;
    title?: string;
    image_url?: string;
    content?: string;
    date?: Date;
    type?: number;
}

export class ArticlePagination {
    total_items: number;
    pages: number;
    page_no: number;
    page_items: number;
    rows?: Article[];
}

export abstract class IMutation {
    abstract createArticle(createArticleInput?: CreateArticleInput): Article | Promise<Article>;
}

export abstract class IQuery {
    abstract getArticlesByPage(page_no: number, page_items: number): ArticlePagination | Promise<ArticlePagination>;

    abstract getArticles(types?: number[]): Article[] | Promise<Article[]>;

    abstract article(id: string): Article | Promise<Article>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract articleCreated(): Article | Promise<Article>;
}

export type Date = any;
