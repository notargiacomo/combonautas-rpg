import { Entity } from "./entity.sb";

export interface ItemSB extends Entity{
  id_tipo?: number;
  id_referencia?: number;
  nome?: string;
  descricao?: string;
  paginas?: string;
  caminho_imagem?: string;
  referencia?: {
            nome?: string;
  };
}