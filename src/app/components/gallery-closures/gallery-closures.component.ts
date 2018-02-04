import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-closures',
  templateUrl: './gallery-closures.component.html'
})
export class GalleryClosuresComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

  imgArr = [
    {'src': './assets/img/gallery/closures/closures1.jpg'},
    {'src': './assets/img/gallery/closures/closures2.jpg'},
    {'src': './assets/img/gallery/closures/closures3.jpg'},
    {'src': './assets/img/gallery/closures/closures4.jpg'},
    {'src': './assets/img/gallery/closures/closures5.jpg'},
    {'src': './assets/img/gallery/closures/closures6.jpg'},
    {'src': './assets/img/gallery/closures/closures7.jpg'}
  ];

}
