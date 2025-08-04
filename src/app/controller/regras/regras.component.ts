import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Regra } from '@app/model/regra'; 
import { RegraService } from '@app/service/regra.service'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-regras',
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
    // NgFor,
    // NgIf,
    NgClass,
    MatTabsModule,
],
  templateUrl: './regras.component.html',
  styleUrl: './regras.component.scss'
})
export class RegrasComponent {
columnsToDisplay = ['nome', 'tipo', 'tamanho'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Regra | null;
  isExpandedRow = (index: number, row: any) => row === this.expandedElement;
  regras!: Regra[];
  atributo = [-2, -1, 0, 1, 2, 3];
  numero_registros = 0;
  selectedIndex: number = 0;
  dataSource = new MatTableDataSource<Regra>();
  form!: FormGroup;

  constructor(
    private readonly regraService: RegraService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.reiniciaFormulario();

    this.regraService.listar(null).subscribe({
      next: (response) => {
        this.regras = response;
        this.numero_registros = response.length;
        this.cdr.detectChanges();
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        this.dataSource = new MatTableDataSource(this.regras);
      },
    });
  }

  isOdd(element: any): boolean {
    const index = this.dataSource.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  isExpanded(element: Regra) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: Regra) {
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
      tipo: [],
      tamanho: [],
      sentidos: [],
      deslocamentos: [],
      forca: [],
      destreza: [],
      constituicao: [],
      inteligencia: [],
      sabedoria: [],
      carisma: [],
      temMagia: [],
      temPoderGeral: [],
      temPericia: [],
      temRD: [],
      temArmaNatural: [],
      temDefeito: [],
      bonus: [],
      penalidade: [],
      // referencias: new FormArray([]),
      nome: [],
      selecao: []
    });
  }

  limparFiltros() {
    this.reiniciaFormulario();
    this.consultar();
  }

  consultar() {
    let filtro = this.form.value;
  
    if (filtro.nome) {
      filtro.nome = '^' + filtro.nome;
    }
  
    // Corrigir tipos
    ['forca', 'destreza', 'constituicao', 'inteligencia', 'sabedoria', 'carisma'].forEach(campo => {
      if (filtro[campo] !== null && filtro[campo] !== undefined && filtro[campo] !== '') {
        filtro[campo] = Number(filtro[campo]);
      } else {
        delete filtro[campo]; // Remove para não enviar vazio
      }
    });
  
    this.regraService.listar(filtro).subscribe({
      next: (response: any[]) => {
        this.regras = response;
        this.numero_registros = response.length;
        this.cdr.detectChanges();
      },
      error: (response: any[]) => {
        console.log(response);
      },
      complete: () => {
        this.dataSource = new MatTableDataSource(this.regras);
      },
    });
  }

 
}
