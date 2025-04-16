import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Modificador } from '../../enum/modificador.enum';
import { Classe } from '../../model/classe';
import { Deus } from '../../model/deus';
import { Pericia } from '../../model/pericia';
import { PericiasService } from '../../service/pericia.service';
import { Atributo } from '../../enum/atributo.enum';

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
    NgClass,
    MatTabsModule,
],
  templateUrl: './pericias.component.html',
  styleUrl: './pericias.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0', maxHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PericiasComponent implements OnInit {
  columnsToDisplay = ['nome'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Pericia | null;
  isExpandedRow = (index: number, row: any) => row === this.expandedElement;
  pericias!: Pericia[];
  atributos = Object.values(Atributo);
  
  atributo = [-2, -1, 0, 1, 2, 3];
  numero_registros = 0;
  dataSource = new MatTableDataSource<Classe>();
  form!: FormGroup;

  bonus = Object.values(Modificador);

  constructor(
    private readonly periciasService: PericiasService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.reiniciaFormulario();
    this.consultar();
  }

  isOdd(element: any): boolean {
    const index = this.dataSource.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  isExpanded(element: Deus) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: Deus) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const linhas = document.querySelectorAll('tr.valorado');
      linhas.forEach((linha, index) => {
        if (index % 2 === 1) {
          (linha as HTMLElement).style.backgroundColor = '#f2f2f2';
        }
      });
    });
  }

  private reiniciaFormulario() {
    this.form = this.fb.group({
      nome: [],
      atributo: []
    });
  }

  limparFiltros() {
    this.reiniciaFormulario();
    this.consultar();
  }

  consultar() {
    let filtro = this.form.value;
  
    this.periciasService.listar(filtro).subscribe({
      next: (response: any[]) => {
        response.sort((a, b) => {
          let nome_a = a.nome ? a.nome : 'a';
          let nome_b = b.nome ? b.nome : 'b';
          return nome_a.localeCompare(nome_b);
        });
        this.pericias = response;
        this.numero_registros = response.length;
        this.cdr.detectChanges();
      },

      error: (response: any[]) => {
        console.log(response);
      },

      complete: () => {
        this.dataSource = new MatTableDataSource(this.pericias);
      },
    });
  }

  selecaoAtributos(event: any): void {
    this.form.controls['atributo'].setValue(event);
    this.consultar();
  }
}
