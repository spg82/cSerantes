import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';

import { GALLERY_ROUTES } from './components/gallery/gallery.routes'

const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
    { 
        path: 'gallery', 
        component: GalleryComponent,
        children: GALLERY_ROUTES
    },
    { path: 'contact', component: ContactComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);