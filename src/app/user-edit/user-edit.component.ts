import { Component, OnInit, ViewChild, HostListener, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';
import { NgModel } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../login/login.component';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @ViewChild('editForm', {static: false}) editForm: NgModel;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.dataRetriving();
  }

  dataRetriving() {
    this.route.data.subscribe( data => {
      // tslint:disable-next-line: no-string-literal
      this.user = data['user'];
    });
    this.authService.currentUsername.subscribe(username => this.user.username = username);
  }

  updateUser() {
    if ( this.editForm.dirty) {
      this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe( next => {
        this.toastrService.success('Updated Successfully');
        this.editForm.reset(this.user);
      }, error => {
        this.toastrService.error(error);
      });
      this.userService.currentUsername(this.authService.decodedToken.nameid, this.user).subscribe( next => {
        this.authService.changeUsername(this.user.username);
        this.authService.currentUser.username = this.user.username;
        localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
      }, error => {
        this.toastrService.error(error);
      });
    } else {
      this.toastrService.info('Already up to date');
    }
  }

}
