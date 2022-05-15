import { Component, OnInit } from '@angular/core';
import { SrvicesBookService } from '../srvices-book.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  wishlist: any = [];
  constructor(private srvicesBookService: SrvicesBookService) {}

  ngOnInit(): void {
    this.srvicesBookService.wishlist$.subscribe((wishlist: any) => {
      this.wishlist = [...wishlist];
    });
  }
  deleteWish(id: string) {
    this.srvicesBookService.deleteFromWishList(id);
  }
}
