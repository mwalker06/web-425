/**
 * Title: composer-details.component.ts
 * Author: Megan Walker
 * Date: 06/3/2023
 * @description: Composer details component file
 * Source: Provided by Professor Krasso, Web 425 exercises
 */

// import statements
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ActivatedRoute } from '@angular/router';
import { ComposerService } from '../composer.service';

// component details
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

// export the class
export class ComposerDetailsComponent implements OnInit {

  // composerId variable
  composerId: number;
  composer: IComposer;
  constructor( private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    // if composerId is a number
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
   }

  // ngOnInit function
  ngOnInit(): void {
  }

}
