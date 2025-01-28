import { TipoMagia } from "../enum/tipo.magia.enum";

export interface Magia {
    id:number;
    nome?:string;
    descricao?:string;
    escola?:string;
    tipo?:string;
    circulo?:string;
    custo?:number;
    custo_material?:number;
    descricao_material?:number;
    execucao?:string;
    alcance?:string;
    alvo_descricao?:string;
    alvo?:string;
    efeito?:string;
    duracao?:string;
    resistencia?:string;
    custoespecial?:string,
    aprimoramentos?:
        {
            id: number;
            e_aumenta?: boolean;
            aumenta?: number;
            checkado?: boolean;
            descricao: string;
            custo: number;
            custo_material?:number;
            descricao_material?:number;
            tipo?:string;
            circulo?:string;
            execucao?:string;
            alcance?:string;
            alvo_descricao?:string;
            alvo?:string;
            efeito?:string;
            duracao?:string;
            resistencia?:string;
            custoespecial?:string,
            tracos?: string[];
        }[],
    custo_total?:number;
    custo_material_total?:number;
    total_pm?:number;
    cd_total?:number;
    tracos?: string[];
    referencias?:string;
    paginas?:string;
}