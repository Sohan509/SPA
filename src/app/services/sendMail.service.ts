import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  baseUrl = environment.apiUrl + 'home/';
  constructor(private http: HttpClient) { }

  sendMail(model: any) {
    return this.http.post(this.baseUrl + 'sendmail', model);
  }
}
