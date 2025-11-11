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
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { Classe } from '@app/model/classe';
import { ClasseService } from '@app/service/classe.service';
import { PoderService } from '@app/service/poder.service';

@Component({
  selector: 'app-classes',
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
    // NgClass,
    MatTabsModule,
    MatGridList,
    MatGridTile,
  ],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0', maxHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClassesComponent implements OnInit {
  isMobile = false;

  classes: Classe[] = [];
  numero_registros = 0;
  form!: FormGroup;

  constructor(
    private readonly classeService: ClasseService,
    private readonly poderService: PoderService,
    private fb: FormBuilder,
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

  consultar() {
    let filtro = this.form.value;

    this.classeService.listar(filtro).subscribe({
      next: (response: any[]) => {
        response.sort((a, b) => {
          let nome_a = a.nome ? a.nome : 'a';
          let nome_b = b.nome ? b.nome : 'b';
          return nome_a.localeCompare(nome_b);
        });
        this.classes = response;
        this.numero_registros = response.length;

        this.classes.forEach(classe => {
          if (classe.usa_poderes_variantes) {
            this.poderService.listar({ id_classe: classe.id, tipo: TipoPoder.PODER_CLASSE }).subscribe({
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
                classe.poderes = response;
              },
            });
          } else if (classe.id_classe_pai) {
            this.poderService.listar({ id_classe: classe.id_classe_pai, tipo: TipoPoder.PODER_CLASSE }).subscribe({
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
                classe.poderes = response;
              },
            });
          } else {
            this.poderService.listar({ id_classe: classe.id, tipo: TipoPoder.PODER_CLASSE }).subscribe({
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
                classe.poderes = response;
              },
            });
          }
        });

        this.classes.forEach(classe => {
          this.poderService.listar({ id_classe: classe.id, tipo: TipoPoder.HABILIDADE_CLASSE }).subscribe({
            next: (response: any[]) => {
              response.sort((a, b) => a.prerequisito_nivel - b.prerequisito_nivel);
              response.forEach(poder => {
                poder.descricao = '<b>' + poder.nome + '.</b> ' + poder.descricao;
                if (poder.e_poder_magico) {
                  poder.descricao += '<i><b> e</b></i>';
                }
              });
              classe.habilidades = response;
            },
          });
        });
      },

      error: (response: any[]) => {
        console.log(response);
      },
    });
  }
}
