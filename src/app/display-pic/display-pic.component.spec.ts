import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPicComponent } from './display-pic.component';

describe('DisplayPicComponent', () => {
  let component: DisplayPicComponent;
  let fixture: ComponentFixture<DisplayPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
