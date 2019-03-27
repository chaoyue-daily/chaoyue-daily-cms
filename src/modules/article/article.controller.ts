import { Get, Post, Put, Delete, Controller, Param, Body } from '@nestjs/common';
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
    async findOne(@Param('id') id: number):Promise<Article>{
        return this.articleService.findOne(id);
    }

    @Post('')
    async createOne(@Body() article: Article):Promise<Article>{
        return this.articleService.createOne(article);
    }
    
    @Put('/:id')
    async modifyOne(@Param('id') id: number,@Body() article: Article):Promise<Article>{
        return this.articleService.modifyOne(id,article);
    }

    @Delete('/:id')
    async deleteOne(@Param('id') id: number):Promise<Article>{
        return this.articleService.deleteOne(id);
    }
}