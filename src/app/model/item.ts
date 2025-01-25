export interface Item {
    id:number;
    tipo:string;
    nome?:string;
    descricao?:string;
    descricao_extra?:string;
    preco?:number;
    defesa?:number;
    manutencao?:number;
    tipo_manutencao?:string;
    rd?:number;
    pv?:number;
    cd_fabricacao?:number;
    cd_identificar_item?:number;
    preco_fabricacao?:number;
    tempo_fabricacao_em_horas?:number;
    preco_conserto?:number;
    tempo_conserto_em_horas?:number;
    pericia_fabricacao_conserto?:string;
    valor_teste_resistencia?:number;
    // são variantes, porem usarei o valor medio
    tamanho?:string;
    espaco?:number;
    // são variantes, porem usarei o valor medio
    dano?:string;
    tipo_dano?: string[];
    multiplicador_critico?:number;
    margem_ameaca?:number;
    alcance?:number;
    penalidade?:number;
    tracos?:string[];
    imagem?:string;
    referencias?:string;
    paginas?:string;
}