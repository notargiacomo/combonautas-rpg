import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { AtributoPersonagem, AttributeComponent } from '@app/components/attribute/attribute.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CombonautasBase } from '@app/components/combonautas-base';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { CardPersonagemComponent } from '@app/components/card-personagem/card-personagem.component';

@Component({
  selector: 'app-ficha-rapida',
  imports: [
    MatCard,
    AttributeComponent,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormField,
    MatInputModule,
    MatLabel,
    MatIcon,
    NgIf,
    NgFor,
    CardPersonagemComponent,
  ],
  templateUrl: './ficha-rapida.component.html',
  styleUrl: './ficha-rapida.component.scss',
})
export class FichaRapidaComponent extends CombonautasBase implements OnInit {
  points: number = 0;
  form!: FormGroup;
  isMobile = false;

  @ViewChild('card') card!: CardPersonagemComponent;

  constructor(
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) {
    super();
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  for: AtributoPersonagem = {};
  des: AtributoPersonagem = {};
  con: AtributoPersonagem = {};
  int: AtributoPersonagem = {};
  sab: AtributoPersonagem = {};
  car: AtributoPersonagem = {};

  pontos_gastos: number = 0;

  ataques: string[] = [];
  proficiencias: string[] = [];
  sentidos: string[] = [];
  deslocamentos: [] = [];
  resistencias: [] = [];
  poderes: [] = [];
  pericias: [] = [];
  itens: [] = [];
  magias: [] = [];

  ngOnInit(): void {
    this.for = { nome: 'FORÇA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.des = { nome: 'DESTREZA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.con = { nome: 'CONSTITUIÇÃO', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.int = { nome: 'INTELIGÊNCIA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.sab = { nome: 'SABEDORIA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.car = { nome: 'CARISMA', comprado: 0, racial: 0, outros: 0, total: 0 };

    this.form = this.fb.group({
      nome_personagem: [],
      nome_jogador: [],
      raca: [],
      classe: [],
      origem: [],
      devocao: [],
      faixa_etaria: [],
      idade: [],
      tamanho: [],
      tipo: [],
      defesa: [],
      pontos_vida: [],
      pontos_mana: [],
      ataque: [],
      proficiencia: [],
      sentido: [],
      deslocamento: [],
      resistencia: [],
      poder: [],
      pericia: [],
      item: [],
      magia: [],
    });
  }

  adicionar(nomeLista: string, nomeVariavel: string) {
    const valor = this.form.get(nomeVariavel)?.value;

    const lista = (this as any)[nomeLista];

    if (Array.isArray(lista) && valor.length > 0) {
      lista.push(valor);
      this.form.get(nomeVariavel)?.setValue('');
    }
  }

  remover(nomeLista: string, index: number) {
    const lista = (this as any)[nomeLista];

    if (Array.isArray(lista)) {
      lista.splice(index, 1);
    }
  }

  calculaPontos(event: number) {
    this.points = event;
  }

  personagemPreview = '';
  tokenPreview = '';

  onImagemPersonagem(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => (this.personagemPreview = reader.result as string);
    reader.readAsDataURL(file);
  }

  onImagemToken(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => (this.tokenPreview = reader.result as string);
    reader.readAsDataURL(file);
  }

  exportar() {
    this.card.exportFicha();
  }
}
