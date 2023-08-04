import { TestBed } from '@angular/core/testing';

import { CitaValidadaService } from './cita-validada.service';

describe('CitaValidadaService', () => {
  let service: CitaValidadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaValidadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
