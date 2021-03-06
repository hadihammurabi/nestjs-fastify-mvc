import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import compression from 'fastify-compress';

import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.register(compression);

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });


  app.setViewEngine({
    engine: {
      nunjucks: require('nunjucks'),
    },
    templates: join(__dirname, '..', 'views'),
  });

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
