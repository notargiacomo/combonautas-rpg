import { Classe } from "./classe";

export interface Complicacao {
    id:number;
    nome?:string;
    classe?:Classe;
    e_restritiva?:boolean;
    descricao?:string;
}