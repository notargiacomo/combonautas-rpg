import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { AtributoPersonagem, AttributeComponent } from '@app/components/attribute/attribute.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CombonautasBase } from '@app/components/combonautas-base';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  ],
  templateUrl: './ficha-rapida.component.html',
  styleUrl: './ficha-rapida.component.scss',
})
export class FichaRapidaComponent extends CombonautasBase implements OnInit {
  points: number = 10;
  form!: FormGroup;
  isMobile = false;

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

  ngOnInit(): void {
    this.for = { nome: 'FORÇA', comprado: 0, racial: 0, poder: 0, total: 0 };
    this.des = { nome: 'DESTREZA', comprado: 0, racial: 0, poder: 0, total: 0 };
    this.con = { nome: 'CONSTITUIÇÃO', comprado: 0, racial: 0, poder: 0, total: 0 };
    this.int = { nome: 'INTELIGÊNCIA', comprado: 0, racial: 0, poder: 0, total: 0 };
    this.sab = { nome: 'SABEDORIA', comprado: 0, racial: 0, poder: 0, total: 0 };
    this.car = { nome: 'CARISMA', comprado: 0, racial: 0, poder: 0, total: 0 };

    this.form = this.fb.group({
      nome_personagem: [],
      nome_jogador: [],
      raca: [],
      classe: [],
      origem: [],
      devocao: [],
    });
  }
}
