/**
 * Title: composer-list.component.spec.ts
 * Author: Megan Walker
 * Date: 06/3/2023
 * @description: Composer list component spec file
 * Source: Provided by Professor Krasso, Web 425 exercises
 */

// import statements
import { IComposer } from './composer.interface';

// export the class
export class Composer {
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
  getComposers() {
    return this.composers;
  }
  // getComposer function
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
