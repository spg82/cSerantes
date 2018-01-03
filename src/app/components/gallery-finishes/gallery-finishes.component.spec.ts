import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFinishesComponent } from './gallery-finishes.component';

describe('GalleryFinishesComponent', () => {
  let component: GalleryFinishesComponent;
  let fixture: ComponentFixture<GalleryFinishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFinishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFinishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
