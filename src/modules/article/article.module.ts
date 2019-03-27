import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './article.controller'
import { ArticlesResolvers } from './article.resolvers';
import { ArticleService } from './article.service'
import { Article } from '../../models/article.model';

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    providers: [ArticleService,ArticlesResolvers],
    controllers: [ArticleController]
})
export class ArticleModule {
  
}