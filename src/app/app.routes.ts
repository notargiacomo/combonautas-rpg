import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RacasComponent } from './personagem/racas/racas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagem/racas', component: RacasComponent },
];
