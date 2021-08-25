import { TestBed } from '@angular/core/testing';

import { HardwareDetailService } from './hardware-detail/services/hardware-detail.service';

describe('HardwareDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardwareDetailService = TestBed.get(HardwareDetailService);
    expect(service).toBeTruthy();
  });
});
