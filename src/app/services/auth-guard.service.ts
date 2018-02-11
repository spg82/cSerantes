import { Injectable } from '@angular/core';

import { Router, ActivatedRouteSnapshot, 
		RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router:Router) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
  	console.log(next);
  	if (this.auth.isAuthenticated()){
  		console.log("Paso el Guard");
  		return true;
  	} else{
  		console.error("Bloqueado por el guard");
  		this.router.navigate(['/home']);
  		return false;
  	}
  }

}