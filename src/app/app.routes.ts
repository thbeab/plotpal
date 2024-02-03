import { Routes } from '@angular/router';
import { GardenPageComponent } from './garden-page/garden-page.component';
import { GardensPageComponent } from './gardens-page/gardens-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

export const routes: Routes = [
    { path: '', component: SignInComponent},
    { path: 'garden/:id', component: GardenPageComponent },
    { path: '**', redirectTo: '' }
];
