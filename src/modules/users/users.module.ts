import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from 'src/repositories/users.repository';
import { UserInMemoryRepository } from 'src/in-memory/users.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    { provide: UserRepository, useClass: UserInMemoryRepository },
  ],
})
export class UsersModule {}
