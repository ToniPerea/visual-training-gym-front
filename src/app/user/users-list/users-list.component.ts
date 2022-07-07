import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    userList!: User[];

    displayedColumns = ['name', 'email', 'role'];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getUsersList().subscribe(usersList => {
            this.userList = usersList;
        })
    }

}
