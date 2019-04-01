import { Injectable } from '@nestjs/common';
import { Article } from '../../models/article.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Raw,LessThanOrEqual,In } from 'typeorm';

@Injectable()
export class ArticleService {

    constructor(@InjectRepository(Article)
    private readonly articleRepository: Repository<Article>) { }

    async findAll(types: number[]): Promise<Article[]> {
        return await this.articleRepository.find({where: { type: In(types) },order: {date: "DESC",type: "ASC"}});
    }

    async findNews(): Promise<Article[]> {
        return await this.articleRepository.find({ select: ["id", "title", "image_url","type","date"] ,
        where: {date: Raw(alias =>`datediff(now(),${alias}) < 8`),type: LessThanOrEqual(1004)},
        order: {date: "DESC",type: "ASC"}});
    }

    async findActivities(): Promise<Article[]> {
        return await this.articleRepository.find({ select: ["id", "title", "image_url","type"] ,
        where:{type: 1005 }});
    }

    async findContributes(): Promise<Article[]> {
        return await this.articleRepository.find({ select: ["id", "title", "image_url","type"] ,
        where:{type: 1006 }}).then((x)=>{ return x.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;});});
    }

    async findOne(id: number): Promise<Article> {
        return await this.articleRepository.findOne({ id: id });
        // return await this.articleRepository.findOne({ id: id }).then((x)=>{ return this.articleModel(x)});
    }

    async createOne(article: Article): Promise<Article> {
        return await this.articleRepository.save(article);
    }

    async modifyOne(id: number, article: Article): Promise<Article> {
        let articleToUpdate = await this.articleRepository.findOne({ id: id });
        articleToUpdate.title = article.title;
        articleToUpdate.content = article.content;
        articleToUpdate.image_url = article.image_url;
        articleToUpdate.type= article.type;
        articleToUpdate.date = article.date;
        return await this.articleRepository.save(articleToUpdate);
    }

    async deleteOne(id: number): Promise<Article> {
        let articleToRemove = await this.articleRepository.findOne({ id: id });
        return await this.articleRepository.remove(articleToRemove);
    }
}