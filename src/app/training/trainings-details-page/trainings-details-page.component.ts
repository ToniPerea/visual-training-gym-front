import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
    selector: 'app-trainings-details-page',
    templateUrl: './trainings-details-page.component.html',
    styleUrls: ['./trainings-details-page.component.scss']
})
export class TrainingsDetailsPageComponent implements OnInit {
    public currentID?: string | null;

    constructor(public activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.currentID = window.history.state.id
    }


}
