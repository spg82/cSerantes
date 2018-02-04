import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-frontages',
  templateUrl: './gallery-frontages.component.html',
  styles: []
})
export class GalleryFrontagesComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

  	imgArr = [
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'},
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'},
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'},
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'},
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'},
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'},
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'},
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'},
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'},
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'},
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'},
  		{'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'}]
  	];

}
