import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { LegalWarningComponent } from './components/legal-warning/legal-warning.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AddImageComponent } from './components/add-image/add-image.component';

import { AuthGuardService } from './services/auth-guard.service';

import { GALLERY_ROUTES } from './components/gallery/gallery.routes'

const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
    { 
        path: 'gallery', 
        component: GalleryComponent,
        children: GALLERY_ROUTES
    },
    { path: 'contact', component: ContactComponent },
    { path: 'legal', component: LegalWarningComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminPageComponent },
    { path: 'image/add', component: AddImageComponent },
    /* , canActivate: [AuthGuardService] */
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);