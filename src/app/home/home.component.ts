import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { BalaoInterativoPadraoComponent } from '../components/caixa-informativa/balao-interativo-padrao.component';
import { Atributo } from '../enum/atributo.enum';
import { Tamanho } from '../enum/tamanho.enum';
import { Pericia } from '../model/pericia';
import { Equipamento, Imunidade, MagiaPersonagem, PericiaPersonagem, Personagem, PoderPersonagem } from '../model/personagem';
import { Poder } from '../model/poder';
import { PericiasService } from '../service/pericia.service';
import { Proficiencia } from '../enum/proficiencia.enum';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MagiaService } from '../service/magia.service';
import { Magia } from '../model/magia';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatDividerModule,
    NgIf,
    NgFor,
    ButtonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatExpansionModule,
    CommonModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDatepickerModule,
    DialogModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
      trigger('detailExpand', [
        state('collapsed,void', style({ height: '0px', minHeight: '0' })),
        state('expanded', style({ height: '*' })),
        transition(
          'expanded <=> collapsed',
          animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
        ),
      ]),
    ],
  })
export class HomeComponent {
  pericias: Pericia[] = [];
  personagens!: Personagem[];
  personagem!: Personagem;
  atributos = Object.values(Atributo);
  tamanhos = Object.values(Tamanho);
  dsPericias = new MatTableDataSource<PericiaPersonagem>();
  readonly panelOpenState = signal(false);

  expandedElementEmpunhados!: Equipamento | null;
  displayedColumnsEmpunhados: string[] = ['nome', 'formula'];
  displayedColumnsWithExpandEmpunhados = [...this.displayedColumnsEmpunhados, 'expand'];
  isExpandedRowEmpunhados = (index: number, row: any) => row === this.expandedElementEmpunhados;
  
  displayedColumnsVestido: string[] = ['equipamento', 'formula'];
  displayedColumnsCarregados: string[] = ['equipamento','quantidade','espaco'];
  displayedColumnsItens: string[] = ['item', 'descricao'];

  expandedElementPericia!: PericiaPersonagem | null;
  columnsToDisplayPericia: string[] = ['pericia', 'total', 'atributo', 'outros'];
  columnsToDisplayWithExpandPericia = [...this.columnsToDisplayPericia, 'expand'];
  isExpandedRowPericia = (index: number, row: any) => row === this.expandedElementPericia;

  expandedElementMagia!: MagiaPersonagem | null;
  displayedColumnsMagias: string[] = ['nome', 'tipo', 'escola'];
  displayedColumnsWithExpandMagias = [...this.displayedColumnsMagias, 'expand'];
  isExpandedRowMagias = (index: number, row: any) => row === this.expandedElementMagia;

  expandedElementPoderes!: PoderPersonagem | null;
  displayedColumnsPoderes: string[] = ['nome', 'tipo', 'acoes'];
  displayedColumnsWithExpandPoderes = [...this.displayedColumnsPoderes, 'expand'];
  isExpandedRowPoderes = (index: number, row: any) => row === this.expandedElementPoderes;

  constructor(
    private readonly router: Router,
    private readonly servicoPericia: PericiasService,
    private readonly servicoMagia: MagiaService,
  ) {}

  ngOnInit() {
    this.personagens = [];
    this.personagem = new Personagem();

    this.servicoPericia.listar(null).subscribe({
      next: (response) => {
        this.pericias = response;
        this.personagem.inicializaPericias(this.pericias);
        this.personagem.inicializaPosses();
        this.dsPericias = new MatTableDataSource(this.personagem.pericias);
      },
      error: (response) => console.log(response),
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  readonly dialog = inject(MatDialog);
  dataSourcePoderesPersonagens = new MatTableDataSource<PoderPersonagem>();
  dataSourceMagiasPersonagens = new MatTableDataSource<MagiaPersonagem>();
  openDialog(titulo: string, classe: number) {
    const dialogRef = this.dialog.open(BalaoInterativoPadraoComponent, {
      data: {
        titulo: titulo,
        objeto: this.personagem.raca,
        classe: classe,
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        if(!(this.personagem.raca?.id === resultado.id)){
          this.personagem.raca = resultado;
          if (this.personagem.raca === undefined) {
            resultado.resolucao = [];
            resultado.resolucao.push(...resultado.instrucao);
          }
          this.personagem.resetaAtributosRaciais();
  
          this.personagem.raca?.resolucao?.forEach((res) => {
            eval(res);
          });

          this.personagem.raca?.habilidades?.forEach(poder => {
            this.personagem.poderes.push(new PoderPersonagem(poder, false));
          })
          this.dataSourcePoderesPersonagens = new MatTableDataSource(
            this.personagem.poderes
          );
  
          this.personagem.recalculaAtributos();
          this.personagem.raca?.habilidades?.forEach((habilidade) => {
            if (habilidade.resolucao) {
              habilidade.resolucao?.forEach((resolucao) => {
                eval(resolucao);
              });
            } else {
              habilidade.instrucao?.forEach((instrucao) => {
                new Imunidade('','');
                eval(instrucao);
              });
            }
          });
        }
      } else {
        console.log('Diálogo foi fechado sem retorno.');
      }
    });
  }

  adicionarMagiaExtra(id: number) {
    this.servicoMagia.listar({id: id}).subscribe({
      next: (response) => {
        this.personagem.magias?.push({magia: response[0]});
        this.dataSourceMagiasPersonagens = new MatTableDataSource(this.personagem.magias);
      },
      error: (response) => console.log(response),
    });
  }

  seDesabilitaCheck(pericia: PericiaPersonagem): boolean {
    let periciaChekada = false;
    this.personagem.pericias?.forEach((per) => {
      if (pericia === per) {
        periciaChekada = per.treinado ? per.treinado : false;
      }
    });
    return (
      this.personagem.numero_pericias_livre === 0 &&
      (this.personagem.pericias && this.personagem.pericias.length > 0
        ? !periciaChekada
        : true)
    );
  }

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

}
