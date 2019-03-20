import { Get, Controller,Param } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from '../../models/article.model';


@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get()
    async findLatest():Promise<Article[]>{
        return this.articleService.findLatest();
    }

    @Get('/:id')
    async findOne(@Param() params):Promise<Article>{
        console.log(params.id);
        return this.articleService.findOne(params.id);
    }
    
}