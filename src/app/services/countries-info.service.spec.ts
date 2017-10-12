import { TestBed, inject } from '@angular/core/testing';

import { CountriesInfoService } from './countries-info.service';

describe('CountriesInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountriesInfoService]
    });
  });

  it('should be created', inject([CountriesInfoService], (service: CountriesInfoService) => {
    expect(service).toBeTruthy();
  }));
});
