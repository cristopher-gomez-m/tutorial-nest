import { Controller, Get, Param, Post, Query, Req, Body, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Request } from 'express';
import { CreateBookDTO } from './dto/CreateBook.dto'; 
import { UpdateBookDto } from './dto/UpdateBook.dto';
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
  createBook(@Body() newBook:CreateBookDTO) {
    return this.bookService.createBook(newBook);
  }
  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string) {
    return this.bookService.deleteBook(bookId);
  }
  @Put(':bookId')
  updateBook(@Param('bookId') bookId:string,@Body() newBook:UpdateBookDto){
    return this.bookService.updateBook(bookId,newBook);
  }
}
