import { Routes } from '@angular/router';
import { HomeComponent } from './controller/home/home.component';
import { AcoesComponent } from './controller/regras/acoes/acoes.component';
import { CondicoesComponent } from './controller/regras/condicoes/condicoes.component';
import { CalculoDesafiosComponent } from './controller/utilitarios/calculo-desafios/calculo-desafios.component';
import { PersonagemAleatorioComponent } from './controller/utilitarios/personagem-aleatorio/personagem-aleatorio.component';
import { RegrasComponent } from './controller/regras/regras.component';
import { RacasComponent } from './controller/personagem/racas/racas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'regras/condicoes', component: CondicoesComponent},
    { path: 'regras/acoes', component: AcoesComponent},
    { path: 'regras/regras', component: RegrasComponent},
    { path: 'utilitarios/calculo-desafios', component: CalculoDesafiosComponent},
    { path: 'utilitarios/personagem-aleatorio', component: PersonagemAleatorioComponent},
    { path: 'personagem/racas', component: RacasComponent},
];
