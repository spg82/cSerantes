import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styles: []
})
export class AdminPageComponent implements OnInit {

  	images: any;
  	selectedImages = [];

  	constructor(private image:ImagesService) {
  		this.images = image.getAllImages();
  	}

  	ngOnInit() {
  	}

  	addImage(item){
  		for (var i=0; i<this.selectedImages.length; i++){
  			if (this.selectedImages[i].id == item.id){
  				this.selectedImages.splice(i,1);
  				return;
  			}
  		}
  		console.log(item);
  		this.selectedImages.push(item);
  	}

  	deleteImages(){
  		console.log(this.selectedImages);
  	}

}
