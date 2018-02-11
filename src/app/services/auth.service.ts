import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

	error: any;
	authenticated : boolean = false;

	constructor(public router: Router, private af: AngularFireAuth) {
		this.af.authState.subscribe(auth => { 
	      	if(auth) {
	        	this.router.navigateByUrl('/admin');
			}
		});
	}

	login(formData){
		this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
	    (success) => {
	    console.log(success);
	    this.authenticated = true;
	    this.router.navigate(['/admin']);
	  }).catch(
	    (err) => {
	    this.authenticated = false;
	    console.log(err);
	    this.error = err;
	  })
	}

	isAuthenticated() {
   		
   		return this.authenticated;
  	}

}