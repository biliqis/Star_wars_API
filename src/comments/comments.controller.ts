import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { AddComment } from './dto/add-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  @Get('all')
  async getAllComments() {
    return await this.commentService.getAllComments();
  }

  @Put('update-comment/:id')
  async updateComment(@Param() params, @Body() body) {
    return await this.commentService.updateComment({
      id: params.id,
      comment: body.comment,
    });
  }

  @Post('add-comment')
  async AddComment(@Body() body: AddComment) {
    return await this.commentService.AddComment(body);
  }
}
