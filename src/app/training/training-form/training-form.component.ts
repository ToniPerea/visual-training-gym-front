import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TrainingService} from "../../../services/training.service";
import {Observable, startWith} from "rxjs";
import {User} from "../../../models/user";
import {map} from "rxjs/operators";
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../services/auth.service";
import {Roles} from "../../../models/roles";
import {Exercise} from "../../../models/exercise";
import {ExerciseService} from "../../../services/exercise.service";
import {Router} from "@angular/router";

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
     * List of all users
     */
    private exerciseList?: Exercise[];

    /**
     * Observable to show the filtred Users
     */
    filteredUsers?: Observable<User[] | undefined> | undefined;

    /**
     * Observable to show the filtred Exercises
     */
    filteredExercises?: Observable<Exercise[] | undefined>;

    disabled = true

    trainingForm: FormGroup

    constructor(private builder: FormBuilder,
                private trainingService: TrainingService,
                private userService: UserService,
                private authService: AuthService,
                private exerciseService: ExerciseService,
                private router: Router
    ) {
        this.trainingForm = this.builder.group({
            date_of_training: ['', Validators.required],
            email_client: ['', Validators.required],
            email_trainer: [{value: '', disabled: true}, Validators.required],
            exercises: this.builder.array([
                this.builder.group({
                    exercise: this.builder.group({
                        name: ['',Validators.required],
                        gif: [{value: '', disabled: true}, Validators.required]
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

        this.exerciseService.getExercisesList().subscribe((response) => {
            this.exerciseList = response
            this.filteredExercises = this.trainingForm.get('exercises')?.valueChanges.pipe(
                startWith(''),
                map(name => this.filterExercise(name))
            );
        })

        this.userService.getUsersList().subscribe((response) => {
            this.userList = response
            this.filteredUsers = this.trainingForm.get('email_client')?.valueChanges.pipe(
                startWith(''),
                map(email => this.filterUser(email))
            );

        })
    }

    private filterExercise(value: Exercise): Exercise[] | undefined {
        //const filterValue = value.name;

        return this.exerciseList;
    }

    private filterUser(value: string): User[] | undefined {
        const filterValue = value.toLowerCase();

        return this.userList?.filter(option => option.email?.toLowerCase().includes(filterValue));
    }

    changeGif(index: number){
        const exerciseToFind = this.exerciseList?.find(
            element =>
                element.name == this.trainingForm.get('exercises')?.get(index.toString())?.get('exercise')?.get('name')?.value)
        this.trainingForm.get('exercises')?.get(index.toString())?.get('exercise')?.get('gif')?.setValue(exerciseToFind?.gif)

    }

    initExerciseCompleteForm(): FormGroup {
        return this.builder.group({
            exercise: this.builder.group({
                name: ['', Validators.required],
                gif: [{value: '', disabled: true}, Validators.required]
            }),
            weight: ['', Validators.required],
            series: ['', Validators.required],
            repetitions: ['', Validators.required],
        })

    }


    get getExercises() {
        return this.trainingForm.get('exercises') as FormArray;
    }


    addExercise() {
        this.getExercises.push(this.initExerciseCompleteForm());
    }

    submit() {
        this.trainingForm.get('email_trainer')?.enable()
        this.trainingForm.get('exercises')?.enable()
        this.trainingService.add(this.trainingForm.value).subscribe(() => {
            this.router.navigateByUrl("/home")
        })
    }


}
