import { Pericia } from "./pericia";

export interface Acao {
    id:number;
    nome?:string;
    descricao?:string;
    custo?:string;
    tracos?:string[];
    pericia?:Pericia;
    exigeTreinamento?:boolean;
    exigeFerramenta?:boolean;
}