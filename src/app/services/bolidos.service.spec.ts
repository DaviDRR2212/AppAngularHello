import { TestBed } from '@angular/core/testing';

import { BolidosService } from './bolidos.service';

describe('BolidosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BolidosService = TestBed.get(BolidosService);
    expect(service).toBeTruthy();
  });
});
