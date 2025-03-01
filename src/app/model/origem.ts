import { Poder } from "./poder";

export interface Origem {

  id: number,
  nome?: string,
  regiao?: string,
  descricao?: string,
  referencias?: string,
  poderes?: Poder[],
  paginas?: string

}