import { Injectable } from '@angular/core';

import { Referencia } from '../enum/referencia.enum';
import { Proficiencia } from '../enum/proficiencia.enum';
import { Distincao } from '../model/distincao';

@Injectable({
  providedIn: 'root',
})
export class DistincaoData {
  private distincoes: Distincao[] = [];

  get(): any[] {
    return this.distincoes;
  }

  constructor() {
    this.distincoes = [
      {
        id: 1,
        nome: `Aeronauta Goblin`,
        nome_arquivo_descricao: `distincao_aeronauta_goblins_descricao`,
        nome_arquivo_admissao: `distincao_aeronauta_goblins_admissao`,
        nome_arquivo_informacoes: `distincao_aeronauta_goblins_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Combate Aéreo</h5>
        <p><i><b>O aeronauta goblin sabe se virar contra inimigos nas alturas.</b></i></p>
        <p>Você recebe uma ação de movimento extra por rodada, que só pode ser usada para pilotar sua aeronave, e não sofre penalidades para atacar à distância ou lançar magias por estar a bordo de uma aeronave.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_aeronauta_goblin.png',
        referencias: Referencia.HEROIS,
        paginas: '106, 107 e 108'
      },
      {
        id: 2,
        nome: `Algoz da Tormenta`,
        nome_arquivo_descricao: `distincao_algoz_tormenta_descricao`,
        nome_arquivo_admissao: `distincao_algoz_tormenta_admissao`,
        nome_arquivo_informacoes: `distincao_algoz_tormenta_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Servo e Senhor</h5>
        <p><i><b>Após ter sua existência remodelada pela Tormenta, um algoz não questiona seus senhores.</b></i></p>
        <p>Você se torna imune à Insanidade da Tormenta e a efeitos de medo e mentais, exceto aqueles causados pelo lekael a quem serve.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_algoz_tormenta.png',
        referencias: Referencia.HEROIS,
        paginas: '109, 110 e 111'
      },
      {
        id: 3,
        nome: `Amazona`,
        nome_arquivo_descricao: `distincao_amazona_descricao`,
        nome_arquivo_admissao: `distincao_amazona_admissao`,
        nome_arquivo_informacoes: `distincao_amazona_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Armadura das Amazonas</h5>
        <p><i><b>Orgulhosas, as amazonas vestem sua autoconfiança como uma verdadeira armadura.</b></i></p>
        <p>Se não estiver usando armadura pesada, você recebe +2 na Defesa.</p>
        `,
        imagem: 'assets/img/distincao_amazona.png',
        referencias: Referencia.HEROIS,
        paginas: '112, 113 e 114'
      },
      {
        id: 4,
        nome: `Armadilheiro Mestre`,
        nome_arquivo_descricao: `distincao_armadilheiro_mestre_descricao`,
        nome_arquivo_admissao: `distincao_armadilheiro_mestre_admissao`,
        nome_arquivo_informacoes: `distincao_armadilheiro_mestre_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Armadilheiro Experiente</h5>
        <p>Você recebe +2 em testes de perícia relacionados a armadilhas, incluindo testes para encontrar, desarmar e resistir a seus efeitos. Além disso, sempre que desarma uma armadilha que não seja sua, você recupera 1 PM.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_armadilheiro_mestre.png',
        referencias: Referencia.HEROIS,
        paginas: '115, 116 e 117'
      },
      {
        id: 5,
        nome: `Arqueiro de Lenórienn`,
        nome_arquivo_descricao: `distincao_arqueiro_lenorienn_descricao`,
        nome_arquivo_admissao: `distincao_arqueiro_lenorienn_admissao`,
        nome_arquivo_informacoes: `distincao_arqueiro_lenorienn_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>O Arco Arcano</h5>
        <p><i><b>A conquista do título de arqueiro de Lenórienn é marcada pela transformação da arma do candidato em um arco arcano.</b></i></p>
        <p>Seu arco se transforma em um arco arcano. Além de seus benefícios normais, ele conta como um item esotérico de um tipo a sua escolha e pode receber melhorias e encantos tanto de armas quanto de esotéricos (respeitando os limites normais). Se receber um desses benefícios que se aplique tanto a armas quanto a esotéricos, você deve escolher a qual dos dois ele será aplicado. Se perder seu arco arcano, você pode transformar outro com um ritual que dura 1 dia e consome T$ 100 em componentes.</p>
        `,
        imagem: 'assets/img/distincao_arqueiro_lenorienn.png',
        referencias: Referencia.HEROIS,
        paginas: '118, 119 e 120'
      },
      {
        id: 6,
        nome: `Bruxo da Tormenta`,
        nome_arquivo_descricao: `distincao_bruxo_tormenta_descricao`,
        nome_arquivo_admissao: `distincao_bruxo_tormenta_admissao`,
        nome_arquivo_informacoes: `distincao_bruxo_tormenta_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Insanidade Controlada</h5>
        <p><i><b>Um bruxo da Tormenta já testemunhou numerosas atrocidades lefeu.</b></i></p>
        <p>Quando lança uma magia, você pode receber uma quantidade de pontos de insanidade (veja o quadro) limitada pelo círculo da magia. Cada PI recebido dessa forma paga 1 PM do custo da magia.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_bruxo_tormenta.png',
        referencias: Referencia.HEROIS,
        paginas: '121, 122 e 123'
      },
      {
        id: 7,
        nome: `Caçador de Cabeças`,
        nome_arquivo_descricao: `distincao_cacador_cabeca_descricao`,
        nome_arquivo_admissao: `distincao_cacador_cabeca_admissao`,
        nome_arquivo_informacoes: `distincao_cacador_cabeca_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Terror de Lamnor</h5>
        <p><i><b>No continente bestial, o silêncio assusta mais que qualquer rugido.</b></i></p>
        <p>Você recebe +2 em Furtividade e +2 na margem de ameaça de ataques contra criaturas desprevenidas.</p>
        `,
        imagem: 'assets/img/distincao_cacador_cabecas.png',
        referencias: Referencia.HEROIS,
        paginas: '124, 125 e 126'
      },
      {
        id: 8,
        nome: `Caçador de Dragões`,
        nome_arquivo_descricao: `distincao_cacador_dragoes_descricao`,
        nome_arquivo_admissao: `distincao_cacador_dragoes_admissao`,
        nome_arquivo_informacoes: `distincao_cacador_dragoes_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Escama da Honra</h5>
        <p><i><b>Como símbolo de sua iniciação, cada caçador de dragões ostenta um amuleto feito de uma escama do primeiro dragão que derrotou.</b></i></p>
        <p>Você recebe um amuleto de escama da honra, um item de vestuário que não ocupa espaço nem conta em seu limite de itens vestidos. Enquanto estiver usando esse amuleto, uma vez por rodada, quando causa dano com um ataque corpo a corpo, você pode causar +1d6 pontos de dano de um tipo escolhido entre os dos sopros dos dragões que você já derrotou. Se perder seu amuleto, você pode confeccionar outro em um processo que demora 1 dia e exige uma escama de um dragão que você tenha matado há menos de 30 dias.</p>
        `,
        imagem: 'assets/img/distincao_cacador_dragoes.png',
        referencias: Referencia.HEROIS,
        paginas: '127, 128 e 129'
      },
      {
        id: 9,
        nome: `Campeão de Dojo`,
        nome_arquivo_descricao: `distincao_campeao_dojo_descricao`,
        nome_arquivo_admissao: `distincao_campeao_dojo_admissao`,
        nome_arquivo_informacoes: `distincao_campeao_dojo_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Foco Marcial</h5>
        <p><i><b>O campeão de dojo aprende a concentrar sua mente em um único ataque.</b></i></p>
        <p>Você pode gastar uma ação de movimento para receber +1d8 na rolagem de dano de seu próximo ataque desarmado feito nessa rodada.</p>
        `,
        imagem: 'assets/img/distincao_campeao_dojo.png',
        referencias: Referencia.HEROIS,
        paginas: '130, 131 e 132'
      },
      {
        id: 10,
        nome: `Capitão do Conclave Pirata`,
        nome_arquivo_descricao: `distincao_capitao_conclave_descricao`,
        nome_arquivo_admissao: `distincao_capitao_conclave_admissao`,
        nome_arquivo_informacoes: `distincao_capitao_conclave_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Membro do Conclave</h5>
        <p><i><b>Quando enfrenta um capitão do Conclave, você enfrenta todos.</b></i></p>
        <p>Você recebe +2 em Acrobacia e Pilotagem e não sofre as penalidades por atacar à distância ou lançar magias a bordo de um veículo (veja p. 243). Além disso, pode recorrer à Solidariedade Pirata (veja o quadro)</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_capitao_conclave_pirata.png',
        referencias: Referencia.HEROIS,
        paginas: '133, 134 e 135'
      },
      {
        id: 11,
        nome: `Carteador`,
        nome_arquivo_descricao: `distincao_carteador_descricao`,
        nome_arquivo_admissao: `distincao_carteador_admissao`,
        nome_arquivo_informacoes: `distincao_carteador_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Sorte de Principiante</h5>
        <p><i><b>Sorte grande, não é?</b></i></p>
        <p>Você aprende e pode lançar Orientação, mas apenas em você mesmo e apenas para testes de Jogatina. Alternativamente, se possuir o suplemento Deuses de Arton, você aprende e pode lançar Sorriso da Fortuna (atributo-chave Carisma, p. 64) e pode usá-la em jogos mágicos. Em ambos os casos, esta não é uma habilidade mágica e provém de sua capacidade de… sutilmente torcer as regras do jogo a seu favor (veja “Magias Simuladas”, p. 44).</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_carteador.png',
        referencias: Referencia.HEROIS,
        paginas: '136, 137 e 138'
      },
      {
        id: 12,
        nome: `Cavaleiro do Corvo`,
        nome_arquivo_descricao: `distincao_cavaleiro_corvo_descricao`,
        nome_arquivo_admissao: `distincao_cavaleiro_corvo_admissao`,
        nome_arquivo_informacoes: `distincao_cavaleiro_corvo_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Não Tenho Nome</h5>
        <p><i><b>O treinamento de um Cavaleiro do Corvo é potencialmente letal, mas eficiente.</b></i></p>
        <p>Você aprende a Língua dos Corvos (veja o quadro) e recebe imunidade a medo. Além disso, perde a habilidade Código de Honra (caso a tenha).</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_cavaleiro_corvo.png',
        referencias: Referencia.HEROIS,
        paginas: '139, 140 e 141'
      },
      {
        id: 13,
        nome: `Cavaleiro Feérico`,
        nome_arquivo_descricao: `distincao_cavaleiro_feerico_descricao`,
        nome_arquivo_admissao: `distincao_cavaleiro_feerico_admissao`,
        nome_arquivo_informacoes: `distincao_cavaleiro_feerico_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Conexão Feérica</h5>
        <p><i><b>O cavaleiro feérico vive em harmonia com o mundo natural.</b></i></p>
        <p>Você recebe a habilidade Empatia Selvagem (Tormenta20, p. 21) e +1 PM para cada poder da distinção que possuir.</p>
        `,
        imagem: 'assets/img/distincao_cavaleiro_feerico.png',
        referencias: Referencia.HEROIS,
        paginas: '142, 143 e 144'
      },
      {
        id: 14,
        nome: `Chapéu-Preto`,
        nome_arquivo_descricao: `distincao_chapeu_preto_descricao`,
        nome_arquivo_admissao: `distincao_chapeu_preto_admissao`,
        nome_arquivo_informacoes: `distincao_chapeu_preto_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Esse Maldito Chapéu</h5>
        <p>Você recebe um “chapéu preto”, um item que representa sua maldição (veja o quadro). Você recebe +2 em Intimidação e na CD dos seus efeitos de medo, mas sofre –2 em Adestramento, Atuação e Diplomacia.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_chapeu_preto.png',
        referencias: Referencia.HEROIS,
        paginas: '145, 146 e 147'
      },
      {
        id: 15,
        nome: `Cobaia dos Médicos Monstros`,
        nome_arquivo_descricao: `distincao_cobaia_medicos_monstros_descricao`,
        nome_arquivo_admissao: `distincao_cobaia_medicos_monstros_admissao`,
        nome_arquivo_informacoes: `distincao_cobaia_medicos_monstros_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Procedimento Inicial</h5>
        <p><i><b>A cobaia se entrega de corpo, literalmente, à ciência dos Médicos Monstros.</b></i></p>
        <p>Você se torna um monstro em adição ao seu tipo. Além disso, a penalidade em perícias que sofre por receber implantes diminui de –2 por implante para –1 (veja adiante) e você paga 20% a menos pelos implantes enxertados em seu corpo.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_cobaia_medicos_monstros.png',
        referencias: Referencia.HEROIS,
        paginas: '148, 149 e 150'
      },
    ];
  }
}
