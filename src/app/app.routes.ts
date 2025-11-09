import { Routes } from '@angular/router';
import { HomeComponent } from './controller/home/home.component';
import { TabelaGeracaoTesourosComponent } from './controller/mestre/tabela-geracao-tesouros/tabela-geracao-tesouros.component';
import { RacasComponent } from './controller/personagem/racas/racas.component';
import { AcoesComponent } from './controller/regras/acoes/acoes.component';
import { CondicoesComponent } from './controller/regras/condicoes/condicoes.component';
import { RegrasComponent } from './controller/regras/regras.component';
import { CalculoDesafiosComponent } from './controller/mestre/calculo-desafios/calculo-desafios.component';
import { PersonagemAleatorioComponent } from './controller/utilitarios/personagem-aleatorio/personagem-aleatorio.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'regras/condicoes', component: CondicoesComponent },
    { path: 'regras/acoes', component: AcoesComponent },
    { path: 'regras/regras', component: RegrasComponent },
    { path: 'mestre/calculo-desafios', component: CalculoDesafiosComponent },
    { path: 'mestre/tabela-geracao-tesouros', component: TabelaGeracaoTesourosComponent },
    { path: 'utilitarios/personagem-aleatorio', component: PersonagemAleatorioComponent },
    { path: 'personagem/racas', component: RacasComponent },
];
