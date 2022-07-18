import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from '../../../models/exercise';
import { ExerciseService } from '../../../services/exercise.service';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss']
})
export class ExerciseFormComponent implements OnInit {
  /**
   * Title of the component
   */
  @Input() public title = '';

  /**
   * Status of the component
   */
  @Input() public status = '';

  exerciseForm: FormGroup;

  constructor(private builder: FormBuilder, private exerciseService: ExerciseService) {
    this.exerciseForm = this.builder.group({
      name: new FormControl('', Validators.required),
      gif: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  submit() {
    const exerciseData = new Exercise(this.exerciseForm.value.name, this.exerciseForm.value.gif);

    this.exerciseService.add(exerciseData).subscribe();
  }
}
