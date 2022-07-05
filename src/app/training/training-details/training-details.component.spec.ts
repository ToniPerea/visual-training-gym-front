import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDetailsComponent } from './training-details.component';

describe('TrainingListComponent', () => {
  let component: TrainingDetailsComponent;
  let fixture: ComponentFixture<TrainingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
