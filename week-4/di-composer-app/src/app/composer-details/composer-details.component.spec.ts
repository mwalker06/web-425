/**
 * Title: composer-details.component.ts
 * Author: Megan Walker
 * Date: 06/11/2023
 * @description: Composer details component file
 * Source: Provided by Professor Krasso, Web 425 exercises
 */

// import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerDetailsComponent } from './composer-details.component';

// component details
describe('ComposerDetailsComponent', () => {
  let component: ComposerDetailsComponent;
  let fixture: ComponentFixture<ComposerDetailsComponent>;

  // beforeEach function to run before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it function to test the component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
