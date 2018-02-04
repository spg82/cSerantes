import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-covering',
  templateUrl: './gallery-covering.component.html',
  styles: []
})
export class GalleryCoveringComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

  imgArr = [
    {'src': './assets/img/gallery/covering/covering1.jpg'},
    {'src': './assets/img/gallery/covering/covering2.jpg'},
    {'src': './assets/img/gallery/covering/covering3.jpg'},
    {'src': './assets/img/gallery/covering/covering4.jpg'},
    {'src': './assets/img/gallery/covering/covering5.jpg'},
    {'src': './assets/img/gallery/covering/covering6.jpg'},
    {'src': './assets/img/gallery/covering/covering7.jpg'},
    {'src': './assets/img/gallery/covering/covering8.jpg'},
    {'src': './assets/img/gallery/covering/covering9.jpg'},
    {'src': './assets/img/gallery/covering/covering10.jpg'},
    {'src': './assets/img/gallery/covering/covering11.jpg'},
    {'src': './assets/img/gallery/covering/covering12.jpg'}
  ];
}
