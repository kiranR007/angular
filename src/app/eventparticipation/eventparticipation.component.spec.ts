import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventparticipationComponent } from './eventparticipation.component';

describe('EventparticipationComponent', () => {
  let component: EventparticipationComponent;
  let fixture: ComponentFixture<EventparticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventparticipationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventparticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
