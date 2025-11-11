import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { Poder } from '@app/model/poder';
import { PoderService } from '@app/service/poder.service';
import { MatTabsModule } from '@angular/material/tabs';
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { Deus } from '@app/model/deus';
import { MatRadioModule } from '@angular/material/radio';
import { DeusService } from '@app/service/deus.service';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-poderes',
  imports: [
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    NgFor,
    NgIf,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './poderes.component.html',
  styleUrl: './poderes.component.scss',
})
export class PoderesComponent {
  isMobile = false;

  objetos!: Poder[];
  form!: FormGroup;
  numero_registros = 0;
  deuses: Deus[] = [];

  constructor(
    private readonly service: PoderService,
    private readonly serviceDeus: DeusService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngAfterViewInit() {
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
    console.log(this.form.value);
    let filtro = this.form.value;
    this.service.listar(filtro).subscribe({
      next: response => {
        this.objetos = response;
        this.numero_registros = response.length;
      },
      error: response => {
        console.log(response);
      },
    });
  }

  seExibeDeuses() {
    return this.form.value.tipo === TipoPoder.PODER_CONCEDIDO;
  }
}
