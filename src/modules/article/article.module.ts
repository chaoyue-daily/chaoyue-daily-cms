import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './article.controller'
import { ArticleService } from './article.service'
import { Article } from '../../models/article.model';

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    providers: [ArticleService],
    controllers: [ArticleController]
})
export class ArticleModule {
  
}