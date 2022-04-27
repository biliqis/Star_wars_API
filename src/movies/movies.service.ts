import { HttpException, Injectable, NotFoundException } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from 'src/model/movies.model';
import { MovieName } from './dto/movie.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}
  async getAllMovies() {
    const getAllMovies = await this.movieModel.find();
    return getAllMovies;
  }

  async gellAllMoviesCharacter(movie: MovieName) {
    const getCharacter = await this.movieModel.findOne({ title: movie.name });
    if (!movie.name) throw new HttpException('an error occuurred', 400);
    if (!getCharacter) throw new NotFoundException('movie not found!');
    if (getCharacter.characters.length === 0)
      throw new NotFoundException('no characters where present');
    return getCharacter.characters;
  }
}
