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

    checkAll(){
      this.selectedImages = this.images;
    }

    uncheckAll(){
      this.selectedImages = [];
    }

  	addImage(item){
  		for (var i=0; i<this.selectedImages.length; i++){
  			if (this.selectedImages[i].id == item.id){
  				this.selectedImages.splice(i,1);
  				return;
  			}
  		}
  		this.selectedImages.push(item);
  	}

  	uploadImage(){
  		
  	}

  	deleteImages(){
  		this.image.deleteImages(this.selectedImages);
  		this.selectedImages = [];
  	}

}
