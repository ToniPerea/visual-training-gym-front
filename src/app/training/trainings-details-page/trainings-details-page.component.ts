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
        this.activatedRoute
            .queryParams
            .subscribe(params => {
                // Defaults to 0 if no query param provided.
                this.currentID = params['id']
                console.log(this.currentID)
            });
    }


}
