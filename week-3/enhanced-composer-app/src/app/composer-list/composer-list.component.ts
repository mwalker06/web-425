/**
 * Title: composer-list.component.ts
 * Author: Megan Walker
 * Date: 06/03/2023
 * Description: Composer list component
 * Source: Professor Krasso, Week 2 Web 425 - Basic Routing
 */

// import statements
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class'


// component details
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
// export the class
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }

}
