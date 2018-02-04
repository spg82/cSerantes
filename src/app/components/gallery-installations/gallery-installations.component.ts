import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-installations',
  templateUrl: './gallery-installations.component.html',
  styles: []
})
export class GalleryInstallationsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

  imgArr = [
    {'src': './assets/img/gallery/installations/installations1.jpg'},
    {'src': './assets/img/gallery/installations/installations2.jpg'},
    {'src': './assets/img/gallery/installations/installations3.jpg'},
    {'src': './assets/img/gallery/installations/installations4.jpg'},
    {'src': './assets/img/gallery/installations/installations5.jpg'},
    {'src': './assets/img/gallery/installations/installations6.jpg'},
    {'src': './assets/img/gallery/installations/installations7.jpg'}
  ];

}
