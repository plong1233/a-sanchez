import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private PostService: PostService) {}

  @Get()
  async getAll() {
    try {
      return await this.PostService.getAll();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.PostService.get(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
