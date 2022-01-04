import { TestBed } from '@angular/core/testing';

import { SessionAuthenticationService } from './session-authentication.service';

describe('SessionAuthenticationService', () => {
  let service: SessionAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
