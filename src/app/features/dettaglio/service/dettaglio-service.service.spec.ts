import { TestBed } from '@angular/core/testing';

import { DettaglioServiceService } from './dettaglio-service.service';

describe('DettaglioServiceService', () => {
  let service: DettaglioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DettaglioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
