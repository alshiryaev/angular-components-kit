import { TestBed } from '@angular/core/testing';

import { InputSelectService } from './input-select.service';

describe('InputSelectService', () => {
  let service: InputSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
