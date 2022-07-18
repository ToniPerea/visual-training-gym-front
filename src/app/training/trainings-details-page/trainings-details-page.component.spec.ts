import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsDetailsPageComponent } from './trainings-details-page.component';

describe('TrainingsDetailsPageComponent', () => {
  let component: TrainingsDetailsPageComponent;
  let fixture: ComponentFixture<TrainingsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingsDetailsPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
