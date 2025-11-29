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
        id: 1,
        nome: 'Aharadak',
        nome_arquivo_descricao: 'deus_aharadak_descricao',
        nome_arquivo_poderes: 'deus_aharadak_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_aharadak.png',
        imagem: 'assets/img/deus_aharadak.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Corrente de Espinhos',
        fundamentalista_sacerdote: `Diferente de outros deuses, Aharadak tem mais fundamentalistas que liberais — são os verdadeiros vilões, cultistas maníacos que aterrorizam aldeias, sacrificam vítimas, invocam aberrações. É impossível para tais depravados perder seus poderes; suas almas já pertencem ao Devorador por completo. São obcecados com espalhar a corrupção da Tormenta, não importando quantos precisem sofrer ou morrer. Ainda assim, em suas mentes alucinadas, estão “fazendo o bem”.`,
        aceitaPaladinos: false,
        descricao: `
        <p>Outrora um dos terríveis Lordes da Tormenta, esta aberração monstruosa ambicionava o grande poder divino oferecido pelos devotos de Arton. Após anos liderando seu próprio culto profano, Aharadak matou Tauron, o Deus da Força, e ascendeu como o novo e macabro Deus da Tormenta. Agora ocupando uma posição importante no Panteão, os invasores lefeu avançam mais uma etapa em seus planos para corromper Arton. Apenas os devotos mais depravados ousam cultuar esta divindade de escatologia e sadismo.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar a Tormenta, apregoar a inevitabilidade de sua chegada ao mundo. Praticar a devassidão e a perversão. Deturpar tudo que é correto, desfigurar tudo que é normal. Abraçar a agonia, crueldade e loucura.</p>
        <p><b>Símbolo Sagrado.</b> Um olho macabro de pupila vertical e cercado de espinhos.</p>
        <p><b>Canalizar Energia.</b> Negativa.</p>
        <p><b>Arma Preferida.</b> Corrente de espinhos.</p>
        <p><b>Devotos.</b> Quaisquer. A Tormenta aceita tudo e todos.</p>
        <p><b>Obrigações & Restrições.</b> Quase todos os cultistas de Aharadak são maníacos insanos, compelidos a praticar os atos mais abomináveis. No entanto, talvez devido à natureza alienígena e incompreensível deste deus, alguns devotos conseguem se resguardar. Preservam sua humanidade, abstendo-se de cometer crimes ou profanações. Ainda assim, o devoto paga um preço. No início de qualquer cena de ação, role 1d6. Com um resultado ímpar, você fica fascinado na primeira rodada, perdido em devaneios sobre a futilidade da vida (mesmo que seja imune a esta condição).`,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais ataca lefou e criaturas da Tormenta.`,
        canalizaEnergia: '',
        devotos: ['Quaisquer'],
      },
      {
        id: 2,
        nome: 'Allihanna',
        nome_arquivo_descricao: 'deus_allihanna_descricao',
        nome_arquivo_poderes: 'deus_allihanna_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_allihanna.png',
        imagem: 'assets/img/deus_allihanna.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Bordão',
        fundamentalista_sacerdote: `Totalmente dedicado à proteção e ao bem-estar de sua comunidade, jamais se ausenta em missões ou aventuras, exceto quando essa comunidade está em risco. Mesmo nesses casos, não deve se ausentar por mais de um mês.`,
        aceitaPaladinos: false,
        descricao: `
        <p>A Deusa da Natureza representa a bondade inerente ao mundo natural, a pureza das plantas e animais. Mesmo os animais predadores são considerados puros, inocentes — pois matam apenas para sobreviver, ao contrário dos monstros e seres civilizados. A divindade principal dos druidas, Allihanna também é cultuada por povos bárbaros. Estes veneram faces variadas desta deusa, que pode se manifestar como um majestoso animal (diferente para cada culto) ou uma criatura quimérica de muitas cabeças.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar os seres da natureza. Proteger a vida selvagem. Promover harmonia entre a natureza e a civilização. Combater monstros, mortos-vivos e outras criaturas que perturbam o equilíbrio natural.</p>
        <p><b>Símbolo Sagrado.</b> Para bárbaros e outros adoradores de animais, o símbolo corresponde ao respectivo animal. Para outros, uma pequena árvore.</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Bordão.</p>
        <p><b>Devotos.</b> Dahllan, elfos, sílfides, bárbaros, caçadores, druidas.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Allihanna não podem usar armaduras e escudos feitos de metal. Assim, você só pode usar armadura acolchoada, de couro, gibão de peles e escudo leve, ou itens feitos de materiais especiais não metálicos.</p>
        <p>Devotos de Allihanna não podem descansar em nenhuma comunidade maior que uma aldeia (não perdem seus poderes, mas também não recuperam pontos de vida ou mana). Por isso, sempre preferem
        o relento a um quarto de estalagem.</p>
        `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais ataca animais ou monstros com Natureza Vegetal, nem permite que seus aliados o façam. Além disso, não apenas é proibido de se associar a devotos de Megalokk, mas também deve atacar e destruir todos aqueles que encontrar.`,
        canalizaEnergia: 'Positiva',
        devotos: ['Dahllan', 'Elfo', 'Sílfide', 'Bárbaro', 'Caçador', 'Druida'],
      },
      {
        id: 3,
        nome: 'Arsenal',
        nome_arquivo_descricao: 'deus_arsenal_descricao',
        nome_arquivo_poderes: 'deus_arsenal_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_arsenal.png',
        imagem: 'assets/img/deus_arsenal.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Martelo de Guerra',
        fundamentalista_sacerdote: `Qualquer mínima derrota deve ser imediatamente corrigida com uma vitória. Isso vale para qualquer teste de perícia, qualquer disputa, até mesmo algo inofensivo como uma discussão ou um jogo amigável. Deixar de fazê-lo é uma violação das Obrigações & Restrições, mesmo quando não houver meio (nesse caso, crie um meio).`,
        aceitaPaladinos: false,
        descricao: `<p>Outrora um infame clérigo guerreiro, o vilão conhecido apenas como Mestre Arsenal se tornou sumo-sacerdote do violento deus Keenn. No entanto, após uma longa campanha que envolveu a conquista da mais poderosa espada mágica de Arton, o clérigo derrotou seu próprio patrono em combate durante um torneio épico, ascendendo ao Panteão como o novo Deus da Guerra. Com o objetivo de tornar Arton mais forte, capaz de confrontar qualquer inimigo, Arsenal e seus devotos seguem deflagrando conflitos por todo o Reinado e além.</p>
        <p><b>Crenças e Objetivos.</b> Promover a guerra e o conflito. Vencer a qualquer custo, pela força ou estratégia. Jamais oferecer ou aceitar rendição. Eliminar as próprias fraquezas. Conhecer o inimigo como a si mesmo. Sempre encontrar condições de vitória; quando não existirem, criá-las.</p>
        <p><b>Símbolo Sagrado.</b> Um martelo de guerra e uma espada longa cruzados sobre um escudo.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Martelo de guerra.</p>
        <p><b>Devotos.</b> Anões, minotauros, bárbaros, cavaleiros, guerreiros, lutadores.</p>
        <p><b>Obrigações & Restrições.</b> Um devoto de Arsenal é proibido de ser derrotado em qualquer tipo de combate ou disputa (como um teste oposto para ver quem é mais forte). Caso seu grupo seja derrotado, isso também constitui uma violação das obrigações.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Anão', 'Minotauro', 'Bárbaro', 'Cavaleiro', 'Guerreiro', 'Lutador'],
      },
      {
        id: 4,
        nome: 'Azgher',
        nome_arquivo_descricao: 'deus_azgher_descricao',
        nome_arquivo_poderes: 'deus_azgher_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_azgher.png',
        imagem: 'assets/img/deus_azgher.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Cimitarra',
        fundamentalista_sacerdote: `Não apenas é proibido de se associar a devotos de Tenebra, mas também deve atacar e destruir todos aqueles que encontrar.`,
        aceitaPaladinos: true,
        fundamentalista_paladino: `Como o sacerdote. Além disso, também é proibido de se associar a necromantes e mortos-vivos (incluindo osteon), devendo atacar e destruir todos que encontrar.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: [
          'Aggelus',
          'Qareen',
          'Arcanista',
          'Bárbaro',
          'Caçadore',
          'Cavaleiro',
          'Guerreiro',
          'Nobre',
          'Paladino',
        ],
      },
      {
        id: 5,
        nome: 'Hyninn',
        nome_arquivo_descricao: 'deus_hyninn_descricao',
        nome_arquivo_poderes: 'deus_hyninn_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_hyninn.png',
        imagem: 'assets/img/deus_hyninn.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Adaga',
        fundamentalista_sacerdote: `Proibido de dizer mais de cinco verdades por dia. Além disso, seu ato de furtividade diário deve ter CD mínima 20 + metade de seu nível.`,
        aceitaPaladinos: false,
        descricao: `
        <p>Capaz de enganar até mesmo outros deuses, o ardiloso Deus da Trapaça é uma divindade favorita
        de foras da lei — seus clérigos atuam como conselheiros, ou até mesmo líderes, em guildas criminosas ou navios piratas. Também é louvado por regentes e mercadores não muito honestos, orando por vantagens ilícitas. No entanto, mesmo pessoas honradas eventualmente simpatizam com Hyninn por sua esperteza, despreocupação e ousadia.</p>
        <p><b>Crenças e Objetivos.</b> Praticar a astúcia e a esperteza. Demonstrar que honestidade e sinceridade levam ao fracasso. Desafiar a lei e a ordem. Ser vitorioso sem seguir regras. Fazer aos outros antes que façam a você. Levar vantagem em tudo.</p>
        <p><b>Símbolo Sagrado.</b> Uma adaga atravessando uma máscara, ou uma raposa.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Adaga.</p>
        <p><b>Devotos.</b> Hynne, goblins, sílfides, bardos, bucaneiros, ladinos, inventores, nobres.</p>
        <p><b>Obrigações & Restrições.</b> Hyninn não recusa participação em um golpe, trapaça ou artimanha (o que muitas vezes inclui missões para roubar... hã, resgatar tesouros), exceto quando prejudica seus próprios aliados.</p>
        <p>O devoto também deve fazer um ato furtivo, ousado ou proibido por dia (ou por sessão de jogo,
        o que demorar mais), como oferenda a Hyninn. Roubar uma bolsa, enganar um miliciano, invadir o
        quarto de um nobre... Em termos de jogo, uma ação exigindo um teste de Enganação ou Ladinagem com CD mínima 15 + metade do seu nível.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Hynne', 'Goblin', 'Sílfide', 'Bardo', 'Bucaneiros', 'Ladino', 'Inventor', 'Nobre'],
      },
      {
        id: 6,
        nome: 'Kallyadranoch',
        nome_arquivo_descricao: 'deus_kallyadranoch_descricao',
        nome_arquivo_poderes: 'deus_kallyadranoch_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_kallyadranoch.png',
        imagem: 'assets/img/deus_kallyadranoch.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Lança',
        fundamentalista_sacerdote: `Deve oferecer servidão a um dragão maligno adulto ou maior (muitos perdem a vida fazendo essa tentativa). Caso consiga, deve cumprir ordens e realizar oferendas regulares a esse patrono, mesmo quando envolvem sacrifícios humanos.`,
        aceitaPaladinos: false,
        descricao: `
        <p>Como punição imposta por Khalmyr pelo crime de criar a Tormenta, o Deus dos Dragões estava esquecido até poucos anos atrás, conhecido apenas como “o Terceiro”. Restaurado em tempos recentes durante um combate épico contra os invasores aberrantes, Kallyadranoch agora governa não apenas os dragões, mas todos que cultuam o poder elemental das grandes feras. Além disso, enquanto Wynna representa o lado bondoso e generoso da magia arcana, Kally é cultuado por arcanistas malignos.</p>
        <p><b>Crenças e Objetivos.</b> Praticar a soberania. Demonstrar orgulho, superioridade, majestade. Praticar o acúmulo de riquezas. Proteger suas posses e sua dignidade. Ser implacável com seus inimigos. Reverenciar os dragões e suas crias.</p>
        <p><b>Símbolo Sagrado.</b> Escamas de cinco cores diferentes.</p>
        <p><b>Canalizar Energia.</b> Negativa.</p>
        <p><b>Arma Preferida.</b> Lança.</p>
        <p><b>Devotos.</b> Elfos, medusas, sulfure, arcanistas, cavaleiros, guerreiros, lutadores, nobres.</p>
        <p><b>Obrigações & Restrições.</b> Para subir de nível, além de acumular XP suficiente, o devoto de Kally deve realizar uma oferenda em tesouro. O valor é igual à 20% da diferença do dinheiro inicial do nível que vai alcançar para o nível atual (por exemplo, T$ 80 para subir para o 4° nível). Sabe-se, também, de devotos malignos que sacrificam vítimas a Kally (não permitido para personagens jogadores).</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Negativa',
        devotos: ['Elfo', 'Medusa', 'Sulfure', 'Arcanista', 'Cavaleiro', 'Guerreiro', 'Lutadore', 'Nobre'],
      },
      {
        id: 7,
        nome: 'Khalmyr',
        nome_arquivo_descricao: 'deus_khalmyr_descricao',
        nome_arquivo_poderes: 'deus_khalmyr_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_khalmyr.png',
        imagem: 'assets/img/deus_khalmyr.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Espada Longa',
        fundamentalista_sacerdote: `Em vez de simplesmente esperar por pedidos de ajuda, deve sempre oferecê-la a qualquer pessoa que encontrar. Se houver várias pessoas na cena, oferece ajuda a quem pareça ter mais necessidade. O devoto deve encontrar e ajudar pelo menos um necessitado por dia.`,
        aceitaPaladinos: true,
        descricao: `
        <p>Antigo líder do Panteão, o Deus da Justiça já foi considerado a divindade mais popular no Reinado. Isso mudaria com a vitória dos minotauros nas Guerras Táuricas, bem como a recente ascensão de Valkaria como nova líder dos deuses. Mesmo assim, Khalmyr ainda é louvado por aqueles que lutam pela ordem e justiça. As duas maiores ordens de cavaleiros em Arton foram criadas em sua honra: a Ordem da Luz e a Ordem de Khalmyr. Esta é também uma das divindades principais dos anões, junto de Tenebra — conforme a crença, ambos teriam gerado juntos a raça anã.</p>
        <p><b>Crenças e Objetivos.</b> Praticar a caridade e o altruísmo. Defender a lei, a ordem e os necessitados. Combater a mentira, o crime e o mal. Oferecer clemência, perdão e redenção. Lutar o bom combate.</p>
        <p><b>Símbolo Sagrado.</b> Espada sobreposta a uma balança.</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Espada longa.</p>
        <p><b>Devotos.</b> Aggelus, anões, cavaleiros, guerreiros, nobres, paladinos.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Khalmyr não podem recusar pedidos de ajuda de pessoas inocentes. Também devem cumprir as ordens de superiores na hierarquia da igreja (devotos do Deus da Justiça de nível maior) e só podem usar itens mágicos permanentes criados por devotos do mesmo deus.</p>`,
        fundamentalista_paladino: `Como o sacerdote.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Aggelus', 'Anão', 'Cavaleiro', 'Guerreiro', 'Nobre', 'Paladino'],
      },
      {
        id: 8,
        nome: 'Lena',
        nome_arquivo_descricao: 'deus_lena_descricao',
        nome_arquivo_poderes: 'deus_lena_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_lena.png',
        imagem: 'assets/img/deus_lena.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Não há',
        fundamentalista_sacerdote: `As mais ferrenhas clérigas de Lena não recusam ajudar qualquer vítima de um conflito, em qualquer dos lados. Sempre que existe uma criatura ferida ao alcance de sua cura, seja aliado ou inimigo, não pode realizar qualquer outra ação exceto curá-la.`,
        aceitaPaladinos: true,
        descricao: `
        <p>Mesmo os deuses mais violentos e cruéis são respeitosos com a Deusa Criança, provedora da fertilidade, do sustento, da própria vida. Lena não é venerada apenas por aventureiros necessitados de curas mágicas, mas também por fazendeiros que imploram por colheitas fartas, criadores desejosos de saúde para seus animais e cada grávida prestes a dar à luz. Servida quase exclusivamente por mulheres, a Deusa da Vida oferece os mais poderosos milagres de cura presenciados em Arton.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar e proteger a vida em todas as suas formas. Reverenciar a fertilidade, a fecundidade, a maternidade e a infância. Praticar a caridade e o altruísmo. Oferecer clemência, perdão e redenção. Aliviar a dor e o sofrimento físico, mental ou espiritual.</p>
        <p><b>Símbolo Sagrado.</b> Lua crescente prateada.</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Não há. Servos desta deusa não podem lançar a magia Arma Espiritual e similares.</p>
        <p><b>Devotos.</b> Dahllan, qareen, nobres, paladinos.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Lena não podem causar dano letal ou perda de PV a criaturas vivas (fornecer bônus em dano letal também é proibido). Podem causar dano não letal e prejudicar seus inimigos (em termos de jogo, impondo condições), desde que não causem dano letal ou perda de PV. Para um devoto de Lena, é preferível perder a própria vida a tirá-la de outros.</p>
        <p>Apenas mulheres podem ser devotas de Lena. Uma clériga precisa dar à luz pelo menos uma vez antes de receber seus poderes divinos. A fecundação é um mistério bem guardado pelas sacerdotisas; conta-se que a própria deusa vem semear suas discípulas. Paladinos de Lena podem ser homens (são os únicos devotos masculinos permitidos) ou mulheres.</p>`,
        fundamentalista_paladino: `Não pode causar nenhum tipo de dano, nem mesmo dano não letal.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Dahllan', 'Qareen', 'Nobre', 'Paladinos'],
      },
      {
        id: 9,
        nome: 'Lin-Wu',
        nome_arquivo_descricao: 'deus_linwu_descricao',
        nome_arquivo_poderes: 'deus_linwu_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_linwu.png',
        imagem: 'assets/img/deus_linwu.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Katana',
        fundamentalista_sacerdote:
          'Sem tolerância à incivilidade estrangeira, o shugenja não permite que seus aliados recorram a ações que exigem testes de Enganação, Ladinagem ou Furtividade; qualquer desses atos é uma desonra!',
        aceitaPaladinos: true,
        descricao: `
        <p>Mesmo com a quase extinção de seu povo pela Tormenta, o honrado Deus Samurai nunca fraquejou, nunca perdeu sua dignidade. Hoje, o Império de Jade está livre da tempestade, seus habitantes retornam para a grande reconstrução. Lin-Wu e seu povo sempre serão gratos aos campeões gaijin, por sua amizade e suporte durante os anos de pesadelo. Talvez por esse motivo, conforme especulam seus servos shugenja, devotos de Lin-Wu atuando longe de Tamu-ra recebem poderes diferentes, mais convenientes para suas missões.</p>
        <p><b>Crenças e Objetivos.</b> Promover a honra acima de tudo. Proteger Tamu-ra e o Reinado de Arton. Praticar honestidade, coragem, cortesia e compaixão. Demonstrar integridade e dignidade.
        Ser leal a seus companheiros. Buscar redenção após cometer desonra.</p>
        <p><b>Símbolo Sagrado.</b> Placa de metal com a silhueta de um dragão-serpente celestial.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Katana.</p>
        <p><b>Devotos.</b> Anões, cavaleiros, guerreiros, nobres, paladinos.</p>
        <p><b>Obrigações & Restrições.</b> Antigas proibições quanto a devotos estrangeiros ou do gênero
        feminino não mais se aplicam. No entanto, devotos de Lin-Wu ainda devem demonstrar comportamento
        honrado, jamais recorrendo a mentiras e subterfúgios. Em termos de jogo, são proibidos de tentar
        qualquer ação que exigiria um teste de Enganação, Furtividade ou Ladinagem.</p>`,
        fundamentalista_paladino: `Como o sacerdote. Além disso é também proibido de se associar a devotos de Aharadak, também devendo atacar e destruir todos que encontrar.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Anão', 'Cavaleiro', 'Guerreiro', 'Nobre', 'Paladino'],
      },
      {
        id: 10,
        nome: 'Marah',
        nome_arquivo_descricao: 'deus_marah_descricao',
        nome_arquivo_poderes: 'deus_marah_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_marah.png',
        imagem: 'assets/img/deus_marah.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Não há',
        fundamentalista_sacerdote: `Nunca participa de um combate, nem mesmo protegendo ou curando aliados. Jamais lança magias que exigem testes de resistência, pois considera isso uma agressão. Recorre a qualquer meio não violento para encerrar um combate, sacrificando a própria vida se necessário.`,
        aceitaPaladinos: true,
        descricao: `
        <p>Neste mundo sempre em guerra, devotos da Deusa da Paz talvez sejam os mais corajosos e perseverantes, buscando inspiração em sua padroeira para proteger Arton sem usar de violência. Marah ensina a suportar qualquer provação, demonstrar que brutalidade nunca é a única resposta. Ainda assim, esta não é apenas uma divindade de placidez e indolência; devotos de Marah costumam ser plenos de bom humor e atitude positiva, sempre prontos para uma nova celebração ou romance...</p>
        <p><b>Crenças e Objetivos.</b> Praticar o amor e a gratidão pela vida e pela bondade. Promover a paz, harmonia e felicidade. Aliviar a dor e o sofrimento, trazer conforto aos aflitos. Praticar a caridade e o altruísmo. Oferecer clemência, perdão e redenção.</p>
        <p><b>Símbolo Sagrado.</b> Um coração vermelho.</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Não há. Devotos desta deusa não podem lançar a magia Arma Espiritual e similares.</p>
        <p><b>Devotos.</b> Aggelus, elfos, hynne, qareen, bardos, nobres, paladinos.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Marah não podem causar dano, perda de PV e condições a criaturas, exceto enfeitiçado, fascinado e pasmo (fornecer bônus em dano também é proibido). Em combate, só podem recorrer a ações como proteger ou curar — ou fugir, render-se ou aceitar a morte. Um devoto de Marah jamais vai causar violência, nem mesmo para se salvar.</p>`,
        fundamentalista_paladino: `Nunca permite que seus aliados causem perda de vida ou dano, nem mesmo dano não letal.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Aggelus', 'Elfo', 'Hynne', 'Qareen', 'Bardo', 'Nobre', 'Paladino'],
      },
      {
        id: 11,
        nome: 'Megalokk',
        nome_arquivo_descricao: 'deus_megalokk_descricao',
        nome_arquivo_poderes: 'deus_megalokk_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_megalokk.png',
        imagem: 'assets/img/deus_megalokk.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Maça',
        fundamentalista_sacerdote: `Recusa qualquer aliança ou contato pacífico com membros de outros povos, exceto o tipo de monstro que protege. Todos os outros merecem apenas violência, servem apenas como comida.`,
        aceitaPaladinos: false,
        descricao: `
        <p>O Deus dos Monstros é uma divindade de selvageria e descontrole — quando bárbaros entram em fúria, diz-se que estão apenas canalizando seu rancor primordial. Enquanto servos de Allihanna promovem harmonia entre a natureza e os povos civilizados, devotos de seu irmão sanguinário buscam apenas o extermínio de seus inimigos. E, para um servo do Deus dos Monstros, quase tudo que se move é um inimigo...</p>
        <p><b>Crenças e Objetivos.</b> Praticar a violência, a soberania do mais forte. Jamais reprimir os próprios instintos e desejos. Jamais ser domado, desafiar qualquer forma de controle. Jamais oferecer perdão ou rendição. Eliminar os fracos. Destruir seus inimigos.</p>
        <p><b>Símbolo Sagrado.</b> A garra de um monstro.</p>
        <p><b>Canalizar Energia.</b> Negativa.</p>
        <p><b>Arma Preferida.</b> Maça.</p>
        <p><b>Devotos.</b> Goblins, medusas, minotauros, sulfure, trogs, bárbaros, caçadores, druidas, lutadores.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Megalokk devem rejeitar os modos civilizados e se entregar à ferocidade, descontrole e impaciência. Você é proibido de usar perícias baseadas em Inteligência ou Carisma (exceto Adestramento e Intimidação) e não pode preparar uma ação, escolher 10 ou 20 em testes e lançar magias sustentadas (pois são ações que exigem foco e paciência).</p>
        `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais se associa a ninguém. Todos os outros seres, incluindo monstros, servem apenas como oferenda a Megalokk. Ou comida.`,
        canalizaEnergia: 'Negativa',
        devotos: ['Goblin', 'Medusa', 'Minotauro', 'Sulfure', 'Trog', 'Bárbaros', 'Caçador', 'Druida', 'Lutador'],
      },
      {
        id: 12,
        nome: 'Nimb',
        nome_arquivo_descricao: 'deus_nimb_descricao',
        nome_arquivo_poderes: 'deus_nimb_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_nimb.png',
        imagem: 'assets/img/deus_nimb.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Qualquer',
        fundamentalista_sacerdote: `Como oferenda a Nimb, entrega a própria vida ao aleatório. Uma vez a cada sessão (ou a cada mês, em tempo de jogo), coloca-se em uma situação com pelo menos 5% de chance de morte (1 em 1d20). Por exemplo, misturando um doce envenenado a outros dezenove inofensivos, então comendo um ao acaso.`,
        aceitaPaladinos: false,
        descricao: `
        <p>“Khalmyr tem o tabuleiro, mas quem move as peças é Nimb” — provérbio dos tempos em que o Deus da Justiça governava o Panteão, sua liderança sempre desafiada pelo insano Deus do
        Caos. Nada é certo sobre esta entidade do acaso, sorte e azar. Teria Nimb cuidadosamente tramado a queda de Khalmyr, enfim derrotando o eterno rival? Seria ele capaz de um plano tão louco e brilhante? Ou não?</p>
        <p>Nimb é mais temido do que venerado pelos artonianos, cautelosos quanto as suas constantes mudanças de humor. Muitos desejam que ele lhes sorria, mas poucos escolhem ser seus devotos. Ainda assim, há quem abrace sua loucura libertadora.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar o caos, a aleatoriedade, a sorte e o azar. Praticar a ousadia e a rebeldia, desafiar regras e leis. Rejeitar o bom senso. Tornar o mundo mais interessante. Ou divertido. Ou terrível. Ou não.</p>
        <p><b>Símbolo Sagrado.</b> Um dado de seis faces.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Nenhuma e todas! Ao usar um efeito que dependa de arma preferida, qualquer arma (ou outro objeto!) pode aparecer, de acordo com o mestre.</p>
        <p><b>Devotos.</b> Goblins, qareen, sílfides, arcanistas, bárbaros, bardos, bucaneiros, inventores, ladinos.</p>
        <p><b>Obrigações & Restrições.</b> Por serem incapazes de seguir regras, estes devotos não têm “obrigações” verdadeiras (portanto, nunca perdem PM por descumprirem suas O&R). No entanto,
        sofrem certas restrições que não podem ignorar.</p>
        <p>Devotos de Nimb são loucos (ou agem como se fossem), não conseguindo convencer ninguém de coisa alguma. Você sofre –5 em testes de perícias baseadas em Carisma. Além disso, no início de cada cena de ação, role 1d6. Com um resultado 1, você fica confuso (mesmo que seja imune a esta condição).</p>
        `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Goblin', 'Qareen', 'Sílfide', 'Arcanista', 'Bárbaro', 'Bardo', 'Bucaneiro', 'Inventor', 'Ladino'],
      },
      {
        id: 13,
        nome: 'Oceano',
        nome_arquivo_descricao: 'deus_oceano_descricao',
        nome_arquivo_poderes: 'deus_oceano_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_oceano.png',
        imagem: 'assets/img/deus_oceano.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Tridente',
        fundamentalista_sacerdote: `Jamais pisa em solo firme, exceto quando cercado de água visível em pelo menos três direções (barcos, navios, cais, ilhotas...). Quando absolutamente necessário, deve recorrer a meios especiais, como voo, para evitar que seus pés toquem o chão.`,
        aceitaPaladinos: false,
        descricao: `
        <p>Nestes tempos de grande tumulto no plano divino, em meio a deuses caindo e ascendendo, o Deus dos Mares está entre os poucos ainda imutáveis. Sua época de fúria, quando arrasava civilizações inteiras, foi quase esquecida. Hoje o Oceano é sereno, pleno em si mesmo, alienado dos conflitos no Panteão — acha os outros deuses mesquinhos, disputando ninharias, frente à vastidão de seus domínios. Ainda assim, recebe preces de marinheiros, piratas e povos marinhos, orando por sua tranquilidade, rogando que suas tempestades sejam breves.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar os mares, o oceano e os seres que ali habitam. Promover harmonia entre o oceano e o mundo seco. Proteger os seres marinhos, mas também os seres do mundo seco que se aventuram sobre as ondas. Demandar devido respeito ao mar e seu poder.</p>
        <p><b>Símbolo Sagrado.</b> Uma concha.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Tridente.</p>
        <p><b>Devotos.</b> Dahllan, hynne, minotauros, sereias/tritões, bárbaros, bucaneiros, caçadores, druidas.</p>
        <p><b>Obrigações & Restrições.</b> As únicas armas permitidas para devotos do Oceano são a azagaia, a lança, o tridente e a rede. Podem usar apenas armaduras leves. O devoto também não pode se manter afastado do oceano por mais de um mês.</p>
        `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais deixa a água, nem por um instante.`,
        canalizaEnergia: 'Qualquer',
        devotos: ['Dahllan', 'Hynne', 'Minotauros', 'Sereia/Tritão', 'Bárbaro', 'Bucaneiro', 'Caçador', 'Druida'],
      },
      {
        id: 14,
        nome: 'Sszzaas',
        nome_arquivo_descricao: 'deus_sszzaas_descricao',
        nome_arquivo_poderes: 'deus_sszzaas_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_sszzaas.png',
        imagem: 'assets/img/deus_sszzaas.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Adaga',
        fundamentalista_sacerdote: `Conhecidos como sszzaazitas, estes fanáticos são os devotos mais ferrenhos de Sszzaas, não raras vezes traindo e matando seus aliados. Cada vez que sobe de nível, um sszzaazita deve realizar um sacrifício (assassinar um humanoide em ritual) ou um ato de corrupção do bem (fazer fracassar uma causa justa, incriminar um inocente por um crime grave, destruir um item sagrado...).`,
        aceitaPaladinos: false,
        descricao: `
        <p>O sibilante Deus da Traição não é apenas o mais inteligente entre os deuses, mas também o mais perigoso. Tão perigoso que, certa vez, tentou reunir os Rubis da Virtude — vinte gemas de poder contendo a essência de todos os deuses. Chegou a ser expulso do Panteão por esse crime, mas sua astúcia não conhecia limites; Sszzaas conseguiu tramar um novo plano para ser aceito de volta. Hoje, mesmo após a quase extinção de seu culto, os sszzaazitas voltam a se espalhar sobre Arton, agindo em nome do Grande Corruptor. Mas será prudente devotar-se a um Deus da Traição? Apenas os mais ousados e astutos acreditam que sim.</p>
        <p><b>Crenças e Objetivos.</b> Praticar a mentira e a trapaça. Buscar sempre a solução mais inteligente. Demonstrar que lealdade e confiança são fraquezas, devem ser eliminadas. Promover competição, rivalidade, desconfiança. Usar os recursos do inimigo para alcançar seus objetivos. Levar outros a se sacrificarem em seu lugar.</p>
        <p><b>Símbolo Sagrado.</b> Uma naja vertendo veneno pelas presas.</p>
        <p><b>Canalizar Energia.</b> Negativa.</p>
        <p><b>Arma Preferida.</b> Adaga.</p>
        <p><b>Devotos.</b> Medusas, arcanistas, bardos, bucaneiros, inventores, ladinos, nobres.</p>
        <p><b>Obrigações & Restrições.</b> O devoto deve fazer um ato de traição, intriga ou corrupção por dia (ou por sessão de jogo, o que demorar mais) como oferenda a Sszzaas. Pouco importa se o alvo é aliado ou inimigo — uns poucos sszzaazitas usam seus métodos torpes para ajudar colegas aventureiros em suas missões, às vezes sem que eles próprios saibam.</p>
        <p>Sugerir a alguém que foi traído pelo cônjuge, influenciar um guarda a aceitar suborno, instruir um mercador a roubar nos preços, incriminar alguém por um crime que não cometeu, enganar um guerreiro para que mate um oponente rendido e inofensivo... Em termos de jogo, uma ação exigindo um teste de Enganação com CD mínima 15 + metade do seu nível.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Negativa',
        devotos: ['Medusa', 'Arcanista', 'Bardo', 'Bucaneiro', 'Inventor', 'Ladino', 'Nobre'],
      },
      {
        id: 15,
        nome: 'Tanna-Toh',
        nome_arquivo_descricao: 'deus_tannatoh_descricao',
        nome_arquivo_poderes: 'deus_tannatoh_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_tannatoh.png',
        imagem: 'assets/img/deus_tannatoh.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Bordão',
        fundamentalista_sacerdote: `Em vez de esperar perguntas, simplesmente revela tudo que existe para saber, mesmo sem ser perguntado. Também é proibido de fazer testes de Enganação ou Furtividade, ou permitir que sejam feitos em sua presença (caso ocorram, deve revelar a verdade e/ou atrapalhar a ação).`,
        aceitaPaladinos: true,
        descricao: `
        <p>Em uma sociedade medieval típica, apenas membros do clero ou da nobreza teriam acesso a boa educação — camponeses jamais saberiam ler e escrever. Não é assim no Reinado de Arton, graças ao empenho da igreja de Tanna-Toh. Devotos da Deusa do Conhecimento atuam como professores, catequistas e pesquisadores, tomando a missão sagrada de levar educação e cultura para todos. Tanna-Toh é amplamente venerada pelos povos civilizados, amada por aqueles que se devotam aos estudos ou artes. Ainda assim, esta deusa é inimiga de povos bárbaros que escolhem permanecer ignorantes e selvagens.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar a mente racional, o conhecimento, a civilização, a verdade. Proteger o progresso, o avanço dos povos civilizados. Promover o ensino e a prática das artes e das ciências. Solucionar todos os mistérios, revelar todas as mentiras. Buscar novo conhecimento. Não tolerar a ignorância.</p>
        <p><b>Símbolo Sagrado.</b> Pergaminho e pena.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Bordão.</p>
        <p><b>Devotos.</b> Golens, kliren, arcanistas, bardos, inventores, nobres, paladinos.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Tanna-Toh jamais podem recusar uma missão que envolva a busca por um novo conhecimento ou informação; investigar rumores sobre um livro perdido, procurar uma aldeia lendária, pesquisar os hábitos de uma criatura desconhecida...</p>
        <p>Além disso, o devoto sempre deve dizer a verdade e nunca pode se recusar a responder uma pergunta direta, pouco importando as consequências. É proibido para ele esconder qualquer conhecimento.</p>`,
        fundamentalista_paladino: `Como o sacerdote. Além disso, sempre informa sua verdadeira identidade e ocupação antes de iniciar uma conversa.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Golen', 'Kliren', 'Arcanista', 'Bardo', 'Inventor', 'Nobre', 'Paladino'],
      },
      {
        id: 16,
        nome: 'Tenebra',
        nome_arquivo_descricao: 'deus_tenebra_descricao',
        nome_arquivo_poderes: 'deus_tenebra_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_tenebra.png',
        imagem: 'assets/img/deus_tenebra.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Adaga',
        fundamentalista_sacerdote: `Proibido de recorrer a qualquer forma de iluminação natural, artificial ou mágica; pode apenas usar visão no escuro e outros sentidos. Além disso, não apenas é proibido de associar-se a devotos de Azgher, mas também deve atacar e destruir todos aqueles que encontrar.`,
        aceitaPaladinos: false,
        descricao: `
        <p>Assim como seu inimigo Azgher vigia e protege Arton durante o dia, Tenebra é atenta sob as estrelas; nada acontece na noite sem seu conhecimento. A sedutora e misteriosa Deusa das Trevas
        é mãe de tudo que anda e rasteja no escuro, dos nobres anões aos sinistros mortos-vivos e trogloditas. Ainda que muitas vezes temida, Tenebra sempre protegeu as criaturas noturnas e subterrâneas, bondosas ou malignas. No entanto, com a recente destruição de Ragnar, antigo Deus da Morte, cada vez mais cultos necromantes começam a oferecer sacrifícios à Mãe Noite.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar a noite, a escuridão, a lua e as estrelas. Proteger segredos e mistérios, proteger tudo que é oculto e invisível. Reverenciar a não vida e os mortos-vivos, propagar a prática da necromancia. Rejeitar o sol e a luz.</p>
        <p><b>Símbolo Sagrado.</b> Estrela negra de cinco pontas.</p>
        <p><b>Canalizar Energia.</b> Negativa.</p>
        <p><b>Arma Preferida.</b> Adaga.</p>
        <p><b>Devotos.</b> Anões, medusas, qareen, osteon, sulfure, trogs, arcanistas, bardos, ladinos.</p>
        <p><b>Obrigações & Restrições.</b> Tenebra proíbe que seus devotos sejam tocados por Azgher, o odiado rival. O devoto deve se cobrir inteiramente durante o dia, sem expor ao sol nenhum pedaço de pele.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais ataca mortos-vivos, mesmo que seja atacado por eles.`,
        canalizaEnergia: 'Negativa',
        devotos: ['Anão', 'Medusa', 'Qareen', 'Osteon', 'Sulfure', 'Trogs', 'Arcanista', 'Bardo', 'Ladino'],
      },
      {
        id: 17,
        nome: 'Thwor',
        nome_arquivo_descricao: 'deus_thwor_descricao',
        nome_arquivo_poderes: 'deus_thwor_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_thwor.png',
        imagem: 'assets/img/deus_thwor.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Machado de guerra',
        fundamentalista_sacerdote: `Atua como protetor de seu povo, mas é um inimigo do Reinado. Suas “missões divinas” se resumem a ataques contra povoados humanos. Todo ser inteligente que recuse devoção a Thwor deve ser destruído.`,
        aceitaPaladinos: false,
        descricao: `
        <p>A Flecha de Fogo foi disparada, rompendo o coração das trevas. A antiga profecia foi cumprida. No entanto, o que muitos pensavam significar o fim da Aliança Negra dos goblinoides resultou em algo totalmente diferente, totalmente novo. Ao enfrentar e derrotar o próprio Ragnar, antigo Deus da Morte, o imperador bugbear Thwor Khoshkothruk ascendeu ao Panteão como o Deus dos Goblinoides. Agora protegidos e governados por uma poderosa divindade, os povos duyshidakk erguem sua própria civilização no continente de Lamnor, e o Reinado de Arton deverá lidar com o futuro que surgir disso.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar a lealdade,a força e a coragem. Promover a união  entre goblins, hobgoblins, bugbears, orcs, ogros e outros povos humanoides. Reverenciar o caos, a mutação, a vida sempre em movimento. Proteger a cultura e o modo de vida goblinoide. Destruir os elfos.</p>
        <p><b>Símbolo Sagrado.</b> Um grande punho fechado.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Machado de guerra.</p>
        <p><b>Devotos.</b> Qualquer duyshidakk (veja abaixo).</p>
        <p><b>Obrigações & Restrições.</b> Não importando sua raça, o devoto de Thwor deve ser duyshidakk — ou seja, aceito como membro do povo goblinoide. Também deve se esforçar para que o “Mundo Como Deve Ser” tome o continente (veja a página 386). Deve sempre procurar fazer alianças com goblinoides e só lutar contra eles em último caso.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Duyshidakk'],
      },
      {
        id: 18,
        nome: 'Thyatis',
        nome_arquivo_descricao: 'deus_thyatis_descricao',
        nome_arquivo_poderes: 'deus_thyatis_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_thyatis.png',
        imagem: 'assets/img/deus_thyatis.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Espada Longa',
        fundamentalista_sacerdote: `Proibido de matar não apenas seres inteligentes, mas quaisquer seres vivos. Além disso, não pode se recusar a ressuscitar nenhuma criatura ao alcance de seus poderes, incluindo inimigos.`,
        aceitaPaladinos: true,
        descricao: `
        <p>O generoso Deus da Ressurreição e Profecia representa o perdão, a tolerância, as segundas chances. Seu dom maior é a prevenção ou correção dos erros — através de predições que evitam esses erros ou reversão das mortes que tenham causado. Para Thyatis, ninguém deve ser castigado por errar e todos merecem a chance de aprender com suas falhas, em vez de morrer por elas. Dizem que seus clérigos são contemplados com poderosos dons de profecia e ressurreição, e seus paladinos nunca morrem!</p>
        <p><b>Crenças e Objetivos.</b> Proteger a vida e aqueles necessitados de novas chances. Renegar a morte e a mentira. Ajudar os perdidos a encontrar seus caminhos e alcançar seus destinos. Oferecer clemência, perdão e redenção.</p>
        <p><b>Símbolo Sagrado.</b> Uma ave fênix.</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Espada longa.</p>
        <p><b>Devotos.</b> Aggelus, cavaleiros, guerreiros, inventores, lutadores, paladinos.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Thyatis são proibidos de matar criaturas inteligentes (Int –3 ou maior). Podem atacar e causar dano, mas jamais levar à morte. Por esse motivo, devotos de Thyatis preferem armas e ataques que apenas incapacitam seus oponentes ou causam dano não letal.</p>`,
        fundamentalista_paladino: `Proibido de matar não apenas seres inteligentes, mas quaisquer seres vivos.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Aggelus', 'Cavaleiro', 'Guerreiro', 'Inventor', 'Lutador', 'Paladino'],
      },
      {
        id: 19,
        nome: 'Valkaria',
        nome_arquivo_descricao: 'deus_valkaria_descricao',
        nome_arquivo_poderes: 'deus_valkaria_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_valkaria.png',
        imagem: 'assets/img/deus_valkaria.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Mangual',
        fundamentalista_sacerdote: `Nunca permanece mais de uma semana na mesma cidade. Também nunca recusa uma missão ou aventura, por mais perigosa que seja.`,
        aceitaPaladinos: true,
        descricao: `
        <p>A Deusa da Ambição sempre foi a mais ousada entre os seus. Ajudaria a criar os lefeu, a própria Tormenta. Criaria os seres humanos, povo mais impetuoso e beligerante de todos. Acabaria
        condenada ao cativeiro, até ser resgatada por seus próprios protegidos, elevando ainda mais sua glória (ou teria assim planejado desde o início?). Mas, quando Mestre Arsenal derrotou Keenn para tomar seu lugar como Deus da Guerra, o maior objetivo de Valkaria foi enfim alcançado: um humano superou um deus. Esse evento, e também a morte do antigo líder Tauron, levou os deuses a reconhecerem Valkaria como a nova liderança do Panteão.</p>
        <p><b>Crenças e Objetivos.</b> Praticar o otimismo, a evolução, a rebeldia. Desafiar limites, almejar o impossível. Combater o mal, a opressão e a tirania. Proteger a liberdade. Aceitar o novo e diferente e adaptar-se a ele. Demonstrar ambição, paixão e coragem. Desfrutar e amar a vida.</p>
        <p><b>Símbolo Sagrado.</b> A Estátua de Valkaria ou seis faixas entrelaçadas.</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Mangual.</p>
        <p><b>Devotos.</b> Aventureiros; membros de todas as classes podem ser devotos de Valkaria.</p>
        <p><b>Obrigações & Restrições.</b> Valkaria odeia o conformismo. Seus devotos são proibidos de
        fixar moradia em um mesmo lugar, não podendo permanecer mais de 2d10+10 dias na mesma cidade (ou vila, aldeia, povoado...) ou 1d4+2 meses no mesmo reino.</p>
        <p>Devotos de Valkaria também são proibidos de se casar ou formar qualquer união estável.</p>`,
        fundamentalista_paladino: `Deve sempre buscar novas missões e aventuras, jamais recusando uma missão. Sempre que houver um tempo entre aventuras (Tormenta20, p. 276), deve realizar uma busca relacionada a uma aventura. Também é proibido de usar habilidades que causam condições de movimento. Apenas humanos podem ser paladinos fundamentalistas de Valkaria.`,
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Quallquer'],
      },
      {
        id: 20,
        nome: 'Wynna',
        nome_arquivo_descricao: 'deus_wynna_descricao',
        nome_arquivo_poderes: 'deus_wynna_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_wynna.png',
        imagem: 'assets/img/deus_wynna.png',
        referencias: Referencia.BASICO,
        paginas: '96',
        armaPreferida: 'Adaga',
        fundamentalista_sacerdote: `Jamais impede a execução de uma magia, nem promove seu cancelamento, de aliados ou inimigos. É proibido de usar Dissipar Magia, Campo Antimagia e similares (mas ainda pode interromper suas próprias magias sustentadas).`,
        aceitaPaladinos: false,
        descricao: `
        <p>Depois de abandonados por Glórienn, a antiga Deusa dos Elfos, muitos membros desta raça estão oferecendo sua devoção à bondosa Wynna. Ela é a exuberante Deusa da Magia, louvada por fadas, qareen, gênios e todos aqueles que empregam poder arcano. Generosa e liberal além dos limites, Wynna concede mágica a todos que pedem, não importando se usada para o bem ou para o mal — pois a magia é mais importante que a vida e nunca deve ser negada a ninguém. Talvez por esse motivo Arton seja um mundo tão intenso em energias mágicas e tão povoado por arcanistas.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar a magia arcana e seus praticantes. Promover o ensino da magia. Usar a magia para proteger os necessitados e trazer felicidade ao mundo.</p>
        <p><b>Símbolo Sagrado.</b> Um anel metálico.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Adaga.</p>
        <p><b>Devotos.</b> Elfos, golens, qareen, sílfides, arcanistas, bardos.</p>
        <p><b>Obrigações & Restrições.</b> Assim como a magia jamais deva ser negada para quem a busca, devotos de Wynna devem praticar a bondade e a generosidade de sua deusa, jamais recusando um pedido de ajuda de alguém inocente. Além disso, devotos de Wynna são proibidos de matar seres mágicos (elfos, qareen, sílfides e outros a critério do mestre) e conjuradores arcanos.</p>`,
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
        descricao: `
        <p>Nem todos os clérigos e frades de Arton escolhem servir a esta ou aquela divindade específica. Alguns acreditam que devem se devotar aos deuses como um todo, cultuar esta incrível família de entidades conhecida como “o Panteão”.</p>
        <p>O clérigo do Panteão reconhece que os deuses não são perfeitos, nem infalíveis; o fato de lutarem entre si, morrerem e serem substituídos prova isso. Ainda assim ele os respeita como criadores de Arton, os grandes responsáveis pelos milagres (e tragédias) no mundo. Sempre se refere aos “deuses” quando fala de sua fé, mas pode invocar seus nomes conforme a situação, orando por justiça a Khalmyr, cura a Lena, sabedoria a Tanna-Toh e assim por diante.</p>
        <p>Por sua mente aberta e disposição para aceitar diferenças, o clérigo do Panteão é muito mais compassivo e condescendente que aqueles dedicados a um único deus. É raro que censure isso ou aquilo, sabendo que haverá uma divindade para aprovar qualquer pensamento ou ação. Por outro lado, há quem acuse esses sacerdotes de hipocrisia, pois sempre invocam o deus mais conveniente para justificar cada situação.</p>
        <p>Diferente do que se pensa, estes sacerdotes são bastante comuns. Existem especialmente em comunidades distantes e isoladas, longe da influência de cultos específicos. Quando uma vila ou aldeia tem apenas um sacerdote, provavelmente será um destes.</p>
        <p>Apenas clérigos e frades podem ser devotos fieis do Panteão, não recebendo nenhum Poder Concedido, mas sua única obrigação e restrição é não usar armas cortantes ou perfurantes (porque derramam sangue, algo que clérigos do Panteão consideram proibido). Sua arma preferida é a maça e você pode canalizar energia positiva ou negativa a sua escolha (uma vez feita, essa escolha não pode ser mudada). Cultuar o Panteão conta como sua devoção.</p>`,
      },
      {
        id: 22,
        nome: 'Arton',
        nome_arquivo_descricao: 'deus_arton_descricao',
        tipo: 'Maior',
        aceitaDruidas: true,
        fundamentalista_druida: `Jamais matar, nem mesmo para subsistência. Deve recorrer a meios mágicos para sustento. Em vez de um poder concedido, o druida de Arton fundamentalista recebe um poder geral.`,
        descricao: `
        <p>Enquanto devotos de Allihanna e Megalokk se antagonizam, achando que suas criações têm mais direito a Arton, alguns druidas consideram esse conflito tolo. Para eles, toda forma de vida é sagrada: animais, plantas, feras, monstros, até mesmo a Tormenta.</p>
        <p>O druida de Arton não distingue entre seres viventes. Todo ser, incluindo aqueles não considerados vivos, tem o direito de existir. Embora respeitem Lena, estes druidas acreditam que a vida é maior que o Panteão, e que os deuses foram criados pela vida, não o contrário.</p>
        <p>Para o druida de Arton, pouco importa se as criaturas nascem de reprodução natural (como a maioria das crias de Allihanna), são formadas por meios fantásticos (a maioria dos monstros de Megalokk) ou trazidas a este mundo artificialmente (quase todos os construtos). Mesmo espíritos e mortos-vivos são ainda considerados seres viventes — vida diferente, exótica, mas ainda vida. Chegam ao cúmulo de respeitar as próprias aberrações da Tormenta, julgando merecerem lugar em Arton tanto quanto quaisquer entidades.</p>
        <p>“Se respeitam toda a vida em todas as suas formas, então contra quem lutam?". Estes druidas lutam contra ameaças à vida, como exterminadores de espécies ou assassinos sem sentido. Desprezam caçadores que matam por glória, fascistas movidos por ódio, cultistas que sacrificam por deuses. No entanto, aceitam matar para subsistência ou autodefesa, seguindo o Grande Ciclo.</p>
        <p>O druida de Arton cultiva relação muito especial com as criaturas elementais, estranhos seres não abençoados nem por Allihanna, nem Megalokk. Tais entidades são prova do poder irrestrito da vida pura, capaz de se manifestar mesmo nos componentes mais fundamentais da Criação. O druida não apenas controla esses seres (considerados imprevisíveis e indomáveis por quase quaisquer outros); também compartilha de seus poderes, recorrendo à forma selvagem para transformar partes do corpo — até mesmo o corpo inteiro — em fogo, água, terra e outros.</p>
        <p><b>Obrigações & Restrições.</b> Nunca matar ou destruir seres que não ameaçam sua própria sobrevivência, ou a de seus aliados.</p>
`,
      },
      {
        id: 23,
        nome: 'Bem',
        nome_arquivo_descricao: 'deus_bem_descricao',
        tipo: 'Maior',
        aceitaPaladinos: true,
        fundamentalista_paladino: `Como o sacerdote do Panteão.`,
        descricao: `
        <p>Da mesma forma que ocorre com o clérigo do Panteão, nem todo paladino decide servir a esta ou aquela divindade. O paladino do bem reconhece a existência e soberania de todos os vinte deuses — e, humildemente, não acredita ser digno de escolher apenas um entre eles. Guiado apenas por sua fé e princípios morais, serve “aos deuses” sem se prender a nenhum.</p>
        <p>O paladino do bem jamais coloca uma crença acima de outra. Demonstra respeito perante todos os outros clérigos e paladinos que encontra. No entanto, ainda é um campeão sagrado do bem e ordem. Quando seus opositores são sszzaazitas ou outros devotos de deuses malignos, não hesita em destruí-los. Mesmo respeitando todos os vinte, um paladino do bem acredita na soberania dos deuses bondosos sobre os malignos, ele próprio atuando como instrumento para esse equilíbrio.</p>
        <p>Paladinos são especiais, por vezes atraindo o interesse pessoal dos deuses. Este paladino pode acabar abordado por uma divindade maior, pedindo (ou exigindo) sua devoção exclusiva. Nesse momento dramático ele pode aceitar servir ao novo patrono ou — que ousadia! — preferir manter sua independência. É uma situação delicada, mesmo os deuses mais bondosos não lidam bem com orgulho ferido. Muito mais complicado é quando dois ou mais deuses cobiçam o guerreiro santo!</p>
        <p>Seguindo o código dos paladinos, mas sem Obrigações & Restrições, o paladino do bem costuma ser um excelente aliado e companheiro em grupos de aventureiros.</p>`,
      },
      {
        id: 24,
        nome: 'Gwendolynn, a Deusa da Liberdade',
        tipo: 'Menor',
        dominios: ['Liberdade'],
        natureza: 'Mortal Ascendido',
        status: '3',
        imagem: 'assets/img/deus_gwendolynn.png',
        referencias: Referencia.DEUSES,
        paginas: '231',
        armaPreferida: 'Cajado de batalha',
        aceitaPaladinos: true,
        descricao: `
        <p>Uma elfa de longas tranças loiras, quase sempre de armadura e carregando um bordão. Exaventureira, participou de várias buscas que pareciam missões simples, mas acabaram mudando o destino de Arton. Gwen libertou o feudo de Adhurian de monstros conjurados a partir da Joia da Alma, um dos artefatos mais antigos da Criação. Envolveu-se com os organizadores da Revolta da Lavoura, sendo uma das principais responsáveis por acabar com o escravagismo no Império de Tauron.</p>
        <p>Então ainda uma clériga de Tanna-Toh, Gwen se mostrou um símbolo de força, esperança e resistência, expondo ao mundo a traição de Glórienn e tornando-se um foco de devoção. Finalmente, ascendeu a divindade menor protegendo a cidade de Tiberus da destruição pela Tormenta.</p>
        <p>Gwen prega liberdade de todo tipo de escravidão. Isso inclui escravidão física (como era praticada no Império de Tauron) e mental (como a crença na inferioridade dos goblinoides).</p>
        <p><b>Crenças e Objetivos.</b> Libertar escravos. Libertar mentes. Transformar sistemas rígidos e antiquados. Lutar contra qualquer submissão involuntária. Pregar a independência.</p>
        <p><b>Símbolo Sagrado.</b> Um elo de corrente partido ao meio.</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Cajado de batalha.</p>
        <p><b>Devotos.</b> Dahllan, duendes, elfos, elfos-do-mar, eiradaan, galokk, goblins, lefou, minotauros, qareen, kliren, sátiros, sílfides, velocis, bardos, bucaneiros, inventores, ladinos, paladino (único).</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Gwendolynn jamais podem recusar uma missão que envolva a libertação de escravos, exceto quando isso significa a morte ou a ruína de seus próprios aliados.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Dahllan',
          'Duendes',
          'Elfos',
          'Elfos-do-mar',
          'Eiradaan',
          'Galokk',
          'Goblins',
          'Lefou',
          'Minotauros',
          'Qareen',
          'kliren',
          'Sátiros',
          'Sílfides',
          'Velocis',
          'Bardos',
          'Bucaneiros',
          'Inventores',
          'Ladinos',
          'Paladino (único)',
        ],
      },
      {
        id: 25,
        nome: 'Mauziell, a Deusa das Avós',
        tipo: 'Menor',
        dominios: ['Avós'],
        natureza: 'Entidade Primordial',
        status: '4',
        imagem: 'assets/img/deus_mauziell.png',
        referencias: Referencia.DEUSES,
        paginas: '231 e 232',
        armaPreferida: 'Bengala (conta como uma clava; Tormenta20, p. 147).',
        aceitaPaladinos: true,
        descricao: `
        <p>Uma velhinha enrugada e de aparência frágil, que mora em uma cabana no meio da floresta em Tollon. É impossível chegar a essa cabana por meios mágicos; de fato, existem apenas dois caminhos pela floresta para chegar lá — um longo e iluminado, que não chega a lugar nenhum, e outro estreito e escuro, cercado por olhos na sombra: o verdadeiro caminho. Mauziell afirma que vive ali para que seus netos tenham que vencer perigos para levar-lhe cestas de doces, e sua casa é abarrotada de enfeites e crochês. Mauziell tem idade para ser a avó de qualquer criatura (deuses inclusos) e sempre tem informações e objetos que apenas uma avó teria — o que inclui itens e memórias há muito perdidos ou esquecidos. Todos são netos de Mauziell, e por isso seus devotos são instigados a agir como ela, cuidando dos outros como apenas avós são capazes. Apesar de não parecer, Mauziell teve grande participação na empreitada de Orion Drake para libertar o Império de Jade da Tormenta. Ela ajudou a recrutar vários deuses para o exército do antigo cavaleiro da Luz e, na batalha na área de Tormenta de Tamu-ra, foi quem derrotou Andaluzia, a Bruxa sem Rosto que transportava os exércitos corrompidos de Crânio Negro por toda Arton, devolvendo a ela seu rosto, suas memórias e sua sanidade.</p>
        <p><b>Crenças e Objetivos.</b> Cuidar dos outros como se fossem netos. Guardar coisas para que não se percam. Instigar pessoas a agir de forma adequada. Servir como exemplo.</p>
        <p><b>Símbolo Sagrado.</b> Uma cesta de piquenique.</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Bengala (conta como uma clava; Tormenta20, p. 147).</p>
        <p><b>Devotos.</b> Anões, centauros, duendes, elfos, gnolls, lefou, qareen, hynne, sátiros, tengu, arcanistas, bardos, caçadores, cavaleiros, guerreiros, nobres, paladino (único).</p>
        <p><b>Obrigações & Restrições.</b> Um devoto de Mauziell é, para todos os efeitos, uma avó, e portanto precisa da ajuda de seus “netos” para realizar tarefas, como abrir potes de geleia ou carregar coisas pesadas. O devoto deve pedir a ajuda de uma criatura para realizar alguma tarefa pelo menos uma vez por dia (ou por sessão de jogo, o que demorar mais), como forma de honrar sua divindade. Em termos de jogo, a criatura deve passar em um teste de perícia aplicável ao pedido com CD mínima 15 + metade do seu nível.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: [
          'Anões',
          'Centauros',
          'Duendes',
          'Elfos',
          'Gnolls',
          'Lefou',
          'Qareen',
          'Hynne',
          'Sátiros',
          'Tengu',
          'Arcanistas',
          'Bardos',
          'Caçadores',
          'Cavaleiros',
          'Guerreiros',
          'Nobres',
          'Paladino (único)',
        ],
      },
      {
        id: 26,
        nome: 'Tibar, o Deus do Comércio',
        tipo: 'Menor',
        dominios: ['Comércio'],
        natureza: 'Mortal Ascendido',
        status: '5',
        imagem: 'assets/img/deus_tibar.png',
        referencias: Referencia.DEUSES,
        paginas: '233',
        armaPreferida: 'Não há. Devotos deste deus não podem usar a magia Arma Espiritual e similares.',
        aceitaPaladinos: false,
        descricao: `
        <p>Cerca de 400 anos atrás, para facilitar o comércio e regulamentar os valores de cada mercadoria, foi cunhada uma moeda de prata com 1,5cm de diâmetro. A moeda tinha, numa face, o retrato de um rei com uma coroa. Na outra, o mesmo rei, mas sem a coroa.</p>
        <p>Essa moeda foi criada por um humano chamado Quindogar Tolliannor, o primeiro conselheiro real de Deheon e grande adepto das artes da barganha e negociação. Tal moeda foi batizada de tibar e ficou tão popular tão rapidamente que seu criador começou a ser chamado pelo mesmo nome. Com o tempo, Quindogar ascendeu a Deus do Comércio, com o nome Tibar. Não se sabe mais como era a aparência original de Tibar, pois a crença dos fiéis foi tanta que hoje sua face é a mesma cunhada nas moedas de prata, cobre e ouro que circulam por todo o Reinado e além. Devotos do Deus do Comércio levam consigo sempre uma moeda de tibar, normalmente usada como um medalhão ao redor do pescoço. Alguns não devotos também costumam carregar uma moeda dessa forma, pois acredita-se que fazê-lo atrai a prosperidade financeira. Embora possa não parecer, Tibar é um deus poderoso. Toda e qualquer troca, seja um escambo, seja uma transação financeira, é domínio de Tibar e portanto uma forma de cultuá-lo.</p>
        <p><b>Crenças e Objetivos.</b> Realizar negócios. Completar transações comerciais. Incentivar a troca de bens e mercadorias. Criar e proteger caravanas comerciais. Vender e comprar itens. Fomentar a prosperidade.</p>
        <p><b>Símbolo Sagrado.</b> Um tibar.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Não há. Devotos deste deus não podem usar a magia Arma Espiritual e similares.</p>
        <p><b>Devotos.</b> Anões, elfos, golens, hynne, kallyanach, kliren, minotauros, nagahs, qareen, arcanistas, bardos, bucaneiros, caçadores, guerreiros, inventores, nobres.</p>
        <p><b>Obrigações & Restrições.</b> Um devoto de Tibar nunca pode deixar de comercializar! Ele sempre deve barganhar em qualquer transação financeira de que participar e, uma vez a cada semana, deve gastar pelo menos T$ 50 por patamar em itens ou serviços.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: [
          'Anões',
          'Elfos',
          'Golens',
          'Hynne',
          'Kallyanach',
          'Kliren',
          'Minotauros',
          'Nagahs',
          'Qareen',
          'Arcanistas',
          'Bardos',
          'Bucaneiros',
          'Caçadores',
          'Guerreiros',
          'Inventores',
          'Nobres',
        ],
      },
      {
        id: 27,
        nome: 'A Espada-Deus',
        tipo: 'Menor',
        dominios: [''],
        natureza: 'Objeto Desperto',
        status: '1',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        paginas: '5',
        armaPreferida: 'Espada longa.',
        aceitaPaladinos: false,
        descricao: `
        <p>A Espada-Deus é a obra-prima de Rhond (ele próprio o Deus das Armas), uma arma lendária que transcende seus portadores. Já esteve nas mãos de guerreiros valentes, heróis gloriosos, assassinos astutos e santos devotos, mas os nomes desses mortais se perderam no tempo — pois a espada é maior que qualquer um deles. Sempre que cumpria eu propósito, acabava esquecida em locais remotos, esperando por um novo destino. Podia estar presa em algum lugar de onde só seria tirada por um mortal digno. Ou no fundo de um lago, sendo entregue por uma náiade, ou cravada em uma pedra, selecionando quem pode arrancá-la.</p>
        <p>Além de guerreiros de uma aldeia no antigo Reino de Yudennach, a Espada-Deus tem poucos devotos em estruturas organizadas, sendo adorada mais comumente por clérigos nômades que migram de batalha em batalha. A Espada-Deus não rege um portfólio definido. Em vez disso, ela apenas é adorada, apenas é a ferramenta, a instigadora e a protagonista em inúmeras histórias de batalha e heroísmo. A última dessas foi a batalha em que Orion Drake liderou um  exército de deuses menores para derrotar Crânio Negro e expulsar a Tormenta de Tamu-ra, conquistando a primeira vitória de Arton contra os lefeu. Até onde se sabe, a Espada-Deus ainda se encontra de posse do cavaleiro, mas a qualquer momento ela pode ser “perdida”, para que seja encontrada por um novo campeão valoroso.</p>
        <p><b>Crenças e Objetivos.</b> Estar pronto para cortar, perfurar e matar. Defender-se, defender aqueles que se ama, defender sua honra e orgulho. Estar sempre pronto para empunhar uma espada — e usá-la. Realizar grandes feitos. Provar-se digno.</p>
        <p><b>Símbolo Sagrado.</b>  Uma espada.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Espada longa.</p>
        <p><b>Devotos.</b> Anões, elfos, minotauros, bárbaros, caçadores, cavaleiros, guerreiros.</p>
        <p><b>Obrigações & Restrições.</b> As únicas armas empunhadas que o devoto da Espada-Deus pode usar são espadas. Além disso, para atacar com outras armas (como naturais), ele deve fazer ao menos um ataque com espada na rodada.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Anões', 'Elfos', 'Minotauros', 'Bárbaros', 'Caçadores', 'Cavaleiros', 'Guerreiros'],
      },
      {
        id: 28,
        nome: 'Akok',
        tipo: 'Menor',
        dominios: ['Lobos'],
        natureza: 'Mortal Ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_akok.png',
        paginas: '5 e 6',
        armaPreferida: 'Espada curta.',
        aceitaPaladinos: false,
        descricao: `
        <p>Um enorme lobo com dentes que se projetam fora da mandíbula, Akok é o Deus dos Lobos, mas também governa certas raças de cães, principalmente de guerra, de guarda e de caça. É cultuado por goblinoides e outros humanoides que usam lobos como montaria, mas também por soldados responsáveis por bandos de cães de guerra, caçadores que só contam com seus cães ou lobos como companheiros e até mesmo por humanoides criados nos ermos por lobos. Devotos de Akok, entretanto, não são meros ginetes ou “donos”: são parte da alcateia e veem os lobos como seus irmãos peludos. São abençoados com instintos para lutar e agir em bando como lobos.</p>
        <p>Sendo um deus animalesco, Akok nunca revelou sua origem (não tendo capacidade ou interesse para isso). Também não existem registros de quando teria ascendido. No entanto, uma lenda afirma que Akok foi o primeiro lobo a se aproximar de uma comunidade humanoide — talvez pressentindo que um dia poderia haver cooperação entre essas espécies, talvez apenas ferido e precisando de ajuda. Segundo essa história, teria sido esse gesto que deu origem à domesticação de lobos que levou à existência dos cães.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar Akok como o único grande alfa. Trabalhar em equipe. Proteger alcateias. Promover harmonia entre matilhas e a civilização. Combater ameaças que perturbam o equilíbrio natural.</p>
        <p><b>Símbolo Sagrado.</b>  Uma grande pata de lobo rodeada por patas menores..</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Espada curta.</p>
        <p><b>Devotos.</b> Centauros, dahllan, elfos, gnolls, goblins, kobolds, bárbaros, caçadores, druidas, guerreiros, ladinos, lutadores, treinadores.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Akok não podem aprisionar ou matar lobos de qualquer tipo (como lobos-das-cavernas), nem permitir que outros o façam. Além disso, o grupo ao qual o devoto pertence (família, aventureiros, guilda…) é considerado sua alcateia. Ele não pode enganá-la, traí-la ou abandoná-la.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: [
          'Centauros',
          'Dahllan',
          'Elfos',
          'Gnolls',
          'Goblins',
          'Kobolds',
          'Bárbaros',
          'Caçadores',
          'Druidas',
          'Guerreiros',
          'Ladinos',
          'Lutadores',
          'Treinadores',
        ],
      },
      {
        id: 29,
        nome: 'Altair',
        tipo: 'Menor',
        dominios: ['Montanhas'],
        natureza: 'Mortal Ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        // imagem: 'assets/img/deus_akok.png',
        paginas: '6 e 7',
        armaPreferida: 'Machado de guerra.',
        aceitaPaladinos: false,
        descricao: `
        <p>Este deus bárbaro era um homem alto, forte e musculoso. Usava apenas uma tanga, exibia o corpo cheio de cicatrizes e a cabeleira escura que parecia a juba de uma fera. Padroeiro dos que desafiam o mundo selvagem, escalou e venceu desafios nas maiores montanhas de Arton, além de ser associado à caça e à sobrevivência.</p>
        <p>Embora seja o Deus Menor das Montanhas, Altair é mais do que isso: é o padroeiro do modo de vida das montanhas, da resiliência necessária para sobreviver e prosperar nesse tipo de ambiente, dos povos que nunca se dobraram à necessidade de erguer cidades em terrenos planos, mas mantiveram seus costumes ancestrais. Para muitos, as montanhas são território de monstros ou algo a ser “vencido” em uma escalada. Para os devotos de Altair, as montanhas são um lar desafiador, que acolhe seus habitantes ao mesmo tempo em que exige muito deles.</p>
        <p>A ascensão de Altair já se perdeu no tempo. Ele surge como um herói folclórico em vários povos montanheses, desde as Lannestul até as Uivantes, e inclusive em algumas aldeias das Sanguinárias. Contudo, é consenso que não se trata de uma entidade, mas de um humano que ascendeu. Em todos os relatos, Altair aparece interagindo com a população, espreitando com bandos de caçadores e conversando com chefes. Mesmo entre seus devotos, parece ser uma pessoa quase comum. Existem inclusive histórias em que Altair obedece às ordens de um devoto, sendo mais um guerreiro em seu grupo!</p>
        <p>Altair foi encontrado pela última vez nas Montanhas Lannestul, quando Orion Drake reuniu seu Exército de Deuses. Contudo, seu machado enorme foi usado pela última vez defendendo Betsumial, o Deus dos Vigias, quando então um vulcão surgiu sob seus pés e a horda lefeu conseguiu sobrepujá-lo na Batalha de Tamu-ra, em 1405.</p>
        <p><b>Crenças e Objetivos.</b>  Reverenciar Altair e as cadeias montanhosas de Arton. Desafiar as montanhas e seus perigos. Proteger as montanhas. Nunca recuar perante as dificuldades da natureza.</p>
        <p><b>Símbolo Sagrado.</b> Uma montanha com um machado cravado.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Machado de guerra.</p>
        <p><b>Devotos.</b> Anões, minotauros, naidoras, trogs, bárbaros, caçadores, druidas, guerreiros, lutadores.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Altair nunca podem recusar uma missão que envolva escalar ou desbravar uma montanha. Além disso, a cada 1d4+2 meses o devoto deve escalar a maior montanha da região onde está e passar um dia meditando em seu cume, para se reconectar com a natureza e com sua divindade.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Anões',
          'Minotauros',
          'Naidoras',
          'Trogs',
          'Bárbaros',
          'Caçadores',
          'Druidas',
          'Guerreiros',
          'Lutadores',
        ],
      },
      {
        id: 30,
        nome: 'Anilatir',
        tipo: 'Menor',
        dominios: ['Inspiração'],
        natureza: 'Mortal Ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_anilatir.png',
        paginas: '7',
        armaPreferida: 'Adaga, espada, arco longo… — muda na mesma frequência que seu símbolo sagrado.',
        aceitaPaladinos: true,
        descricao: `
        <p>Anilatir, quando ainda era uma jovem mortal, trancou-se numa torre para que fosse resgatada por heróis. Ela mesma inventou uma série de perigos e desafios para seus salvadores e prometeu se casar com quem a libertasse. Muitos o fizeram, e ela viveu feliz para sempre por algumas semanas com cada um, até que se trancava de novo num lugar ainda mais inóspito, com mais perigos, para instigar heróis mais valorosos.</p>
        <p>Quando enfim, depois de alguns anos, cansou-se do jogo, foi ela mesma uma aventureira, tendo sido clériga de Khalmyr, Thyatis, Lena, Nimb e Oceano. Após ter roubado uma fortuna de um dragão, decidiu entregá-la ao bardo que compusesse a melhor balada. Escolheu crianças que julgava terem potencial e arranjou para que suas famílias fossem chacinadas, impulsionando-as assim ao caminho de aventuras. Depois decidiu ser vilã, maquinando planos ilógicos de dominação e destruição para que heróis se levantassem para detê-la. Enfim, após essas e muitas outras peripécias, acabou ascendendo a Deusa da Inspiração, musa de bardos e centro de um minúsculo mas imaginativo culto.</p>
        <p>A história de Anilatir é tão curiosa quanto improvável. Segundo esses relatos, ela parecia agir como uma divindade, decidida a inspirar mortais e sem qualquer preocupação com a própria segurança, mesmo muito jovem. Talvez isso seja sinal de que tais histórias não passam de mentiras. Ou talvez Anilatir tenha inspirado alguém (talvez seu paladino, o indefectível Tex Scorpion Mako) a desenvolver alguma técnica mágica que direcionasse sua própria inspiração a ela mesma, desafiando as barreiras do tempo. Impossível? Dizem que alguns clérigos de Anilatir já se interessaram pelo conceito do Akzath de Thwor…</p>
        <p>Os clérigos de Anilatir se organizam (de forma bastante solta) em uma conspiração pela liberdade de Arton, eternamente combatendo a conspiração inimiga perpetrada pelos clérigos de Yasshara, a Deusa da Opressão, que desejam enclausurar o mundo em parâmetros rígidos e ordenados. Além disso, vivem aventuras, dançam, criam novas filosofias, entregam-se a todas as formas de expressão artística, traem o culto, arrependem-se, sagram-se cavaleiros, entram em guildas de ladrões… Fazem tudo que for diferente e inesperado. Serão seus melhores amigos, por pelo menos uma noite na taverna, desde que você aguente.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar Anilatir com intensidade. Criar coisas novas. Estudar coisas novas. Tornar-se algo novo. Reinventar-se de tempos em tempos. Evoluir sempre e inspirar outros a fazer o mesmo.</p>
        <p><b>Símbolo Sagrado.</b> Um escorpião, uma máscara, uma estrela, um pincel… — seu símbolo muda a cada 2d10+10 dias, mas seus devotos estão sempre cientes da mudança.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Adaga, espada, arco longo… — muda na mesma frequência que seu símbolo sagrado.</p>
        <p><b>Devotos.</b> Quaisquer. Anilatir não rejeita ninguém que queira criar ou ser algo novo.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Anilatir devem trocar pelo menos um item vestido ou empunhado por outro que ainda não tenham usado a cada 2d10+10 dias. (Para este efeito, versões aprimoradas ou encantadas de itens contam como itens diferentes.) Além disso, deve estar sempre atento às tramas de Yasshara, a Deusa Menor da Opressão, inimiga mortal de Anilatir.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Qualquer'],
      },
      {
        id: 31,
        nome: 'Apis',
        tipo: 'Menor',
        dominios: ['Abelhas'],
        natureza: 'Mortal Ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        // imagem: 'assets/img/deus_anilatir.png',
        paginas: '8',
        armaPreferida: 'Lança.',
        aceitaPaladinos: false,
        descricao: `
        <p>Também conhecida como Abelha-Imperatriz, Apis é a rainha de todas as abelhas de Arton. Ela vive em Tzeh’collmah, uma gigantesca colmeia no coração das Montanhas Lannestul, com milhares de abelhas gigantes como suas operárias. Alguns bárbaros das Lannestul aprenderam a temer e venerar Apis ao longo das eras. Nas redondezas, vários druidas, da mesma forma que os insetos gigantes, são considerados abelhas operárias ou campeiras, responsáveis pela proteção da colmeia e coleta de recursos, como néctar, pólen, resina e água.</p>
        <p>Alguns sábios fazem uma relação curiosa: Apis habita as Lannestul, onde também ficava a antiga nação de Ked’Rach, dos gigantes. Sabe-se que os gigantes escravizaram os minotauros durante muitos séculos, e que os minotauros só conseguiram se libertar usando trabalho em equipe e organização meticulosa. Segundo esses sábios, Goratikis, o líder minotauro responsável por unir seu povo, teria se inspirado em Apis, após encontrar por acaso Tzeh’collmah e observar a organização e união metódica das abelhas. Caso haja alguma verdade nisso, esta deusa, mesmo pouco conhecida, teria tido um impacto decisivo na história de Arton.</p>
        <p>De fato, algumas pessoas acreditam que peregrinar a Tzeh’collmah e vislumbrar Apis, talvez trazendo mel de volta, seja um rito que garanta o sucesso na formação de qualquer ordem, guilda, companhia mercenária ou organização com hierarquia rígida. Além de garantir que o peregrino nunca mais seja picado por abelhas…</p>
        <p><b>Crenças e Objetivos.</b>  Reverenciar Apis e as abelhas. Proteger a colmeia e o futuro das abelhas. Promover harmonia entre as abelhas e a civilização, e combater ameaças a essa harmonia.</p>
        <p><b>Símbolo Sagrado.</b> Uma abelha em um hexágono imitando um favo de mel.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Lança.</p>
        <p><b>Devotos.</b> Dahllan, hobgoblins, kobolds, sílfides, trogs, bárbaros, caçadores, druidas.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Apis não podem aprisionar ou matar abelhas de qualquer tipo (como abelhas monstruosas), nem permitir que outros o façam. Além disso, devem consumir T$ 1 por nível em mel todos os dias.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Dahllan', 'Hobgoblins', 'Kobolds', 'Sílfides', 'Trogs', 'Bárbaros', 'Caçadores', 'Druidas'],
      },
      {
        id: 32,
        nome: 'Artaphan',
        tipo: 'Menor',
        dominios: ['Amizade'],
        natureza: 'Conceito Vivo',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_artaphan.png',
        paginas: '8 e 9',
        armaPreferida: 'Funda.',
        aceitaPaladinos: true,
        descricao: `
        <p>Artaphan talvez seja único entre os deuses menores de Arton. Enquanto pessoas e até mesmo objetos foram elevados à divindade durante o período em que o Panteão estava incompleto, Artaphan foi criado a partir do nada.</p>
        <p>Darien, um trambiqueiro (antes bandoleiro, depois Cavaleiro do Corvo e depois o infame Cavaleiro Risonho), inventou-o para ludibriar os cidadãos de Roschfallen e impedir que cultuassem a Tormenta ou deuses malignos. De fato, o próprio nome do deus é um anagrama de “patranha” — um sinônimo de mentira. O resultado foi um deus pequeno, esquálido, fraco… mas ainda assim um deus. Artaphan não era nada antes de se tornar divino. Nasceu capaz de falar, compreender e abençoar o mundo, imortal, formado de crença pura. Tem consciência de que Darien o inventou e sente gratidão, mas não é um servo dele.</p>
        <p>Tudo indica que, pelo menos durante o início de sua vida, Artaphan seja extremamente maleável, afetado pela crença de seus devotos. Assim, caso o consenso geral diga que ele é um deus masculino, assumirá essa forma. Se o povo decidir que é feminino, assim será. Humanoide, animal, objeto... Artaphan é argila espiritual nas mãos de seus fiéis. Nasceu na antiga União Púrpura, fruto das lembranças de Darien a respeito de suas amizades da juventude. Por isso, Artaphan é fortemente associado à amizade juvenil e inconsequente.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar Artaphan e a amizade. Espalhar a amizade. Ajudar os outros. Aproveitar a vida em comunidade ou com um grupo seleto.</p>
        <p><b>Símbolo Sagrado.</b> Um par de mãos dadas.</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Funda.</p>
        <p><b>Devotos.</b> Gnolls, goblins, hynne, qareen, sílfides, bardos, cavaleiros, nobres, treinadores, paladino.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Artaphan devem espalhar a amizade. Uma vez por dia (ou por sessão de jogo, o que demorar mais), o devoto deve aproximar pessoas. Ele pode convencer alguém a ajudar outrem, passar um recado com uma mensagem positiva, colocar duas pessoas para beber juntas… Em termos de jogo, uma ação exigindo um teste de Diplomacia com CD mínima 15 + metade do seu nível.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: [
          'Gnolls',
          'Goblins',
          'Hynnes',
          'Qareen',
          'Sílfides, Bardos',
          'Cavaleiros',
          'Nobres',
          'Treinadores',
          'Paladinos',
        ],
      },
      {
        id: 33,
        nome: 'Ayllana',
        tipo: 'Menor',
        dominios: ['Sereias'],
        natureza: 'Mortal Ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        // imagem: 'assets/img/deus_artaphan.png',
        paginas: '9',
        armaPreferida: 'Não há. Devotos desta deusa não podem usar a magia Arma Espiritual e similares.',
        aceitaPaladinos: false,
        descricao: `
        <p>Nas profundezas cintilantes dos recifes, Ayllana destacou-se desde a infância por sua conexão com as forças arcanas do oceano. Superando os demais membros de sua raça, dominava os feitiços que controlavam as marés e invocavam feras dos abismos marinhos, transformando campos de batalha em tempestades místicas. Durante a eterna guerra das sereias e dos tritões contra os elfos-do-mar, sua habilidade mágica foi decisiva em numerosas batalhas. Em um confronto memorável, Ayllana enfrentou Tessalus, o feroz guerreiro dos elfos-do-mar — que acreditava que a força bruta superava qualquer encantamento.</p>
        <p>Naquele dia, os dois colidiram em duelo mortal: o tridente mágico de Tessalus contra as invocações arcanas de Ayllana. Mesmo com a fúria do adversário, a feiticeira reverteu o ataque com feitiços potentes, selando uma vitória que marcou a história do conflito. Esse embate não apenas fortaleceu sua reputação, como também alimentou uma rivalidade que perduraria. Após o feito heroico, Ayllana foi elevada à posição divina. Seu culto é conduzido por feiticeiras-sacerdotisas, celebrando sua mente arguta e dons arcanistas — exercido não apenas sob as ondas de Arton, mas também no próprio Reino do Oceano. Devotas da Deusa das Sereias acreditam que seus encantamentos as fortalecem, renovando sua meta de governar os mares com magia e colocar os elfos em merecida submissão.</p>
        <p><b>Crenças e Objetivos.</b> Proteger as sereias e sua soberania. Enaltecer a magia arcana. Dominar os oceanos. Derrotar os elfos-do-mar.</p>
        <p><b>Símbolo Sagrado.</b> Um Uma barbatana dorsal multicolorida.</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Não há. Devotos desta deusa não podem usar a magia Arma Espiritual e similares.</p>
        <p><b>Devotos.</b> Qareen, sereias/tritões, arcanistas, bardos, bucaneiros.</p>
        <p><b>Obrigações & Restrições.</b>  Devotos de Ayllana são proibidos de matar sereias e tritões, recusar-se a ajudar sereias e tritões inocentes, e recusar missões para resgatar ou proteger sereias/tritões e sua cultura.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Qareen', 'Sereias/tritões', 'Arcanistas', 'Qareen', 'Bardos', 'Bucaneiros'],
      },
      {
        id: 34,
        nome: 'Beluhga',
        tipo: 'Menor',
        dominios: ['Dragões do Gelo'],
        natureza: 'Dragão-Real',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_beluhga.png',
        paginas: '10',
        armaPreferida: 'Machado de guerra',
        aceitaPaladinos: true,
        descricao: `
        <p>Tão majestosa quanto as próprias Montanhas Uivantes, Beluhga é venerada pelos povos que habitam a região. Ao contrário de quase todos os Dragões-Reais (e da maioria dos dragões em geral), Beluhga é uma presença do bem. Sua magia era capaz de curar, embora ela também fosse uma senhora tão exigente quanto as próprias Uivantes.</p>
        <p>Sua história é trágica — na verdade, tão trágica que pode ser duvidosa, e coloca em xeque a benevolência de um dos deuses do Panteão. Diz-se que, há mais de 100.000 anos, Beluhga foi aprisionada nas Uivantes pelo próprio Khalmyr. Essa seria a verdadeira causa do clima na região: apenas a presença da Dragoa-Rainha do Gelo poderia tornar toda a cordilheira tão fria. Mas, se Beluhga não era maligna, por que foi punida? Segundo ao menos uma versão, Khalmyr estava apaixonado por Beluhga, mas ela o rejeitou. O Deus da Justiça teria então cometido uma injustiça suprema, apenas por seu orgulho ferido. Sabe-se que os deuses do Panteão não são perfeitos, mas Khalmyr não poderia ser tão imperfeito… ou poderia? Outras versões afirmam que a punição seria justa: Beluhga teria conspirado contra o Panteão, junto a Sckhar. Mas isso leva à pergunta de por que então Sckhar não foi punido…</p>
        <p>Mesmo confinada às Uivantes como punição, Beluhga tomou para si o dever de proteger a região. Foi uma das divindades menores mais atuantes de Arton, e rivalizou apenas com Sckhar como Dragoa-Rainha mais influente nas vidas dos mortais. Contudo, sua tragédia não havia acabado.</p>
        <p>Quando o Paladino de Arton se ergueu contra os deuses, tomou a Dragoa-Rainha como montaria, apenas para matá-la quando ela se tornou inútil para ele. Morta, Beluhga não retornou a sua forma dracônica; em vez disso, permaneceu como humanoide. Nessa forma — semelhante a uma meia-elfa de pele azulada, com cabelos roxos adornados por diademas cristalinos —, seu cadáver pôde ser levado de volta às Uivantes, onde repousa até hoje em um caixão de gelo eterno, impedindo o degelo da região. Dizem que um fantasma da Dragoa-Rainha foi visto nas montanhas; outros afirmam que não se trata de um fantasma, mas da própria Beluhga, retornada da morte para retomar seu reino gelado.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar o cadáver congelado de Beluhga e impedir que ele seja profanado. Perpetuar as tradições criadas no território da Dragoa-Rainha do Gelo. Combater quaisquer criaturas que ameacem pessoas, animais e outros seres nativos das Montanhas Uivantes.</p>
        <p><b>Símbolo Sagrado.</b> Uma lágrima azul cristalizada.</p>
        <p><b>Canalizar Energia.</b> Positiva.</p>
        <p><b>Arma Preferida.</b> Machado de guerra.</p>
        <p><b>Devotos.</b> Anões, hynne, galokk, golens, kallyanach, minotauros, ogros, bárbaros, caçadores, druidas, guerreiros, paladino.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Beluhga não devem permitir que não nativos das Uivantes adentrem a caverna onde repousa o corpo da Dragoa-Rainha. Não podem negar pedidos de ajuda feitos por um nativo inocente das Uivantes. Além disso, devem retornar às Uivantes para prestar seus respeitos a Beluhga a cada 1d4+2 meses.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: [
          'Anões',
          'Hynnes',
          'Galokk',
          'Golens',
          'Kallyanachs',
          'Minotauros',
          'Ogros',
          'Bárbaros',
          'Caçadores',
          'Druidas',
          'Guerreiros',
          'Paladinos',
        ],
      },
      {
        id: 35,
        nome: 'Benthos',
        tipo: 'Menor',
        dominios: ['Dragões dos Mares'],
        natureza: 'Dragão-Real',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_benthos.png',
        paginas: '11',
        armaPreferida: 'Tridente',
        aceitaPaladinos: false,
        descricao: `
        <p>Pouco se sabe a respeito de Benthos, já que são raras suas visitas ao mundo seco. Para ele, nada importa além da vastidão submersa que habita e as inúmeras ilhas que defende. Quase nunca visto em terra firme, este Dragão-Rei interveio em um punhado de vezes na história dos bípedes do continente — e todas deixaram consequências que ecoam por séculos, como a retaliação contra Thomas Lendilkar e a batalha contra o Dragão da Tormenta.</p>
        <p>Embora não seja uma figura benevolente, Benthos é o grande protetor de Khubar, o Reino Arquipélago. Os xamãs khubarianos possuem rituais secretos, capazes de invocar Benthos para combater ameaças às ilhas como um todo. Benthos é adorado em Khubar tanto quanto os deuses do Panteão, considerado por muitos a divindade principal, por sua proximidade e fisicalidade. Quase todos em Khubar lembram de alguma intervenção de Benthos, ou têm na família alguém que lembra. Assim, os ritos de adoração cotidiana ao Dragão-Rei têm um elemento de autopreservação e gratidão.</p>
        <p>Em sua forma humanoide, Benthos costuma aparecer como um tritão robusto de pele azulada, com roupas feitas de conchas e algas. Em forma dracônica, exibe um corpanzil esguio, com escamas brilhantes em tons de azul claro e verde-água, barbatanas emergindo ao longo do corpo e uma longa cauda bifurcada. As asas, em forma de leque, são utilizadas para voar e nadar.</p>
        <p><b>Crenças e Objetivos.</b> Reverenciar a magnificência de Benthos. Promover harmonia entre Khubar e o domínio submerso do Dragão-Rei dos Mares. Respeitar as dádivas providas pelas criaturas marinhas, além de retribuí-las sempre que possível. Proclamar a superioridade do Mar do Dragão-Rei e de suas ilhas. Vingar transgressões contra Khubar.</p>
        <p><b>Símbolo Sagrado.</b> Uma coroa feita de conchas e pérolas.</p>
        <p><b>Canalizar Energia.</b> Qualquer.</p>
        <p><b>Arma Preferida.</b> Tridente.</p>
        <p><b>Devotos.</b> Elfos-do-mar, kallyanach, sereias/tritões, tabrachi, bucaneiros, caçadores, druidas, guerreiros, ladinos.</p>
        <p><b>Obrigações & Restrições.</b> Devotos de Beluhga não devem permitir que não nativos das Uivantes adentrem a caverna onde repousa o corpo da Dragoa-Rainha. Não podem negar pedidos de ajuda feitos por um nativo inocente das Uivantes. Além disso, devem retornar às Uivantes para prestar seus respeitos a Beluhga a cada 1d4+2 meses.</p>`,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Elfos-do-mar',
          'Kallyanach',
          'Sereias/Tritões',
          'Tabrachi',
          'Bucaneiros',
          'Caçadores',
          'Druidas',
          'Guerreiros',
          'Ladinos',
        ],
      },
    ];
  }
}
