import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginPageComponent} from "./login-page/login-page.component";

const routes: Routes = [];

const appRoutes = [
    {path: "", component: LoginPageComponent, patchMatch: "full"}
    //{path: "", component:, patchMatch: "full"},
]

export const routing = RouterModule.forRoot(appRoutes);

