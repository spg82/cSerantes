import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-gallery-installations',
  templateUrl: './gallery-installations.component.html',
  styles: []
})
export class GalleryInstallationsComponent implements OnInit {

  images: FirebaseListObservable<any[]>;

  constructor(private image:ImagesService) {
    this.images = image.getAllImages();
  }

  ngOnInit() {
  }
}