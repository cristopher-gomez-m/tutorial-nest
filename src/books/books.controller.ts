import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private bookService:BooksService){};

    @Get()
    findAll(){
        return this.bookService.findAll();
    }
}
