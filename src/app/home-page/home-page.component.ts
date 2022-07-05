import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    role = ''

    constructor(private authService: AuthService, private userService: UserService) {

    }

    ngOnInit(): void {
        this.userService.get(this.authService.getUserInfo().email).subscribe(user => {
            this.role = user.role
        })


    }

}
