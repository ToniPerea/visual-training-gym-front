import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TrainingService} from "../../../services/training.service";
import {Observable, startWith} from "rxjs";
import {User} from "../../../models/user";
import {map} from "rxjs/operators";
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../services/auth.service";
import {roleList} from "../../../utils/roles";
import {Roles} from "../../../models/roles";

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

    /**
     * List of all users
     */
    private userList?: User[];

    /**
     * Observable to show the filtred Users
     */
    filteredUsers?: Observable<User[] | undefined> | undefined;

    disabled = true

    trainingForm: FormGroup

    constructor(private builder: FormBuilder,
                private trainingService: TrainingService,
                private userService: UserService,
                private authService: AuthService
    ) {
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
                    series: ['', Validators.required],
                    repetitions: ['', Validators.required],
                })
            ])
        });

    }


    ngOnInit(): void {
        this.userService.get(this.authService.getUserInfo().email).subscribe((user) => {
            if (user.role == Roles.TRAINER) {
                this.trainingForm.get('email_trainer')?.setValue(user.email)
            }
        })

        this.userService.getUsersList().subscribe((response) => {
            this.userList = response
            this.filteredUsers = this.trainingForm.get('email_client')?.valueChanges.pipe(
                startWith(''),
                map(email => this._filter(email))
            );

        })
    }

    private _filter(value: string): User[] | undefined {
        const filterValue = value.toLowerCase();

        return this.userList?.filter(option => option.email?.toLowerCase().includes(filterValue));
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
    }

    submit() {
        this.trainingService.add(this.trainingForm.value).subscribe()
    }


}
