import { OpcoesSelecao } from "../enum/opcoes.selecao";
import { Poder } from "./poder";

export class Regra {

  id!: number;
  id_raca_superior?: number;
  nome?: string;
  tipo?: string;
  descricao?: string;

  constructor(){
  }

}