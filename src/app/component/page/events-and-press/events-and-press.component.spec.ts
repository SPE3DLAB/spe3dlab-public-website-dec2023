import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAndPressComponent } from './events-and-press.component';

describe('EventsAndPressComponent', () => {
  let component: EventsAndPressComponent;
  let fixture: ComponentFixture<EventsAndPressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAndPressComponent]
    });
    fixture = TestBed.createComponent(EventsAndPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
