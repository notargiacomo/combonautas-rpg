import { ChangeDetectorRef } from '@angular/core';
import { ItemArmaSB } from './item.arma.sb';
import { ItemManutencaoSB } from './item.manutencao.sb';
import { ItemResistenciaSB } from './item.resistencia.sb';

export class ItemSB {
  id?: number;
  id_tipo?: number;
  id_referencia?: number;
  nome?: string;
  descricao?: string;
  paginas?: string;
  caminho_imagem?: string;
  itemArma?: ItemArmaSB;
  itemResistencia?: ItemResistenciaSB;
  itemManutencao?: ItemManutencaoSB;

  constructor(private cdRef: ChangeDetectorRef) {}

  seleciona(itemSB: ItemSB, form: any) {}
}