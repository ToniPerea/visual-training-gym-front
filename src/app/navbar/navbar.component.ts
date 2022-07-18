import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Roles } from '../../models/roles';
import { UserService } from '../../services/user.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  role = '';

  roleList = Roles;

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.get(this.authService.getUserInfo().email).subscribe((user) => {
      this.role = user.role;
    });
  }

  logOut() {
    this.authService.logout();
  }
}
