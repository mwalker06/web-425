/**
* Title: my-image.component.spec.ts
* Author: Megan Walker
* Date: 06/03/2023
* Description: My image component spec for the application
* Source: Professor Krasso, Week 2 Web 425 - Basic Routing
*/

// Import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImageComponent } from './my-image.component';

// Describe the component
describe('MyImageComponent', () => {
  let component: MyImageComponent;
  let fixture: ComponentFixture<MyImageComponent>;

  // Test the component
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyImageComponent ]
    })
    .compileComponents();
  });

  // Test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(MyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // Test the component
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
