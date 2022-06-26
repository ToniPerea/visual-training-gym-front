import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {AnimationItem} from 'lottie-web';
import {AnimationOptions} from "ngx-lottie";
import {Router} from "@angular/router";
import {User} from "../../models/user";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    options: AnimationOptions = {
        path: '/assets/lotties/loginPage.json',
    };

    email = new FormControl('a@a.com', [Validators.required, Validators.email])
    password = new FormControl('patata', [Validators.required])


    constructor(public userService: UserService, private router: Router) {
    }

    ngOnInit(): void {
    }

    login() {
        const userData = new User("",new Date(), this.email.value,this.password.value,"","")
        this.userService.login(userData).subscribe(() => this.router.navigate(['/home']));
    }

    animationCreated(animationItem: AnimationItem): void {
        console.log(animationItem);
    }

}
