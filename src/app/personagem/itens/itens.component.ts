import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { ItemService } from '../../service/item.service';
import { Item } from '../../model/item';
import { TipoItem } from '../../enum/tipo.item.enum';
import { CaixaInformativaComponent } from '../../components/caixa-informativa.component';
import { MatDialog } from '@angular/material/dialog';
import { Regras } from '../../enum/regras.enum';

@Component({
  selector: 'app-itens',
  imports: [
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    NgFor, //NgIf,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.scss',
})
export class ItensComponent {
  form!: FormGroup;
  armas!: Item[];
  municoes!: Item[];
  armaduras!: Item[];
  equipamentos_aventura!: Item[];
  ferramentas!: Item[];
  vestuarios!: Item[];
  esotericos!: Item[];
  alquimicos!: Item[];
  alimentos!: Item[];
  animais!: Item[];
  veiculos!: Item[];
  servicos!: Item[];
  melhorias!: Item[];
  riquezas!: Item[];
  encantos!: Item[];
  pocoes_magicas!: Item[];
  acessorios_magicos!: Item[];
  artefatos!: Item[];

  numero_registros_armas = 0;
  numero_registros_municoes = 0;
  numero_registros_armadura = 0;
  numero_registros_equipamento_aventura = 0;
  numero_registros_ferramenta = 0;
  numero_registros_vestuario = 0;
  numero_registros_esoterico = 0;
  numero_registros_alquimico = 0;
  numero_registros_alimento = 0;
  numero_registros_animal = 0;
  numero_registros_veiculo = 0;
  numero_registros_servico = 0;
  numero_registros_melhoria = 0;
  numero_registros_riqueza = 0;
  numero_registros_encanto = 0;
  numero_registros_pocao_magica = 0;
  numero_registros_acessorio_magico = 0;
  numero_registros_artefato = 0;
  filtro_traco: string = '';

  constructor(private readonly service: ItemService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [''],
      tracos: [''],
    });

    this.consultar(0);
    this.consultar(1);
    this.consultar(2);
    this.consultar(3);
    this.consultar(4);
    this.consultar(5);
    this.consultar(6);
    this.consultar(7);
    this.consultar(8);
    this.consultar(9);
    this.consultar(10);
    this.consultar(11);
    this.consultar(12);
    this.consultar(13);
    this.consultar(14);
    this.consultar(15);
    this.consultar(16);
    this.consultar(17);
    this.consultar(18);
  }

  consultar(idTipo: number): void {
    let filtro = { ...this.form.value };
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    if (filtro.tracos) {
      filtro.tracos = '';
      this.filtro_traco = this.form.value.tracos;
    }

    this.consultarTodos(idTipo, filtro);
  }

  consultarTodos(idTipo: number, filtro: string) {
    (filtro as any).tipo = Object.values(TipoItem)[idTipo];

    this.service.listar(filtro).subscribe({
      next: (response) => {
        if ((filtro as any).tipo === TipoItem.ARMA) {
          this.armas = response;
          this.numero_registros_armas = this.armas?.length;
        }
        if ((filtro as any).tipo === TipoItem.MUNICAO) {
          this.municoes = response;
          this.numero_registros_municoes = this.municoes?.length;
        }
        if ((filtro as any).tipo === TipoItem.ARMADURA) {
          this.armaduras = response;
          this.numero_registros_armadura = this.armaduras?.length;
        }
        if ((filtro as any).tipo === TipoItem.EQUIPAMENTO_AVENTURA) {
          this.equipamentos_aventura = response;
          this.numero_registros_equipamento_aventura =
            this.equipamentos_aventura?.length;
        }
        if ((filtro as any).tipo === TipoItem.FERRAMENTA) {
          this.ferramentas = response;
          this.numero_registros_ferramenta = this.ferramentas?.length;
        }
        if ((filtro as any).tipo === TipoItem.VESTUARIO) {
          this.vestuarios = response;
          this.numero_registros_vestuario = this.vestuarios?.length;
        }
        if ((filtro as any).tipo === TipoItem.ESOTERICO) {
          this.esotericos = response;
          this.numero_registros_esoterico = this.esotericos?.length;
        }
        if ((filtro as any).tipo === TipoItem.ALQUIMICO) {
          this.alquimicos = response;
          this.numero_registros_alquimico = this.alquimicos?.length;
        }
        if ((filtro as any).tipo === TipoItem.ALIMENTACAO) {
          this.alimentos = response;
          this.numero_registros_alimento = this.alimentos?.length;
        }
        if ((filtro as any).tipo === TipoItem.ANIMAIS) {
          this.animais = response;
          this.numero_registros_animal = this.animais?.length;
        }
        if ((filtro as any).tipo === TipoItem.VEICULOS) {
          this.veiculos = response;
          this.numero_registros_veiculo = this.veiculos?.length;
        }
        if ((filtro as any).tipo === TipoItem.SERVICOS) {
          this.servicos = response;
          this.numero_registros_servico = this.servicos?.length;
        }
        if ((filtro as any).tipo === TipoItem.MELHORIAS) {
          this.melhorias = response;
          this.numero_registros_melhoria = this.melhorias?.length;
        }
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {},
    });
  }

  consultaTracos(tipo: TipoItem) {
    if (tipo === TipoItem.ARMA) {
      this.armas = this.consultarTracosTodosItens(this.armas);
      this.numero_registros_armas = this.armas.length;
    }
  }

  consultarTracosTodosItens(itens: Item[]): Item[] {
    let itens_filtrado: Item[] = [];
    if (this.filtro_traco.length !== 0) {
      itens.forEach((arma) => {
        arma.tracos?.forEach((traco) => {
          if (
            traco
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .includes(
                this.filtro_traco
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
              )
          ) {
            if (!itens_filtrado.includes(arma)) {
              itens_filtrado.push(arma);
            }
          }
        });
      });
    }

    return itens_filtrado;
  }

  
  readonly dialog = inject(MatDialog);
    
  openDialog(titulo: string, idTexto: number) {
    this.dialog.open(CaixaInformativaComponent, {
      data: {
        titulo: titulo,
        texto: Object.values(Regras)[idTexto],
      },
    });
  }


}
