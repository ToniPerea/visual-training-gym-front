import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LottieModule} from "ngx-lottie";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {RegisterPageComponent} from './register-page/register-page.component';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {HomePageComponent} from './home-page/home-page.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {ExerciseFormComponent} from './exercise/exercise-form/exercise-form.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {AuthModule} from "./auth/auth.module";
import {TrainingFormComponent} from './training/training-form/training-form.component';
import {UsersListComponent} from './user/users-list/users-list.component';
import {MatTableModule} from "@angular/material/table";
import {TrainingDetailsComponent} from './training/training-details/training-details.component';
import {TrainingsListComponent} from './training/trainings-list/trainings-list.component';
import { FooterComponent } from './footer/footer.component';
import { TrainingsDetailsPageComponent } from './training/trainings-details-page/trainings-details-page.component';
import { TrainingsFormPageComponent } from './training/trainings-form-page/trainings-form-page.component';
import { ExerciseFormPageComponent } from './exercise/exercise-form-page/exercise-form-page.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatTooltipModule} from "@angular/material/tooltip";

export function playerFactory() {
    return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
    declarations: [
        AppComponent,
        RegisterPageComponent,
        HomePageComponent,
        NavbarComponent,
        ExerciseFormComponent,
        ProfilePageComponent,
        TrainingFormComponent,
        UsersListComponent,
        TrainingDetailsComponent,
        TrainingsListComponent,
        FooterComponent,
        TrainingsDetailsPageComponent,
        TrainingsFormPageComponent,
        ExerciseFormPageComponent
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
        MatSelectModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        AuthModule,
        MatTableModule,
        MatAutocompleteModule,
        MatTooltipModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
