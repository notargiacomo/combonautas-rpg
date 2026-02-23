import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { Classe } from '@app/model/classe';
import { Origem } from '@app/model/origem';
import { Raca } from '@app/model/raca';
import { ClasseService } from '@app/service/classe.service';
import { OrigemService } from '@app/service/origem.service';
import { RacaService } from '@app/service/raca.service';
import { Deus } from '@app/model/deus';
import { DeusService } from '@app/service/deus.service';
import { PoderService } from '@app/service/poder.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RacaFacadeService } from '@app/service/raca.facade.service';
import { ClasseFacadeService } from '@app/service/classe.facade.service';

@Component({
  selector: 'app-personagem-aleatorio',
  imports: [
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatTabsModule,
    NgFor,
  ],
  templateUrl: './personagem-aleatorio.component.html',
  styleUrl: './personagem-aleatorio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonagemAleatorioComponent implements OnInit {
  readonly panelOpenState = signal(false);
  racaIndex!: number;
  origemIndex!: number;
  classeIndex!: number;
  deusIndex!: number;

  racas!: Raca[];
  origens!: Origem[];
  classes!: Classe[];
  deuses!: Deus[];
  personagem_nimb!: string;

  gerou = false;
  isMobile = false;

  constructor(
    private readonly racaFacadeService: RacaFacadeService,
    private readonly racaService: RacaService,
    private readonly origemService: OrigemService,
    private readonly classeFacadeService: ClasseFacadeService,
    private readonly classeService: ClasseService,
    private readonly deusService: DeusService,
    private readonly poderService: PoderService,
    private cdr: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {
    this.carregaRacas();
    this.carregaOrigens();
    this.carregaClasses();
    this.carregaDeuses();
  }

  rezarPraNimb() {
    this.racaIndex = Math.floor(Math.random() * this.racas.length) + 1;
    this.origemIndex = Math.floor(Math.random() * this.origens.length) + 1;
    this.classeIndex = Math.floor(Math.random() * this.classes.length) + 1;
    this.gerou = true;
    this.cdr.detectChanges();
  }

  khalmyrTaDeOlho() {
    this.racaIndex = 0;
    this.origemIndex = 0;
    this.classeIndex = 0;
    this.gerou = false;
  }

  carregaRacas() {
    this.racaService.listar(null).subscribe({
      next: response => {
        this.racas = response;
      },
      error: response => {
        console.log(response);
      },
    });
  }

  carregaClasses() {
    this.classeService.listar(null).subscribe({
      next: response => {
        this.classes = response;
      },
      error: response => {
        console.log(response);
      },
    });
  }

  carregaDeuses() {
    this.deusService.listar(null).subscribe({
      next: response => {
        this.deuses = response;
        this.deuses.forEach(deus => {
          // this.poderService.listar({id_deuses:deus.id}).subscribe({
          //   next: (response: any[]) => {
          //     response.sort((a, b) => {
          //       let nome_a = a.nome ? a.nome : 'a';
          //       let nome_b = b.nome ? b.nome : 'b';
          //       return nome_a.localeCompare(nome_b);
          //     });
          //     response.forEach(poder => {
          //       poder.descricao = '<b>' + poder.nome + '.</b> ' + poder.descricao;
          //       if (poder.e_poder_magico) {
          //         poder.descricao += '<i><b> e</b></i>';
          //       }
          //     });
          //     deus.poderes = response;
          //   }
          // });
        });
      },
      error: response => {
        console.log(response);
      },
    });
  }

  carregaOrigens() {
    this.origemService.listar(null).subscribe({
      next: response => {
        this.origens = response;
      },
      error: response => {
        console.log(response);
      },
    });
  }

  carregarAbasClasse(classe: Classe) {
    this.classeFacadeService.recuperaHabilidades(classe);
    this.classeFacadeService.recuperaPoderes(classe);
    return classe;
  }

  carregarAbasRacas(raca: Raca) {
    this.racaFacadeService.abrirHistoria(raca);
    this.racaFacadeService.recuperaHabilidades(raca);
    this.racaFacadeService.recuperaPoderes(raca);
    return raca;
  }
}
