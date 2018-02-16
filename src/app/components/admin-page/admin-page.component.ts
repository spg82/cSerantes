import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styles: []
})
export class AdminPageComponent implements OnInit {

  	images: any;
  	selectedImages = [];
    test: any;

  	constructor(private image:ImagesService, private router:Router) {
  		//this.images = image.getAllImages();
      image.getAllImages()
      .subscribe((img: any) =>{
        this.images = img;
      });
      
      //let base64 = this.getBase64Image(document.getElementById("img0"));
      //console.log(base64);
  	}

    getBase64Image() {
      for (var i=0; i<134; i++){
        var elem = document.createElement("img");
        let ttt = document.getElementById("placehere");
        console.log(ttt);
        document.getElementById("placehere").appendChild(elem);
        elem.src = this.images[i].url;
        console.log(elem);
        var canvas = document.createElement("canvas");
        canvas.width = elem.width;
        canvas.height = elem.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(elem, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        this.image.addImagesBase(this.images[i], dataURL);
      }
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
  		this.router.navigate(['image/add']);
  	}

  	deleteImages(){
  		this.image.deleteImages(this.selectedImages);
  		this.selectedImages = [];
  	}

}
