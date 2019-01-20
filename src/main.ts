import * as moduleAlias from 'module-alias';
moduleAlias.addPath(__dirname);
import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* swagger module*/
  const options = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(PORT);
  if (process.env.NODE_ENV === 'development') {
    console.log(`App listen on port: ${PORT}`);
  }
}
bootstrap();
