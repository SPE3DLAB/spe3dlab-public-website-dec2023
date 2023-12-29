import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTranslationsComponent } from './other-translations.component';

describe('OtherTranslationsComponent', () => {
  let component: OtherTranslationsComponent;
  let fixture: ComponentFixture<OtherTranslationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherTranslationsComponent]
    });
    fixture = TestBed.createComponent(OtherTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
