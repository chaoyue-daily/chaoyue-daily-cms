import { Get, Controller,Param } from '@nestjs/common';
import { SloganService } from './slogan.service';
import { Slogan } from '../../models/slogan.model';


@Controller('slogan')
export class SloganController {
    constructor(private readonly sloganService:SloganService) {}

    @Get()
    async findAll():Promise<Slogan[]>{
        return this.sloganService.findAll();
    }

    @Get('/:id')
    async findOne(@Param() params):Promise<Slogan>{
        console.log(params.id);
        return this.sloganService.findOne(params.id);
    }
}