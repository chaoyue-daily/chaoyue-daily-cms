import { Injectable } from '@nestjs/common';
import { Article } from '../../models/article.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Raw } from 'typeorm';

@Injectable()
export class ArticleService {

    constructor(@InjectRepository(Article)
    private readonly articleRepository: Repository<Article>) { }

    async findLatest(): Promise<Article[]> {
        return await this.articleRepository.find({ select: ["id", "title", "image_url","type"] ,
        where:{date: Raw(alias =>`datediff(now(),${alias}) < 8`)}});
    }
    async findOne(id: number): Promise<Article> {
        return await this.articleRepository.findOne({ id: id });
    }
}