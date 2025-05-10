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
      {
        id: 16,
        nome: `Dracomante Real`,
        nome_arquivo_descricao: `distincao_dracomante_real_descricao`,
        nome_arquivo_admissao: `distincao_dracomante_real_admissao`,
        nome_arquivo_informacoes: `distincao_dracomante_real_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Mestre Dracônico</h5>
        <p><i><b>Um dracomante real não serve, ele almeja.</b></i></p>
        <p>Escolha um Dragão-Real para ser seu mestre, entre Behluga (escolha entre frio ou luz), Benthos (ácido), Hydora (eletricidade), Mzzileyn (trevas), Sckhar (fogo), Tarso (trevas) e Zadbblein (veneno). Uma vez feita, essa escolha não pode ser mudada. Quando você lança uma magia de dano ou perda de PV do mesmo tipo da essência de seu mestre, ela causa +2 pontos de dano ou perda de PV.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_dracomante_real.png',
        referencias: Referencia.HEROIS,
        paginas: '151, 152 e 153'
      },
      {
        id: 17,
        nome: `Drogadora`,
        nome_arquivo_descricao: `distincao_drogadora_descricao`,
        nome_arquivo_admissao: `distincao_drogadora_admissao`,
        nome_arquivo_informacoes: `distincao_drogadora_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Tradição da CURA</h5>
        <p><i><b>Para uma drogadora, o preparo de remédios e poções é um ato instintivo e natural.</b></i></p>
        <p>Você pode usar Sabedoria como atributo-chave de Ofício (alquimista) em vez de Inteligência. Se já faz isso por outro efeito, em vez disso recebe +2 nessa perícia.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_drogadora.png',
        referencias: Referencia.HEROIS,
        paginas: '154, 155 e 156'
      },
      {
        id: 18,
        nome: `Engenhoqueiro Goblin`,
        nome_arquivo_descricao: `distincao_engenhoqueiro_goblin_descricao`,
        nome_arquivo_admissao: `distincao_engenhoqueiro_goblin_admissao`,
        nome_arquivo_informacoes: `distincao_engenhoqueiro_goblins_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Engenhocaria Goblinoide</h5>
        <p><i><b>Um bom engenhoqueiro aprende a tirar bobagens como segurança do caminho de seu ofício.</b></i>
        <p>Você gasta 1 dia e metade do custo em tibares para fabricar uma engenhoca. Entretanto, você nunca pode escolher 0, 10 ou 20 para ativar uma engenhoca e, se falhar no teste de ativação por 5 ou mais (ou se rolar 1 no dado), a engenhoca explode e causa 2d6 pontos de dano de impacto por círculo da magia em você e todas as criaturas a até 3m (Reflexos CD da engenhoca reduz à metade).</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_engenhoqueiro_goblin.png',
        referencias: Referencia.HEROIS,
        paginas: '157, 158 e 159'
      },
      {
        id: 19,
        nome: `Escapista Magnífico`,
        nome_arquivo_descricao: `distincao_escapista_magnifico_descricao`,
        nome_arquivo_admissao: `distincao_escapista_magnifico_admissao`,
        nome_arquivo_informacoes: `distincao_escapista_magnifico_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Vantagem Secreta</h5>
        <p>Escolha uma de suas fontes de penalidades (como uma habilidade racial, um poder da Tormenta ou uma complicação). Você não sofre as penalidades da fonte escolhida.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_escapista_magnifico.png',
        referencias: Referencia.HEROIS,
        paginas: '160, 161 e 162'
      },
      {
        id: 20,
        nome: `Gigante Furioso`,
        nome_arquivo_descricao: `distincao_gigante_furioso_descricao`,
        nome_arquivo_admissao: `distincao_gigante_furioso_admissao`,
        nome_arquivo_informacoes: `distincao_gigante_furioso_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Desprezar os Pequenos</h5>
        <p><i><b>Ao passar pelo ritual de transformação, o gigante furioso adquire uma resistência sobrenatural contra seres menores.</b></i>
        <p>Contra atacantes menores que você, você recebe redução de dano 2 por categoria de tamanho de diferença entre os dois (por exemplo, se for Enorme, você recebe RD 6 contra ataques de criaturas Pequenas).</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_gigante_furioso.png',
        referencias: Referencia.HEROIS,
        paginas: '163, 164 e 165'
      },
      {
        id: 21,
        nome: `Ginete de Namalkah`,
        nome_arquivo_descricao: `distincao_ginete_namalkah_descricao`,
        nome_arquivo_admissao: `distincao_ginete_namalkah_admissao`,
        nome_arquivo_informacoes: `distincao_ginete_namalkah_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Amalkhan</h5>
        <p><i><b>Esse termo é uma das palavras que forma o nome do reino dos cavalos, e descreve ao mesmo tempo saudade de casa e ânsia por explorar.</b></i>
        <p>Você e seu irmão cavalo desenvolvem um profundo laço de irmandade. Ele passa a fornecer +1 na Defesa e em Reflexos, além de seus outros benefícios.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_ginete_namalkah.png',
        referencias: Referencia.HEROIS,
        paginas: '166, 167 e 168'
      },
      {
        id: 22,
        nome: `Guerreiro Mágico`,
        nome_arquivo_descricao: `distincao_guerreiro_magico_descricao`,
        nome_arquivo_admissao: `distincao_guerreiro_magico_admissao`,
        nome_arquivo_informacoes: `distincao_guerreiro_magico_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Arma Arcana</h5>
        <p><i><b>Para o guerreiro mágico, esgrima e magia se unem no mesmo movimento.</b></i>
        <p>Quando lança uma magia empunhando uma arma corpo a corpo, você recebe +2 na rolagem de dano da magia e pode usar a mão que empunha a arma para executar os gestos dela.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_guerreiro_magico.png',
        referencias: Referencia.HEROIS,
        paginas: '169, 170 e 171'
      },
      {
        id: 23,
        nome: `Infiltrador de Wynlla`,
        nome_arquivo_descricao: `distincao_infiltrador_wynlla_descricao`,
        nome_arquivo_admissao: `distincao_infiltrador_wynlla_admissao`,
        nome_arquivo_informacoes: `distincao_infiltrador_wynlla_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Ladinagem Mágica</h5>
        <p><i><b>Tudo surge no lugar certo na hora certa... quando você dispõe da magia certa.</b></i>
        <p>Você cria um fluxo de energia capaz de manipular pequenos itens próximos. Você pode gastar uma ação de movimento para mover um objeto em alcance curto até 9m em qualquer direção (você só pode mover objetos que poderia manusear com uma mão). Além disso, pode gastar 1 PM para fazer um teste de Ladinagem para abrir fechaduras, ocultar itens, punga ou sabotar em alcance curto. <i><b>e</b></i></p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_infiltrador_wynlla.png',
        referencias: Referencia.HEROIS,
        paginas: '172, 173 e 174'
      },
      {
        id: 24,
        nome: `Mago de Batalha de Wynlla`,
        nome_arquivo_descricao: `distincao_mago_batalha_wynlla_descricao`,
        nome_arquivo_admissao: `distincao_mago_batalha_wynlla_admissao`,
        nome_arquivo_informacoes: `distincao_mago_batalha_wynlla_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Armamento Esotérico</h5>
        <p><i><b>Nas mãos de um Mago de Batalha, qualquer item esotérico é uma arma.</b></i>
        <p>Quando você usa um item esotérico para lançar uma magia, a CD para resistir a ela aumenta em +1.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_mago_batalha_wynlla.png',
        referencias: Referencia.HEROIS,
        paginas: '178, 179 e 180'
      },
      {
        id: 25,
        nome: `Mago da Ordem do Vazio`,
        nome_arquivo_descricao: `distincao_mago_ordem_vazio_descricao`,
        nome_arquivo_admissao: `distincao_mago_ordem_vazio_admissao`,
        nome_arquivo_informacoes: `distincao_mago_ordem_vazio_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Componente Especial</h5>
        <p><i><b>“Usamos meios alternativos de conjuração, em honra a Wynna.”</b></i>
        <p>Para lançar magias arcanas, você precisa gastar um componente especial (veja o quadro), que funciona como um componente material. Se não tiver seu componente especial, você não consegue lançar suas magias. Contudo, quando lança uma magia usando seu componente especial, a CD para resistir a ela aumenta em +2.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_mago_ordem_vazio.png',
        referencias: Referencia.HEROIS,
        paginas: '175, 176 e 177'
      },
      {
        id: 26,
        nome: `Médico de Salistick`,
        nome_arquivo_descricao: `distincao_medico_salistick_descricao`,
        nome_arquivo_admissao: `distincao_medico_salistick_admissao`,
        nome_arquivo_informacoes: `distincao_medico_salistick_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Ciências Médicas</h5>
        <p><i><b>Para aqueles formados no Colégio Real, a medicina é uma ciência fundamentada na lógica e na razão.</b></i>
        <p>Você pode usar Inteligência como atributo-chave de Cura (em vez de Sabedoria). Se já faz isso por outro efeito, em vez disso recebe +2 nessa perícia.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_medico_salistick.png',
        referencias: Referencia.HEROIS,
        paginas: '181, 182 e 183'
      },
      {
        id: 27,
        nome: `Mestre Bêbado`,
        nome_arquivo_descricao: `distincao_mestre_bebado_descricao`,
        nome_arquivo_admissao: `distincao_mestre_bebado_admissao`,
        nome_arquivo_informacoes: `distincao_mestre_bebado_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Felicidade Engarrafada</h5>
        <p><i><b>O mestre bêbado nunca dispensa um traguinho.</b></i>
        <p>Você possui um recipiente (uma garrafa, odre ou equivalente) que ocupa 0,5 espaço e comporta 5 goles de bebida, +2 goles para cada poder da distinção que você possuir. Se estiver empunhando o recipiente, você pode gastar uma ação de movimento para tomar um gole da bebida e ganhar 1 PM temporário. Seu recipiente recupera todos os goles de bebida ao amanhecer, apesar de você nunca se lembrar de como conseguiu mais bebida… Essa bebida não provoca penalidades, mas também não conta como água para saciar fome e sede (Tormenta20, p. 319). A critério do mestre, essa bebida pode ser compartilhada com outros personagens em situações de interpretação, mas não fornece nenhum bônus para eles e não pode ser alterada de nenhuma forma.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_mestre_bebado.png',
        referencias: Referencia.HEROIS,
        paginas: '184, 185 e 186'
      },
      {
        id: 28,
        nome: `Mestre Cozinheiro`,
        nome_arquivo_descricao: `distincao_mestre_cozinheiro_descricao`,
        nome_arquivo_admissao: `distincao_mestre_cozinheiro_admissao`,
        nome_arquivo_informacoes: `distincao_mestre_cozinheiro_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Panela de Estimação</h5>
        <p><i><b>Nas mãos de um mestre cozinheiro, utensílios de cozinha ganham novas utilidades.</b></i></p>
        <p>Você recebe uma arma ou escudo com o qual seja proficiente, que pode ser usado como instrumentos de cozinheiro e fornece +2 em Ofício (cozinheiro). Se perder esse item, você pode comprar ou produzir outro com 1 dia e o gasto de T$ 100.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_mestre_cozinheiro.png',
        referencias: Referencia.HEROIS,
        paginas: '187, 188 e 189'
      },
      {
        id: 29,
        nome: `Mestre dos Desejos`,
        nome_arquivo_descricao: `distincao_mestre_desejos_descricao`,
        nome_arquivo_admissao: `distincao_mestre_desejos_admissao`,
        nome_arquivo_informacoes: `distincao_mestre_desejos_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Desejo de Servir</h5>
        <p><i><b>Aproximando-se do seu sangue de gênio, o qareen aprende a empregar a força dos desejos como combustível.</b></i></p>
        <p>A CD para resistir às magias que você lança com sua habilidade Desejos aumenta em +2.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_mestre_desejos.png',
        referencias: Referencia.HEROIS,
        paginas: '190, 191 e 192'
      },
      {
        id: 30,
        nome: `Mestre Mahou-Jutsu`,
        nome_arquivo_descricao: `distincao_mestre_mahou_jutsu_descricao`,
        nome_arquivo_admissao: `distincao_mestre_mahou_jutsu_admissao`,
        nome_arquivo_informacoes: `distincao_mestre_mahou_jutsu_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Palma Mística</h5>
        <p><i><b>A primeira técnica do mahou-jutsu ensina a aplicar a precisão marcial na execução de magias.</b></i></p>
        <p>Enquanto tiver pelo menos uma mão livre, você recebe +2 em testes de ataque realizados como parte de magias (como o aprimoramento de Toque Chocante) e na CD de suas magias arcanas contra alvos em seu alcance corpo a corpo.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_mestre_mahou_jutsu.png',
        referencias: Referencia.HEROIS,
        paginas: '193, 194 e 195'
      },
      {
        id: 31,
        nome: `Mosqueteiro de Rishantor`,
        nome_arquivo_descricao: `distincao_mosqueteiro_rishantor_descricao`,
        nome_arquivo_admissao: `distincao_mosqueteiro_rishantor_admissao`,
        nome_arquivo_informacoes: `distincao_mosqueteiro_rishantor_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Equipamento Real</h5>
        <p><i><b>O equipamento de um Mosqueteiro de Rishantor deveria ser um deboche. Mas é ostentado com orgulho.</b></i></p>
        <p>Você recebe um tabardo, um florete ou rapieira e um chapéu emplumado (veja o Capítulo 3). Enquanto você estiver usando esses itens, recebe um bônus de +1 Diplomacia, testes de ataque, rolagens de dano e na Defesa. Você não pode ser devoto de divindades capazes de canalizar energia negativa e deve seguir algum código de conduta (como Código de Honra). Se violá-lo, além das consequências normais, não poderá usar seus poderes de mosqueteiro até recuperar seus PM.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_mosqueteiro_rishantor.png',
        referencias: Referencia.HEROIS,
        paginas: '196, 197 e 198'
      },
      {
        id: 32,
        nome: `Mutagenista`,
        nome_arquivo_descricao: `distincao_mutagenista_descricao`,
        nome_arquivo_admissao: `distincao_mutagenista_admissao`,
        nome_arquivo_informacoes: `distincao_mutagenista_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Preparação Corporal</h5>
        <p><i><b>Tendo estudado os textos zarkhassianos, o mutagenista prepara seu corpo para receber seus preparados.</b></i></p>
        <p>Você recebe +2 em Fortitude e Ofício (alquimista).</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_mutagenista.png',
        referencias: Referencia.HEROIS,
        paginas: '199, 200 e 201'
      },
      {
        id: 33,
        nome: `Pistoleiro de Smokestones`,
        nome_arquivo_descricao: `distincao_pistoleiro_smokestone_descricao`,
        nome_arquivo_admissao: `distincao_pistoleiro_smokestone_admissao`,
        nome_arquivo_informacoes: `distincao_pistoleiro_smokestone_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Honra do Pistoleiro</h5>
        <p><i><b>“Em Smokestone, a honra é fundamental. Você é respeitado de acordo com seus atos e todos acreditam naquilo que você os faz acreditar.”</b></i></p>
        <p>Você recebe +2 em rolagens de dano com armas de fogo leves e de uma mão. Contudo, você passa a seguir o Código do Pistoleiro (veja quadro).</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_pistoleiro_smokestone.png',
        referencias: Referencia.HEROIS,
        paginas: '202, 203 e 204'
      },
      {
        id: 34,
        nome: `Professor de Magia`,
        nome_arquivo_descricao: `distincao_professor_magia_descricao`,
        nome_arquivo_admissao: `distincao_professor_magia_admissao`,
        nome_arquivo_informacoes: `distincao_professor_magia_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Pena e Pergaminho</h5>
        <p><i><b>Wynna e Tanna-Toh sorriem para aqueles que se dedicam ao ensino.</b></i></p>
        <p>Você aprende e pode lançar uma magia de adivinhação, arcana ou divina, a sua escolha, de qualquer círculo a que tenha acesso. <b><i>e</i></b></p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_professor_magia.png',
        referencias: Referencia.HEROIS,
        paginas: '205, 206 e 207'
      },
      {
        id: 35,
        nome: `Senador`,
        nome_arquivo_descricao: `distincao_senador_descricao`,
        nome_arquivo_admissao: `distincao_senador_admissao`,
        nome_arquivo_informacoes: `distincao_senador_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Retórica Impecável</h5>
        <p><i><b>Enquanto as legiões lutam com gládios e escudos, o senador luta com palavras.</b></i></p>
        <p>Você recebe +2 em Nobreza e pode usar Carisma como atributo-chave dessa perícia (em vez de Inteligência).</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_senador.png',
        referencias: Referencia.HEROIS,
        paginas: '208, 209 e 210'
      },
      {
        id: 36,
        nome: `Vigarista`,
        nome_arquivo_descricao: `distincao_vigarista_descricao`,
        nome_arquivo_admissao: `distincao_vigarista_admissao`,
        nome_arquivo_informacoes: `distincao_vigarista_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Tirar Leite de Pedra</h5>
        <p><i><b>Onde os outros veem miséria, o vigarista vê oportunidade.</b></i></p>
        <p>Quando está em qualquer tipo de comunidade, você pode usar Enganação para fazer testes de sustento (Tormenta20, p. 128) com pequenos golpes: vendendo poções falsas, lixo como relíquias sagradas ou qualquer outro produto enganoso. Você leva 1 dia, em vez de uma semana, para fazer esse teste, e recebe um bônus de +2 em cidades, +5 em vilas e +10 em aldeias. Se falhar em um teste, não pode tentar de novo na mesma comunidade durante um mês… e, se rolar 1 natural no teste, é desmascarado pela população!</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_vigarista.png',
        referencias: Referencia.HEROIS,
        paginas: '211, 2012 e 213'
      },
      {
        id: 37,
        nome: `Bufão de Hynnin`,
        nome_arquivo_descricao: `distincao_bufao_descricao`,
        nome_arquivo_admissao: `distincao_bufao_admissao`,
        nome_arquivo_informacoes: `distincao_bufao_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Chapéu do Bobo</h5>
        <p><i><b>Um bobo da corte precisa parecer berrante, chamativo e inerentemente engraçado.</b></i></p>
        <p>Você recebe um gorro com guizos, um item de vestuário que não ocupa espaços nem conta em seu limite de itens vestidos. Ele permite usar Músicas de Bardo sem precisar empunhar um instrumento musical e fornece +2 em Atuação e Enganação, mas impõe –2 em Diplomacia e Intimidação e só funciona com você.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_bufao.png',
        referencias: Referencia.DEUSES,
        paginas: '70, 71 e 72'
      },
      {
        id: 38,
        nome: `Cavaleiro da Luz`,
        nome_arquivo_descricao: `distincao_cavaleiro_luz_descricao`,
        nome_arquivo_admissao: `distincao_cavaleiro_luz_admissao`,
        nome_arquivo_informacoes: `distincao_cavaleiro_luz_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Etiqueta da Ordem da Luz</h5>
        <p><i><b>Um cavaleiro da Luz é treinado tanto em enfrentar o mal quanto em lidar com a nobreza.</b></i></p>
        <p>Você segue tanto o Código de Honra da classe cavaleiro quanto as Obrigações & Restrições de Khalmyr. Contudo, soma seu Carisma em Guerra e Nobreza, e consegue hospedagem confortável e informações em qualquer lugar afiliado à Ordem da Luz.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_cavaleiro_luz.png',
        referencias: Referencia.DEUSES,
        paginas: '73, 74 e 75'
      },
      {
        id: 39,
        nome: `Cavaleiro de Khalmyr`,
        nome_arquivo_descricao: `distincao_cavaleiro_khalmyr_descricao`,
        nome_arquivo_admissao: `distincao_cavaleiro_khalmyr_admissao`,
        nome_arquivo_informacoes: `distincao_cavaleiro_khalmyr_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Seguir a Norma</h5>
        <p><i><b>Seguir a Norma tira parte da liberdade do cavaleiro, mas fortalece seu espírito.</b></i></p>
        <p>Você segue o Código da Norma (veja o quadro) e recebe +2 em Fortitude e Vontade.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_cavaleiro_khalmyr.png',
        referencias: Referencia.DEUSES,
        paginas: '76, 77 e 78'
      },
      {
        id: 40,
        nome: `Colecionador Monstruoso`,
        nome_arquivo_descricao: `distincao_colecionador_monstruoso_descricao`,
        nome_arquivo_admissao: `distincao_colecionador_monstruoso_admissao`,
        nome_arquivo_informacoes: `distincao_colecionador_monstruoso_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Através da Selvageria</h5>
        <p><i><b>Você devorou as entranhas da selvageria.</b></i></p>
        <p>Quando usa Forma Selvagem, seu tipo muda para monstro e você recebe +1 no multiplicador de crítico com armas naturais.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_colecionador_monstruoso.png',
        referencias: Referencia.DEUSES,
        paginas: '79, 80 e 81'
      },
      {
        id: 41,
        nome: `Dançarina de Marah`,
        nome_arquivo_descricao: `distincao_dancarina_marah_descricao`,
        nome_arquivo_admissao: `distincao_dancarina_marah_admissao`,
        nome_arquivo_informacoes: `distincao_dancarina_marah_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Graça de Marah</h5>
        <p><i><b>Para a dançarina de Marah, a arte é uma linguagem universal.</b></i></p>
        <p>Você soma sua Sabedoria em Atuação. Além disso, pode substituir testes de Diplomacia por testes de Atuação.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_dancarina_marah.png',
        referencias: Referencia.DEUSES,
        paginas: '82, 83 e 84'
      },
      {
        id: 42,
        nome: `Detetive de Tanna-Toh`,
        nome_arquivo_descricao: `distincao_detetive_tannatoh_descricao`,
        nome_arquivo_admissao: `distincao_detetive_tannatoh_admissao`,
        nome_arquivo_informacoes: `distincao_detetive_tannatoh_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Nada Além de Fatos</h5>
        <p><i><b>Ao se apoiar somente em fatos, o detetive de TannaToh fortalece sua capacidade dedutiva.</b></i></p>
        <p>Você recebe +5 em Intuição e Investigação.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_detetive_tannatoh.png',
        referencias: Referencia.DEUSES,
        paginas: '85, 86 e 87'
      },
      {
        id: 43,
        nome: `Exegeta do Akzath`,
        nome_arquivo_descricao: `distincao_exegeta_akzath_descricao`,
        nome_arquivo_admissao: `distincao_exegeta_akzath_admissao`,
        nome_arquivo_informacoes: `distincao_exegeta_akzath_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Compreender o Akzath</h5>
        <p><i><b>O exegeta compreende a verdade das escrituras e pode empregá-la em toda a sua vida.</b></i></p>
        <p>No início de cada cena, escolha uma perícia. Até o fim da cena, sempre que fizer um teste da perícia escolhida, você pode gastar 1 PM para substituí-lo por um teste de Religião.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_exegeta_akzath.png',
        referencias: Referencia.DEUSES,
        paginas: '88, 89 e 90'
      },
      {
        id: 44,
        nome: `Forjador Litúrgico`,
        nome_arquivo_descricao: `distincao_forjador_liturgico_descricao`,
        nome_arquivo_admissao: `distincao_forjador_liturgico_admissao`,
        nome_arquivo_informacoes: `distincao_forjador_liturgico_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Ferreiro Sagrado</h5>
        <p><i><b>Nos primeiros passos de seu ofício divino, o forjador litúrgico aprimora suas habilidades com armas.</b></i></p>
        <p>Você recebe +2 em Ofício (armeiro) e em rolagens de dano com armas que tenha fabricado.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_forjador_liturgico.png',
        referencias: Referencia.DEUSES,
        paginas: '92, 93 e 94'
      },
      {
        id: 45,
        nome: `Guardião de Realidade`,
        nome_arquivo_descricao: `distincao_guardiao_realidade_descricao`,
        nome_arquivo_admissao: `distincao_guardiao_realidade_admissao`,
        nome_arquivo_informacoes: `distincao_guardiao_realidade_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Escudo da Realidade</h5>
        <p><i><b>Você encontra abrigo na força da realidade.</b></i></p>
        <p>Você recebe +5 em testes de resistência. Contra efeitos da Tormenta, esse bônus aumenta em +1 por poder da distinção.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_guardiao_realidade.png',
        referencias: Referencia.DEUSES,
        paginas: '95, 96 e 97'
      },
      {
        id: 46,
        nome: `Herói Henshin`,
        nome_arquivo_descricao: `distincao_heroi_henshin_descricao`,
        nome_arquivo_admissao: `distincao_heroi_henshin_admissao`,
        nome_arquivo_informacoes: `distincao_heroi_henshin_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Armadura Especial</h5>
        <p><i><b>Sua armadura é seu símbolo, sua identidade transformada e seu verdadeiro eu.</b></i></p>
        <p>Você transforma uma armadura ou um item de vestuário em seu traje de combate. Para você, esse item fornece +1 na Defesa (ou aumenta o bônus na Defesa fornecido em +1) e sua penalidade de armadura (se houver) é reduzida em –1. Se perder seu traje de combate, você pode transformar outra armadura ou item de vestuário com um dia de trabalho e T$ 100.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_heroi_henshin.png',
        referencias: Referencia.DEUSES,
        paginas: '98, 99, 100 e 101'
      },
      {
        id: 47,
        nome: `Improvisador de Lena`,
        nome_arquivo_descricao: `distincao_improvisador_lena_descricao`,
        nome_arquivo_admissao: `distincao_improvisador_lena_admissao`,
        nome_arquivo_informacoes: `distincao_improvisador_lena_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Código do Improvisador</h5>
        <p><i><b>O improvisador aprende como usar materiais ao seu redor para improvisar soluções.</b></i></p>
        <p>Você segue o Código da Paz (p. 116). Além disso, uma vez por cena, pode gastar uma ação de movimento para, a partir de itens do ambiente, improvisar uma ferramenta especial que ocupa 1 espaço. Até o fim da cena, você pode gastar essa ferramenta para receber +2 em um teste de perícia ou para reduzir em –1 PM o custo de uma de suas habilidades.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_improvisador_lena.png',
        referencias: Referencia.DEUSES,
        paginas: '102, 103 e 104'
      },
      {
        id: 48,
        nome: `Inquisidor de Wynna`,
        nome_arquivo_descricao: `distincao_inquisidor_wynna_descricao`,
        nome_arquivo_admissao: `distincao_inquisidor_wynna_admissao`,
        nome_arquivo_informacoes: `distincao_inquisidor_wynna_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Padroeira Adotiva</h5>
        <p><i><b>Wynna não é sua deusa, mas acha-o muito simpático</b></i></p>
        <p>Você recebe o poder Centelha Mágica, mas continua sendo um paladino e devoto de sua divindade original. Além disso, quando escolhe o poder Orar, você pode aprender também magias arcanas de 1º círculo como se fossem divinas.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_inquisidor_wynna.png',
        referencias: Referencia.DEUSES,
        paginas: '105, 106 e 107'
      },
      {
        id: 49,
        nome: `Mestre de Armearia`,
        nome_arquivo_descricao: `distincao_mestre_armearia_descricao`,
        nome_arquivo_admissao: `distincao_mestre_armearia_admissao`,
        nome_arquivo_informacoes: `distincao_mestre_armearia_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Domínio da Pólvora</h5>
        <p><i><b>Insatisfeito com o que já existe, o mestre de armearia imagina novas maneiras de destruir.</b></i></p>
        <p>Você recebe +2 em testes de perícia (exceto de ataque) relacionados a armas de fogo e suas munições, incluindo testes para esconder, fabricar, identificar e negociar.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_mestre_armearia.png',
        referencias: Referencia.DEUSES,
        paginas: '108, 109, 110 e 111'
      },
      {
        id: 50,
        nome: `Numeromante`,
        nome_arquivo_descricao: `distincao_numeromante_descricao`,
        nome_arquivo_admissao: `distincao_numeromante_admissao`,
        nome_arquivo_informacoes: `distincao_numeromante_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Matemágica para iniciantes</h5>
        <p><i><b>Um numeromante enxerga a magia escondida nos números.</b></i></p>
        <p>Sempre que você lançar uma magia com um custo em PM igual a um quadrado perfeito (1, 4, 9, 16, 25, 36 etc.), o custo de sua próxima magia lançada até o fim da cena diminui em –1 PM.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_numeromante.png',
        referencias: Referencia.DEUSES,
        paginas: '112, 113 e 114'
      },
      {
        id: 51,
        nome: `Pacificador`,
        nome_arquivo_descricao: `distincao_pacificador_descricao`,
        nome_arquivo_admissao: `distincao_pacificador_admissao`,
        nome_arquivo_informacoes: `distincao_pacificador_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Armas da Paz</h5>
        <p><i><b>Qualquer um pode matar. Podemos ser melhores que isso.</b></i></p>
        <p>Você adota o Código da Paz (veja o quadro) e se torna proficiente com qualquer arma que não cause dano ou que tenha a habilidade inata de causar dano não letal. Além disso, recebe +1 em testes de ataque e rolagens de dano com ataques que causam dano não letal.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_pacificador.png',
        referencias: Referencia.DEUSES,
        paginas: '115, 116 e 117'
      },
      {
        id: 52,
        nome: `Pregador`,
        nome_arquivo_descricao: `distincao_pregador_descricao`,
        nome_arquivo_admissao: `distincao_pregador_admissao`,
        nome_arquivo_informacoes: `distincao_pregador_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Vista Grossa</h5>
        <p><i><b>Se nem os deuses são perfeitos, por que os mortais deveriam ser?</b></i></p>
        <p>Sempre que violar as Obrigações & Restrições de uma divindade que precisa cumprir, você pode fazer um teste de Religião (CD 10, +5 para cada outra vez que usou este poder na mesma aventura). Se passar, não sofre nenhuma consequência por essa violação.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_pregador.png',
        referencias: Referencia.DEUSES,
        paginas: '118, 119 e 120'
      },
      {
        id: 53,
        nome: `Sombra de Tenebra`,
        nome_arquivo_descricao: `distincao_sombra_tenebra_descricao`,
        nome_arquivo_admissao: `distincao_sombra_tenebra_admissao`,
        nome_arquivo_informacoes: `distincao_sombra_tenebra_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Ameaça das Sombras</h5>
        <p><i><b>Para o sombra de Tenebra, as trevas revelam as fraquezas dos inimigos.</b></i></p>
        <p>Se estiver em uma área de escuridão, você pode usar a habilidade Ataque Furtivo +1d6. Se já possui a habilidade, o bônus é cumulativo.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_sombra_tenebra.png',
        referencias: Referencia.DEUSES,
        paginas: '121, 122 e 123'
      },
      {
        id: 54,
        nome: `Sortudo de Nimb`,
        nome_arquivo_descricao: `distincao_sortudo_nimb_descricao`,
        nome_arquivo_admissao: `distincao_sortudo_nimb_admissao`,
        nome_arquivo_informacoes: `distincao_sortudo_nimb_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Sorte Boba</h5>
        <p><i><b>Até mesmo a sua sorte tem sorte.</b></i></p>
        <p>Quando usa uma habilidade que permite rolar qualquer dado novamente, você rola dois dados desse tipo e usa o melhor resultado.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_sortudo_nimb.png',
        referencias: Referencia.DEUSES,
        paginas: '124, 125 e 126'
      },
      {
        id: 55,
        nome: `Sumo-Sacerdote`,
        nome_arquivo_descricao: `distincao_sumo_sacerdote_descricao`,
        nome_arquivo_admissao: `distincao_sumo_sacerdote_admissao`,
        nome_arquivo_informacoes: `distincao_sumo_sacerdote_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Autoridade Divina</h5>
        <p><i><b>“Eu falo em nome do seu deus. Desrespeitar-me é desrespeitar sua fé.”</b></i></p>
        <p>Você é a autoridade máxima em uma igreja reconhecida pelos outros membros de sua fé. Você recebe o poder Autoridade Eclesiástica para sua divindade. Se já tiver esse poder, em vez disso recebe +2 em Religião e na CD de suas magias divinas.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_sumo_sacerdote.png',
        referencias: Referencia.DEUSES,
        paginas: '127, 128 e 129'
      },
      {
        id: 56,
        nome: `Taumaturgista`,
        nome_arquivo_descricao: `distincao_taumaturgista_descricao`,
        nome_arquivo_admissao: `distincao_taumaturgista_admissao`,
        nome_arquivo_informacoes: `distincao_taumaturgista_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Auxiliar Divino</h5>
        <p><i><b>As primeiras conjurações do taumaturgista envolvem pequenos seres dos mundos divinos.</b></i></p>
        <p>Você aprende e pode lançar uma das magias a seguir como uma de suas magias divinas: Conjurar Monstro, Montaria Arcana ou Servos Invisíveis. A cada dois poderes da distinção, você aprende e pode lançar outra dessas magias (caso aprenda novamente uma delas, seu custo diminui em –1 PM). <b><i>e</i></b></p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_taumaturgista.png',
        referencias: Referencia.DEUSES,
        paginas: '130, 131 e 132'
      },
      {
        id: 57,
        nome: `Teurgista Hermético`,
        nome_arquivo_descricao: `distincao_teurgista_hermetico_descricao`,
        nome_arquivo_admissao: `distincao_teurgista_hermetico_admissao`,
        nome_arquivo_informacoes: `distincao_teurgista_hermetico_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Princípio Hermético</h5>
        <p><i><b>O teurgista hermético supera as divisões tradicionais da magia.</b></i></p>
        <p>Você é considerado um conjurador tanto arcano quanto divino, e suas magias são consideradas tanto arcanas quanto divinas.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_teurgista_hermetico.png',
        referencias: Referencia.DEUSES,
        paginas: '133, 134 e 135'
      },
      {
        id: 58,
        nome: `Tibarita`,
        nome_arquivo_descricao: `distincao_tibarista_descricao`,
        nome_arquivo_admissao: `distincao_tibarista_admissao`,
        nome_arquivo_informacoes: `distincao_tibarista_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Poder Monetário</h5>
        <p><i><b>Para o tibarita, gastar dinheiro é um ato de devoção e o motivo de sua existência.</b></i></p>
        <p>Quando usa uma habilidade com um custo em PM, você pode consumir uma quantidade de tibares de ouro (limitada por seu Carisma). Cada TO consumido dessa forma paga 1 PM do custo da habilidade. Você pode consumir um número de TO por dia igual ao seu nível. Caso já possua essa habilidade, o limite de TO que você pode consumir por dia aumenta em +5.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_tibarista.png',
        referencias: Referencia.DEUSES,
        paginas: '136, 137 e 138'
      },
      {
        id: 59,
        nome: `Tirano do Terceiro`,
        nome_arquivo_descricao: `distincao_tirano_terceiro_descricao`,
        nome_arquivo_admissao: `distincao_tirano_terceiro_admissao`,
        nome_arquivo_informacoes: `distincao_tirano_terceiro_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Companheiro Dragão</h5>
        <p><i><b>Para o tirano, o primeiro passo é o elo com seu dragão.</b></i></p>
        <p>Você recebe um companheiro dragão jovem (de um tipo a sua escolha) que serve a você como um parceiro montaria iniciante (veja o quadro). Se o seu companheiro dragão morrer, você fica atordoado por 1 rodada. Um companheiro dragão morto pode ser substituído com uma ação entre aventuras.</p>
        `,
        ha_informacoes_adicionais: false,
        imagem: 'assets/img/distincao_tirano_terceiro.png',
        referencias: Referencia.DEUSES,
        paginas: '139, 140 e 141'
      },
    ];
  }
}
