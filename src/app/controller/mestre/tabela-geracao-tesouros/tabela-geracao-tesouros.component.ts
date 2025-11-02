import { ChangeDetectorRef, Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatSelect, MatOption } from "@angular/material/select";

import { TabelaGeracaoTesouroDataService } from '@app/service/tabela.geracao.tesouro.service';

@Component({
  selector: 'app-tabela-geracao-tesouros',
  imports: [FormsModule, MatFormFieldModule, ReactiveFormsModule, MatCard, MatButtonModule, MatFormField, MatLabel, MatSelect, MatOption],
  templateUrl: './tabela-geracao-tesouros.component.html',
  styleUrl: './tabela-geracao-tesouros.component.scss'
})
export class TabelaGeracaoTesourosComponent {

  formulario!: FormGroup;
  tabelaTesouro: any[] = [];
  tipos: string[] = ['PADRÃO', 'METADE', 'DOBRO'];
  niveis: string[] = ['1/4', '1/2', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  tesouro: string = '';


  constructor(private fb: FormBuilder,
    private readonly service: TabelaGeracaoTesouroDataService,
  ) {}

  ngOnInit() {
      this.formulario = this.fb.group({
        tipo: [],
        nivel: [],
    });

    this.service.listar().subscribe({
      next: (response: any[]) => {
        this.tabelaTesouro = response;
      }
    });
  }

  gerarTesouro(){
    this.calcularDinheiro();
  }

  calcularDinheiro(){
    let randomDinheiro = Math.floor(Math.random() * 100)+1;
    let tabelaTesouroDinheiro = this.tabelaTesouro[0];
    let nivel = this.formulario.get('nivel')?.value;

    // Busca o objeto cujo intervalo [min, max] contém o valor
    const tabelaDinheiroNivel = tabelaTesouroDinheiro.filter((item: { nd: string }) => item.nd === nivel);
    const linhaDinheiroNivel = tabelaDinheiroNivel.find((item: { min: number; max: number; }) => randomDinheiro >= item.min && randomDinheiro <= item.max);
    let dinheiro = 0;

    for (let index = 0; index < linhaDinheiroNivel.multiplicador; index++) {
      dinheiro += Math.floor(Math.random() * linhaDinheiroNivel.randomizador)+1;
    }

    let unidade = linhaDinheiroNivel.unidade;
    if(linhaDinheiroNivel.unidade.includes("riqueza menor")){
      unidade = this.calcularRiquezaMenor(linhaDinheiroNivel.modificador>0);
    }

    if(linhaDinheiroNivel.unidade.includes("riqueza média")){
      unidade = this.calcularRiquezaMedia(linhaDinheiroNivel.modificador>0);
    }

    if(linhaDinheiroNivel.unidade.includes("riqueza maior")){
      unidade = this.calcularRiquezaMaior(linhaDinheiroNivel.modificador>0);
    }

    dinheiro += linhaDinheiroNivel.parcela;
    dinheiro = dinheiro*linhaDinheiroNivel.potencializador;
    this.tesouro = "RESULTADO D100: " + randomDinheiro + " / FÓRMULA: " + linhaDinheiroNivel.dinheiro + " / DINHEIRO: " + (!linhaDinheiroNivel.unidade.includes("riqueza") ? linhaDinheiroNivel.unidade + " " + dinheiro.toString() : unidade );
  }

  calcularRiquezaMenor(modificador: boolean): string {
    let riquezasMenores = this.tabelaTesouro[1];
    return ''
  }

  calcularRiquezaMedia(modificador: boolean): string {
    let riquezasMedias = this.tabelaTesouro[2];
    return ''
  }

  calcularRiquezaMaior(modificador: boolean): string {
    let riquezasMaiores = this.tabelaTesouro[3];
    return ''
  }

}
