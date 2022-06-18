import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRoot(process.env.DB_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   url: process.env.MONGODB_CONNECTION_STRING,
    //   database: process.env.MONGODB_DATABASE,
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   ssl: true,
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    // }),
    // TypeOrmModule.forFeature([User]),
    UserModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
