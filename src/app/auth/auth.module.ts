import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from '../user/user-form/user-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LottieModule } from 'ngx-lottie';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { HomePageComponent } from '../home-page/home-page.component';
import { AuthGuard } from '../../services/auth-guard.service';

@NgModule({
  declarations: [LoginComponent, UserFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    LottieModule,
    MatCardModule,
    FlexModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [UserFormComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {}
