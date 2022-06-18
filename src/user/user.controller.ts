import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UserResponseDto, UpdateUserDto } from './user.entity';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBody({
    required: true,
    type: CreateUserDto,
    description: 'Create a new user',
  })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Get('/address/:stackaddress')
  async findOneByStackAddress(
    @Param('stackaddress') stackAddress: string,
  ): Promise<UserResponseDto> {
    return await this.userService.findOneByStackAddress(stackAddress);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
