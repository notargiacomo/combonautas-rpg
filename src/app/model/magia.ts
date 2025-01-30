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
    descricao_material?:string;
    execucao?:string;
    execucao_rodada?:number;
    execucao_complemento?:string;
    alcance?:string;
    alvo?:string;
    alvo_descricao?:string;
    duracao?:string;
    duracao_rodadas?:number;
    descricao_duracao?: string,
    pericia_resistencia?:string;
    maneira_resistencia?:string;
    aprimoramentos?:
        {
            id: number;
            descricao?: string;
            e_aumenta?: boolean;
            custo?: number;
            custo_material?:number;
            descricao_material?:string;
            tipo?:string;
            circulo?:string;
            execucao?:string;
            execucao_rodada?:number;
            execucao_complemento?:string;
            alcance?:string;
            alvo?:string;
            alvo_descricao?:string;
            duracao?:string;
            duracao_rodadas?:number;
            descricao_duracao?: string;
            pericia_resistencia?:string;
            maneira_resistencia?:string;
            tracos?: string[];
            // variavéis para cálculo
            aumenta?: number;
            checkado?: boolean;
        }[],
    tracos?: string[];
    referencias?:string;
    paginas?:string;
    // variáveis para cálculo
    custo_total?:number;
    custo_material_total?:number;
    total_pm?:number;
    cd_total?:number;
}