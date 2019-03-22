import { Injectable } from '@nestjs/common';
import { Article } from '../../models/article.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Raw,LessThanOrEqual } from 'typeorm';

@Injectable()
export class ArticleService {

    constructor(@InjectRepository(Article)
    private readonly articleRepository: Repository<Article>) { }

    async findNews(): Promise<Article[]> {
        return await this.articleRepository.find({ select: ["id", "title", "image_url","type"] ,
        where:{date: Raw(alias =>`datediff(now(),${alias}) < 8`),type: LessThanOrEqual(1004)  }});
    }

    async findActivities(): Promise<Article[]> {
        return await this.articleRepository.find({ select: ["id", "title", "image_url","type"] ,
        where:{type: 1005 }});
    }

    async findContributes(): Promise<Article[]> {
        return await this.articleRepository.find({ select: ["id", "title", "image_url","type"] ,
        where:{date: Raw(alias =>`datediff(now(),${alias}) < 8`),type: 1006 }}).then((x)=>{ return x.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;});});
    }

    async findOne(id: number): Promise<Article> {
        return await this.articleRepository.findOne({ id: id });
    }
}