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

  it('should have size var holde 4 Mb ', async(() => {
    const fixture = TestBed.createComponent(UplodePicComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.size).toEqual(4 * 1024 * 1024);
  }));

   it('should incSize function return Boolean ', async(() => {
    const fixture = TestBed.createComponent(UplodePicComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.incSize).toBeDefined
  }));

});
