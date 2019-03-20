import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SloganModule} from './modules/slogan/slogan.module'
import { ArticleModule} from './modules/article/article.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    SloganModule,
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
