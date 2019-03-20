import { NestFactory,Reflector} from '@nestjs/core';
import { AppModule } from './app.module';
import { APP } from './app.config';
import { HttpExceptionFilter } from './filters/error.filter';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(
    // new ErrorInterceptor(new Reflector()),
    // new LoggingInterceptor(),
  );
  await app.listen(APP.PORT);
}
bootstrap();
