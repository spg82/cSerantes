import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFrontagesComponent } from './gallery-frontages.component';

describe('GalleryFrontagesComponent', () => {
  let component: GalleryFrontagesComponent;
  let fixture: ComponentFixture<GalleryFrontagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFrontagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFrontagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
