import { Routes } from '@angular/router';
import { HomeComponent } from './controller/home/home.component'; 
import { ClassesComponent } from './controller/personagem/classes/classes.component';
import { ComplicacoesComponent } from './controller/personagem/complicacoes/complicacoes.component';
import { DeusesComponent } from './controller/personagem/deuses/deuses.component';
// import { ItensComponent } from './controller/personagem/itens/itens.component';
// import { MagiasComponent } from './controller/personagem/magias/magias.component'; 
import { OrigensComponent } from './controller/personagem/origens/origens.component'; 
import { PoderesComponent } from './controller/personagem/poderes/poderes.component';
// import { RacasComponent } from './controller/personagem/racas/racas.component'; 
import { AcoesComponent } from './controller/regras/acoes/acoes.component';
import { CondicoesComponent } from './controller/regras/condicoes/condicoes.component';
import { CalculoDesafiosComponent } from './controller/utilitarios/calculo-desafios/calculo-desafios.component'; 
import { PersonagemAleatorioComponent } from './controller/utilitarios/personagem-aleatorio/personagem-aleatorio.component'; 
import { PericiasComponent } from './controller/personagem/pericias/pericias.component';
import { RegrasComponent } from './controller/regras/regras.component';
import { FichaComponent } from './controller/utilitarios/ficha/ficha.component';
import { DistincoesComponent } from './controller/campanha/distincoes/distincoes.component';
import { ItensMagicosComponent } from './controller/campanha/itens-magicos/itens-magicos.component';
import { ParceirosComponent } from './controller/campanha/parceiros/parceiros.component';
import { AmeacasComponent } from './controller/mestre/ameacas/ameacas.component';
import { CriandoAmeacaComponent } from './controller/mestre/criando-ameaca/criando-ameaca.component';
import { DashboardComponent } from './controller/mestre/dashboard/dashboard.component';
import { TesourosComponent } from './controller/utilitarios/tesouros/tesouros.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'personagem/racas', component: RacasComponent },
    // { path: 'personagem/origens', component: OrigensComponent },
    // { path: 'personagem/classes', component: ClassesComponent },
    // { path: 'personagem/pericias', component: PericiasComponent },
    // { path: 'personagem/complicacoes', component: ComplicacoesComponent },
    // { path: 'personagem/poderes', component: PoderesComponent },
    // { path: 'personagem/magias', component: MagiasComponent },
    // { path: 'personagem/itens', component: ItensComponent },
    // { path: 'personagem/deuses', component: DeusesComponent },
    { path: 'utilitarios/calculo-desafios', component: CalculoDesafiosComponent},
    // { path: 'regras/regras', component: RegrasComponent},
    { path: 'regras/condicoes', component: CondicoesComponent},
    { path: 'regras/acoes', component: AcoesComponent},
    { path: 'utilitarios/personagem-aleatorio', component: PersonagemAleatorioComponent},
    // { path: 'utilitarios/ficha', component: FichaComponent},
    // { path: 'utilitarios/tesouros', component: TesourosComponent},
    // { path: 'campanha/distincoes', component: DistincoesComponent},
    // { path: 'campanha/itens-magicos', component: ItensMagicosComponent},
    // { path: 'campanha/parceiros', component: ParceirosComponent},
    // { path: 'mestre/ameacas', component: AmeacasComponent},
    // { path: 'mestre/criando-ameacas', component: CriandoAmeacaComponent},
    // { path: 'mestre/dashboard', component: DashboardComponent},
];
