import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RacasComponent } from './personagem/racas/racas.component';
import { OrigensComponent } from './personagem/origens/origens.component';
import { CalculoDesafiosComponent } from './utilitarios/calculo-desafios/calculo-desafios.component';
import { CondicoesComponent } from './regras/condicoes/condicoes.component';
import { PersonagemAleatorioComponent } from './utilitarios/personagem-aleatorio/personagem-aleatorio.component';
import { AcoesComponent } from './regras/acoes/acoes.component';
import { ClassesComponent } from './personagem/classes/classes.component';
import { HabilidadesComponent } from './personagem/habilidades/habilidades.component';
import { PoderesComponent } from './personagem/poderes/poderes.component';
import { MagiasComponent } from './personagem/magias/magias.component';
import { ItensComponent } from './personagem/itens/itens.component';
import { DeusesComponent } from './personagem/deuses/deuses.component';
import { ComplicacoesComponent } from './personagem/complicacoes/complicacoes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagem/racas', component: RacasComponent },
    { path: 'personagem/origens', component: OrigensComponent },
    { path: 'personagem/classes', component: ClassesComponent },
    { path: 'personagem/complicacoes', component: ComplicacoesComponent },
    { path: 'personagem/poderes', component: PoderesComponent },
    { path: 'personagem/magias', component: MagiasComponent },
    { path: 'personagem/itens', component: ItensComponent },
    { path: 'personagem/deuses', component: DeusesComponent },
    { path: 'utilitarios/calculo-desafios', component: CalculoDesafiosComponent},
    { path: 'regras/condicoes', component: CondicoesComponent},
    { path: 'regras/acoes', component: AcoesComponent},
    { path: 'utilitarios/personagem-aleatorio', component: PersonagemAleatorioComponent},
];
