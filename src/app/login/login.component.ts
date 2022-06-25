import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('',[Validators.required, Validators.email])
  password = new FormControl('',[Validators.required])


  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    const userData= new User(this.email.value, this.password.value);
    this.userService.login(userData).subscribe();
  }

}
