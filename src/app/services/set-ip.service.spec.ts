import { TestBed } from '@angular/core/testing';

import { SetIpService } from './set-ip.service';

describe('SetIpService', () => {
  let service: SetIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
