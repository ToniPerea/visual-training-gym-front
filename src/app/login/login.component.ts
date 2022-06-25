import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import { AnimationItem } from 'lottie-web';
import {AnimationOptions} from "ngx-lottie";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/lotties/loginPage.json',
  };

  email = new FormControl('',[Validators.required, Validators.email])
  password = new FormControl('',[Validators.required])


  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    const userData= new User(this.email.value, this.password.value);
    this.userService.login(userData).subscribe();
  }

   animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
