import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  title = 'Perfil de Usuario';

  status = 'update';

  constructor() {}

  ngOnInit(): void {}
}
