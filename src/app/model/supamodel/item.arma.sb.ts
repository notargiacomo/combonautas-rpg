import { TipoDano } from "../../enum/tipo.dano.enum";
import { AlcanceSB } from "./alcance.sb";
import { TipoDanoSB } from "./tipo.dano.sb";

export interface ItemArmaSB {
      id?: number;
      dano?: string;
      multiplicador_critico?: number;
      margem_ameaca?: number;
      alcance?: AlcanceSB;
      tipoDano?: TipoDanoSB
}