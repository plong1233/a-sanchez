import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  async getAll() {
    return await this.prismaService.post.findMany();
  }
  async get(id: number) {
    return await this.prismaService.post.findUniqueOrThrow({
      where: { id: id },
    });
  }
}
