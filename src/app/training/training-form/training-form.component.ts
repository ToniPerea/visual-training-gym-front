import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TrainingService} from "../../../services/training.service";
import {Training} from "../../../models/training";
import {ExerciseComplete} from "../../../models/exerciseComplete";

@Component({
    selector: 'app-training-form',
    templateUrl: './training-form.component.html',
    styleUrls: ['./training-form.component.scss']
})
export class TrainingFormComponent implements OnInit {

    /**
     * Title of the component
     */
    @Input() public title = '';

    /**
     * Status of the component
     */
    @Input() public status = '';

    trainingForm: FormGroup

    constructor(private builder: FormBuilder, private trainingService: TrainingService) {
        this.trainingForm = this.builder.group({
            date_of_training: [''],
            email_client: [''],
            email_trainer: [''],
            exercises: this.builder.array([
                this.builder.group({
                    exercise: this.builder.group({
                        name: [''],
                        gif: ['']
                    }),
                    weight: [''],
                    series: [],
                    repetitions: [],
                })
            ])
        });

    }


    ngOnInit(): void {

    }

    initExerciseCompleteForm(): FormGroup {
        return this.builder.group({
            exercise: this.builder.group({
                name: [''],
                gif: ['']
            }),
            weight: [''],
            series: [''],
            repetitions: [''],
        })

    }


    get getExercises() {
        return this.trainingForm.get('exercises') as FormArray;
    }


    addExercise() {
        this.getExercises.push(this.initExerciseCompleteForm());
        console.log(this.trainingForm.value)
    }

    submit(){
        this.trainingService.add(this.trainingForm.value).subscribe()
    }


}
