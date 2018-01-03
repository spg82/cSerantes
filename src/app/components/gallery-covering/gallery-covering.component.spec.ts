import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCoveringComponent } from './gallery-covering.component';

describe('GalleryCoveringComponent', () => {
  let component: GalleryCoveringComponent;
  let fixture: ComponentFixture<GalleryCoveringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryCoveringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCoveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
