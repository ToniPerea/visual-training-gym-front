import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent} from './login/login.component';
import {HomePageComponent} from "../home-page/home-page.component";
import {AuthGuard} from "../../services/auth-guard.service";
import {RegisterPageComponent} from "../register-page/register-page.component";
import {ProfilePageComponent} from "../profile-page/profile-page.component";
import {TrainingDetailsComponent} from '../training/training-details/training-details.component';

const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterPageComponent},
    {path: "home", component: HomePageComponent, canActivate:[AuthGuard]},
    {path: "profile", component: ProfilePageComponent, canActivate:[AuthGuard]},
    {path: "training/:id", component: TrainingDetailsComponent, canActivate:[AuthGuard]},
    //{path: "", component:, patchMatch: "full"},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule {

}