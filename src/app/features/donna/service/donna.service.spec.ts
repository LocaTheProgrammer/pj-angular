import { TestBed } from '@angular/core/testing';

import { DonnaService } from './donna.service';

describe('DonnaService', () => {
  let service: DonnaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonnaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
