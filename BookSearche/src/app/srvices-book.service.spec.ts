import { TestBed } from '@angular/core/testing';

import { SrvicesBookService } from './srvices-book.service';

describe('SrvicesBookService', () => {
  let service: SrvicesBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvicesBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
