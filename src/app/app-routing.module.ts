import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";

const routes: Routes = [];

const appRoutes = [
    {path: "", component: AppComponent, patchMatch: "full"},
    {path: "login", component: LoginComponent, patchMatch: "full"}
    //{path: "", component:, patchMatch: "full"},
]

export const routing = RouterModule.forRoot(appRoutes);

