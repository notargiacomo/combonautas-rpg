import { Poder } from "./poder";

export interface Origem {

  id: number,
  nome?: string,
  regiao?: string,
  descricao?: string,
  temMagia?: boolean;
  temPoder?: boolean;
  temPericia?: boolean;
  temRD?:boolean;
  concedeDinheiro?: boolean;
  concedeFerramenta?: boolean;
  concedeParceiro?: boolean;
  bonus?: string[];
  referencias?: string,
  poderes?: Poder[],
  paginas?: string

}