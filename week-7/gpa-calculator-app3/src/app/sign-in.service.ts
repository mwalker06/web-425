/* Title: sign-in.service
Author: Megan Walker
Date: 07-09-2023
Description: sign-in.service file for the application
Source: Provided by Professor Krasso, Web 425 exercises */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
