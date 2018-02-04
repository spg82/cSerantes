import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-pools',
  templateUrl: './gallery-pools.component.html',
  styles: []
})
export class GalleryPoolsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

  imgArr = [
    {'src': './assets/img/gallery/pools/pools1.jpg'},
    {'src': './assets/img/gallery/pools/pools2.jpg'},
    {'src': './assets/img/gallery/pools/pools3.jpg'},
    {'src': './assets/img/gallery/pools/pools4.jpg'},
    {'src': './assets/img/gallery/pools/pools5.jpg'}
   ];
}
