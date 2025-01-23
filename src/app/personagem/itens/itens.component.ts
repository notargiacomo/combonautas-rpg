import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
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

  constructor(private readonly service: ItemService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [''],
      tracos: [''],
    });

    this.service.listar({ tipo: TipoItem.ARMA }).subscribe({
      next: (response) => {
        this.armas = response;
        this.numero_registros_armas = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.MUNICAO }).subscribe({
      next: (response) => {
        this.municoes = response;
        this.numero_registros_municoes = this.municoes.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.ARMADURA }).subscribe({
      next: (response) => {
        this.armaduras = response;
        this.numero_registros_armadura = this.armaduras.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.EQUIPAMENTO_AVENTURA }).subscribe({
      next: (response) => {
        this.equipamentos_aventura = response;
        this.numero_registros_equipamento_aventura = this.equipamentos_aventura.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.FERRAMENTA }).subscribe({
      next: (response) => {
        this.ferramentas = response;
        this.numero_registros_ferramenta = this.ferramentas.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.VESTUARIO }).subscribe({
      next: (response) => {
        this.vestuarios = response;
        this.numero_registros_vestuario = this.vestuarios.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.ESOTERICO }).subscribe({
      next: (response) => {
        this.esotericos = response;
        this.numero_registros_esoterico =
          this.esotericos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.ALQUÍMICO }).subscribe({
      next: (response) => {
        this.alquimicos = response;
        this.numero_registros_alquimico =
          this.alquimicos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.ALIMENTO }).subscribe({
      next: (response) => {
        this.alimentos = response;
        this.numero_registros_alimento =
          this.alimentos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.VEICULOS }).subscribe({
      next: (response) => {
        this.veiculos = response;
        this.numero_registros_veiculo =
          this.alimentos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.SERVICOS }).subscribe({
      next: (response) => {
        this.servicos = response;
        this.numero_registros_servico =
          this.servicos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.MELHORIAS }).subscribe({
      next: (response) => {
        this.melhorias = response;
        this.numero_registros_melhoria =
          this.melhorias.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.RIQUEZAS }).subscribe({
      next: (response) => {
        this.riquezas = response;
        this.numero_registros_riqueza =
          this.riquezas.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.ENCANTOS }).subscribe({
      next: (response) => {
        this.encantos = response;
        this.numero_registros_encanto =
          this.encantos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
    this.service.listar({ tipo: TipoItem.POCOES_MAGICAS }).subscribe({
      next: (response) => {
        this.pocoes_magicas = response;
        this.numero_registros_pocao_magica =
          this.pocoes_magicas.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.ACESSORIOS_MAGICOS }).subscribe({
      next: (response) => {
        this.acessorios_magicos = response;
        this.numero_registros_acessorio_magico =
          this.acessorios_magicos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({ tipo: TipoItem.ARTEFATOS }).subscribe({
      next: (response) => {
        this.artefatos = response;
        this.numero_registros_artefato =
          this.artefatos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  filtro_traco: string = '';

  consultarArmas(): void {
    let filtro = { ...this.form.value };
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    if (filtro.tracos) {
      filtro.tracos = '';
      this.filtro_traco = this.form.value.tracos;
    }

    filtro.tipo = TipoItem.ARMA;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.armas = response;
        this.numero_registros_armas = this.armas.length;
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        let armas_filtradas: Item[] = [];
        if (this.filtro_traco.length !== 0) {
          this.armas.forEach((arma) => {
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
                if (!armas_filtradas.includes(arma)) {
                  armas_filtradas.push(arma);
                }
              }
            });
          });
          this.armas = armas_filtradas;
          this.numero_registros_armas = this.armas.length;
        }
      },
    });
  }

  consultarArmaduras() {
    let filtro = { ...this.form.value };
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    if (filtro.tracos) {
      filtro.tracos = '';
      this.filtro_traco = this.form.value.tracos;
    }

    filtro.tipo = TipoItem.ARMADURA;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.armaduras = response;
        this.numero_registros_armadura = this.armaduras.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarMunicoes() {
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.MUNICAO;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.municoes = response;
        this.numero_registros_municoes =
          this.municoes.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarEquipamentosAventura() {
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.EQUIPAMENTO_AVENTURA;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.equipamentos_aventura = response;
        this.numero_registros_equipamento_aventura =
          this.equipamentos_aventura.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarFerramentas(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.FERRAMENTA;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.ferramentas = response;
        this.numero_registros_ferramenta =
          this.ferramentas.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarVestuario(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.VESTUARIO;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.vestuarios = response;
        this.numero_registros_vestuario =
          this.vestuarios.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarEsotericos(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.ESOTERICO;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.esotericos = response;
        this.numero_registros_esoterico =
          this.esotericos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarAlquimicos(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.ALQUÍMICO;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.alquimicos = response;
        this.numero_registros_alquimico =
          this.alquimicos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarAlimentos(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.ALIMENTO;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.alimentos = response;
        this.numero_registros_alimento =
          this.alimentos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarAnimais(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.ANIMAIS;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.animais = response;
        this.numero_registros_animal =
          this.animais.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarServicos(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.SERVICOS;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.veiculos = response;
        this.numero_registros_veiculo =
          this.veiculos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarVeiculos(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.VEICULOS;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.servicos = response;
        this.numero_registros_servico =
          this.servicos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarMelhorias(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.MELHORIAS;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.melhorias = response;
        this.numero_registros_melhoria =
          this.melhorias.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarRiquezas(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.RIQUEZAS;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.riquezas = response;
        this.numero_registros_riqueza =
          this.riquezas.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarEncantos(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.ENCANTOS;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.encantos = response;
        this.numero_registros_encanto =
          this.encantos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarPocoesMagicas(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.POCOES_MAGICAS;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.pocoes_magicas = response;
        this.numero_registros_pocao_magica =
          this.pocoes_magicas.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarAcessoriosMagicos(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.ACESSORIOS_MAGICOS;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.acessorios_magicos = response;
        this.numero_registros_acessorio_magico =
          this.acessorios_magicos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarArtefatos(){
    let filtro = { ...this.form.value };

    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    filtro.tipo = TipoItem.ACESSORIOS_MAGICOS;

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.artefatos = response;
        this.numero_registros_artefato =
          this.artefatos.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

}
