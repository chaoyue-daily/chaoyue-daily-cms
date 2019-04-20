import { ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Int } from 'type-graphql';
// import { PubSub } from 'graphql-subscriptions';
import { Article,ArticlePagination } from '../../graphqlSchema/graphql.schema';
import { ArticleService } from './article.service';

// const pubSub = new PubSub();

@Resolver('Article')
export class ArticlesResolvers {
  constructor(private readonly articleService: ArticleService) {}

  @Query('getArticles')
  async getArticlesByPage(
    @Args('page_no', ParseIntPipe) page_no: number,
    @Args('page_items', ParseIntPipe) page_items: number,
  ): Promise<ArticlePagination> {
    return await this.articleService.findByPage(page_no,page_items);
  }

  @Query('getArticles')
  async getArticles(
    @Args({ name: 'types', type: () => [Int] }) 
    types: number[],
  ): Promise<Article[]> {
    return await this.articleService.findAll(types);
  }

  @Query('article')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Article> {
    return await this.articleService.findOne(id);
  }
}
