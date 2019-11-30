import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, NgForm, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { SendMailService } from '../services/sendMail.service';
import { MailInfo } from '../models/Mailnfo';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  shown = false;
  faEye = faEye;
  model: any = {};
  mailInfo: MailInfo;
  sendMailForm: FormGroup;
  constructor(
    private sendMail: SendMailService,
    private toastrService: ToastrService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.sendingMailForm();
  }

  sendingMailForm() {
    this.sendMailForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.email, Validators.required]],
      password: ['', [ Validators.required]],
      Subject: ['', [ Validators.required]],
      Message: ['', [ Validators.required]]
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

  send() {
    if (this.sendMailForm.valid) {
      this.mailInfo = Object.assign({}, this.sendMailForm.value);
      this.sendMail.sendMail(this.mailInfo).subscribe( () => {
        this.toastrService.success('Mail has sent successfully.');

      }, error => {
        this.toastrService.warning(error);
      });
    }
    this.sendMailForm.reset();

  }
}
