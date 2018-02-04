import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-structures',
  templateUrl: './gallery-structures.component.html',
  styles: []
})
export class GalleryStructuresComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

  imgArr = [
    {'src': './assets/img/gallery/structures/structures1.jpg'},
    {'src': './assets/img/gallery/structures/structures2.jpg'},
    {'src': './assets/img/gallery/structures/structures3.jpg'},
    {'src': './assets/img/gallery/structures/structures4.jpg'},
    {'src': './assets/img/gallery/structures/structures5.jpg'},
    {'src': './assets/img/gallery/structures/structures6.jpg'},
    {'src': './assets/img/gallery/structures/structures7.jpg'},
    {'src': './assets/img/gallery/structures/structures8.jpg'},
    {'src': './assets/img/gallery/structures/structures9.jpg'},
    {'src': './assets/img/gallery/structures/structures10.jpg'},
    {'src': './assets/img/gallery/structures/structures11.jpg'},
    {'src': './assets/img/gallery/structures/structures12.jpg'}
   ];
}
