import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModelModule } from './user.entity';
import { UserController } from './user.controller';

@Module({
  imports: [UserModelModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserModelModule],
})
export class UserModule {}
