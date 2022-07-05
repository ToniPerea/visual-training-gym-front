import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class UserListComponent implements OnInit {

    userList!: User[];

    displayedColumns = ['name', 'role'];

    expandedElement!: any;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getUsersList().subscribe(usersList => {
            console.log(usersList)
            this.userList = usersList;
        })
    }

}
