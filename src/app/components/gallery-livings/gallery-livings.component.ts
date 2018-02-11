import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-gallery-livings',
  templateUrl: './gallery-livings.component.html',
  styles: []
})
export class GalleryLivingsComponent implements OnInit {

  images: FirebaseListObservable<any[]>;

  constructor(private image:ImagesService) {
    this.images = image.getAllImages();
  }

  ngOnInit() {
  }
}
