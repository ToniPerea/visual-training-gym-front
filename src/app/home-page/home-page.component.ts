import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Roles } from '../../models/roles';
import { AnimationOptions } from 'ngx-lottie';
import { User } from '../../models/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  optionsTrainer: AnimationOptions = {
    path: '/assets/lotties/trainer.json'
  };

  optionsClient: AnimationOptions = {
    path: '/assets/lotties/client.json'
  };

  role = '';

  roleList = Roles;

  currentUser!: User;

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.get(this.authService.getUserInfo().email).subscribe((user) => {
      this.currentUser = user;
      this.role = user.role;
    });
  }
}
