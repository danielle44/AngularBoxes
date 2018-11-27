import { TestBed } from '@angular/core/testing';

import { BoxesProviderService } from './boxes-provider.service';

describe('BoxesProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxesProviderService = TestBed.get(BoxesProviderService);
    expect(service).toBeTruthy();
  });
});
