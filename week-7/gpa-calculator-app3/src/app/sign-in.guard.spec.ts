/* Title: sign-in.guard.spec
Author: Megan Walker
Date: 07-09-2023
Description: sign-in.guard.spec file for the application
Source: Provided by Professor Krasso, Web 425 exercises
 */
import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
