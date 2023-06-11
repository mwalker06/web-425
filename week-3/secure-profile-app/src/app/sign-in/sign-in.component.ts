/**
 * Title: sign-in.component.ts
 * Author: Megan Walker
 * Date: 06/11/2023
 * Description: Sign-in component for the application
 * Source: Professor Krasso, Week 2 Web 425 - Basic Routing
 */

// Import statements
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Component details (selector, templateUrl, styleUrls)
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }
}
