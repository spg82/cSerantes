import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit {

	images: any;

	constructor(private image:ImagesService) {
		this.images = image.getAllImages();
	}

	ngOnInit() {
	}

}
