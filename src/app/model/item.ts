export interface Item {
    id:number;
    nome?:string;
    descricao?:string;
    preco?:number;
    tamanho?:string;
    defesa?:number;
    rd?:number;
    pv?:number;
    dano?:string;
    tipo_dano?: string;
    multiplicador_critico?:number;
    margem_ameaca?:number;
    penalidade?:number;
    alcance?:number;
    espaco?:number;
    tracos?:string[];
}