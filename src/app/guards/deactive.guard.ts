import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class DeactiveGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
        private toastrService: ToastrService) {

    }

    canActivate(): boolean {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/home']);
            this.toastrService.warning('Please logout to get into it');
            return false;
        }

        return true;
    }
}
