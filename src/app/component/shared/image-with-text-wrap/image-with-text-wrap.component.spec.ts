import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithTextWrapComponent } from './image-with-text-wrap.component';

describe('ImageWithTextWrapComponent', () => {
  let component: ImageWithTextWrapComponent;
  let fixture: ComponentFixture<ImageWithTextWrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageWithTextWrapComponent]
    });
    fixture = TestBed.createComponent(ImageWithTextWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
