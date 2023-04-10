import { Injectable } from '@nestjs/common';
import { BookDto } from '../dto/Book.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../entity/book.entity';
@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ){}

  async findAll(params): Promise<Book[]> {
    return await this.booksRepository.find();
  }

  async findBook(bookId: number): Promise<Book> {
    return await this.booksRepository.findOne({where: {id:bookId}});
  }
  async createBook(newBook: BookDto): Promise<Book> {
    return await this.booksRepository.save(newBook);
  }
  async deleteBook(bookId: number): Promise<any> {
    return await this.booksRepository.delete({id:bookId});;
  }
  async updateBook(bookId: number, newBook: BookDto): Promise<Book> {
    let toUpdate = await this.booksRepository.findOne({where: {id:bookId}});
    let updated = Object.assign(toUpdate, newBook);
    return this.booksRepository.save(updated);
  }
}
