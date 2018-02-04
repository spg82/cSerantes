import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-closures',
  templateUrl: './gallery-closures.component.html',
  styles: []
})
export class GalleryClosuresComponent implements OnInit {

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
