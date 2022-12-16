import { TestBed } from '@angular/core/testing';

import { CadastroSensorService } from './cadastro-sensor.service';

describe('CadastroSensorService', () => {
  let service: CadastroSensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
