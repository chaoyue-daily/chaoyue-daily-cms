import { Injectable } from '@nestjs/common';
import { Slogan } from '../../models/slogan.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SloganService {

    constructor(@InjectRepository(Slogan)
    private readonly sloganRepository: Repository<Slogan>) { }
    root(): string {
        return 'Hello World!';
    }
    async findOne(id: number): Promise<Slogan> {
        return await this.sloganRepository.findOne({ id: id });
    }
}