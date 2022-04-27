import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envConfiguration } from './utils/config/envConfiguration';
import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
const configService = new ConfigService()
const PORT = configService.get<'string'>(envConfiguration.PORT)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  await app.listen(PORT);

  console.log(`app is running on port ${PORT}`);
}
bootstrap();
