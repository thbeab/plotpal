// import { Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router'; // Make sure to import Routes
import { GardenPageComponent } from './garden-page/garden-page.component';
import { GardensPageComponent } from './gardens-page/gardens-page.component';
import { PlotComponent } from './plot/plot.component';
// import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: GardensPageComponent},
    { path: 'gardens', component: GardensPageComponent },
    { path: 'gardens/:id', component: GardenPageComponent },
    { path: 'plot', component: PlotComponent },  // Ajoutez cette ligne pour la catégorie "plot"
    { path: '**', redirectTo: '' }
];

// @NgModule({
//     imports: [
//         // ... other imports
//         RouterModule.forRoot(routes), // Use your defined routes here
//     ],
//     // ... other module configurations
// })
export class AppModule { }