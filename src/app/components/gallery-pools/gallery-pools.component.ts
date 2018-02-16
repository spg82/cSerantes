import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-gallery-pools',
  templateUrl: './gallery-pools.component.html',
  styles: []
})
export class GalleryPoolsComponent implements OnInit {

  images: FirebaseListObservable<any[]>;

  constructor(private image:ImagesService) {
    this.images = image.getAllImages();
  }

    // image.getAllImages()
    // 	.subscribe((img: any) =>{
    // 		this.images = img;
    // 		for (var i=0; i<this.images.length; i++){
    // 			if (this.images[i].file !== undefined){
    // 				console.log(this.images[i]);
    // 				this.images[i].file = 'data:image/png;base64,' + this.images[i].file;
    // 				console.log(this.images[i]);
    // 			}
    // 		}
    // })


  ngOnInit() {
  }
}