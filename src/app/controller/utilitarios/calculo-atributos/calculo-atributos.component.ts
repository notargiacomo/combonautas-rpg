import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AtributoPersonagem, AttributeComponent } from '@app/components/attribute/attribute.component';
import { CombonautasBase } from '@app/components/combonautas-base';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-calculo-atributos',
  imports: [AttributeComponent, MatCard],
  templateUrl: './calculo-atributos.component.html',
  styleUrl: './calculo-atributos.component.scss',
})
export class CalculoAtributosComponent extends CombonautasBase implements OnInit {
  points: number = 0;
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

  calculaPontos(event: number) {
    this.points = event;
  }

  ngOnInit(): void {
    this.for = { nome: 'FORÇA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.des = { nome: 'DESTREZA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.con = { nome: 'CONSTITUIÇÃO', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.int = { nome: 'INTELIGÊNCIA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.sab = { nome: 'SABEDORIA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.car = { nome: 'CARISMA', comprado: 0, racial: 0, outros: 0, total: 0 };

    this.form = this.fb.group({});
  }
}
