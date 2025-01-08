import { Atributo } from "../enum/atributo.enum";

export interface Pericia {

  id: number,
  nome?: string,
  descricao?: string;
  atributo?: Atributo; 

}