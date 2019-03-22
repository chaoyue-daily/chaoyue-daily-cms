import { Get, Controller,Param } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from '../../models/article.model';


@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get('/news')
    async findNews():Promise<Article[]>{
        return this.articleService.findNews();
    }

    @Get('/activities')
    async findActivities():Promise<Article[]>{
        return this.articleService.findActivities();
    }

    @Get('/contributes')
    async findContributes():Promise<Article[]>{
        return this.articleService.findContributes();
    }

    @Get('/:id')
    async findOne(@Param() params):Promise<Article>{
        console.log(params.id);
        return this.articleService.findOne(params.id);
    }
    
}