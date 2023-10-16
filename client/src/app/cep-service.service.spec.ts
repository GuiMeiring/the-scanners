import { TestBed } from '@angular/core/testing';

import { CepServiceService } from './cep-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('CepServiceService', () => {
  let service: CepServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
