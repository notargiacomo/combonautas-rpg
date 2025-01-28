import { TipoMagia } from "../enum/tipo.magia.enum";

export interface Magia {
    id:number;
    nome?:string;
    descricao?:string;
    escola?:string;
    tipo?:string;
    circulo?:string;
    custo?:number;
    execucao?:string;
    alcance?:string;
    alvo?:string;
    efeito?:string;
    duracao?:string;
    resistencia?:string;
    custoespecial?:string,
    aprimoramentos?:
        {
            id: number;
            e_aumenta?: boolean;
            descricao: string;
            custo: number;
            tipo?:string;
            circulo?:string;
            execucao?:string;
            alcance?:string;
            alvo?:string;
            efeito?:string;
            duracao?:string;
            resistencia?:string;
            custoespecial?:string,
            tracos?: string[];
        }[]
    tracos?: string[];
    referencias?:string;
    paginas?:string;
}