import { animate, state, style, transition, trigger } from '@angular/animations';
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
import { Origem } from '@app/model/origem';
import { OrigemService } from '@app/service/origem.service';

@Component({
  selector: 'app-origens',
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
    MatTabsModule,
    MatGridList,
    MatGridTile,
    NgIf,
    NgFor,
  ],
  templateUrl: './origens.component.html',
  styleUrl: './origens.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0', maxHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrigensComponent implements OnInit {
  isMobile = false;

  origens!: Origem[];
  form!: FormGroup;
  numero_registros = 0;

  bonus = Object.values(Modificador);

  constructor(
    private readonly origemService: OrigemService,
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

  ngAfterViewInit() {}

  private reiniciaFormulario() {
    this.form = this.fb.group({
      nome: [],
    });
  }

  limparFiltros() {
    this.reiniciaFormulario();
    this.consultar();
  }

  consultar() {
    console.log(this.form.value);
    let filtro = this.form.value;
    this.origemService.listar(filtro).subscribe({
      next: response => {
        this.origens = response;
        this.numero_registros = response.length;
      },
      error: response => {
        console.log(response);
      },
    });
  }
}
