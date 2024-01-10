import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithTextSideBySideComponent } from './image-with-text-side-by-side.component';

describe('ImageWithTextSideBySideComponent', () => {
  let component: ImageWithTextSideBySideComponent;
  let fixture: ComponentFixture<ImageWithTextSideBySideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageWithTextSideBySideComponent]
    });
    fixture = TestBed.createComponent(ImageWithTextSideBySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
