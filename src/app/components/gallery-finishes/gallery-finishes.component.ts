import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-finishes',
  templateUrl: './gallery-finishes.component.html',
  styles: []
})
export class GalleryFinishesComponent implements OnInit {

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
    {'src': './assets/img/gallery/demo01.jpg', 'thumb': './assets/img/gallery/demo01-thumb.jpg'}
  ];

}
