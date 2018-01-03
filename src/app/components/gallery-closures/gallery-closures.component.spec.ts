import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryClosuresComponent } from './gallery-closures.component';

describe('GalleryClosuresComponent', () => {
  let component: GalleryClosuresComponent;
  let fixture: ComponentFixture<GalleryClosuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryClosuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryClosuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
