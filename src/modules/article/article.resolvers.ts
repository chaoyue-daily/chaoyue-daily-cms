import { ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Int } from 'type-graphql';
import { PubSub } from 'graphql-subscriptions';
import { Article, CreateArticleInput } from '../../graphqlSchema/graphql.schema';
import { ArticleService } from './article.service';

const pubSub = new PubSub();

@Resolver('Article')
export class ArticlesResolvers {
  constructor(private readonly articleService: ArticleService) {}

  @Query('getArticles')
  async getArticles(
    // @Args({ name: 'types', type: () => [Int] }) 
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

  @Mutation('createArticle')
  async create(@Args('createArticleInput') args: CreateArticleInput): Promise<Article> {
    const createdArticle = await this.articleService.create(args);
    pubSub.publish('articleCreated', { articleCreated: createdArticle });
    return createdArticle;
  }

  @Subscription('articleCreated')
  articleCreated() {
    return pubSub.asyncIterator('articleCreated');
  }
}
