import { DynamicModule } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { ApiProperty, ApiBody } from '@nestjs/swagger';
import {
  Ref,
  prop as Property,
  DocumentType,
  modelOptions,
} from '@typegoose/typegoose';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from 'src/user/user.entity';

export class TaskResponseDto {
  @ApiProperty() @Property({ required: true }) title!: string;
  @ApiProperty() @Property({ required: true }) description!: string;
  @ApiProperty() @Property({ required: true, ref: () => User }) poster!: User;
  @ApiProperty() @Property({ ref: () => User }) assigned_to?: User;
  @ApiProperty() @Property({ required: true }) duration!: string;
  @ApiProperty() @Property({ required: true }) tag!: string;
}

export class CreateTaskDto extends TaskResponseDto {}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

export class Task extends TaskResponseDto {}

export type TaskType = DocumentType<Task>;

export const TaskModelModule: DynamicModule = TypegooseModule.forFeature([
  Task,
]);
