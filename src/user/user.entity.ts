import { ApiProperty, ApiBody } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import {
  Ref,
  prop as Property,
  DocumentType,
  modelOptions,
} from '@typegoose/typegoose';
import { TypegooseModule } from 'nestjs-typegoose';
import { DynamicModule } from '@nestjs/common';
export class LoginUserDto {
  @ApiProperty() stack_address: string;
}

export class UserResponseDto {
  @ApiProperty() @Property({ required: true }) stack_address!: string;
  @ApiProperty() @Property({ required: true }) name!: string;
  @ApiProperty() @Property({ required: true }) email!: string;
  @ApiProperty({ type: () => [Experience] })
  @Property({ type: () => [Experience] })
  experience?: Experience[];
  @ApiProperty({ type: () => [Education] })
  @Property({ type: () => [Education] })
  education?: Education[];
  @ApiProperty() @Property() external_links?: string[];
}

export class CreateUserDto extends UserResponseDto {}

export class Experience {
  @ApiProperty() @Property() name: string;
  @ApiProperty() @Property() duration: string;
  @ApiProperty() @Property() location: string;
  @ApiProperty() @Property() description: string;
}

export class Education {
  @ApiProperty() @Property() name: string;
  @ApiProperty() @Property() duration: string;
  @ApiProperty() @Property() location: string;
  @ApiProperty() @Property() description: string;
  @ApiProperty() @Property() degree: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

@modelOptions({
  schemaOptions: {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: function (_doc, ret) {
        // remove these props when object is serialized
        delete ret._id;
      },
    },
  },
})
export class User extends UserResponseDto {}

export type UserType = DocumentType<User>;

export const UserModelModule: DynamicModule = TypegooseModule.forFeature([
  User,
]);
