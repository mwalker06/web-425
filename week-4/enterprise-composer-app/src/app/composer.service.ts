/**
 * Title: composer.service.ts
 * Author: Megan Walker
 * Date: 06/18/2023
 * @description: Composer service file
 * Source: Provided by Professor Krasso, Web 425 exercises
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  // create an array of composers
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Johannes Brahms", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Joseph Haydn", genre: "Classical"

      },
    ]
  }
  // getComposers function
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }
  // getComposer function
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
  // filterComposers function
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }

}
