import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Raca } from '../../model/raca';
import { RacaService } from '../../service/raca.service';
import { ConsultaRacaDto } from '../../dto/consulta.raca.dto';
import { Deslocamento } from '../../enum/deslocamento.enum';
import { Sentido } from '../../enum/sentido.enum';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-racas',
  standalone:true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule, MatRadioModule, MatCheckboxModule, FormsModule, FormsModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, NgFor],
  templateUrl: './racas.component.html',
  styleUrl: './racas.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RacasComponent implements OnInit{

  raca = "";
  columnsToDisplay = ['nome', 'tipo', 'tamanho'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Raca | null;
  racas!: Raca[];
  consultaRacaDto: ConsultaRacaDto = new ConsultaRacaDto();
  deslocamentos = Object.values(Deslocamento);
  sentidos = Object.values(Sentido);
  checkboxState: { [key: string]: boolean } = {};

  constructor(private racaService: RacaService) {
    this.deslocamentos.forEach((deslocamento) => {
      this.checkboxState[deslocamento] = false;
    });
    this.sentidos.forEach((sentidos) => {
      this.checkboxState[sentidos] = false;
    });
  }

  ngOnInit() {
    this.racas = this.racaService.getRacas();
    this.consultaRacaDto = new ConsultaRacaDto();
  }

  limparFiltros(){
    this.consultaRacaDto = new ConsultaRacaDto();
    this.deslocamentos.forEach((deslocamento) => {
      this.checkboxState[deslocamento] = false;
    });
    this.sentidos.forEach((sentidos) => {
      this.checkboxState[sentidos] = false;
    });
    this.racas = this.racaService.getRacas();
  }

  selecaoTamanho(event: any): void {
    console.log('Tamanho selecionado:', this.consultaRacaDto.tamanho);
    this.consultar();
  }

  selecaoTipoCriatura(event: any): void {
    console.log('Tipo de Criatura selecionado:', this.consultaRacaDto.tipo_criatura);
    this.consultar();
  }

  checkDeslocamento(deslocamento:Deslocamento, checked: boolean): void {
    if (checked) {
      this.consultaRacaDto.deslocamentos.push(deslocamento);
    } else {
      this.consultaRacaDto.deslocamentos = this.consultaRacaDto.deslocamentos.filter((item) => item !== deslocamento);
    }
    console.log('Seleção atualizada:', this.consultaRacaDto.deslocamentos);
    this.consultar();
  }

  checkSentido(sentido:Sentido, checked: boolean): void {
    if (checked) {
      this.consultaRacaDto.sentidos.push(sentido);
    } else {
      this.consultaRacaDto.sentidos = this.consultaRacaDto.sentidos.filter((item) => item !== sentido);
    }
    console.log('Seleção atualizada:', this.consultaRacaDto.sentidos);
    this.consultar();
  }

  consultar(){
    this.racas = this.racaService.getRacas(this.consultaRacaDto);
    console.log(this.racas);
    // alert("chamou consultar");
  }
}


