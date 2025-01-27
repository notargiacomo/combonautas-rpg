import { Atributo } from "../enum/atributo.enum";
import { Acao } from "./acao";

export interface Pericia {
  id: number,
  nome?: string,
  descricao?: string;
  acoes?: Acao[]; 
  atributo?: Atributo;
  temPenalidadeArmadura?: boolean;
  exigeTreinamento?:boolean;
  exigeFerramenta?:boolean;
}