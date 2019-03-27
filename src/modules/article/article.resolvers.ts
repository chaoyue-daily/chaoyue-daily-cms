import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';
import { Article } from '../../graphqlSchema/graphql.schema';
import { ArticleService } from './article.service';

// const pubSub = new PubSub();

@Resolver('Article')
export class ArticlesResolvers {
  constructor(private readonly articleService: ArticleService) {}

  @Query('article')
  async getArticles(
    types: string[],
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
