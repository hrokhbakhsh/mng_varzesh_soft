import { TestBed } from '@angular/core/testing';

import { IpAuthGuard } from './ip-auth.guard';

describe('IpAuthGuard', () => {
  let guard: IpAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IpAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
