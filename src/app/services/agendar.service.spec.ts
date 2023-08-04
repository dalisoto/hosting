import { TestBed } from '@angular/core/testing';

import { CitaService } from './agendar.service';

describe('AgendarService', () => {
  let service: CitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
