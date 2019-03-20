import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SloganController } from './slogan.controller'
import { SloganService } from './slogan.service'
import { Slogan } from '../../models/slogan.model';

@Module({
    imports: [TypeOrmModule.forFeature([Slogan])],
    providers: [SloganService],
    controllers: [SloganController]
})
export class SloganModule {
  
}