import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

    state: string = '';
    error: any;

    constructor(private router: Router, private auth:AuthService) {
	    
  	}

  	onSubmit(formData) {
    if(formData.valid) {
      console.log(formData);
      this.auth.login(formData);
    }
  }

	ngOnInit() {
	}

}
