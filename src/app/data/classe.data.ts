import { Injectable } from '@angular/core';

import { Referencia } from '../enum/referencia.enum';
import { Classe } from '../model/classe';

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
        nome: '',
        nome_arquivo_descricao_classe:'',
        nome_arquivo_descricao_poderes:'',
        descricao_classe: '',
        descricao_poderes: '',
        fator_vida: 0,
        fator_mana:0,
        proficiencias: [],
        pericia_obrigatoria:'',
        pericia_escolha_entre_duas:[],
        pericias_escolha_grupo:[],
        numero_pericias_escolha_grupo:0,
        imagem: '',
        referencias: '',
        paginas: ''
      }
    ];
  }
}
