const FORCA = "FORÇA";
const DESTREZA = "DESTREZA";
const CONSTITUICAO = "CONSTITUIÇÃO";
const INTELIGENCIA = "INTELIGÊNCIA";
const SABEDORIA = "SABEDORIA";
const CARISMA = "CARISMA";

export interface Atributos {
    forca: number;
    destreza: number;
    constituicao: number;
    inteligencia: number;
    sabedoria: number;
    carisma: number;

    //casos separados
    um_escolha: boolean;
    dois_escolha: boolean;
    tres_escolha_diferentes: boolean;
    especial: boolean;
    exceto: string;
}