import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryCoveringComponent } from './components/gallery-covering/gallery-covering.component';
import { GalleryFrontagesComponent } from './components/gallery-frontages/gallery-frontages.component';
import { GalleryFinishesComponent } from './components/gallery-finishes/gallery-finishes.component';
import { GalleryClosuresComponent } from './components/gallery-closures/gallery-closures.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    GalleryCoveringComponent,
    GalleryFrontagesComponent,
    GalleryFinishesComponent,
    GalleryClosuresComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
