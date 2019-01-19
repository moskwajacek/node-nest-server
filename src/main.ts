import * as moduleAlias from 'module-alias';
moduleAlias.addPath(__dirname);
import * as dotenv from "dotenv";
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(`App listen on port: ${PORT}`);
}
bootstrap();
