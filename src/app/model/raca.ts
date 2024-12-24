import { Atributos } from "./atributos.interface";
import { Deslocamento } from "./deslocamento.interface";
import { Referencia } from "./referencia.interface";
import { Sentidos } from "./sentidos.interface";

export class Raca {

  

  constructor(
    public id: number,
    public id_raca_superior: number,
    public nome: string,
    public tipo: string,
    public nome_arquivo_descricao: string,
    public nome_arquivo_historia: string,
    public descricao: string,
    public historia: string,
    public tamanho: string,
    public longevidade: number,
    public imagem: string,
    public atributos: Atributos,
    public sentidos: string[],
    public deslocamentos: string[],
    public referencia: Referencia,
  ) {

    }
  }