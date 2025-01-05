import { Interface } from "readline";
import { Atributos } from "./atributos.interface";
import { Deslocamento } from "./deslocamento.interface";
import { Referencia } from "./referencia.interface";
import { Sentidos } from "./sentidos.interface";

export interface Origem {

  id: number,
  nome?: string,
  regiao?: string,
  descricao?: string,
  referencias?: string,
  paginas?: string

}