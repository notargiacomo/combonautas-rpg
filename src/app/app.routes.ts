import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './personagem/classes/classes.component';
import { ComplicacoesComponent } from './personagem/complicacoes/complicacoes.component';
import { DeusesComponent } from './personagem/deuses/deuses.component';
import { ItensComponent } from './personagem/itens/itens.component';
import { MagiasComponent } from './personagem/magias/magias.component';
import { OrigensComponent } from './personagem/origens/origens.component';
import { PoderesComponent } from './personagem/poderes/poderes.component';
import { RacasComponent } from './personagem/racas/racas.component';
import { AcoesComponent } from './regras/acoes/acoes.component';
import { CondicoesComponent } from './regras/condicoes/condicoes.component';
import { CalculoDesafiosComponent } from './utilitarios/calculo-desafios/calculo-desafios.component';
import { PersonagemAleatorioComponent } from './utilitarios/personagem-aleatorio/personagem-aleatorio.component';
import { PericiasComponent } from './personagem/pericias/pericias.component';
import { RegrasComponent } from './regras/regras.component';
import { FichaComponent } from './utilitarios/ficha/ficha.component';
import { DistincoesComponent } from './campanha/distincoes/distincoes.component';
import { ItensMagicosComponent } from './campanha/itens-magicos/itens-magicos.component';
import { ParceirosComponent } from './campanha/parceiros/parceiros.component';
import { AmeacasComponent } from './mestre/ameacas/ameacas.component';
import { CriandoAmeacaComponent } from './mestre/criando-ameaca/criando-ameaca.component';
import { DashboardComponent } from './mestre/dashboard/dashboard.component';
import { TesourosComponent } from './utilitarios/tesouros/tesouros.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagem/racas', component: RacasComponent },
    { path: 'personagem/origens', component: OrigensComponent },
    { path: 'personagem/classes', component: ClassesComponent },
    { path: 'personagem/pericias', component: PericiasComponent },
    { path: 'personagem/complicacoes', component: ComplicacoesComponent },
    { path: 'personagem/poderes', component: PoderesComponent },
    { path: 'personagem/magias', component: MagiasComponent },
    { path: 'personagem/itens', component: ItensComponent },
    { path: 'personagem/deuses', component: DeusesComponent },
    { path: 'utilitarios/calculo-desafios', component: CalculoDesafiosComponent},
    { path: 'regras/regras', component: RegrasComponent},
    { path: 'regras/condicoes', component: CondicoesComponent},
    { path: 'regras/acoes', component: AcoesComponent},
    { path: 'utilitarios/personagem-aleatorio', component: PersonagemAleatorioComponent},
    { path: 'utilitarios/ficha', component: FichaComponent},
    { path: 'utilitarios/tesouros', component: TesourosComponent},
    { path: 'campanha/distincoes', component: DistincoesComponent},
    { path: 'campanha/itens-magicos', component: ItensMagicosComponent},
    { path: 'campanha/parceiros', component: ParceirosComponent},
    { path: 'mestre/ameacas', component: AmeacasComponent},
    { path: 'mestre/criando-ameacas', component: CriandoAmeacaComponent},
    { path: 'mestre/dashboard', component: DashboardComponent},
];
