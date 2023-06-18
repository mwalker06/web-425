/**
 * Title: composer-list.component.ts
 * Author: Megan Walker
 * Date: 06/18/2023
 * Description: Composer list component
 * Source: Professor Krasso, Week 2 Web 425 - Basic Routing
 */

// import statements
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

// component details
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
// export the class
export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }

}
