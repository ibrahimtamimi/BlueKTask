import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodePicComponent } from './uplode-pic.component';

describe('UplodePicComponent', () => {
  let component: UplodePicComponent;
  let fixture: ComponentFixture<UplodePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplodePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplodePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
