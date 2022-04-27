import { Body, Controller, Get } from '@nestjs/common';
import { MovieName } from './dto/movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get('getMovies')
  async getAll() {
    return await this.moviesService.getAllMovies();
  }

  @Get('movie-characters')
  async getCharactersMovie(@Body() body: MovieName) {
    return await this.moviesService.gellAllMoviesCharacter(body);
  }
}
