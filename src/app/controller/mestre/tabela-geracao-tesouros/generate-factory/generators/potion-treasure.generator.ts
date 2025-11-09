// generators/potion-treasure.generator.ts
import { Injectable } from '@angular/core';
import { GeneratedTreasure, tabelaTesouroItens, TreasureContext } from '../model/treasure';
import { TreasureGenerator } from './treasure-generator';

@Injectable({ providedIn: 'root' })
export class PotionTreasureGenerator implements TreasureGenerator {
  constructor() {}

  generate(ctx: TreasureContext): GeneratedTreasure {
    let nivel = String(ctx.level).trim();
    const tabelaItemNivel = tabelaTesouroItens.filter((item: any ) => item.nd === Number(nivel));
    const linhaItemNivel: any = tabelaItemNivel.find((item: any) => ctx.random! >= item.min && ctx.random! <= item.max);

    let tesouro: any[] = [];
    let gt : { items: any, return: string, notes: string, report: string };

    let iteracoes : number = 1;
    const indiceRandom = linhaItemNivel.modificador.indexOf('d');
    
    if (indiceRandom !== -1 && indiceRandom + 1 < linhaItemNivel.modificador.length) {
        const proximoCaractere = linhaItemNivel.modificador[indiceRandom + 1];
        iteracoes = Number(proximoCaractere);
    }

    let randomQtdPocoes = Math.floor(Math.random() * iteracoes)+1;
    const indiceSoma = linhaItemNivel.modificador.indexOf('+');
    let soma : number = 0;

    if (indiceSoma !== -1 && indiceSoma + 1 < indiceSoma.modificador.length) {
        const proximoCaractere = linhaItemNivel.modificador[indiceSoma + 1];
        soma = Number(proximoCaractere);
    }

    iteracoes = (randomQtdPocoes + soma) > 0 ? randomQtdPocoes + soma: 1;

    for (let i = 1; i <= iteracoes; i++) {
        let randomPocoes = Math.floor(Math.random() * 120)+1;

        if(linhaItemNivel.modificador.includes("+%")){
            randomPocoes = randomPocoes + 20 <= 120 ? randomPocoes + 20 : 120;
        }

        tesouro.push(this.pocoes.find((item: any) => randomPocoes === item.id));
    }

    gt = {items: tesouro, return: linhaItemNivel.nome,  notes: linhaItemNivel.unidade, report: this.gerarRelatorio(ctx.random!, linhaItemNivel, tesouro)};

    return gt;
  }

private gerarRelatorio(random: number, linha: any, pocoes: any): string {

    const linhasHtml = pocoes
        .map((item:  any) => `<li>${item.id} - ${item.nome}</li>`)
        .join("");  

    return `
      <b>ITEM</b><br />
      <label><b>RESULTADO D100:</b> ${random}</label><br />
      <label><b>${linha.valor}:</b></label>
      <ul>
          ${linhasHtml}
      </ul>
      `;
  }

