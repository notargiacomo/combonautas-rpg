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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { Raca } from '@app/model/raca';
import { PoderService } from '@app/service/poder.service';
import { RacaService } from '@app/service/raca.service';

@Component({
  selector: 'app-racas',
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
    MatGridListModule,
  ],
  templateUrl: './racas.component.html',
  styleUrl: './racas.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0', maxHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RacasComponent implements OnInit {
  isMobile = false;

  racas!: Raca[];

  numero_registros = 0;
  dataSource = new MatTableDataSource<Raca>();
  form!: FormGroup;

  constructor(
    private readonly racaService: RacaService,
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

  ngAfterViewInit() {}

  private reiniciaFormulario() {
    this.form = this.fb.group({
      nome: [],
    });
  }

  consultar() {
    let filtro = this.form.value;
    console.log(this.form.value);

    this.racaService.listar(filtro).subscribe({
      next: response => {
        response.sort((a, b) => {
          let nome_a = a.nome ? a.nome : 'a';
          let nome_b = b.nome ? b.nome : 'b';
          return nome_a.localeCompare(nome_b);
        });

        this.racas = response;
        this.numero_registros = response.length;

        this.racas.forEach(raca => {
          this.poderService.listar({ id_raca: raca.id, tipo: TipoPoder.PODER_RACA }).subscribe({
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
              raca.poderes = response;
            },
          });
          this.poderService.listar({ id_raca: raca.id, tipo: TipoPoder.HABILIDADE_RACA }).subscribe({
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
              raca.habilidades = response;
            },
          });
        });
        this.cdr.detectChanges();
      },
      error: response => {
        console.log(response);
      },
    });

    // this.racaService.listar(filtro).subscribe({
    //   next: (response: any[]) => {
    //     response.sort((a, b) => {
    //       let nome_a = a.nome ? a.nome : 'a';
    //       let nome_b = b.nome ? b.nome : 'b';
    //       return nome_a.localeCompare(nome_b);
    //     });

    //     this.racas = response;
    //     this.numero_registros = response.length;

    //     this.racas.forEach(raca => {
    //       this.poderService.listar({ id_raca: raca.id, tipo: TipoPoder.PODER_RACA }).subscribe({
    //         next: (response: any[]) => {
    //           response.sort((a, b) => {
    //             let nome_a = a.nome ? a.nome : 'a';
    //             let nome_b = b.nome ? b.nome : 'b';
    //             return nome_a.localeCompare(nome_b);
    //           });
    //           response.forEach(poder => {
    //             poder.descricao = '<b>' + poder.nome + '.</b> ' + poder.descricao;
    //             if (poder.e_poder_magico) {
    //               poder.descricao += '<i><b> e</b></i>';
    //             }
    //           });
    //           raca.poderes = response;
    //         },
    //       });
    //       this.poderService.listar({ id_raca: raca.id, tipo: TipoPoder.HABILIDADE_RACA }).subscribe({
    //         next: (response: any[]) => {
    //           response.sort((a, b) => {
    //             let nome_a = a.nome ? a.nome : 'a';
    //             let nome_b = b.nome ? b.nome : 'b';
    //             return nome_a.localeCompare(nome_b);
    //           });
    //           response.forEach(poder => {
    //             poder.descricao = '<b>' + poder.nome + '.</b> ' + poder.descricao;
    //             if (poder.e_poder_magico) {
    //               poder.descricao += '<i><b> e</b></i>';
    //             }
    //           });
    //           raca.habilidades = response;
    //         },
    //       });
    //     });
    //     this.cdr.detectChanges();
    //   },
    //   error: (response: any[]) => {
    //     console.log(response);
    //   },
    //   complete: () => {
    //     this.dataSource = new MatTableDataSource(this.racas);
    //   },
    // });
  }
}
