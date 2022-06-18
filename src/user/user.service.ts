import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserDto, UpdateUserDto, User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    await this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find({});
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async findOneByStackAddress(stackAddress: string): Promise<User> {
    return await this.userModel.findOne({ stack_address: stackAddress });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userModel.updateOne({ id: id }, updateUserDto);
  }

  remove(id: number) {
    this.userModel.deleteOne({ id: id });
  }
}
