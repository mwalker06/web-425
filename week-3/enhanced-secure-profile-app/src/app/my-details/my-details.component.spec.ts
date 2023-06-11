/**
 * Title: my-details.component.spec.ts
 * Author: Megan Walker
 * Date: 06/03/2023
 * Description: My details component spec for the application
 * Source: Professor Krasso, Week 2 Web 425 - Basic Routing
 */


//  Import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailsComponent } from './my-details.component';

// Describe the component
describe('MyDetailsComponent', () => {
  let component: MyDetailsComponent;
  let fixture: ComponentFixture<MyDetailsComponent>;

  // Test the component
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDetailsComponent ]
    })
    .compileComponents();
  });
  
// Test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test the component
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
