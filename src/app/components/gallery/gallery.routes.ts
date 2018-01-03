import { Routes } from '@angular/router';

import { GalleryClosuresComponent } from '../gallery-closures/gallery-closures.component';
import { GalleryCoveringComponent } from '../gallery-covering/gallery-covering.component';
import { GalleryFinishesComponent } from '../gallery-finishes/gallery-finishes.component';
import { GalleryFrontagesComponent } from '../gallery-frontages/gallery-frontages.component';

export const GALLERY_ROUTES: Routes = [
	{ path: 'closures', component: GalleryClosuresComponent },
	{ path: 'covering', component: GalleryCoveringComponent },
	{ path: 'finishes', component: GalleryFinishesComponent },
    { path: 'frontages', component: GalleryFrontagesComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'nuevo'},
];