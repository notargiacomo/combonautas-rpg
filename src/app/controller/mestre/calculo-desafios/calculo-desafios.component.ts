import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';

import { Observable, combineLatest, startWith, map, shareReplay } from 'rxjs';

import { CalculoDesafiosDto } from '@app/dto/calculo-desafios.dto';
import { Ameaca } from '@app/model/ameaca';
import { AmeacaService } from '@app/service/ameaca.service';

@Component({
  selector: 'app-calculo-desafios',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatAutocompleteModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calculo-desafios.component.html',
  styleUrl: './calculo-desafios.component.scss',
})
export class CalculoDesafiosComponent implements OnInit {
  formulario!: FormGroup;
  calculoDesafios = new CalculoDesafiosDto();

  resultado: string = '';
  nd: number = 0;

  custoCombate: number = 0;
  ameacasCombate: Ameaca[] = [];

  // 🔥 Agora vem direto do service
  ameacas$!: Observable<Ameaca[]>;

  // 🔥 Lista filtrada reativa
  filteredAmeacas$!: Observable<Ameaca[]>;
  orcamento: number = 0;
  construindoCombate: boolean = false;

  constructor(
    private fb: FormBuilder,
    private ameacaService: AmeacaService
  ) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nivel: new FormControl(this.calculoDesafios.nivel),
      numero_jogadores: new FormControl(this.calculoDesafios.numero_jogadores),
      experientes: new FormControl(this.calculoDesafios.experientes),
      entrosados: new FormControl(this.calculoDesafios.entrosados),
      situacao: new FormControl(this.calculoDesafios.situacao),
      numero_encontros: new FormControl(this.calculoDesafios.numero_encontros),
      ameaca: '',
    });

    this.calcular();

    // 🔥 Carrega ameaças como stream
    this.ameacas$ = this.ameacaService.listar(null).pipe(shareReplay(1));

    // 🔥 Combina digitação + dados do backend
    this.filteredAmeacas$ = combineLatest([
      this.ameacas$,
      this.formulario.get('ameaca')!.valueChanges.pipe(startWith('')),
    ]).pipe(
      map(([ameacas, valor]) => {
        const filtro = (valor || '').toLowerCase();
        return ameacas.filter(a => a.nome.toLowerCase().includes(filtro));
      })
    );
  }

  // =========================
  // ADICIONAR AMEAÇA
  // =========================
  adicionar() {
    const valor = this.formulario.get('ameaca')?.value;
    if (!valor) return;

    this.ameacas$
      .subscribe(lista => {
        const ameaca = lista.find(a => a.nome === valor);
        if (!ameaca) return;

        this.ameacasCombate.push(ameaca);
        this.formulario.get('ameaca')?.setValue('');
        this.calcularCusto();
      })
      .unsubscribe();
  }

  // =========================
  // CÁLCULO ND DO GRUPO
  // =========================
  calcular() {
    const valores: CalculoDesafiosDto = this.formulario.value;

    let resultado: number = valores.nivel;
    resultado += valores.numero_jogadores - 4;
    resultado += valores.experientes ? 1 : 0;
    resultado += valores.entrosados ? 1 : 0;
    resultado += valores.situacao;
    resultado += -(valores.numero_encontros - 1);

    this.nd = resultado;
    this.resultado = valores.numero_encontros + ' ENCONTRO(S) DE ND ' + resultado;
  }

  remover(index: number) {
    this.ameacasCombate.splice(index, 1);
    this.calcularCusto();
  }

  calcularCusto() {
    const listaNDs = this.ameacasCombate.map(a => a.nd);
    const listaProcessada = this.processarNDMenorQueUm(listaNDs);
    this.custoCombate = this.calcularNDTotal(listaProcessada);
  }

  processarNDMenorQueUm(lista: number[]): number[] {
    let resultado = [...lista];
    resultado = this.juntarPares(resultado, 0.25);
    resultado = this.juntarPares(resultado, 0.5);
    return resultado;
  }

  juntarPares(lista: number[], valor: number): number[] {
    const outros = lista.filter(v => v !== valor);
    const iguais = lista.filter(v => v === valor);

    const pares = Math.floor(iguais.length / 2);
    const sobra = iguais.length % 2;

    const resultado: number[] = [...outros];

    for (let i = 0; i < pares; i++) {
      resultado.push(valor * 2);
    }

    if (sobra) {
      resultado.push(valor);
    }

    return resultado;
  }

  calcularNDTotal(lista: number[]): number {
    const mapa = new Map<number, number>();

    lista.forEach(nd => {
      mapa.set(nd, (mapa.get(nd) || 0) + 1);
    });

    let maiorND = 0;

    mapa.forEach((quantidade, ndBase) => {
      if (ndBase < 1) {
        maiorND = Math.max(maiorND, ndBase);
        return;
      }

      const dobramentos = Math.floor(Math.log2(quantidade));
      const ndFinal = ndBase + dobramentos * 2;

      maiorND = Math.max(maiorND, ndFinal);
    });

    return maiorND;
  }

  selecionandoOrcamento(orc: any) {
    this.construindoCombate = true;
    this.orcamento = orc;
  }
}
