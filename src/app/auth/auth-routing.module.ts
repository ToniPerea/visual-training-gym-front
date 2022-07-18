import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { AuthGuard } from '../../services/auth-guard.service';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { ProfilePageComponent } from '../profile-page/profile-page.component';
import { TrainingsDetailsPageComponent } from '../training/trainings-details-page/trainings-details-page.component';
import { TrainingsFormPageComponent } from '../training/trainings-form-page/trainings-form-page.component';
import { ExerciseFormPageComponent } from '../exercise/exercise-form-page/exercise-form-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'training', component: TrainingsDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'createTraining', component: TrainingsFormPageComponent, canActivate: [AuthGuard] },
  { path: 'createExercise', component: ExerciseFormPageComponent, canActivate: [AuthGuard] }
  //{path: "", component:, patchMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
