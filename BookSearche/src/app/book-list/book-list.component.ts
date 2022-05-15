import { SrvicesBookService } from '../srvices-book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  booklist$: any;
  constructor(private srvicesBookService: SrvicesBookService) {}

  ngOnInit(): void {
    this.booklist$ = this.srvicesBookService.booklist$;
    // this.srvicesBookService.booklist$.subscribe((booklist: any) => {
    //   this.booklist = [...booklist];
    // });
  }

  addToWish(id: string) {
    this.srvicesBookService.addToWishList(id);
  }
}
