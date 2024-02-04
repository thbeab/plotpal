import { Routes } from '@angular/router';
import { GardenPageComponent } from './garden-page/garden-page.component';
import { GardensPageComponent } from './gardens-page/gardens-page.component';


export const routes: Routes = [
    { path: '', component: GardensPageComponent},
    { path: 'gardens', component: GardensPageComponent },
    { path: 'garden/:id', component: GardenPageComponent },
    { path: '**', redirectTo: '' }
];
