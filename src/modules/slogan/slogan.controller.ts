import { Get, Controller,Param } from '@nestjs/common';
import { SloganService } from './slogan.service';
import { Slogan } from '../../models/slogan.model';


@Controller('slogan')
export class SloganController {
    constructor(private readonly sloganService:SloganService) {}

    @Get()
    root():string{
        return this.sloganService.root();
    }

    @Get('/:id')
    async findOne(@Param() params):Promise<Slogan>{
        console.log(params.id);
        return this.sloganService.findOne(params.id);
    }
}