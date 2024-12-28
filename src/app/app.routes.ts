import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RacasComponent } from './personagem/racas/racas.component';
import { OrigensComponent } from './personagem/origens/origens.component';
import { CalculoDesafiosComponent } from './utilitarios/calculo-desafios/calculo-desafios.component';
import { CondicoesComponent } from './regras/condicoes/condicoes.component';
import { PersonagemAleatorioComponent } from './utilitarios/personagem-aleatorio/personagem-aleatorio.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagem/racas', component: RacasComponent },
    { path: 'personagem/origem', component: OrigensComponent },
    { path: 'utilitarios/calculo-desafios', component: CalculoDesafiosComponent},
    { path: 'regras/condicoes', component: CondicoesComponent},
    { path: 'utilitarios/personagem-aleatorio', component: PersonagemAleatorioComponent},
];
