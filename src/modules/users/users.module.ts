import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from 'src/repositories/users.repository';
import { UserInMemoryRepository } from 'src/in-memory/users.in-memory.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: UserRepository, useClass: UserInMemoryRepository },
  ],
})
export class UsersModule {}
