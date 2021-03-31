import { TestBed } from '@angular/core/testing';

import { UomoService } from './uomo.service';

describe('UomoService', () => {
  let service: UomoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UomoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
