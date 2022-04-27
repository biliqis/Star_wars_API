import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from 'src/model/movies.model';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Global()
@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Movie.name,
        useFactory: () => {
          return MovieSchema;
        },
      },
    ]),
    HttpModule,
  ],
})
export class MoviesModule {}
