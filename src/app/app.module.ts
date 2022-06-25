import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
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
import {UserFormComponent} from "./user/user-form/user-form.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import { RegisterPageComponent } from './register-page/register-page.component';
import {MatSelectModule} from "@angular/material/select";

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LoginPageComponent,
        UserFormComponent,
        RegisterPageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        AppRoutingModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        HttpClientModule,
        LottieModule.forRoot({player: playerFactory}),
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
