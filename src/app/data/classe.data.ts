import { Injectable } from '@angular/core';

import { Referencia } from '../enum/referencia.enum';
import { Classe } from '../model/classe';
import { Proficiencia } from '../enum/proficiencia.enum';

@Injectable({
  providedIn: 'root',
})
export class ClasseData {
  private classes: Classe[] = [];

  getClasses(): any[] {
    return this.classes;
  }

  constructor() {
    this.classes = [
      {
        id: 1,
        nome: 'Arcanista',
        nome_arquivo_descricao_classe:'classe_arcanista_descricao',
        nome_arquivo_descricao_habilidades:'classe_arcanista_habilidades',
        nome_arquivo_descricao_poderes:'classe_arcanista_poderes',
        nome_arquivo_descricao_informacoes: 'classe_arcanista_informacoes',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        descricao_informacoes: '',
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria:'',
        pericia_escolha_entre_duas:['Misticismo', 'Misticismo'],
        pericias_escolha_grupo:['Conhecimento', 'Diplomacia','Enganação', 'Guerra', 'Iniciativa', 'Intimidação', 'Intuição', 'Investigação', 'Nobreza', 'Ofício', 'Percepção'],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_arcanista.png',
        tabela: 'assets/img/tabela_classe_arcanista.png',
        referencias: Referencia.BASICO,
        paginas: '36, 37, 38 e 39'
      }
    ];
  }
}
