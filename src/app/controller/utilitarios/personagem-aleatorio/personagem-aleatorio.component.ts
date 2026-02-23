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

  // SHUFFLE BAGS
  private racasBag: number[] = [];
  private origensBag: number[] = [];
  private classesBag: number[] = [];
  private deusesBag: number[] = [];

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

  // =========================
  // SHUFFLE BAG CORE
  // =========================

  private criarBag(length: number): number[] {
    const bag = Array.from({ length }, (_, i) => i);

    for (let i = bag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [bag[i], bag[j]] = [bag[j], bag[i]];
    }

    return bag;
  }

  private sortearDaBag(bag: number[], length: number): number {
    if (bag.length === 0) bag.push(...this.criarBag(length));

    return bag.pop()!;
  }

  // =========================
  // RANDOMIZER PRINCIPAL
  // =========================

  rezarPraNimb() {
    if (!this.racas || !this.origens || !this.classes) return;

    this.racaIndex = this.sortearDaBag(this.racasBag, this.racas.length);

    this.origemIndex = this.sortearDaBag(this.origensBag, this.origens.length);

    this.classeIndex = this.sortearDaBag(this.classesBag, this.classes.length);

    if (this.deuses) this.deusIndex = this.sortearDaBag(this.deusesBag, this.deuses.length);

    this.gerou = true;

    this.cdr.detectChanges();
  }

  khalmyrTaDeOlho() {
    this.gerou = false;

    this.cdr.detectChanges();
  }

  // =========================
  // LOADERS
  // =========================

  carregaRacas() {
    this.racaService.listar(null).subscribe({
      next: response => {
        this.racas = response;

        this.racasBag = [];
      },

      error: error => console.log(error),
    });
  }

  carregaClasses() {
    this.classeService.listar(null).subscribe({
      next: response => {
        this.classes = response;

        this.classesBag = [];
      },

      error: error => console.log(error),
    });
  }

  carregaDeuses() {
    this.deusService.listar(null).subscribe({
      next: response => {
        this.deuses = response;

        this.deusesBag = [];
      },

      error: error => console.log(error),
    });
  }

  carregaOrigens() {
    this.origemService.listar(null).subscribe({
      next: response => {
        this.origens = response;

        this.origensBag = [];
      },

      error: error => console.log(error),
    });
  }

  // =========================
  // FACADE LOADERS
  // =========================

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
