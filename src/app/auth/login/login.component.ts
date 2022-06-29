import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {AnimationOptions} from "ngx-lottie";
import {Router} from "@angular/router";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {AuthService} from "../../../services/auth.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    options: AnimationOptions = {
        path: '/assets/lotties/loginPage.json',
    };

    loginForm: FormGroup;


    constructor(
        private router: Router,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private authService: AuthService,
        private builder: FormBuilder
    ) {
        this.matIconRegistry.addSvgIcon("angular-logo", this.domSanitizer.bypassSecurityTrustResourceUrl(
            "../../assets/angular.svg"
        ))

        this.loginForm = this.builder.group({
            email: new FormControl('a@a.com', [Validators.required, Validators.email]),
            password: new FormControl('patata', [Validators.required]),
        })
    }

    ngOnInit(): void {
    }

    login() {
        this.authService.login(this.loginForm.value).subscribe(res => {
            this.router.navigateByUrl('/auth/home')
        })
        //this.userService.login(userData).subscribe(() => this.router.navigate(['/home']));
    }

}
