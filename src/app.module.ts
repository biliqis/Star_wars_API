import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfiguration } from './utils/config/envConfiguration';
import { envValidationSchema } from './utils/config/env.validationSchema';
import { MoviesModule } from './movies/movies.module';
import { CommentsModule } from './comments/comments.module';
//console.log(envConfiguration.CONNECTION_STRING);
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>(envConfiguration.CONNECTION_STRING),
        //  uri: configService.get<string>(envConfiguration.MONGO_URI),
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: false,
      validationSchema: envValidationSchema,
      envFilePath: ['.env'],
    }),
    MoviesModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
