import { Routes } from '@angular/router';

import { GalleryClosuresComponent } from '../gallery-closures/gallery-closures.component';
import { GalleryCoveringComponent } from '../gallery-covering/gallery-covering.component';
import { GalleryFinishesComponent } from '../gallery-finishes/gallery-finishes.component';
import { GalleryFrontagesComponent } from '../gallery-frontages/gallery-frontages.component';
import { GalleryWoodCoversComponent } from '../gallery-wood-covers/gallery-wood-covers.component';
import { GalleryStructuresComponent } from '../gallery-structures/gallery-structures.component';
import { GalleryPoolsComponent } from '../gallery-pools/gallery-pools.component';
import { GalleryLivingsComponent } from '../gallery-livings/gallery-livings.component';
import { GalleryInstallationsComponent } from '../gallery-installations/gallery-installations.component';

export const GALLERY_ROUTES: Routes = [
	
	{ path: 'closures', component: GalleryClosuresComponent },
	{ path: 'covering', component: GalleryCoveringComponent },
	{ path: 'finishes', component: GalleryFinishesComponent },
    { path: 'frontages', component: GalleryFrontagesComponent },
    { path: 'wood-covers', component: GalleryWoodCoversComponent },
	{ path: 'structures', component: GalleryStructuresComponent },
	{ path: 'installations', component: GalleryInstallationsComponent },
    { path: 'pools', component: GalleryPoolsComponent },
    { path: 'livings', component: GalleryLivingsComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'finishes'},
];