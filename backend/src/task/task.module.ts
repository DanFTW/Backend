import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskModelModule } from './task.entity';

@Module({
  imports: [TaskModelModule],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskModelModule],
})
export class TaskModule {}
