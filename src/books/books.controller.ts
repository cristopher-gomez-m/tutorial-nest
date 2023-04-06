import { Controller, Get, Param, Post, Query, Req,Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { Request } from 'express';

@Controller('books')
export class BooksController {
    constructor(private bookService:BooksService){};

    @Get()
    findAll(@Req() request:Request){
        return this.bookService.findAll(request.query);
    }
    @Get(':bookId')
    findBook(@Param('bookId') bookId:string){
        return this.bookService.findBook(bookId);
    }
    @Post()
    createBook(@Body() body){
        let newBook:any=body;
        return this.bookService.createBook(newBook);
    }
}
