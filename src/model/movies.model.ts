import * as mongoose from 'mongoose';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema()
export class Movie extends mongoose.Document {
  @Prop()
  title: string;

  @Prop()
  episode_id: string;

  @Prop()
  opening_crawl: string;

  @Prop()
  director: string;

  @Prop()
  producer: string;

  @Prop()
  release_date: Date;

  @Prop()
  species: string[];

  @Prop()
  planets: string[];

  @Prop()
  characters: string[];

  @Prop()
  starships: string[];

  @Prop()
  url: string;

  @Prop()
  vehicles: string[];

  @Prop()
  created: string;
}
export const MovieSchema = SchemaFactory.createForClass(Movie);
