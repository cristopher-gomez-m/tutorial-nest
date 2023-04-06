import { Controller, Get, Param, Post, Query, Req, Body, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Request } from 'express';
import { BookDTO } from './dto/bookDTO';
@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  findAll(@Req() request: Request) {
    return this.bookService.findAll(request.query);
  }
  @Get(':bookId')
  findBook(@Param('bookId') bookId: string) {
    return this.bookService.findBook(bookId);
  }
  @Post()
  createBook(@Body() newBook:BookDTO) {
    return this.bookService.createBook(newBook);
  }
  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string) {
    return this.bookService.deleteBook(bookId);
  }
  @Put(':bookId')
  updateBook(@Param('bookId') bookId:string,@Body() newBook:BookDTO){
    return this.bookService.updateBook(bookId,newBook);
  }
}
