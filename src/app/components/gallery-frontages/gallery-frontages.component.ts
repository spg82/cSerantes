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
    {'src': './assets/img/gallery/frontages/frontages1.jpg'},
    {'src': './assets/img/gallery/frontages/frontages2.jpg'},
    {'src': './assets/img/gallery/frontages/frontages3.jpg'},
    {'src': './assets/img/gallery/frontages/frontages4.jpg'},
    {'src': './assets/img/gallery/frontages/frontages5.jpg'},
    {'src': './assets/img/gallery/frontages/frontages6.jpg'}
  ];

}
