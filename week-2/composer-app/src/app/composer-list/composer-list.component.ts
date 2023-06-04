/**
 * Title: composer-list.component.ts
 * Author: Megan Walker
 * Date: 06/03/2023
 * Description: Composer list component
 * Source: Professor Krasso, Week 2 Web 425 - Basic Routing
 */
import { Component, OnInit } from '@angular/core';

// export the class
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  // create an array of composers
  constructor() {
    this.composers = [
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Joseph Haydn", "Classical")
    ];
  }

  ngOnInit(): void {
  }

}
