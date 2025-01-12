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
        pericia_obrigatoria:'Vontade',
        pericia_escolha_entre_duas:['Misticismo', 'Misticismo'],
        pericias_escolha_grupo:['Conhecimento', 'Diplomacia','Enganação', 'Guerra', 'Iniciativa', 'Intimidação', 'Intuição', 'Investigação', 'Nobreza', 'Ofício', 'Percepção'],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_arcanista.png',
        tabela: 'assets/img/tabela_classe_arcanista.png',
        referencias: Referencia.BASICO,
        paginas: '36, 37, 38 e 39'
      },
      {
        id: 2,
        nome: 'Bárbaro',
        nome_arquivo_descricao_classe:'classe_barbaro_descricao',
        nome_arquivo_descricao_habilidades:'classe_barbaro_habilidades',
        nome_arquivo_descricao_poderes:'classe_barbaro_poderes',
        nome_arquivo_descricao_informacoes: 'classe_barbaro_informacoes',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        descricao_informacoes: '',
        fator_vida: 6,
        fator_mana: 3,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES, Proficiencia.ARMAS_MARCIAIS, Proficiencia.ESCUDOS],
        pericia_obrigatoria:'Fortitude',
        pericia_escolha_entre_duas:['Luta', 'Luta'],
        pericias_escolha_grupo:['Adestramento', 'Atletismo','Cavalgar', 'Iniciativa', 'Intimidação', 'Ofício', 'Percepção', 'Pontaria', 'Sobrevivência', 'Vontade'],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_barbaro.png',
        tabela: 'assets/img/tabela_classe_barbaro.png',
        referencias: Referencia.BASICO,
        paginas: '40, 41 e 42'
      },
      {
        id: 3,
        nome: 'Bardo',
        nome_arquivo_descricao_classe:'classe_bardo_descricao',
        nome_arquivo_descricao_habilidades:'classe_bardo_habilidades',
        nome_arquivo_descricao_poderes:'classe_bardo_poderes',
        nome_arquivo_descricao_informacoes: 'classe_bardo_informacoes',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        descricao_informacoes: '',
        fator_vida: 3,
        fator_mana: 4,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES, Proficiencia.ARMAS_MARCIAIS],
        pericia_obrigatoria:'Reflexos',
        pericia_escolha_entre_duas:['Atuação'],
        pericias_escolha_grupo:['Acrobacia', 'Cavalgar','Conhecimento', 'Diplomacia', 'Enganação', 'Furtividade', 'Iniciativa', 'Intuição', 'Investigação', 'Jogatina', 'Ladinagem', 'Luta', 'Misticismo', 'Nobreza', 'Percepção', 'Pontaria', 'Vontade'],
        numero_pericias_escolha_grupo: 6,
        imagem: 'assets/img/classe_bardo.png',
        tabela: 'assets/img/tabela_classe_bardo.png',
        referencias: Referencia.BASICO,
        paginas: '43, 44 e 45'
      },
      {
        id: 4,
        nome: 'Bucaneiro',
        nome_arquivo_descricao_classe:'classe_bucaneiro_descricao',
        nome_arquivo_descricao_habilidades:'classe_bucaneiro_habilidades',
        nome_arquivo_descricao_poderes:'classe_bucaneiro_poderes',
        nome_arquivo_descricao_informacoes: 'classe_bucaneiro_informacoes',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        descricao_informacoes: '',
        fator_vida: 4,
        fator_mana: 3,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES, Proficiencia.ARMAS_MARCIAIS],
        pericia_obrigatoria:'Reflexos',
        pericia_escolha_entre_duas:['Luta', 'Pontaria'],
        pericias_escolha_grupo:['Acrobacia', 'Atletismo','Atuação', 'Enganação', 'Fortitude','Furtividade', 'Iniciativa', 'Intimidação', 'Jogatina', 'Luta', 'Ofício','Percepção', 'Pilotagem', 'Pontaria'],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_bucaneiro.png',
        tabela: 'assets/img/tabela_classe_bucaneiro.png',
        referencias: Referencia.BASICO,
        paginas: '46, 47 e 48'
      },
      {
        id: 5,
        nome: 'Caçador',
        nome_arquivo_descricao_classe:'classe_cacador_descricao',
        nome_arquivo_descricao_habilidades:'classe_cacador_habilidades',
        nome_arquivo_descricao_poderes:'classe_cacador_poderes',
        nome_arquivo_descricao_informacoes: 'classe_cacador_informacoes',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        descricao_informacoes: '',
        fator_vida: 4,
        fator_mana: 4,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES, Proficiencia.ARMAS_MARCIAIS, Proficiencia.ESCUDOS],
        pericia_obrigatoria:'Sobrevivência',
        pericia_escolha_entre_duas:['Luta', 'Pontaria'],
        pericias_escolha_grupo:['Adestramento', 'Atletismo', 'Cavalgar', 'Cura', 'Fortitude', 'Furtividade', 'Iniciativa', 'Investigação', 'Luta', 'Ofício', 'Percepção', 'Pontaria', 'Reflexos'],
        numero_pericias_escolha_grupo: 6,
        imagem: 'assets/img/classe_cacador.png',
        tabela: 'assets/img/tabela_classe_cacador.png',
        referencias: Referencia.BASICO,
        paginas: '49, 50 e 51'
      },
      {
        id: 6,
        nome: 'Cavaleiro',
        nome_arquivo_descricao_classe:'classe_cavaleiro_descricao',
        nome_arquivo_descricao_habilidades:'classe_cavaleiro_habilidades',
        nome_arquivo_descricao_poderes:'classe_cavaleiro_poderes',
        nome_arquivo_descricao_informacoes: 'classe_cavaleiro_informacoes',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        descricao_informacoes: '',
        fator_vida: 5,
        fator_mana: 3,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES, Proficiencia.ARMAS_MARCIAIS, Proficiencia.ESCUDOS],
        pericia_obrigatoria:'Luta',
        pericia_escolha_entre_duas:['Fortitude'],
        pericias_escolha_grupo:['Adestramento', 'Atletismo', 'Cavalgar', 'Diplomacia', 'Guerra', 'Iniciativa', 'Intimidação', 'Nobreza', 'Percepção', 'Vontade'],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_cavaleiro.png',
        tabela: 'assets/img/tabela_classe_cavaleiro.png',
        referencias: Referencia.BASICO,
        paginas: '52, 53, 54 e 55'
      },
      {
        id: 7,
        nome: 'Clérigo',
        nome_arquivo_descricao_classe:'classe_clerigo_descricao',
        nome_arquivo_descricao_habilidades:'classe_clerigo_habilidades',
        nome_arquivo_descricao_poderes:'classe_clerigo_poderes',
        nome_arquivo_descricao_informacoes: 'classe_clerigo_informacoes',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        descricao_informacoes: '',
        fator_vida: 4,
        fator_mana: 5,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES, Proficiencia.ARMAS_MARCIAIS, Proficiencia.ARMADURAS_PESADAS, Proficiencia.ESCUDOS],
        pericia_obrigatoria:'Vontade',
        pericia_escolha_entre_duas:['Religião'],
        pericias_escolha_grupo:['Conhecimento', 'Cura', 'Diplomacia', 'Fortitude', 'Iniciativa', 'Intuição', 'Luta', 'Misticismo', 'Nobreza', 'Ofício', 'Percepção'],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_clerigo.png',
        tabela: 'assets/img/tabela_classe_clerigo.png',
        referencias: Referencia.BASICO,
        paginas: '56, 57, 58 e 59'
      },
      {
        id: 8,
        nome: 'Druida',
        nome_arquivo_descricao_classe:'classe_druida_descricao',
        nome_arquivo_descricao_habilidades:'classe_druida_habilidades',
        nome_arquivo_descricao_poderes:'classe_druida_poderes',
        nome_arquivo_descricao_informacoes: 'classe_druida_informacoes',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        descricao_informacoes: '',
        fator_vida: 4,
        fator_mana: 4,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES, Proficiencia.ESCUDOS],
        pericia_obrigatoria:'Vontade',
        pericia_escolha_entre_duas:['Sobrevivência'],
        pericias_escolha_grupo:['Adestramento', 'Atletismo', 'Cavalgar', 'Conhecimento', 'Cura', 'Fortitude', 'Iniciativa', 'Intuição', 'Luta', 'Misticismo', 'Ofício', 'Percepção', 'Religião'],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_druida.png',
        tabela: 'assets/img/tabela_classe_druida.png',
        referencias: Referencia.BASICO,
        paginas: '56, 57, 58 e 59'
      },
      {
        id: 9,
        nome: 'Guerreiro',
        nome_arquivo_descricao_classe:'classe_guerreiro_descricao',
        nome_arquivo_descricao_habilidades:'classe_guerreiro_habilidades',
        nome_arquivo_descricao_poderes:'classe_guerreiro_poderes',
        nome_arquivo_descricao_informacoes: 'classe_guerreiro_informacoes',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        descricao_informacoes: '',
        fator_vida: 5,
        fator_mana: 3,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES, Proficiencia.ARMAS_MARCIAIS, Proficiencia.ARMADURAS_PESADAS,Proficiencia.ESCUDOS],
        pericia_obrigatoria:'Fortitude',
        pericia_escolha_entre_duas:['Luta', 'Pontaria'],
        pericias_escolha_grupo:['Adestramento', 'Atletismo', 'Cavalgar', 'Guerra', 'Iniciativa', 'Intimidação', 'Luta', 'Ofício', 'Percepção', 'Pontaria', 'Reflexos'],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_guerreiro.png',
        tabela: 'assets/img/tabela_classe_guerreiro.png',
        referencias: Referencia.BASICO,
        paginas: '64, 65 e 66'
      },
      {
        id: 10,
        nome: 'Inventor',
        nome_arquivo_descricao_classe:'classe_inventor_descricao',
        nome_arquivo_descricao_habilidades:'classe_inventor_habilidades',
        nome_arquivo_descricao_poderes:'classe_inventor_poderes',
        nome_arquivo_descricao_informacoes: 'classe_inventor_informacoes',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        descricao_informacoes: '',
        fator_vida: 3,
        fator_mana: 4,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES],
        pericia_obrigatoria:'Vontade',
        pericia_escolha_entre_duas:['Ofício'],
        pericias_escolha_grupo:['Conhecimento', 'Cura', 'Diplomacia', 'Fortitude', 'Iniciativa', 'Investigação', 'Luta', 'Misticismo', 'Ofício', 'Pilotagem', 'Percepção', 'Pontaria'],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_inventor.png',
        tabela: 'assets/img/tabela_classe_inventor.png',
        referencias: Referencia.BASICO,
        paginas: '67, 68, 69, 70 e 71'
      },
      {
        id: 11,
        nome: 'Ladino',
        nome_arquivo_descricao_classe:'classe_ladino_descricao',
        nome_arquivo_descricao_habilidades:'classe_ladino_habilidades',
        nome_arquivo_descricao_poderes:'classe_ladino_poderes',
        nome_arquivo_descricao_informacoes: '',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: false,
        descricao_informacoes: '',
        fator_vida: 3,
        fator_mana: 4,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES],
        pericia_obrigatoria:'Reflexos',
        pericia_escolha_entre_duas:['Ladinagem'],
        pericias_escolha_grupo:['Acrobacia', 'Atletismo', 'Atuação', 'Cavalgar', 'Conhecimento', 'Diplomacia', 'Enganação', 'Furtividade', 'Iniciativa', 'Intimidação', 'Intuição', 'Investigação', 'Jogatina', 'Luta', 'Ofício', 'Percepção', 'Pilotagem', 'Pontaria'],
        numero_pericias_escolha_grupo: 8,
        imagem: 'assets/img/classe_ladino.png',
        tabela: 'assets/img/tabela_classe_ladino.png',
        referencias: Referencia.BASICO,
        paginas: '72, 73 e 74'
      },
      {
        id: 12,
        nome: 'Lutador',
        nome_arquivo_descricao_classe:'classe_lutador_descricao',
        nome_arquivo_descricao_habilidades:'classe_lutador_habilidades',
        nome_arquivo_descricao_poderes:'classe_lutador_poderes',
        nome_arquivo_descricao_informacoes: '',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: false,
        descricao_informacoes: '',
        fator_vida: 5,
        fator_mana: 3,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES],
        pericia_obrigatoria:'Luta',
        pericia_escolha_entre_duas:['Fortitude'],
        pericias_escolha_grupo:['Acrobacia', 'Atletismo', 'Adestramento','Enganação', 'Furtividade', 'Iniciativa', 'Intimidação', 'Ofício', 'Percepção', 'Pontaria', 'Reflexos'],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_lutador.png',
        tabela: 'assets/img/tabela_classe_lutador.png',
        referencias: Referencia.BASICO,
        paginas: '75, 76 e 77'
      },
      {
        id: 13,
        nome: 'Nobre',
        nome_arquivo_descricao_classe:'classe_nobre_descricao',
        nome_arquivo_descricao_habilidades:'classe_nobre_habilidades',
        nome_arquivo_descricao_poderes:'classe_nobre_poderes',
        nome_arquivo_descricao_informacoes: '',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: false,
        descricao_informacoes: '',
        fator_vida: 5,
        fator_mana: 3,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES, Proficiencia.ARMAS_MARCIAIS, Proficiencia.ARMADURAS_PESADAS, Proficiencia.ESCUDOS],
        pericia_obrigatoria:'Vontade',
        pericia_escolha_entre_duas:['Diplomacia', 'Intimidação'],
        pericias_escolha_grupo:['Adestramento', 'Atuação', 'Cavalgar','Conhecimento', 'Diplomacia', 'Fortitude', 'Guerra', 'Iniciativa', 'Intimidação', 'Intuição', 'Investigação','Jogatina','Luta','Nobreza','Ofício','Percepção', 'Pontaria'],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_nobre.png',
        tabela: 'assets/img/tabela_classe_nobre.png',
        referencias: Referencia.BASICO,
        paginas: '78, 79 e 80'
      },
      {
        id: 14,
        nome: 'Paladino',
        nome_arquivo_descricao_classe:'classe_paladino_descricao',
        nome_arquivo_descricao_habilidades:'classe_paladino_habilidades',
        nome_arquivo_descricao_poderes:'classe_paladino_poderes',
        nome_arquivo_descricao_informacoes: 'classe_paladino_informacoes',
        descricao_classe: '',
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        descricao_informacoes: '',
        fator_vida: 5,
        fator_mana: 3,
        proficiencias: [Proficiencia.ARMAS_SIMPLES,Proficiencia.ARMADURAS_LEVES, Proficiencia.ARMAS_MARCIAIS, Proficiencia.ARMADURAS_PESADAS, Proficiencia.ESCUDOS],
        pericia_obrigatoria:'Vontade',
        pericia_escolha_entre_duas:['Luta'],
        pericias_escolha_grupo:['Adestramento', 'Atletismo', 'Cura','Diplomacia', 'Fortitude', 'Guerra', 'Iniciativa', 'Intuição','Nobreza','Percepção', 'Religião'],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_paladino.png',
        tabela: 'assets/img/tabela_classe_paladino.png',
        referencias: Referencia.BASICO,
        paginas: '81, 82, 83 e 84'
      },
    ];
  }
}