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
      // {
      //   id: 24,
      //   nome: 'Ateísmo',
      //   tipo: 'Maior',
      // },
    ];
  }
}
