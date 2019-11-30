import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user'));

  username: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.authService.currentUsername.subscribe(username => this.username = username);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  admin() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    // tslint:disable-next-line: no-conditional-assignment
    if (user.emailAddress === 'james509bone@gmail.com') {
      return true;
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.router.navigate(['/home']);
    this.toastrService.success('logged out successfully');
  }
}

