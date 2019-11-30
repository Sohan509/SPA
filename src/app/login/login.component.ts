import { Component, OnInit, NgModule, HostBinding } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginInfo } from '../models/loginInfo';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  shown = false;
  faEye = faEye;
  userLogin = false;
  user: User;
  inputPassword: any;
  loginInfo: LoginInfo;
  registerForm: FormGroup;
  loginForm: FormGroup;


  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
    this.loginFormValue();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      emailAddress: ['', [Validators.email, Validators.required]],
      password: ['', [ Validators.minLength(6), Validators.maxLength(10), Validators.required]]
    });
  }

  loginFormValue() {
    this.loginForm = this.fb.group({
      emailAddress: ['', [ Validators.email, Validators.required ]],
      password: ['', [ Validators.required]]
    });
  }


  toggle() {
    this.shown = !this.shown;
    if (this.shown) {
      document.getElementById('Password').setAttribute('type', 'text');
      document.getElementById('show').className = 'show_class';
    } else {
      document.getElementById('Password').setAttribute('type', 'password');
      document.getElementById('show').className = 'hide_class';
    }
  }

  loginToggle() {
    this.userLogin = !this.userLogin;
  }

  login() {
    if (this.loginForm.valid) {
      this.loginInfo = Object.assign({}, this.loginForm.value);
      this.authService.login(this.loginInfo).subscribe( next => {
        this.toastrService.success('Successfully login');
      }, error => {
        this.toastrService.warning(error);
      }, () => {
        this.router.navigate(['/home']);
      });
    } else {
      this.loginInfo = Object.assign({}, this.loginForm.value);
      this.authService.login(this.loginInfo).subscribe( () => {

      }, error => {
        this.toastrService.warning(error);
      });
    }

  }

  loggedIn() {
    this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
    this.toastrService.success('logged out successfully');
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.toastrService.success('Successfully Sign Up');
      }, error => {
        this.toastrService.error(error);
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/home']);
        });
      });
    } else {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe( () => {

      }, error => {
        this.toastrService.warning(error);
      });
    }
  }

}
