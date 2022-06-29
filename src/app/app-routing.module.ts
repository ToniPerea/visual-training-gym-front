import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";


const routes: Routes = [
    {path: "", component: LoginPageComponent},
    {path: "register", component: RegisterPageComponent},
    {path: "home", component: HomePageComponent},
    {path: "profile", component: ProfilePageComponent},
    //{path: "", component:, patchMatch: "full"},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

