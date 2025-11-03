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
  tesouroDinheiro: string = '';
  tesouroItens: string = '';
  tesouro:string = ';'


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
    
    
    let dinheiro = '0';
    if(linhaDinheiroNivel.unidade.includes("riqueza")){
      dinheiro = "T$ " + this.calcularRiqueza(linhaDinheiroNivel.unidade, linhaDinheiroNivel.modificador>0);
    } else {

      let valorDinheiro: number = 
            this.formulario.get('tipo')?.value === 'METADE' ? this.contadorMoedas(linhaDinheiroNivel)/2: 
            this.formulario.get('tipo')?.value === 'DOBRO'? this.contadorMoedas(linhaDinheiroNivel)*2: 
            this.contadorMoedas(linhaDinheiroNivel);

      dinheiro = linhaDinheiroNivel.unidade + " " + valorDinheiro;
    }

    this.tesouroDinheiro = "RESULTADO D100: " + randomDinheiro + " / FÓRMULA: " + linhaDinheiroNivel.dinheiro + " / VALORES: " + dinheiro;
  }

  calcularRiqueza(unidade:string, modificador: boolean): string {
    let riquezas = []
    if(unidade.includes("menor"))
      console.log("entrou riqueza menor");
      riquezas = this.tabelaTesouro[1];
    if(unidade.includes("media"))
      riquezas = this.tabelaTesouro[2];
    if(unidade.includes("maior"))
      riquezas = this.tabelaTesouro[3];
    
    let random = Math.floor(Math.random() * 100)+1;
    const linhaDinheiroNivel = riquezas.find((item: { min: number; max: number; }) => random >= item.min && random <= item.max);
    
    return this.contadorMoedas(linhaDinheiroNivel).toString();
  }


  contadorMoedas(linhaDinheiroNivel: any): number {
    let dinheiro = 0;
    for (let index = 0; index < linhaDinheiroNivel.multiplicador; index++) {
      dinheiro += Number(Math.floor(Math.random() * linhaDinheiroNivel.randomizador) + 1);
    }

    if (linhaDinheiroNivel.parcela) {
      dinheiro += Number(linhaDinheiroNivel.parcela);
    }
    dinheiro = dinheiro * linhaDinheiroNivel.potencializador;
    return dinheiro;
  }


}
