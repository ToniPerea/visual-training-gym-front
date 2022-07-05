import {Component, OnInit} from '@angular/core';
import {Training} from "../../../models/training";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {TrainingService} from "../../../services/training.service";
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../services/auth.service";
import {ExerciseComplete} from "../../../models/exerciseComplete";

@Component({
    selector: 'app-training-details',
    templateUrl: './training-details.component.html',
    styleUrls: ['./training-details.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class TrainingDetailsComponent implements OnInit {

    training!: Training

    exercises!: ExerciseComplete[]

    displayedColumns = ['name', 'weight', 'seriesXrepetitions'];

    expandedElement!: any;

    constructor(private trainingService: TrainingService,
                private userService: UserService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this.trainingService.get(this.authService.getUserInfo().email).subscribe(training => {
            this.training = training

            this.exercises = training.exercises
        })
    }

}