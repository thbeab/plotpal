import { TestBed } from '@angular/core/testing';

import { GardenIdService } from './garden-id.service';

describe('GardenIdService', () => {
  let service: GardenIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GardenIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
