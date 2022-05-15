import { HttpClient } from '@angular/common/http';

import {
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';

import { SrvicesBookService } from './srvices-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('inputbox', { static: true }) inputBox: ElementRef | any;
  constructor(
    private srvicesBookService: SrvicesBookService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    fromEvent(this.inputBox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        filter((_) => {
          const keyword = this.inputBox.nativeElement.value;
          return keyword.trim();
        }),
        tap((_) => {
          const keyword = this.inputBox.nativeElement.value.trim();
          this.srvicesBookService.getBooks(keyword);
        })
      )
      .subscribe();
  }
}
