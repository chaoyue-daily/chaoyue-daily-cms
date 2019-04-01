import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SloganModule} from './modules/slogan/slogan.module';
import { ArticleModule} from './modules/article/article.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TerminusModule } from '@nestjs/terminus';
import { TerminusOptionsService } from './common/terminus-options.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    SloganModule,
    ArticleModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    TerminusModule.forRootAsync({
      useClass: TerminusOptionsService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
