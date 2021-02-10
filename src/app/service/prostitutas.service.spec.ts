import { TestBed } from '@angular/core/testing';

import { ProstitutasService } from './prostitutas.service';

describe('ProstitutasService', () => {
  let service: ProstitutasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProstitutasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
