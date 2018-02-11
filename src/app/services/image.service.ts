import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
@Injectable()
export class ImageService {
  private imageUrl = '/assets/upload.php';
 
  constructor(private http: Http) {
 
  }
 
  uploadFile(file: any): Observable<any> | any {
    return this.http.post(this.imageUrl, file)
      .map(response => {
        console.log('Upload was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Upload got error', error);
        return Observable.throw(error);
      })
  }
}