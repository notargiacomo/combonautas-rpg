import { Injectable } from '@angular/core';
import { Deus } from '../model/deus';
import { Referencia } from '../enum/referencia.enum';

@Injectable({
  providedIn: 'root',
})
export class DeusData {
  private deuses: Deus[] = [];

  get(): any[] {
    return this.deuses;
  }

  constructor() {
    this.deuses = [
      {
        id:1,
        nome: 'Aharadak',
        nome_arquivo_descricao: 'deus_aharadak_descricao',
        nome_arquivo_poderes: 'deus_aharadak_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_aharadak.png',
        imagem: 'assets/img/deus_aharadak.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Corrente de Espinhos',
        fundamentalista_sacerdote: `Diferente de outros deuses, Aharadak tem mais fundamentalistas que liberais — são os verdadeiros vilões, cultistas maníacos que aterrorizam aldeias, sacrificam vítimas, invocam aberrações. É impossível para tais depravados perder seus poderes; suas almas já pertencem ao Devorador por completo. São obcecados com espalhar a corrupção da Tormenta, não importando quantos precisem sofrer ou morrer. Ainda assim, em suas mentes alucinadas, estão “fazendo o bem”.`,
        aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais ataca lefou e criaturas da Tormenta.` ,
        canalizaEnergia: '',
        devotos: ['Quaisquer'],
      },
      {
        id:2,
        nome: 'Allihanna',
        nome_arquivo_descricao: 'deus_allihanna_descricao',
        nome_arquivo_poderes: 'deus_allihanna_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_allihanna.png',
        imagem: 'assets/img/deus_allihanna.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Bordão',
        fundamentalista_sacerdote: `Totalmente dedicado à proteção e ao bem-estar de sua comunidade, jamais se ausenta em missões ou aventuras, exceto quando essa comunidade está em risco. Mesmo nesses casos, não deve se ausentar por mais de um mês.`,
        aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais ataca animais ou monstros com Natureza Vegetal, nem permite que seus aliados o façam. Além disso, não apenas é proibido de se associar a devotos de Megalokk, mas também deve atacar e destruir todos aqueles que encontrar.`,
        canalizaEnergia: 'Positiva',
        devotos: ['Dahllan', 'Elfo', 'Sílfide', 'Bárbaro', 'Caçador', 'Druida'],
      },
      {
        id:3,
        nome: 'Arsenal',
        nome_arquivo_descricao: 'deus_arsenal_descricao',
        nome_arquivo_poderes: 'deus_arsenal_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_arsenal.png',
        imagem: 'assets/img/deus_arsenal.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Martelo de Guerra',
        fundamentalista_sacerdote: `Qualquer mínima derrota deve ser imediatamente corrigida com uma vitória. Isso vale para qualquer teste de perícia, qualquer disputa, até mesmo algo inofensivo como uma discussão ou um jogo amigável. Deixar de fazê-lo é uma violação das Obrigações & Restrições, mesmo quando não houver meio (nesse caso, crie um meio).`,
        aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Anão', 'Minotauro', 'Bárbaro', 'Cavaleiro', 'Guerreiro', 'Lutador'],
      },
      {
        id:4,
        nome: 'Azgher',
        nome_arquivo_descricao: 'deus_azgher_descricao',
        nome_arquivo_poderes: 'deus_azgher_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_azgher.png',
        imagem: 'assets/img/deus_azgher.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Cimitarra',
        fundamentalista_sacerdote: `Não apenas é proibido de se associar a devotos de Tenebra, mas também deve atacar e destruir todos aqueles que encontrar.`,
        aceitaPaladinos: true,
        fundamentalista_paladino: `Como o sacerdote. Além disso, também é proibido de se associar a necromantes e mortos-vivos (incluindo osteon), devendo atacar e destruir todos que encontrar.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Aggelus', 'Qareen', 'Arcanista', 'Bárbaro', 'Caçadore', 'Cavaleiro', 'Guerreiro', 'Nobre', 'Paladino'],

      },
      {
        id:5,
        nome: 'Hyninn',
        nome_arquivo_descricao: 'deus_hyninn_descricao',
        nome_arquivo_poderes: 'deus_hyninn_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_hyninn.png',
        imagem: 'assets/img/deus_hyninn.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Adaga',
        fundamentalista_sacerdote: `Proibido de dizer mais de cinco verdades por dia. Além disso, seu ato de furtividade diário deve ter CD mínima 20 + metade de seu nível.`,
        aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Hynne', 'Goblin', 'Sílfide', 'Bardo', 'Bucaneiros', 'Ladino', 'Inventor', 'Nobre'],

      },
      {
        id:6,
        nome: 'Kallyadranoch',
        nome_arquivo_descricao: 'deus_kallyadranoch_descricao',
        nome_arquivo_poderes: 'deus_kallyadranoch_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_kallyadranoch.png',
        imagem: 'assets/img/deus_kallyadranoch.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Lança',
        fundamentalista_sacerdote: `Deve oferecer servidão a um dragão maligno adulto ou maior (muitos perdem a vida fazendo essa tentativa). Caso consiga, deve cumprir ordens e realizar oferendas regulares a esse patrono, mesmo quando envolvem sacrifícios humanos.`,         aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Negativa',
        devotos: ['Elfo', 'Medusa', 'Sulfure', 'Arcanista', 'Cavaleiro', 'Guerreiro', 'Lutadore', 'Nobre'],

      },
      {
        id:7,
        nome: 'Khalmyr',
        nome_arquivo_descricao: 'deus_khalmyr_descricao',
        nome_arquivo_poderes: 'deus_khalmyr_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_khalmyr.png',
        imagem: 'assets/img/deus_khalmyr.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Espada Longa',
        fundamentalista_sacerdote: `Em vez de simplesmente esperar por pedidos de ajuda, deve sempre oferecê-la a qualquer pessoa que encontrar. Se houver várias pessoas na cena, oferece ajuda a quem pareça ter mais necessidade. O devoto deve encontrar e ajudar pelo menos um necessitado por dia.`,
        aceitaPaladinos: true,
        fundamentalista_paladino: `Como o sacerdote.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Aggelus', 'Anão', 'Cavaleiro', 'Guerreiro', 'Nobre', 'Paladino'],
      },
      {
        id:8,
        nome: 'Lena',
        nome_arquivo_descricao: 'deus_lena_descricao',
        nome_arquivo_poderes: 'deus_lena_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_lena.png',
        imagem: 'assets/img/deus_lena.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Não há',
        fundamentalista_sacerdote: `As mais ferrenhas clérigas de Lena não recusam ajudar qualquer vítima de um conflito, em qualquer dos lados. Sempre que existe uma criatura ferida ao alcance de sua cura, seja aliado ou inimigo, não pode realizar qualquer outra ação exceto curá-la.`,
        aceitaPaladinos: true,
        fundamentalista_paladino: `Não pode causar nenhum tipo de dano, nem mesmo dano não letal.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Dahllan', 'Qareen', 'Nobre', 'Paladinos'],
      },
      {
        id:9,
        nome: 'Lin-Wu',
        nome_arquivo_descricao: 'deus_linwu_descricao',
        nome_arquivo_poderes: 'deus_linwu_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_linwu.png',
        imagem: 'assets/img/deus_linwu.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Katana',
        fundamentalista_sacerdote: 'Sem tolerância à incivilidade estrangeira, o shugenja não permite que seus aliados recorram a ações que exigem testes de Enganação, Ladinagem ou Furtividade; qualquer desses atos é uma desonra!',
        aceitaPaladinos: true,
        fundamentalista_paladino: `Como o sacerdote. Além disso é também proibido de se associar a devotos de Aharadak, também devendo atacar e destruir todos que encontrar.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Anão', 'Cavaleiro', 'Guerreiro', 'Nobre', 'Paladino'],
      },
      {
        id:10,
        nome: 'Marah',
        nome_arquivo_descricao: 'deus_marah_descricao',
        nome_arquivo_poderes: 'deus_marah_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_marah.png',
        imagem: 'assets/img/deus_marah.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Não há',
        fundamentalista_sacerdote: `Nunca participa de um combate, nem mesmo protegendo ou curando aliados. Jamais lança magias que exigem testes de resistência, pois considera isso uma agressão. Recorre a qualquer meio não violento para encerrar um combate, sacrificando a própria vida se necessário.`,
        aceitaPaladinos: true,
        fundamentalista_paladino: `Nunca permite que seus aliados causem perda de vida ou dano, nem mesmo dano não letal.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Aggelus', 'Elfo', 'Hynne', 'Qareen', 'Bardo', 'Nobre', 'Paladino'],
      },
      {
        id:11,
        nome: 'Megalokk',
        nome_arquivo_descricao: 'deus_megalokk_descricao',
        nome_arquivo_poderes: 'deus_megalokk_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_megalokk.png',
        imagem: 'assets/img/deus_megalokk.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Maça',
        fundamentalista_sacerdote: `Recusa qualquer aliança ou contato pacífico com membros de outros povos, exceto o tipo de monstro que protege. Todos os outros merecem apenas violência, servem apenas como comida.`,
        aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais se associa a ninguém. Todos os outros seres, incluindo monstros, servem apenas como oferenda a Megalokk. Ou comida.`,
        canalizaEnergia: 'Negativa',
        devotos: ['Goblin', 'Medusa', 'Minotauro', 'Sulfure', 'Trog', 'Bárbaros', 'Caçador', 'Druida', 'Lutador'],
      },
      {
        id:12,
        nome: 'Nimb',
        nome_arquivo_descricao: 'deus_nimb_descricao',
        nome_arquivo_poderes: 'deus_nimb_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_nimb.png',
        imagem: 'assets/img/deus_nimb.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Qualquer',
        fundamentalista_sacerdote: `Como oferenda a Nimb, entrega a própria vida ao aleatório. Uma vez a cada sessão (ou a cada mês, em tempo de jogo), coloca-se em uma situação com pelo menos 5% de chance de morte (1 em 1d20). Por exemplo, misturando um doce envenenado a outros dezenove inofensivos, então comendo um ao acaso.`,
        aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Goblin', 'Qareen', 'Sílfide', 'Arcanista', 'Bárbaro', 'Bardo', 'Bucaneiro', 'Inventor', 'Ladino'],
      },
      {
        id:13,
        nome: 'Oceano',
        nome_arquivo_descricao: 'deus_oceano_descricao',
        nome_arquivo_poderes: 'deus_oceano_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_oceano.png',
        imagem: 'assets/img/deus_oceano.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Tridente',
        fundamentalista_sacerdote: `Jamais pisa em solo firme, exceto quando cercado de água visível em pelo menos três direções (barcos, navios, cais, ilhotas...). Quando absolutamente necessário, deve recorrer a meios especiais, como voo, para evitar que seus pés toquem o chão.`,
        aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais deixa a água, nem por um instante.`,
        canalizaEnergia: 'Qualquer',
        devotos: ['Dahllan', 'Hynne', 'Minotauros', 'Sereia/Tritão', 'Bárbaro', 'Bucaneiro', 'Caçador', 'Druida'],
      },
      {
        id:14,
        nome: 'Sszzaas',
        nome_arquivo_descricao: 'deus_sszzaas_descricao',
        nome_arquivo_poderes: 'deus_sszzaas_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_sszzaas.png',
        imagem: 'assets/img/deus_sszzaas.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Adaga',
        fundamentalista_sacerdote: `Conhecidos como sszzaazitas, estes fanáticos são os devotos mais ferrenhos de Sszzaas, não raras vezes traindo e matando seus aliados. Cada vez que sobe de nível, um sszzaazita deve realizar um sacrifício (assassinar um humanoide em ritual) ou um ato de corrupção do bem (fazer fracassar uma causa justa, incriminar um inocente por um crime grave, destruir um item sagrado...).`,
        aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Negativa',
        devotos: ['Medusa', 'Arcanista', 'Bardo', 'Bucaneiro', 'Inventor', 'Ladino', 'Nobre'],
      },
      {
        id:15,
        nome: 'Tanna-Toh',
        nome_arquivo_descricao: 'deus_tannatoh_descricao',
        nome_arquivo_poderes: 'deus_tannatoh_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_tannatoh.png',
        imagem: 'assets/img/deus_tannatoh.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Bordão',
        fundamentalista_sacerdote: `Em vez de esperar perguntas, simplesmente revela tudo que existe para saber, mesmo sem ser perguntado. Também é proibido de fazer testes de Enganação ou Furtividade, ou permitir que sejam feitos em sua presença (caso ocorram, deve revelar a verdade e/ou atrapalhar a ação).`,
        aceitaPaladinos: true,
        fundamentalista_paladino: `Como o sacerdote. Além disso, sempre informa sua verdadeira identidade e ocupação antes de iniciar uma conversa.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Golen', 'Kliren', 'Arcanista', 'Bardo', 'Inventor', 'Nobre', 'Paladino'],
      },
      {
        id:16,
        nome: 'Tenebra',
        nome_arquivo_descricao: 'deus_tenebra_descricao',
        nome_arquivo_poderes: 'deus_tenebra_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_tenebra.png',
        imagem: 'assets/img/deus_tenebra.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Adaga',
        fundamentalista_sacerdote: `Proibido de recorrer a qualquer forma de iluminação natural, artificial ou mágica; pode apenas usar visão no escuro e outros sentidos. Além disso, não apenas é proibido de associar-se a devotos de Azgher, mas também deve atacar e destruir todos aqueles que encontrar.`,
        aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais ataca mortos-vivos, mesmo que seja atacado por eles.`,
        canalizaEnergia: 'Negativa',
        devotos: ['Anão', 'Medusa', 'Qareen', 'Osteon', 'Sulfure', 'Trogs', 'Arcanista', 'Bardo', 'Ladino'],

      },
      {
        id:17,
        nome: 'Thwor',
        nome_arquivo_descricao: 'deus_thwor_descricao',
        nome_arquivo_poderes: 'deus_thwor_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_thwor.png',
        imagem: 'assets/img/deus_thwor.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Machado de guerra',
        fundamentalista_sacerdote: `Atua como protetor de seu povo, mas é um inimigo do Reinado. Suas “missões divinas” se resumem a ataques contra povoados humanos. Todo ser inteligente que recuse devoção a Thwor deve ser destruído.`,
        aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Duyshidakk'],
      },
      {
        id:18,
        nome: 'Thyatis',
        nome_arquivo_descricao: 'deus_thyatis_descricao',
        nome_arquivo_poderes: 'deus_thyatis_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_thyatis.png',
        imagem: 'assets/img/deus_thyatis.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Espada Longa',
        fundamentalista_sacerdote: `Proibido de matar não apenas seres inteligentes, mas quaisquer seres vivos. Além disso, não pode se recusar a ressuscitar nenhuma criatura ao alcance de seus poderes, incluindo inimigos.`,
        aceitaPaladinos: true,
        fundamentalista_paladino: `Proibido de matar não apenas seres inteligentes, mas quaisquer seres vivos.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Aggelus', 'Cavaleiro', 'Guerreiro', 'Inventor', 'Lutador', 'Paladino'],
      },
      {
        id:19,
        nome: 'Valkaria',
        nome_arquivo_descricao: 'deus_valkaria_descricao',
        nome_arquivo_poderes: 'deus_valkaria_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_valkaria.png',
        imagem: 'assets/img/deus_valkaria.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Mangual',
        fundamentalista_sacerdote: `Nunca permanece mais de uma semana na mesma cidade. Também nunca recusa uma missão ou aventura, por mais perigosa que seja.`,
        aceitaPaladinos: true,
        fundamentalista_paladino: `Deve sempre buscar novas missões e aventuras, jamais recusando uma missão. Sempre que houver um tempo entre aventuras (Tormenta20, p. 276), deve realizar uma busca relacionada a uma aventura. Também é proibido de usar habilidades que causam condições de movimento. Apenas humanos podem ser paladinos fundamentalistas de Valkaria.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Quallquer'],
      },
      {
        id:20,
        nome: 'Wynna',
        nome_arquivo_descricao: 'deus_wynna_descricao',
        nome_arquivo_poderes: 'deus_wynna_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_wynna.png',
        imagem: 'assets/img/deus_wynna.png',
        referencias: Referencia.BASICO,
        paginas: '96'
        ,armaPreferida: 'Adaga',
        fundamentalista_sacerdote: `Jamais impede a execução de uma magia, nem promove seu cancelamento, de aliados ou inimigos. É proibido de usar Dissipar Magia, Campo Antimagia e similares (mas ainda pode interromper suas próprias magias sustentadas).`,
        aceitaPaladinos: false,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Elfo', 'Golen', 'Qareen', 'Sílfide', 'Arcanista', 'Bardo'],
      },
      {
        id: 21,
        nome: 'Panteão',
        nome_arquivo_descricao: 'deus_panteao_descricao',
        tipo: 'Maior',
        fundamentalista_sacerdote: `Acredita com fervor que todo o Panteão deve ser cultuado; favorecer este ou aquele deus acaba atraindo o desfavor dos outros dezenove. Não se associa a devotos de deuses específicos. Além de PM adicionais (p. 11), o sacerdote do Panteão fundamentalista recebe um poder de combate ou de destino a sua escolha.`,
      },
      {
        id: 22,
        nome: 'Arton',
        nome_arquivo_descricao: 'deus_arton_descricao',
        tipo: 'Maior',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais matar, nem mesmo para subsistência. Deve recorrer a meios mágicos para sustento. Em vez de um poder concedido, o druida de Arton fundamentalista recebe um poder geral.`
      },
      {
        id: 23,
        nome: 'Bem',
        nome_arquivo_descricao: 'deus_bem_descricao',
        tipo: 'Maior',
        aceitaPaladinos: true,
        fundamentalista_paladino: `Como o sacerdote do Panteão.`
      },
      {
        id: 24,
        nome: 'Ateísmo',
        tipo: 'Maior',
      }
    ];
  }
}
