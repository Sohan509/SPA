import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()

export class UserEditResolver implements Resolve<User> {

    constructor(
        private userService: UserService,
        private toastrService: ToastrService,
        private authService: AuthService,
        private route: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError( error => {
                this.toastrService.error('Problem retrieving data');
                this.route.navigate(['/edit']);
                return of(null);
            })
        );
    }
}
