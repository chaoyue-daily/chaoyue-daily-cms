import { NestFactory,Reflector} from '@nestjs/core';
import { AppModule } from './app.module';
import { APP } from './app.config';
import { HttpExceptionFilter } from './filters/error.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { ErrorInterceptor } from './interceptors/error.interceptor';
// import { LoggingInterceptor } from './interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Chaoyue Daily API')
    .setDescription('The chaoyue daily API description')
    .setVersion('1.0')
    .addTag('chaoyuedaily')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);  

  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(
    // new ErrorInterceptor(new Reflector()),
    // new LoggingInterceptor(),
  );
  await app.listen(APP.PORT);
}
bootstrap();
