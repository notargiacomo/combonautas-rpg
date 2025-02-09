import { Pericia } from "./pericia";

export interface TipoParceiro {
    id:number; // Número do Identificador
    nome?:string; // nome conforme livro
    descricao?:string; // conforme livro
    tracos?:string[]; // Descrições chaves que podem se repetir (filtros)
    parceiro_patamar?:string[]; // Patamar do Parceiro
    referencias?:string; // livro ou DB
    pagina?:string; //página do livro ou volume da DB
}

// tracos.include(nome => nome === 'PERICIA');