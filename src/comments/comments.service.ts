import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from 'src/model/comments.model';
import { Movie } from 'src/model/movies.model';
import { AddComment } from './dto/add-comment.dto';
import { EditComment } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel,
    @InjectModel(Movie.name) private movieModel,
  ) {}

  async getAllComments() {
    const data = await this.commentModel.find();
    if (data.length === 0)
      throw new BadRequestException('No comments added as yet!');
    return data;
  }

  async updateComment(param: EditComment) {
    const updatedComment = await this.commentModel.findByIdAndUpdate(param.id, {
      comments: param.comment,
    });

    return {
      message: 'comment updated successfully!',
      data: updatedComment,
    };
  }

  async AddComment(data: AddComment) {
    const checkMovie = await this.movieModel.findOne({ title: data.movie });
    if (!checkMovie) throw new NotFoundException();
    const newComment = new this.commentModel();
    newComment.movie = checkMovie._id;
    newComment.comments = data.comment;
    await newComment.save();
    return {
      message: 'comment added successfully!',
      data: newComment,
    };
  }
}
