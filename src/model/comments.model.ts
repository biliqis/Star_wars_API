import mongoose from 'mongoose';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
@Schema()
export class Comment extends mongoose.Document {
  @Prop()
  comments: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'movie' })
  movie: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
