import { TestBed } from '@angular/core/testing';

import { EstagioServiceService } from './estagio.service';

describe('EstagioServiceService', () => {
  let service: EstagioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstagioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
