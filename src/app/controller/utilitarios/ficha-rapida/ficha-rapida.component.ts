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
import { FichaPersonagem } from './ficha.personagem';

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
  ficha!: FichaPersonagem;
  personagemImg = '';
  tokenImg = '';
  topoImg = '';

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
  deslocamentos: string[] = [];
  resistencias: string[] = [];
  poderes: string[] = [];
  pericias: string[] = [];
  itens: string[] = [];
  magias: string[] = [];

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

    if (Array.isArray(lista) && valor && valor.length > 0) {
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

  gerarXML(ficha: FichaPersonagem): string {
    const esc = (v?: string) => (v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const lista = (tag: string, itens: string[]) =>
      `<${tag}>${itens.map(i => `<item>${esc(i)}</item>`).join('')}</${tag}>`;

    return `
<ficha>
  <imagens>
    <personagem>${ficha.imagens.personagem}</personagem>
    <token>${ficha.imagens.token}</token>
    <topo>${ficha.imagens.topo}</topo>
  </imagens>

  <cabecalho>
    <nome_personagem>${esc(ficha.cabecalho.nome_personagem)}</nome_personagem>
    <nome_jogador>${esc(ficha.cabecalho.nome_jogador)}</nome_jogador>
    <raca>${esc(ficha.cabecalho.raca)}</raca>
    <origem>${esc(ficha.cabecalho.origem)}</origem>
    <classe>${esc(ficha.cabecalho.classe)}</classe>
    <devocao>${esc(ficha.cabecalho.devocao)}</devocao>
  </cabecalho>

  <atributos>
    <forca>${ficha.atributos.forca}</forca>
    <destreza>${ficha.atributos.destreza}</destreza>
    <constituicao>${ficha.atributos.constituicao}</constituicao>
    <inteligencia>${ficha.atributos.inteligencia}</inteligencia>
    <sabedoria>${ficha.atributos.sabedoria}</sabedoria>
    <carisma>${ficha.atributos.carisma}</carisma>
    <pv>${ficha.atributos.pv}</pv>
    <pm>${ficha.atributos.pm}</pm>
  </atributos>

  <listas>
    ${lista('ataques', ficha.listas.ataques)}
    ${lista('sentidos', ficha.listas.sentidos)}
    ${lista('proficiencias', ficha.listas.proficiencias)}
    ${lista('deslocamentos', ficha.listas.deslocamentos)}
    ${lista('resistencias', ficha.listas.resistencias)}
    ${lista('pericias', ficha.listas.pericias)}
    ${lista('itens', ficha.listas.itens)}
    ${lista('poderes', ficha.listas.poderes)}
    ${lista('magias', ficha.listas.magias)}
  </listas>
</ficha>
`.trim();
  }

  salvarFichaXML(ficha: FichaPersonagem) {
    const xml = this.gerarXML(ficha);
    const blob = new Blob([xml], { type: 'text/xml' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ficha-personagem.xml';
    a.click();
  }

  carregarXML(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const xml = reader.result as string;
      this.ficha = this.parseXML(xml);
      this.aplicarFichaNaTela(this.ficha);
    };

    reader.readAsText(file);
  }

  parseXML(xmlString: string): FichaPersonagem {
    const xml = new DOMParser().parseFromString(xmlString, 'text/xml');

    const texto = (tag: string) => xml.querySelector(tag)?.textContent ?? '';

    const lista = (tag: string) => Array.from(xml.querySelectorAll(`${tag} item`)).map(i => i.textContent ?? '');

    return {
      imagens: {
        personagem: texto('imagens > personagem'),
        token: texto('imagens > token'),
        topo: texto('imagens > topo'),
      },

      cabecalho: {
        nome_personagem: this.form.value.nome_personagem,
        nome_jogador: this.form.value.nome_jogador,
        raca: this.form.value.raca,
        origem: this.form.value.origem,
        classe: this.form.value.classe,
        devocao: this.form.value.devocao,
      },

      atributos: {
        forca: +texto('forca'),
        destreza: +texto('destreza'),
        constituicao: +texto('constituicao'),
        inteligencia: +texto('inteligencia'),
        sabedoria: +texto('sabedoria'),
        carisma: +texto('carisma'),
        pv: +texto('pv'),
        pm: +texto('pm'),
      },

      caracteristicas: {
        defesa: +texto('defesa'),
        idade: +texto('idade'),
        faixa_etaria: texto('faixa_etaria'),
        tamanho: texto('tamanho'),
        tipo: texto('tipo'),
      },

      listas: {
        ataques: lista('ataques'),
        sentidos: lista('sentidos'),
        proficiencias: lista('proficiencias'),
        deslocamentos: lista('deslocamentos'),
        resistencias: lista('resistencias'),
        pericias: lista('pericias'),
        itens: lista('itens'),
        poderes: lista('poderes'),
        magias: lista('magias'),
      },
    };
  }

  aplicarFichaNaTela(f: FichaPersonagem) {
    this.personagemImg = f.imagens.personagem;
    this.tokenImg = f.imagens.token;
    this.topoImg = f.imagens.topo;

    Object.assign(this, f.cabecalho);
    Object.assign(this, f.atributos);
    Object.assign(this, f.caracteristicas);
    Object.assign(this, f.listas);
  }

  exportarXML() {
    const ficha: FichaPersonagem = {
      imagens: {
        personagem: this.personagemPreview,
        token: this.tokenPreview,
        topo: this.topoImg,
      },
      cabecalho: this.form.value,
      atributos: {
        forca: this.for.total ? this.for.total : 0,
        destreza: this.des.total ? this.des.total : 0,
        constituicao: this.con.total ? this.con.total : 0,
        inteligencia: this.int.total ? this.int.total : 0,
        sabedoria: this.sab.total ? this.sab.total : 0,
        carisma: this.car.total ? this.car.total : 0,
        pv: this.form.value.pontos_vida,
        pm: this.form.value.pontos_mana,
      },
      caracteristicas: {
        defesa: this.form.value.defesa,
        idade: this.form.value.idade,
        faixa_etaria: this.form.value.faixa_etaria,
        tamanho: this.form.value.tamanho,
        tipo: this.form.value.tipo,
      },
      listas: {
        ataques: this.ataques,
        sentidos: this.sentidos,
        proficiencias: this.proficiencias,
        deslocamentos: this.deslocamentos,
        resistencias: this.resistencias,
        pericias: this.pericias,
        itens: this.itens,
        poderes: this.poderes,
        magias: this.magias,
      },
    };

    this.salvarFichaXML(ficha);
  }

  exportar() {
    this.card.exportFicha();
  }
}
