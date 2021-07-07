import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {

    if (this.authService.isAuthenticated$) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
