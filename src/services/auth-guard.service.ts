import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

/**
 * Guard to be used in routes definition, field 'canActivate'
 */
@Injectable()
export class AuthGuard implements CanActivate {
  /**
   * Constructor
   * @param authService
   * @param router
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Whether the current user can access to a view or not
   * @returns {boolean}
   */
  public canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
}
