import { TipoDano } from "../../enum/tipo.dano.enum";
import { AlcanceSB } from "./alcance.sb";
import { TipoDanoSB } from "./tipo.dano.sb";

export interface ItemArmaSB {
      id?: number;
      dano?: string;
      multiplicador_critico?: number;
      margem_ameaca?: number;
      espaco?: number;
      id_alcance?: number;
      id_item_manutencao?: number;
      id_item_resistencia?: number;
}