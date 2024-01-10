import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithTextBottomComponent } from './image-with-text-bottom.component';

describe('ImageWithTextBottomComponent', () => {
  let component: ImageWithTextBottomComponent;
  let fixture: ComponentFixture<ImageWithTextBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageWithTextBottomComponent]
    });
    fixture = TestBed.createComponent(ImageWithTextBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
