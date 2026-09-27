import { Component, OnInit } from '@angular/core';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TerritorioService } from '@app/service/territorio.service';
import { EncontroAleatorioService } from '@app/service/encontro.aleatorio.service';
import { Terreno } from '@app/enum/terreno.enum';
import { TerrenoEspecial } from '@app/enum/terreno.especiais.enum';

@Component({
  selector: 'app-encontro-aleatorio',
  imports: [
    MatFormField,
    MatLabel,
    MatCard,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './encontro-aleatorio.component.html',
  styleUrl: './encontro-aleatorio.component.scss',
})
export class EncontroAleatorioComponent implements OnInit {
  territorios: any;
  terrenos: any;
  patamares: any;
  form!: FormGroup;
  encontroAleatorio?: string = '';

  constructor(
    private fb: FormBuilder,
    readonly territorioService: TerritorioService,
    readonly encontroAleatorioService: EncontroAleatorioService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      territorio: [],
      terreno: [],
      patamar: [],
    });

    this.carregaTerritorios();
    this.carregaTerrenos();
    this.carregaPatamares();
  }

  carregaTerritorios() {
    this.territorioService.consult(null).subscribe((res: any[]) => {
      this.territorios = res.sort((a, b) => a.nome.localeCompare(b.nome));
    });
  }

  carregaTerrenos() {
    this.terrenos = [...Object.values(Terreno), ...Object.values(TerrenoEspecial)].map(
      terreno => terreno.charAt(0).toUpperCase() + terreno.slice(1).toLowerCase()
    );
  }

  carregaPatamares() {
    this.patamares = ['Iniciante', 'Veterano', 'Campeão', 'Lenda'];
  }

  gerarEncontroAleatorio() {
    let random = Math.floor(Math.random() * 100) + 1;
    const patamar = this.form.get('patamar')?.value;

    if (patamar === 'Veterano') {
      random = random + 30;
    }

    if (patamar === 'Campeão') {
      random = random + 70;
    }

    if (patamar === 'Lenda') {
      random = random + 110;
    }

    const nome = this.form.get('terreno')?.value;
    console.log('Terreno:', nome?.toLocaleLowerCase());
    this.encontroAleatorioService.buscarPorRandom(nome?.toLocaleLowerCase(), random).subscribe(encontro => {
      console.log('Random:', random);
      console.log('Encontro:', encontro);
      this.encontroAleatorio = encontro?.descricao;
      // Aqui você trabalha com o encontro encontrado
    });
  }
}
