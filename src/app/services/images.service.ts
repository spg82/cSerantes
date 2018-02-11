import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AngularFireDatabase, 
		FirebaseListObservable, 
		FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class ImagesService {

	//url = "https://construccionessobrin-ce315.firebaseio.com/images/closures.json";
	//images_url = "https://construccionessobrin-ce315.firebaseio.com/images/-L53_CXWG-NzLFzj_PXK.json";

	images: FirebaseListObservable<any[]>;
	 
	constructor(private database: AngularFireDatabase) {
		this.images = database.list('images');
	}

	getAllImages(){
		return this.images;
	}

}
