import {Component, Input, OnInit} from '@angular/core';
import {Training} from "../../../models/training";
import {TrainingService} from "../../../services/training.service";
import {Roles} from "../../../models/roles";
import {AuthService} from "../../../services/auth.service";

@Component({
    selector: 'app-trainings-list',
    templateUrl: './trainings-list.component.html',
    styleUrls: ['./trainings-list.component.scss']
})
export class TrainingsListComponent implements OnInit {

    @Input() status?: string

    trainingsList!: Training[];

    displayedColumns = ['client', 'date', 'redirect'];

    constructor(private trainingService: TrainingService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        if (this.status === Roles.TRAINER) {
            this.trainingService.getTrainingsList().subscribe(trainingsList => {
                this.trainingsList = trainingsList;
            })
        } else if (this.status === Roles.CLIENT) {
            this.trainingService.getTrainingsListOneUser(this.authService.getUserInfo().email).subscribe(trainingsList => {
                this.trainingsList = trainingsList;
            })
        }
    }

}
