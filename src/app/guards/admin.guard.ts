import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService) {

  }

  canActivate(): boolean {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user.emailAddress === 'james509bone@gmail.com' && this.authService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/error']);
    return false;
  }
}
