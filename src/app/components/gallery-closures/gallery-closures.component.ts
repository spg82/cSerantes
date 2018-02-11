import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-gallery-closures',
  templateUrl: './gallery-closures.component.html'
})
export class GalleryClosuresComponent implements OnInit {

  images: FirebaseListObservable<any[]>;

  constructor(private image:ImagesService) {
    this.images = image.getAllImages();
  }

  ngOnInit() {
  }
}