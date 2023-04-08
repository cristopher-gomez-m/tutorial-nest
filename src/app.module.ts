import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
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
  )],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
