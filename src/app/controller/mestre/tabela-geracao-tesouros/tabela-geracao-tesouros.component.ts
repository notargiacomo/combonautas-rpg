import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from "@angular/material/card";
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatOption, MatSelect } from "@angular/material/select";

import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from "@angular/material/expansion";
import { GeneratedTreasure, tabelaTesouroItens, TreasureContext } from './generate-factory/model/treasure';
import { TreasureService } from './generate-factory/service/treasure.service';

@Component({
  selector: 'app-tabela-geracao-tesouros',
  imports: [FormsModule, MatFormFieldModule, ReactiveFormsModule, MatCard, MatButtonModule, MatFormField, MatLabel, MatSelect, MatOption, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle],
  templateUrl: './tabela-geracao-tesouros.component.html',
  styleUrl: './tabela-geracao-tesouros.component.scss'
})
export class TabelaGeracaoTesourosComponent {

  formulario!: FormGroup;
  tabelaTesouro: any[] = [];
  tipos: string[] = ['PADRÃO', 'METADE', 'DOBRO'];
  niveis: number[] = [0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
  item:string = '';
  dinheiro:string = '';
  
  resultado?: GeneratedTreasure[] = [];

  detalhesTesouroDinheiro: string = '';
  detalhesTesouroItens: string = '';

  constructor(private fb: FormBuilder,
    private treasureService: TreasureService
  ) {}

  ngOnInit() {
      this.formulario = this.fb.group({
        tipo: [],
        nivel: [],
    });
  }

  gerarTesouro(){
    this.gerarDinheiro();
    this.gerarItem();
  }
  
  private gerarDinheiro() {
    const contexto: TreasureContext = {
      type: 'money',
      level: this.formulario.get('nivel')?.value
    };

    let retorno = this.treasureService.generate(contexto);
    this.dinheiro! = retorno.notes + " " + retorno.return;
    this.detalhesTesouroDinheiro! = retorno.report!;
  }

  gerarItem(){
    let random = Math.floor(Math.random() * 100)+1;
    let nivel = String(this.formulario.get('nivel')?.value).trim();
    const tabelaItemNivel = tabelaTesouroItens.filter((item: any ) => item.nd === Number(nivel));
    const linhaItemNivel: any = tabelaItemNivel.find((item: any) => random >= item.min && random <= item.max);

    const contexto: TreasureContext = {
      type: linhaItemNivel.tipo,
      level: this.formulario.get('nivel')?.value,
      notes: linhaItemNivel.modificador,
      random: random
    };

    let retorno = this.treasureService.generate(contexto);
    this.item! = retorno.return;
    this.detalhesTesouroItens! = retorno.report!;
  }
}
