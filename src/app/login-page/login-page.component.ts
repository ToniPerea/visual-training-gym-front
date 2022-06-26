import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {


  constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
        "angular-logo",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/angular.svg"))
  }

  ngOnInit(): void {
  }


}
