import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AuthModule } from './utilities/auth.module';
require('dotenv').config();
@Module({
  imports: [TypeOrmModule.forRoot(
    {
      "type": "mysql",
      "host": process.env.DB_HOST,
      "port": parseInt(process.env.DB_PORT),
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": "tutorial",
      "entities": ["dist/**/*.entity.js"], 
      "synchronize": true, 
    }
  ),BooksModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
