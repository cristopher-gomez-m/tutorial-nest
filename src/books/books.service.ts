import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  findAll(params): any {
    let msg = `findAll funcionando. Parámetros:`;

    if (params.order !== undefined) {
      msg = msg + ` order: ${params.order}`;
    }

    if (params.limit !== undefined) {
      msg = msg + ` limit: ${params.limit}`;
    }

    return msg;
  }

  findBook(bookId: string) {
    return `findBook funcionado con bookId:${bookId}`;
  }
  createBook(newBook: any) {
    return newBook;
  }
  deleteBook(bookId: string) {
    return `deleteBook is working with bookId: ${bookId}`;
  }
  updateBook(bookId: string, newBook: any) {
    return newBook;
  }
}
