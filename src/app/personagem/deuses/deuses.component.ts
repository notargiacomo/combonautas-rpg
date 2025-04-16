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
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
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
import { Deslocamento } from '../../enum/deslocamento.enum';
import { Modificador } from '../../enum/modificador.enum';
import { Referencia } from '../../enum/referencia.enum';
import { Deus } from '../../model/deus';
import { DeusService } from '../../service/deus.service';
import { PoderService } from '../../service/poder.service';
import { response } from 'express';

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
    NgClass,
    MatTabsModule,
],
  templateUrl: './deuses.component.html',
  styleUrl: './deuses.component.scss',
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
export class DeusesComponent implements OnInit {
  columnsToDisplay = ['nome', 'tipo'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Deus | null;
  isExpandedRow = (index: number, row: any) => row === this.expandedElement;
  deuses!: Deus[];
  
  atributo = [-2, -1, 0, 1, 2, 3];
  numero_registros = 0;
  dataSource = new MatTableDataSource<Deus>();
  form!: FormGroup;

  bonus = Object.values(Modificador);

  constructor(
    private readonly deusService: DeusService,
    private readonly poderService: PoderService,
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
      regiao: [],
      temMagia: [],
      temPoderGeral: [],
      temPericia: [],
      temRD: [],
      concedeDinheiro: [],
      concedeFerramenta: [],
      concedeParceiro: [],
      bonus: [],
    });
  }

  limparFiltros() {
    this.reiniciaFormulario();
    this.consultar();
  }

  checkDeslocamento(deslocamento: Deslocamento, isChecked: boolean): void {
    const formArray = this.form.controls['deslocamentos'] as FormArray;
    if (isChecked) {
      formArray.push(new FormControl(deslocamento));
    } else {
      const index = formArray.controls.findIndex(
        (item) => item.value === deslocamento
      );
      formArray.removeAt(index);
    }

    this.consultar();
  }

  checkReferencia(referencia: Referencia, isChecked: boolean): void {
    const formArray = this.form.controls['referencias'] as FormArray;
    if (isChecked) {
      formArray.push(new FormControl(referencia));
    } else {
      const index = formArray.controls.findIndex(
        (item) => item.value === referencia
      );
      formArray.removeAt(index);
    }

    this.consultar();
  }

  consultar() {
    let filtro = this.form.value;
  
    // Corrigir tipos
    ['forca', 'destreza', 'constituicao', 'inteligencia', 'sabedoria', 'carisma'].forEach(campo => {
      if (filtro[campo] !== null && filtro[campo] !== undefined && filtro[campo] !== '') {
        filtro[campo] = Number(filtro[campo]);
      } else {
        delete filtro[campo]; // Remove para não enviar vazio
      }
    });
  
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
          this.poderService.listar({id_deuses:deus.id}).subscribe({
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
            }
          });
        });
        this.cdr.detectChanges();
      },

      error: (response: any[]) => {
        console.log(response);
      },

      complete: () => {
        this.dataSource = new MatTableDataSource(this.deuses);
      },
    });
  }
}
