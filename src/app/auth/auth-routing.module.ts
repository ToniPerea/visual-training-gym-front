import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent} from './login/login.component';
import {UserFormComponent} from '../user/user-form/user-form.component';
import {HomePageComponent} from "../home-page/home-page.component";
import {AuthGuard} from "../../services/auth-guard.service";

const routes: Routes = [
    {path: "register", component: UserFormComponent},
    {path: "login", component: LoginComponent},
    {path: "home", component: HomePageComponent, canActivate:[AuthGuard]},
    //{path: "", component:, patchMatch: "full"},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule {

}