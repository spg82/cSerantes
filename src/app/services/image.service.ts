import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
@Injectable()
export class ImageService {
  private imageUrl = 'http://localhost:80/upload.php';
 
  constructor(private http: Http) {
 
  }
 
  uploadFile(file: any): Observable<any> | any {
    let headers = new Headers({'Content-Type' : 'multipart/form-data; charset=UTF-8'});
    let formData:FormData = new FormData();
    formData.append('category', file.category);
    formData.append('id', file.id);
    formData.append('filename', file.filename);
    formData.append('url', file.url);
    formData.append('files',file.value, file.name);

    return this.http.post(this.imageUrl, file, {headers} )
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