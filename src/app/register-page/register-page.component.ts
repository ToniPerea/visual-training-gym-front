import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  title = 'Crear Cuenta';

  status = 'register';

  constructor() {}

  ngOnInit(): void {}
}
