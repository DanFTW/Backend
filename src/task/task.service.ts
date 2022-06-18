import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateTaskDto, UpdateTaskDto, Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task) private readonly taskModel: ReturnModelType<typeof Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskModel.create(createTaskDto);
  }

  async findAll() {
    return await this.taskModel.find({});
  }

  async findOne(id: string) {
    return await this.taskModel.findById(id);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    await this.taskModel.updateOne({ id: id }, updateTaskDto);
  }

  async remove(id: string) {
    await this.taskModel.deleteOne({ id: id });
  }
}
