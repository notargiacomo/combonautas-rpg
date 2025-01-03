import { Interface } from "readline";
import { Atributos } from "./atributos.interface";
import { Deslocamento } from "./deslocamento.interface";
import { Referencia } from "./referencia.interface";
import { Sentidos } from "./sentidos.interface";

export interface Raca {

  id: number,
  id_raca_superior?: number,
  nome?: string,
  tipo?: string,
  nome_arquivo_descricao?: string,
  nome_arquivo_historia?: string,
  descricao?: string,
  historia?: string,
  tamanho?: string,
  // longevidade?: number,
  imagem?: string,
  // atributos?: Atributos,
  sentidos?: string[],
  deslocamentos?: string[],
  referencias?: string,
  paginas?: string

}