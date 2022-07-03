import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TrainingService} from "../../../services/training.service";

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
            date_of_training: ['', Validators.required],
            email_client: ['', Validators.required],
            email_trainer: ['', Validators.required],
            exercises: this.builder.array([
                this.builder.group({
                    exercise: this.builder.group({
                        name: [''],
                        gif: ['']
                    }, Validators.required),
                    weight: ['', Validators.required],
                    series: ['',Validators.required],
                    repetitions: ['',Validators.required],
                })
            ])
        });

        console.log(this.trainingForm.value)

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
