import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {Training} from "../../../models/training";
import {TrainingService} from "../../../services/training.service";

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss']
})
export class TrainingsListComponent implements OnInit {

  trainingsList!: Training[];

    displayedColumns = ['client', 'date'];

    constructor(private trainingService: TrainingService) {
    }

    ngOnInit(): void {
        this.trainingService.getTrainingsList().subscribe(trainingsList => {
            console.log(trainingsList)
            this.trainingsList = trainingsList;
        })
    }

}
