import { TestBed } from '@angular/core/testing';

import { RequestCarResolver } from './request-car.resolver';

describe('RequestCarResolver', () => {
  let resolver: RequestCarResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RequestCarResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
