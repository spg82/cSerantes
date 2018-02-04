import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
export interface IMessage {
  name?: string,
  surname?: string,
  email?: string,
  checkindate?: string,
  checkoutdate?: string,
  room_selector?: string,
  comments?: string
}
 
@Injectable()
export class MailService {
  private emailUrl = '/assets/email.php';
 
  constructor(private http: Http) {
 
  }
 
  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      })
  }
}