import { Entity } from "./entity.sb";

export interface TipoDanoItemSB extends Entity{
      id_item?: number;
      id_tipo?: number;
      tb_tipo_dano?: {
            nome?: string;
      };
}