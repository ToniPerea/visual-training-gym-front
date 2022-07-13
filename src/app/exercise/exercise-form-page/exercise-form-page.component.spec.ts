import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFormPageComponent } from './exercise-form-page.component';

describe('ExerciseFormPageComponent', () => {
  let component: ExerciseFormPageComponent;
  let fixture: ComponentFixture<ExerciseFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
