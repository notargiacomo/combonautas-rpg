import { Entity } from "./entity.sb";

export interface PericiaSB extends Entity{
      nome?: string;
      atributo?: string;
      descricao?: string;
      penalidade_armadura?: boolean;
      exige_treinamento?: boolean;
      exige_ferramenta?: boolean;
}