import { TestBed } from '@angular/core/testing';

import { CazasService } from './cazas.service';

describe('CazasService', () => {
  let service: CazasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CazasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
