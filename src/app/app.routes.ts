import { Routes } from '@angular/router';
import { HomeComponent } from './controller/home/home.component';
import { TabelaGeracaoTesourosComponent } from './controller/mestre/tabela-geracao-tesouros/tabela-geracao-tesouros.component';
import { RacasComponent } from './controller/personagem/racas/racas.component';
import { AcoesComponent } from './controller/regras/acoes/acoes.component';
import { CondicoesComponent } from './controller/regras/condicoes/condicoes.component';
import { RegrasComponent } from './controller/regras/regras.component';
import { CalculoDesafiosComponent } from './controller/mestre/calculo-desafios/calculo-desafios.component';
import { PersonagemAleatorioComponent } from './controller/utilitarios/personagem-aleatorio/personagem-aleatorio.component';
import { OrigensComponent } from './controller/personagem/origens/origens.component';
import { ClassesComponent } from './controller/personagem/classes/classes.component';
import { PericiasComponent } from './controller/personagem/pericias/pericias.component';
import { DeusesComponent } from './controller/personagem/deuses/deuses.component';
import { ComplicacoesComponent } from './controller/personagem/complicacoes/complicacoes.component';
import { PoderesComponent } from './controller/personagem/poderes/poderes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'regras/condicoes', component: CondicoesComponent },
  { path: 'regras/acoes', component: AcoesComponent },
  { path: 'regras/regras', component: RegrasComponent },
  { path: 'mestre/calculo-desafios', component: CalculoDesafiosComponent },
  { path: 'mestre/tabela-geracao-tesouros', component: TabelaGeracaoTesourosComponent },
  { path: 'utilitarios/personagem-aleatorio', component: PersonagemAleatorioComponent },
  { path: 'personagem/racas', component: RacasComponent },
  { path: 'personagem/origens', component: OrigensComponent },
  { path: 'personagem/classes', component: ClassesComponent },

  { path: 'personagem/pericias', component: PericiasComponent },
  { path: 'personagem/deuses', component: DeusesComponent },
  { path: 'personagem/complicacoes', component: ComplicacoesComponent },
  { path: 'personagem/poderes', component: PoderesComponent },
];
