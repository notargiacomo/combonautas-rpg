import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  signal
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { RegraTree } from '@app/model/RegraTree';
import { RegraDao } from '@app/dao/regra.dao';
import { AlimentosComponent } from "./alimentos/alimentos.component";
import { AlquimicosComponent } from "./alquimicos/alquimicos.component";
import { ArmadurasComponent } from "./armaduras/armaduras.component";
import { ArmasComponent } from "./armas/armas.component";
import { EquipamentoAventuraComponent } from "./equipamento-aventura/equipamento-aventura.component";
import { EscudosComponent } from "./escudos/escudos.component";
import { EsotericosComponent } from "./esotericos/esotericos.component";
import { FerramentasComponent } from "./ferramentas/ferramentas.component";
import { MunicoesComponent } from "./municoes/municoes.component";
import { TodosItensComponent } from "./todos-itens/todos-itens.component";
import { VestuariosComponent } from './vestuarios/vestuarios.component'; 
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-itens',
  imports: [
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ArmasComponent,
    MunicoesComponent,
    ArmadurasComponent,
    MatTreeModule,
    EquipamentoAventuraComponent,
    FerramentasComponent,
    EsotericosComponent,
    AlquimicosComponent,
    EscudosComponent,
    AlimentosComponent,
    TodosItensComponent,
    NgIf,
    VestuariosComponent
],
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.scss',
})
export class ItensComponent implements AfterViewInit, OnInit {

  dataSourceRegraTree: RegraTree[] = [];
  conceitos: RegraTree[] = [];
  childrenAccessor = (node: RegraTree): RegraTree[] => node.children ?? [];
  hasChild = (_: number, node: RegraTree) => !!node.children && node.children.length > 0;

  readonly panelOpenState = signal(false);
  displayedColumns: string[] = ['nome', 'acao'];
  regraSelecionada?: RegraTree;

  constructor(
    private readonly regraServiceSB: RegraDao,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
  }
  

  ngOnInit() {
    this.carregaArvoreConceitos();
  }

  async carregaArvoreConceitos(){
    this.dataSourceRegraTree.push(await this.regraServiceSB.carregarMenusConceito({ id: 30 }));
    this.cdr.detectChanges();

  }


  ordenacaoAlfabetica(lista: any[]) {
    lista.sort((a, b) => {
      let nome_a = a.nome ? a.nome : 'a';
      let nome_b = b.nome ? b.nome : 'b';
      return nome_a.localeCompare(nome_b);
    });
    return lista;
  }

  selecionaRegra(regraSelecionada: any){
    this.regraSelecionada = regraSelecionada;
  }
  
}
