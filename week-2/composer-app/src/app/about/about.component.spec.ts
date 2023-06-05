/**
 * Title: about.component.spec.ts
 * Author: Megan Walker
 * Date: 06/3/2023
 * @description: About component spec file
 * Source: Provided by Professor Krasso, Web 425 exercises
 */

//imports
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

//describe component
describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  //create component
  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
