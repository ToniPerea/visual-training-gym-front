import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsFormPageComponent } from './trainings-form-page.component';

describe('TrainingsFormPageComponent', () => {
  let component: TrainingsFormPageComponent;
  let fixture: ComponentFixture<TrainingsFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingsFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
