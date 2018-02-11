import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-gallery-pools',
  templateUrl: './gallery-pools.component.html',
  styles: []
})
export class GalleryPoolsComponent implements OnInit {

  images: FirebaseListObservable<any[]>;

  constructor(private image:ImagesService) {
    this.images = image.getAllImages();
  }

  ngOnInit() {
  }
}