import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { Classe } from '../../model/classe';
import { Origem } from '../../model/origem';
import { Raca } from '../../model/raca';
import { ClasseService } from '../../service/classe.service';
import { OrigemService } from '../../service/origem.service';
import { RacaService } from '../../service/raca.service';

@Component({
  selector: 'app-personagem-aleatorio',
  imports: [MatDividerModule, MatCardModule, MatButtonModule, MatExpansionModule, MatDatepickerModule, MatTabsModule,
      NgIf],
  templateUrl: './personagem-aleatorio.component.html',
  styleUrl: './personagem-aleatorio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonagemAleatorioComponent implements OnInit{

  readonly panelOpenState = signal(false);
  racaIndex!: number;
  origemIndex!: number;
  classeIndex!: number;

  racas!: Raca[];
  origens!: Origem[];
  classes!: Classe[];
  personagem_nimb!: string;

  constructor(private readonly racaService: RacaService, 
              private readonly origemService: OrigemService,
              private readonly classeService: ClasseService
  ) {}

  ngOnInit() {
    this.carregaRacas();
    this.carregaOrigens();
    this.carregaClasses();
  }

  rezarPraNimb(){
    this.racaIndex = Math.floor(Math.random() * this.racas.length);
    this.origemIndex = Math.floor(Math.random() * this.origens.length);
    this.classeIndex = Math.floor(Math.random() * this.classes.length);
    this.personagem_nimb = this.racas[this.racaIndex].nome+' - '+this.origens[this.origemIndex].nome+' - ' +this.classes[this.classeIndex].nome;
  }

  carregaRacas() {
    this.racaService.listar(null).subscribe({
      next: (response) => {
        this.racas = response;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  
  carregaClasses() {
    this.classeService.listar(null).subscribe({
      next: (response) => {
        this.classes = response;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  
  carregaOrigens() {
    this.origemService.listar(null).subscribe({
      next: (response) => {
        this.origens = response;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}


