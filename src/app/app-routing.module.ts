import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RegisterPageComponent} from "./register-page/register-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";


const routes: Routes = [
    {path: "", redirectTo: '/auth/login', pathMatch: 'full'},
    {path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    //{path: "register", component: RegisterPageComponent},
    //{path: "home", component: HomePageComponent}
    //{path: "", component:, patchMatch: "full"},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

