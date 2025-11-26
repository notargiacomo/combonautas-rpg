import { Routes } from '@angular/router';
import { ArtefatosComponent } from './controller/campanha/artefatos/artefatos.component';
import { DistincoesComponent } from './controller/campanha/distincoes/distincoes.component';
import { ItensMagicosComponent } from './controller/campanha/itens-magicos/itens-magicos.component';
import { ParceirosComponent } from './controller/campanha/parceiros/parceiros.component';
import { HomeComponent } from './controller/home/home.component';
import { ArmadurasEscudosComponent } from './controller/itens/armaduras-escudos/armaduras-escudos.component';
import { ArmasMunicoesComponent } from './controller/itens/armas-municoes/armas-municoes.component';
import { ItensGeraisComponent } from './controller/itens/itens-gerais/itens-gerais.component';
import { ItensSuperioresComponent } from './controller/itens/itens-superiores/itens-superiores.component';
import { CalculoDesafiosComponent } from './controller/mestre/calculo-desafios/calculo-desafios.component';
import { TabelaGeracaoTesourosComponent } from './controller/mestre/tabela-geracao-tesouros/tabela-geracao-tesouros.component';
import { ClassesComponent } from './controller/personagem/classes/classes.component';
import { ComplicacoesComponent } from './controller/personagem/complicacoes/complicacoes.component';
import { DeusesComponent } from './controller/personagem/deuses/deuses.component';
import { MagiasComponent } from './controller/personagem/magias/magias.component';
import { OrigensComponent } from './controller/personagem/origens/origens.component';
import { PericiasComponent } from './controller/personagem/pericias/pericias.component';
import { PoderesComponent } from './controller/personagem/poderes/poderes.component';
import { RacasComponent } from './controller/personagem/racas/racas.component';
import { AcoesComponent } from './controller/regras/acoes/acoes.component';
import { CondicoesComponent } from './controller/regras/condicoes/condicoes.component';
import { RegrasComponent } from './controller/regras/regras.component';
import { TerrasDespedacadasComponent } from './controller/terras-despedacadas/terras-despedacadas.component';
import { PersonagemAleatorioComponent } from './controller/utilitarios/personagem-aleatorio/personagem-aleatorio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'regras/condicoes', component: CondicoesComponent },
  { path: 'regras/acoes', component: AcoesComponent },
  { path: 'regras/regras', component: RegrasComponent },

  { path: 'mestre/calculo-desafios', component: CalculoDesafiosComponent },
  { path: 'mestre/tabela-geracao-tesouros', component: TabelaGeracaoTesourosComponent },

  { path: 'campanha/parceiros', component: ParceirosComponent },
  { path: 'campanha/distincoes', component: DistincoesComponent },
  { path: 'campanha/itens-magicos', component: ItensMagicosComponent },
  { path: 'campanha/artefatos', component: ArtefatosComponent },

  { path: 'utilitarios/personagem-aleatorio', component: PersonagemAleatorioComponent },

  { path: 'personagem/racas', component: RacasComponent },
  { path: 'personagem/origens', component: OrigensComponent },
  { path: 'personagem/classes', component: ClassesComponent },
  { path: 'personagem/pericias', component: PericiasComponent },
  { path: 'personagem/deuses', component: DeusesComponent },
  { path: 'personagem/complicacoes', component: ComplicacoesComponent },
  { path: 'personagem/poderes', component: PoderesComponent },
  { path: 'personagem/magias', component: MagiasComponent },

  { path: 'itens/armas-municoes', component: ArmasMunicoesComponent },
  { path: 'itens/armaduras-escudos', component: ArmadurasEscudosComponent },
  { path: 'itens/itens-gerais', component: ItensGeraisComponent },
  { path: 'itens/itens-superiores', component: ItensSuperioresComponent },

  { path: 'terras-despedacadas', component: TerrasDespedacadasComponent },
];