  pocoes = [
        {id: 1, nome: 'Abençoar Alimentos (óleo)', preco: 30, livro: 'Tormenta20', pagina: 178},
        {id: 2, nome: 'Área Escorregadia (granada)', preco: 30, livro: 'Tormenta20', pagina: 180},
        {id: 3, nome: 'Arma Mágica (óleo)', preco: 30, livro: 'Tormenta20', pagina: 181},
        {id: 4, nome: 'Arma Mágica (óleo)', preco: 30, livro: 'Tormenta20', pagina: 181},
        {id: 5, nome: 'Compreensão', preco: 30, livro: 'Tormenta20', pagina: 184},
        {id: 6, nome: 'Curar Ferimentos (2d8+2 PV)', preco: 30, livro: 'Tormenta20', pagina: 189},
        {id: 7, nome: 'Curar Ferimentos (2d8+2 PV)', preco: 30, livro: 'Tormenta20', pagina: 189},
        {id: 8, nome: 'Curar Ferimentos (2d8+2 PV)', preco: 30, livro: 'Tormenta20', pagina: 189},
        {id: 9, nome: 'Curar Ferimentos (2d8+2 PV)', preco: 30, livro: 'Tormenta20', pagina: 189},
        {id: 10, nome: 'Curar Ferimentos (2d8+2 PV)', preco: 30, livro: 'Tormenta20', pagina: 189},
        {id: 11, nome: 'Curar Ferimentos (2d8+2 PV)', preco: 30, livro: 'Tormenta20', pagina: 189},
        {id: 12, nome: 'Disfarce Ilusório', preco: 30, livro: 'Tormenta20', pagina: 191},
        {id: 13, nome: 'Disfarce Ilusório', preco: 30, livro: 'Tormenta20', pagina: 191},
        {id: 14, nome: 'Escuridão (óleo)', preco: 30, livro: 'Tormenta20', pagina: 193},
        {id: 15, nome: 'Escuridão (óleo)', preco: 30, livro: 'Tormenta20', pagina: 193},
        {id: 16, nome: 'Luz (óleo)', preco: 30, livro: 'Tormenta20', pagina: 197},
        {id: 17, nome: 'Luz (óleo)', preco: 30, livro: 'Tormenta20', pagina: 197},
        {id: 18, nome: 'Névoa (granada)', preco: 30, livro: 'Tormenta20', pagina: 200},
        {id: 19, nome: 'Primor Atlético', preco: 30, livro: 'Tormenta20', pagina: 201},
        {id: 20, nome: 'Sono', preco: 30, livro: 'Tormenta20', pagina: 207},
        {id: 21, nome: 'Proteção Divina', preco: 30, livro: 'Tormenta20', pagina: 202},
        {id: 22, nome: 'Proteção Divina', preco: 30, livro: 'Tormenta20', pagina: 202},
        {id: 23, nome: 'Resistência a Energia', preco: 30, livro: 'Tormenta20', pagina: 204},
        {id: 24, nome: 'Resistência a Energia', preco: 30, livro: 'Tormenta20', pagina: 204},
        {id: 25, nome: 'Suporte Ambiental', preco: 30, livro: 'Tormenta20', pagina: 207},
        {id: 26, nome: 'Tranca Arcana (óleo)', preco: 30, livro: 'Tormenta20', pagina: 209},
        {id: 27, nome: 'Visão Mística', preco: 30, livro: 'Tormenta20', pagina: 211},
        {id: 28, nome: 'Vitalidade Fantasma', preco: 30, livro: 'Tormenta20', pagina: 211},
        {id: 29, nome: 'Armadura Elemental', preco: 30, livro: 'Heróis de Arton', pagina: 252},
        {id: 30, nome: 'Desafio Corajoso', preco: 30, livro: 'Heróis de Arton', pagina: 252},
        {id: 31, nome: 'Discrição', preco: 30, livro: 'Heróis de Arton', pagina: 253},
        {id: 32, nome: 'Farejar Fortuna', preco: 30, livro: 'Heróis de Arton', pagina: 254},
        {id: 33, nome: 'Maaais Klunc', preco: 30, livro: 'Heróis de Arton', pagina: 254},
        {id: 34, nome: 'Ossos de Adamante', preco: 30, livro: 'Heróis de Arton', pagina: 254},
        {id: 35, nome: 'Punho de Mitral', preco: 30, livro: 'Heróis de Arton', pagina: 254},
        {id: 36, nome: 'Magia Dadivosa', preco: 30, livro: 'Deuses de Arton', pagina: 62},
        {id: 37, nome: 'Sigilo de Sszzaas', preco: 30, livro: 'Deuses de Arton', pagina: 64},
        {id: 38, nome: 'Sorriso da Fortuna', preco: 30, livro: 'Deuses de Arton', pagina: 64},
        {id: 39, nome: 'Toque de Megalokk', preco: 30, livro: 'Deuses de Arton', pagina: 65},
        {id: 40, nome: 'Voz da Razão', preco: 30, livro: 'Deuses de Arton', pagina: 65},
        {id: 41, nome: 'Escudo da Fé (aprimoramento para duração cena)', preco: 120, livro: 'Tormenta20', pagina: 192},
        {id: 42, nome: 'Escudo da Fé (aprimoramento para duração cena)', preco: 120, livro: 'Tormenta20', pagina: 192},
        {id: 43, nome: 'Alterar Tamanho', preco: 270, livro: 'Tormenta20', pagina: 179},
        {id: 44, nome: 'Alterar Tamanho', preco: 270, livro: 'Tormenta20', pagina: 179},
        {id: 45, nome: 'Aparência Perfeita', preco: 270, livro: 'Tormenta20', pagina: 180},
        {id: 46, nome: 'Armamento da Natureza (óleo)', preco: 270, livro: 'Tormenta20', pagina: 181},
        {id: 47, nome: 'Bola de Fogo (granada)', preco: 270, livro: 'Tormenta20', pagina: 182},
        {id: 48, nome: 'Bola de Fogo (granada)', preco: 270, livro: 'Tormenta20', pagina: 182},
        {id: 49, nome: 'Bola de Fogo (granada)', preco: 270, livro: 'Tormenta20', pagina: 182},
        {id: 50, nome: 'Bola de Fogo (granada)', preco: 270, livro: 'Tormenta20', pagina: 182},
        {id: 51, nome: 'Camuflagem Ilusória', preco: 270, livro: 'Tormenta20', pagina: 183},
        {id: 52, nome: 'Concentração de Combate (aprimoramento para duração cena)', preco: 270, livro: 'Tormenta20', pagina: 185},
        {id: 53, nome: 'Curar Ferimentos (4d8+4 PV)', preco: 270, livro: 'Tormenta20', pagina: 189},
        {id: 54, nome: 'Curar Ferimentos (4d8+4 PV)', preco: 270, livro: 'Tormenta20', pagina: 189},
        {id: 55, nome: 'Curar Ferimentos (4d8+4 PV)', preco: 270, livro: 'Tormenta20', pagina: 189},
        {id: 56, nome: 'Curar Ferimentos (4d8+4 PV)', preco: 270, livro: 'Tormenta20', pagina: 189},
        {id: 57, nome: 'Físico Divino', preco: 270, livro: 'Tormenta20', pagina: 193},
        {id: 58, nome: 'Físico Divino', preco: 270, livro: 'Tormenta20', pagina: 193},
        {id: 59, nome: 'Mente Divina', preco: 270, livro: 'Tormenta20', pagina: 198},
        {id: 60, nome: 'Metamorfose', preco: 270, livro: 'Tormenta20', pagina: 198},
        {id: 61, nome: 'Purificação', preco: 270, livro: 'Tormenta20', pagina: 202},
        {id: 62, nome: 'Purificação', preco: 270, livro: 'Tormenta20', pagina: 202},
        {id: 63, nome: 'Purificação', preco: 270, livro: 'Tormenta20', pagina: 202},
        {id: 64, nome: 'Purificação', preco: 270, livro: 'Tormenta20', pagina: 202},
        {id: 65, nome: 'Velocidade', preco: 270, livro: 'Tormenta20', pagina: 210},
        {id: 66, nome: 'Velocidade', preco: 270, livro: 'Tormenta20', pagina: 210},
        {id: 67, nome: 'Vestimenta da Fé (óleo)', preco: 270, livro: 'Tormenta20', pagina: 210},
        {id: 68, nome: 'Vestimenta da Fé (óleo)', preco: 270, livro: 'Tormenta20', pagina: 210},
        {id: 69, nome: 'Voz Divina', preco: 270, livro: 'Tormenta20', pagina: 211},
        {id: 70, nome: 'Orientação (aprimoramento para duração cena; role o atributo afetado, sendo 1 = Força, 2 = Destreza e assim por diante)', preco: 270, livro: 'Tormenta20', pagina: 200},
        {id: 71, nome: 'Orientação (aprimoramento para duração cena; role o atributo afetado, sendo 1 = Força, 2 = Destreza e assim por diante)', preco: 270, livro: 'Tormenta20', pagina: 200},
        {id: 72, nome: 'Aura de Morte', preco: 270, livro: 'Heróis de Arton', pagina: 252},
        {id: 73, nome: 'Emular Magia', preco: 270, livro: 'Heróis de Arton', pagina: 253},
        {id: 74, nome: 'Punho de Mitral (aprimoramento para +2 em testes de ataque e margem de ameaça)', preco: 270, livro: 'Heróis de Arton', pagina: 255},
        {id: 75, nome: 'Viagem Onírica', preco: 270, livro: 'Heróis de Arton', pagina: 255},
        {id: 76, nome: 'Couraça de Allihanna (óleo)', preco: 270, livro: 'Deuses de Arton', pagina: 60},
        {id: 77, nome: 'Toque de Megalokk (aprimoramento para aumentar o dano das armas naturais em um passo e a margem de ameaça delas em +1 )', preco: 480, livro: 'Deuses de Arton', pagina: 65},
        {id: 78, nome: 'Arma Mágica (óleo; aprimoramento para bônus +3)', preco: 750, livro: 'Tormenta20', pagina: 181},
        {id: 79, nome: 'Arma Mágica (óleo; aprimoramento para bônus +3)', preco: 750, livro: 'Tormenta20', pagina: 181},
        {id: 80, nome: 'Proteção Divina (aprimoramento para bônus de +4)', preco: 750, livro: 'Tormenta20', pagina: 202},
        {id: 81, nome: 'Proteção Divina (aprimoramento para bônus de +4)', preco: 750, livro: 'Tormenta20', pagina: 202},
        {id: 82, nome: 'Armadura Elemental (aprimoramento para 4d6 pontos de dano)', preco: 750, livro: 'Heróis de Arton', pagina: 252},
        {id: 83, nome: 'Curar Ferimentos (7d8+7 PV)', preco: 1080, livro: 'Tormenta20', pagina: 189},
        {id: 84, nome: 'Curar Ferimentos (7d8+7 PV)', preco: 1080, livro: 'Tormenta20', pagina: 189},
        {id: 85, nome: 'Curar Ferimentos (7d8+7 PV)', preco: 1080, livro: 'Tormenta20', pagina: 189},
        {id: 86, nome: 'Curar Ferimentos (7d8+7 PV)', preco: 1080, livro: 'Tormenta20', pagina: 189},
        {id: 87, nome: 'Curar Ferimentos (7d8+7 PV)', preco: 1080, livro: 'Tormenta20', pagina: 189},
        {id: 88, nome: 'Curar Ferimentos (7d8+7 PV)', preco: 1080, livro: 'Tormenta20', pagina: 189},
        {id: 89, nome: 'Físico Divino (aprimoramento para três atributos)', preco: 1080, livro: 'Tormenta20', pagina: 193},
        {id: 90, nome: 'Físico Divino (aprimoramento para três atributos)', preco: 1080, livro: 'Tormenta20', pagina: 193},
        {id: 91, nome: 'Invisibilidade (aprimoramento para duração cena)', preco: 1080, livro: 'Tormenta20', pagina: 195},
        {id: 92, nome: 'Invisibilidade (aprimoramento para duração cena)', preco: 1080, livro: 'Tormenta20', pagina: 195},
        {id: 93, nome: 'Pele de Pedra', preco: 1080, livro: 'Tormenta20', pagina: 201},
        {id: 94, nome: 'Pele de Pedra', preco: 1080, livro: 'Tormenta20', pagina: 201},
        {id: 95, nome: 'Potência Divina', preco: 1080, livro: 'Tormenta20', pagina: 201},
        {id: 96, nome: 'Voo', preco: 1080, livro: 'Tormenta20', pagina: 211},
        {id: 97, nome: 'Percepção Rubra (aprimoramento para aumentar bônus em +3)', preco: 1080, livro: 'Deuses de Arton', pagina: 63},
        {id: 98, nome: 'Bola de Fogo (granada; aprimoramento para 10d6 de dano)', preco: 1470, livro: 'Tormenta20', pagina: 182},
        {id: 99, nome: 'Bola de Fogo (granada; aprimoramento para 10d6 de dano)', preco: 1470, livro: 'Tormenta20', pagina: 182},
        {id: 100, nome: 'Bola de Fogo (granada; aprimoramento para 10d6 de dano)', preco: 1470, livro: 'Tormenta20', pagina: 182},
        {id: 101, nome: 'Curar Ferimentos (11d8+11 PV)', preco: 3000, livro: 'Tormenta20', pagina: 189},
        {id: 102, nome: 'Curar Ferimentos (11d8+11 PV)', preco: 3000, livro: 'Tormenta20', pagina: 189},
        {id: 103, nome: 'Curar Ferimentos (11d8+11 PV)', preco: 3000, livro: 'Tormenta20', pagina: 189},
        {id: 104, nome: 'Curar Ferimentos (11d8+11 PV)', preco: 3000, livro: 'Tormenta20', pagina: 189},
        {id: 105, nome: 'Curar Ferimentos (11d8+11 PV)', preco: 3000, livro: 'Tormenta20', pagina: 189},
        {id: 106, nome: 'Curar Ferimentos (11d8+11 PV)', preco: 3000, livro: 'Tormenta20', pagina: 189},
        {id: 107, nome: 'Curar Ferimentos (11d8+11 PV)', preco: 3000, livro: 'Tormenta20', pagina: 189},
        {id: 108, nome: 'Curar Ferimentos (11d8+11 PV)', preco: 3000, livro: 'Tormenta20', pagina: 189},
        {id: 109, nome: 'Curar Ferimentos (11d8+11 PV)', preco: 3000, livro: 'Tormenta20', pagina: 189},
        {id: 110, nome: 'Curar Ferimentos (11d8+11 PV)', preco: 3000, livro: 'Tormenta20', pagina: 189},
        {id: 111, nome: 'Pele de Pedra (aprimoramento para pele de aço e RD 10)', preco: 3000, livro: 'Tormenta20', pagina: 201},
        {id: 112, nome: 'Pele de Pedra (aprimoramento para pele de aço e RD 10)', preco: 3000, livro: 'Tormenta20', pagina: 201},
        {id: 113, nome: 'Pele de Pedra (aprimoramento para pele de aço e RD 10)', preco: 3000, livro: 'Tormenta20', pagina: 201},
        {id: 114, nome: 'Pele de Pedra (aprimoramento para pele de aço e RD 10)', preco: 3000, livro: 'Tormenta20', pagina: 201},
        {id: 115, nome: 'Premonição', preco: 3000, livro: 'Tormenta20', pagina: 201},
        {id: 116, nome: 'Premonição', preco: 3000, livro: 'Tormenta20', pagina: 201},
        {id: 117, nome: 'Viagem Onírica (aprimoramentos para falar e lançar magias)', preco: 3000, livro: 'Heróis de Arton', pagina: 255},
        {id: 118, nome: 'Potência Divina (aprimoramento para Força +6 e RD 15)', preco: 6750, livro: 'Tormenta20', pagina: 201},
        {id: 119, nome: 'Momento de Tormenta (granada; aprimoramento para +4 dados de dano do mesmo tipo)', preco: 6750, livro: 'Ameaças de Arton', pagina: 404},
        {id: 120, nome: 'Transformação em Dragão (aprimoramentos para atributos +4, asas, arma de mordida e dano de sopro de 12d6+12)', preco: 28000, livro: 'Ameaças de Arton', pagina: 405},
      ]

}
