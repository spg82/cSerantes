import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MailService, IMessage } from './mail.service';

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
import { FooterComponent } from './components/footer/footer.component';


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
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
