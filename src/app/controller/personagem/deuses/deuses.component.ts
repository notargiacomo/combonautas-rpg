import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Modificador } from '@app/enum/modificador.enum';
import { Deus } from '@app/model/deus';
import { DeusService } from '@app/service/deus.service';
import { PoderService } from '@app/service/poder.service';

@Component({
  selector: 'app-deuses',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgFor,
    NgIf,
    MatTabsModule,
    MatGridList,
    MatGridTile,
  ],
  templateUrl: './deuses.component.html',
  styleUrl: './deuses.component.scss',
})
export class DeusesComponent implements OnInit {
  isMobile = false;

  deuses!: Deus[];
  form!: FormGroup;
  numero_registros = 0;

  bonus = Object.values(Modificador);

  constructor(
    private readonly deusService: DeusService,
    private readonly poderService: PoderService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
      console.log('É celular?', this.isMobile);
    });
  }

  ngOnInit() {
    this.reiniciaFormulario();
    this.consultar();
  }

  private reiniciaFormulario() {
    this.form = this.fb.group({
      nome: [],
    });
  }

  consultar() {
    let filtro = this.form.value;

    this.deusService.listar(filtro).subscribe({
      next: (response: any[]) => {
        response.sort((a, b) => {
          let nome_a = a.nome ? a.nome : 'a';
          let nome_b = b.nome ? b.nome : 'b';
          return nome_a.localeCompare(nome_b);
        });
        this.deuses = response;
        this.numero_registros = response.length;

        this.deuses.forEach(deus => {
          this.poderService.listar({ id_deuses: deus.id }).subscribe({
            next: (response: any[]) => {
              response.sort((a, b) => {
                let nome_a = a.nome ? a.nome : 'a';
                let nome_b = b.nome ? b.nome : 'b';
                return nome_a.localeCompare(nome_b);
              });
              response.forEach(poder => {
                poder.descricao = '<b>' + poder.nome + '.</b> ' + poder.descricao;
                if (poder.e_poder_magico) {
                  poder.descricao += '<i><b> e</b></i>';
                }
              });
              deus.poderes = response;
            },
          });
        });
        this.cdr.detectChanges();
      },

      error: (response: any[]) => {
        console.log(response);
      },
    });
  }
}
