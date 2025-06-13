import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
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
import { ArmasComponent } from "./armas/armas.component";
import { MunicoesComponent } from "./municoes/municoes.component";
import { ArmadurasComponent } from "./armaduras/armaduras.component";
import { RegraTree } from '@app/model/RegraTree';
import { MatTreeModule } from '@angular/material/tree';
import { RegraServiceSupabase } from '@app/service/supaservice/regra.service.supabase';

@Component({
  selector: 'app-itens',
  imports: [
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    NgFor,
    NgIf,
    NgClass,
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
],
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.scss',
})
export class ItensComponent implements AfterViewInit {

  dataSourceRegraTree: RegraTree[] = [];
  conceitos: RegraTree[] = [];
  childrenAccessor = (node: RegraTree): RegraTree[] => node.children ?? [];
  hasChild = (_: number, node: RegraTree) => !!node.children && node.children.length > 0;

  readonly panelOpenState = signal(false);
  displayedColumns: string[] = ['nome', 'acao'];
  regraSelecionada?: RegraTree;

  constructor(
    private readonly regraServiceSB: RegraServiceSupabase,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
  }
  

  async ngOnInit() {

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
