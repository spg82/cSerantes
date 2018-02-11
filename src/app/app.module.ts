import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MailService, IMessage } from './services/mail.service';
import { ImagesService } from './services/images.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ImagePipe } from './pipes/image.pipe';

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
import { GalleryWoodCoversComponent } from './components/gallery-wood-covers/gallery-wood-covers.component';
import { GalleryStructuresComponent } from './components/gallery-structures/gallery-structures.component';
import { GalleryInstallationsComponent } from './components/gallery-installations/gallery-installations.component';
import { GalleryPoolsComponent } from './components/gallery-pools/gallery-pools.component';
import { GalleryLivingsComponent } from './components/gallery-livings/gallery-livings.component';
import { LegalWarningComponent } from './components/legal-warning/legal-warning.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { LoginComponent } from './components/login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCjKb8F4bT-W3vrBBaBdsK4dqgWWM0d3NM",
  authDomain: "construccionessobrin-ce315.firebaseapp.com",
  databaseURL: "https://construccionessobrin-ce315.firebaseio.com",
  projectId: "construccionessobrin-ce315",
  storageBucket: "construccionessobrin-ce315.appspot.com",
  messagingSenderId: "609631895794"
};


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
    FooterComponent,
    GalleryWoodCoversComponent,
    GalleryStructuresComponent,
    GalleryInstallationsComponent,
    GalleryPoolsComponent,
    GalleryLivingsComponent,
    LegalWarningComponent,
    ImagePipe,
    AdminPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [MailService, ImagesService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
