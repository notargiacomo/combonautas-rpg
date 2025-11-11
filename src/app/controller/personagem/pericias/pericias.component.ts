import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass, NgFor, NgIf } from '@angular/common';
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
import { Pericia } from '@app/model/pericia';
import { PericiaService } from '@app/service/pericia.service';

@Component({
  selector: 'app-pericias',
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
  templateUrl: './pericias.component.html',
  styleUrl: './pericias.component.scss',
})
export class PericiasComponent implements OnInit {
  isMobile = false;

  pericias!: Pericia[];
  form!: FormGroup;
  numero_registros = 0;

  bonus = Object.values(Modificador);

  constructor(
    private readonly periciasService: PericiaService,
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
      atributo: [],
    });
  }

  consultar() {
    let filtro = this.form.value;
    this.periciasService.listar(filtro).subscribe({
      next: response => {
        this.pericias = response;
        this.numero_registros = response.length;
      },
      error: response => {
        console.log(response);
      },
    });
  }
}
