import { TipoDano } from "../../enum/tipo.dano.enum";
import { Entity } from "./entity.sb";

export interface AlcanceSB extends Entity{
      nome?: string;
      medida?: number;
}