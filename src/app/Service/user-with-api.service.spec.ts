import { TestBed } from '@angular/core/testing';

import { UserWithApiService } from './user-with-api.service';

describe('UserWithApiService', () => {
  let service: UserWithApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWithApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
