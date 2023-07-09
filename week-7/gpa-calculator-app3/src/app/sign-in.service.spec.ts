/* Title: sign-in.service.spec
Author: Megan Walker
Date: 07-09-2023
Description: sign-in.service.spec file for the application
Source: Provided by Professor Krasso, Web 425 exercises
 */

import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
