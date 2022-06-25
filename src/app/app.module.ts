import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {routing} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginPageComponent } from './login-page/login-page.component';
import {LottieModule} from "ngx-lottie";

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LoginPageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        routing,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        HttpClientModule,
        LottieModule.forRoot({player:playerFactory})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
