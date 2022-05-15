import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SrvicesBookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  private booklist: any[] = [];
  private blsbj$ = new Subject();
  booklist$ = this.blsbj$.asObservable();

  private wishlist: any[] = [];
  private wlsbj$ = new Subject();
  wishlist$ = this.wlsbj$.asObservable();

  constructor(private http: HttpClient) {}

  addToWishList(id: string) {
    const book = this.booklist.find((book: any) => book.id === id);
    const bookInwish = this.wishlist.find((wish) => wish.id === id);

    if (!book || bookInwish) return;

    this.wishlist.push(book);
    this.wlsbj$.next(this.wishlist);
  }

  getBooks(keyword: string) {
    this.http
      .get([this.baseUrl, keyword].join(''))
      .pipe(
        map((bookobj: any) => {
          const array = bookobj.items.map((obj: any) => {
            return {
              bookName: obj.volumeInfo.title,
              id: obj.id,
              publisher: obj.volumeInfo.publisher,
              publishedDetails: obj.volumeInfo.publishedDate,
              description: obj.volumeInfo.description,
              authors: obj.volumeInfo.authors,
              thumbnail: obj.volumeInfo.imageLinks.thumbnail,
            };
          });
          return array;
        }),
        tap((booklist) => {
          this.booklist = [...booklist];
          this.blsbj$.next(this.booklist);
        })
      )
      .subscribe();
  }
  deleteFromWishList(id: string) {
    this.wishlist.forEach((value, index) => {
      if (value == id) this.wishlist.splice(index, 1);
    });
  }
}
