/**
 * Title: my-details.component.ts
 * Author: Megan Walker
 * Date: 06/03/2023
 * Description: My details component
 * Source: Professor Krasso, Week 2 Web 425 - Basic Routing
 */

// Import statement
import { Component, OnInit } from '@angular/core';

// Export class
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];
// Constructor function with three parameters (fullName, favoriteFood, favoriteColor)
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
// Function to return the keywords array as a string
  toString() {
    console.log(`\n  Full name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`);
  }
}
// Component details (selector, templateUrl, styleUrls)
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
// Export class
export class MyDetailsComponent implements OnInit {

  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Megan Walker", "Pasta", "Orange");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
