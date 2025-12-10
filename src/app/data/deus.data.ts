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
      {
        id: 999,
        nome: 'Betsumial',
        tipo: 'Menor',
        dominios: ['Vigília'],
        natureza: 'Mortal Ascendido',
        status: '1',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_betsumial.png',
        paginas: '',
        armaPreferida: 'Arco longo',
        aceitaPaladinos: true,
        descricao: `
  <p>Betsumial era uma divindade de pequena importância há cerca de 300 anos. Nasceu em Petrynia, marcado por ter um único enorme olho no meio da face, capaz de enxergar a enormes distâncias. Seu nariz era deformado, para dar espaço ao olho ciclópico, resultando em uma voz fanhosa.</p>

  <p>Devido a seus poderes, ainda na infância começou a ser cultuado por aqueles que dependiam da visão para sobreviver. Os primeiros devotos foram vigias; logo vieram guardas, exploradores, patrulheiros e outros. Ainda jovem, como um aventureiro errante, era disputado por lordes que desejavam tê-lo a seu serviço e por cidades que o queriam como seu guardião. Assim, Betsumial ascendeu a deus menor.</p>

  <p>Seu culto sempre foi obscuro — dominado por uma irmandade de guardas e outros “vigilantes”. Ele mesmo nunca se preocupou em angariar seguidores, mas sempre concedeu sua bênção a todos que vinham procurá-lo. Sua religião nunca teve um centro definido até a queda de Glórienn, em 1405. Na época, formou-se um sítio de peregrinação nas colinas próximas à antiga Malpetrim, onde seus devotos controlavam a chegada de novos seguidores. As peregrinações acabaram quando Betsumial encontrou seu fim na Batalha de Tamu-ra, no mesmo ano.</p>

  <p>Suas representações póstumas mostram um jovem magriço que usava uma venda cobrindo seu único olho — mas essa venda, curiosamente, às vezes trazia um olho enorme pintado no tecido.</p>

  <p><b>Crenças e Objetivos.</b> Vigiar os arredores. Manter-se alerta. Preparar-se para os perigos e reagir a eles com antecipação. Proteger os mais fracos e indefesos.</p>

  <p><b>Símbolo Sagrado.</b> Um olho aberto.</p>

  <p><b>Canalizar Energia.</b> Qualquer.</p>

  <p><b>Arma Preferida.</b> Arco longo.</p>

  <p><b>Devotos.</b> Anões, elfos, hynne, kliren, naidoras, bárbaros, bucaneiros, caçadores, cavaleiros, guerreiros, ladinos, paladinos.</p>

  <p><b>Obrigações & Restrições.</b> Devotos de Betsumial sempre se oferecem para vigiar um local, objeto ou criatura, se isso for necessário, e jamais se recusam a fazê-lo (mas não precisam permanecer em vigília por mais de 1 dia).</p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Anões',
          'Elfos',
          'Hynne',
          'Kliren',
          'Naidoras',
          'Bárbaros',
          'Bucaneiros',
          'Caçadores',
          'Cavaleiros',
          'Guerreiros',
          'Ladinos',
          'Paladinos',
        ],
      },
      {
        id: 998,
        nome: 'Blinar',
        tipo: 'Menor',
        dominios: ['Máscaras'],
        natureza: 'Mortal Ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_blinar.png',
        paginas: '',
        armaPreferida: 'Adaga',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Um deus dissimulado, com rosto na forma de uma máscara de porcelana que se transforma constantemente,
      Blinar é uma figura enigmática e extravagante. Sempre veste roupas elaboradas que parecem fantasias —
      ou talvez também façam parte de seu corpo.
    </p>

    <p>
      Reverenciado em inúmeros bailes da corte e (secretamente) entre espiões, Blinar ensina seus devotos a
      jamais mostrar quem realmente são. Muito popular em Ahlen, é considerado por muitos o padroeiro da
      festa do Dia das Máscaras que acontece no Palácio Rishantor de Thartann, a capital do Reino da Intriga.
    </p>

    <p>
      Blinar governa sobre todos os aspectos das máscaras, desde sua função festiva e brincalhona até seu
      uso como disfarce e mesmo seu lado ritualístico. O deus ensina que, sob uma máscara, um mortal (ou
      mesmo uma divindade) pode ser qualquer um, ou qualquer coisa.
    </p>

    <p>
      A máscara seria a maior das defesas, pois protegeria a identidade — algo que engloba corpo, mente e alma.
      Paradoxalmente, as pessoas também mostram quem são de verdade ao usar uma máscara. Afinal, não há
      vergonha quando se usa um rosto que não é o seu próprio. Com sua identidade oculta, o que está em seu
      interior pode aflorar…
    </p>

    <p><b>Crenças e Objetivos.</b> Nunca mostrar sua verdadeira face. Provar-se mais esperto do que os demais.
    Deixar todos imaginando quem você é. Fazer aquilo que só é possível com anonimato total.</p>

    <p><b>Símbolo Sagrado.</b> Uma máscara de baile.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Adaga.</p>

    <p><b>Devotos.</b> Goblins, hynne, medusas, osteon, sílfides, sulfure, bardos, bucaneiros, ladinos, nobres.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Blinar devem sempre usar máscaras em público
      (a máscara conta como um item vestido). Além disso, uma vez por semana devem fazer um estranho
      acreditar que sua identidade é outra.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Goblins',
          'Hynne',
          'Medusas',
          'Osteon',
          'Sílfides',
          'Sulfure',
          'Bardos',
          'Bucaneiros',
          'Ladinos',
          'Nobres',
        ],
      },
      {
        id: 997,
        nome: 'Caerdellach',
        tipo: 'Menor',
        dominios: ['Unicórnios'],
        natureza: 'Mortal Ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_caerdellach.png',
        paginas: '',
        armaPreferida: 'Lança',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Talvez exista um unicórnio mais antigo que Caerdellach, mas ninguém se lembra. Sendo,
      presumivelmente, a mais ancestral dessas criaturas, desde sempre foi procurado por outros de sua espécie,
      como conselheiro e sábio. Não demorou para começar a ser cultuado e se tornar um verdadeiro deus menor.
    </p>

    <p>
      Caerdellach é uma divindade muito distante dos artonianos “civilizados”. Embora existam (raros)
      unicórnios que se associam a bípedes, o Deus Menor dos Unicórnios não costuma participar desse tipo de
      aliança. Prefere permanecer em existência reclusa, na Floresta de Tollon, sendo procurado por aqueles que
      necessitam de conselhos ou a miraculosa cura que seu chifre concede.
    </p>

    <p>
      Sua clareira é muitas vezes chamada de Refúgio dos Unicórnios, pois diz-se que nenhum mortal é capaz
      de alcançá-la sem sua permissão, e todos esses seres delicados encontram lá abrigo e proteção.
    </p>

    <p>
      Em vários pontos de Arton, a figura do unicórnio é relacionada ao conceito de pureza. Algumas pessoas
      (principalmente em culturas rígidas) associam isso à castidade. Assim, existem artonianos de todos os
      sexos e gêneros que cultuam Caerdellach porque, por alguma razão, valorizam e desejam preservar sua
      “inocência”.
    </p>

    <p><b>Crenças e Objetivos.</b> Preservar e pregar a sacralidade de corpo, mente e alma. Proteger bosques,
    florestas, clareiras pacíficas, córregos límpidos e outros locais onde os unicórnios habitam. Curar os feridos.</p>

    <p><b>Símbolo Sagrado.</b> Um chifre dourado.</p>

    <p><b>Canalizar Energia.</b> Positiva.</p>

    <p><b>Arma Preferida.</b> Lança.</p>

    <p><b>Devotos.</b> Aggelus, centauros, dahllan, eiradaan, elfos, meios-elfos, sílfides, cavaleiros, druidas,
    treinadores, paladino.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Caerdellach devem ser sacros e castos, recusando-se a se casar
      ou ter relações íntimas com outras pessoas. Além disso, não podem recusar pedidos de ajuda de pessoas
      inocentes ou animais em perigo.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: [
          'Aggelus',
          'Centauros',
          'Dahllan',
          'Eiradaan',
          'Elfos',
          'Meios-Elfos',
          'Sílfides',
          'Cavaleiros',
          'Druidas',
          'Treinadores',
          'Paladino',
        ],
      },
      {
        id: 996,
        nome: 'Canastra',
        tipo: 'Menor',
        dominios: ['Armadilhas'],
        natureza: 'Mortal Ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_canastra.png',
        paginas: '13',
        armaPreferida: 'Rede',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Um deus pequeno e esguio, com personalidade teatral, Canastra esconde sua inteligência e o perigo que
      representa, fingindo ser indefeso. Protege aqueles que usam de esperteza e artimanhas para vencer e
      diverte-se com devotos capazes de encontrar um jeitinho de se virar em situações perigosas.
    </p>

    <p>
      Embora possua muitos servos em palácios, também é reverenciado por todo tipo de caçadores, desde meros
      aldeões que usam de armadilhas para capturar pequenos animais até caçadores de monstros ou recompensas,
      que guiam suas presas para as mais mortais emboscadas.
    </p>

    <p>
      Canastra também tem outros devotos mais sofisticados… e mais perigosos. Em várias partes de Arton,
      projetistas de masmorras cultuam este deus, em busca de inspiração para suas criações mortíferas e
      engenhosas. De fato, alguns teólogos especulam que o próprio Hyninn possa sentir algum “ciúme” desse
      culto. Outros afirmam que Canastra é um fantoche de Hyninn, para que o Deus da Trapaça possa influenciar
      o mundo ainda mais, mantendo sua fachada “inofensiva”.
    </p>

    <p><b>Crenças e Objetivos.</b> Planejar adiante. Estar sempre um passo à frente. Emboscar inimigos.
    Preparar armadilhas. Manipular outros a seu favor.</p>

    <p><b>Símbolo Sagrado.</b> Uma armadilha arataca.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Rede.</p>

    <p>
      <b>Devotos.</b> Finntroll, gnolls, goblins, harpias, hynne, kliren, kobolds, nezumi, sílfides, trogs, bardos,
      caçadores, inventores, ladinos.
    </p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Canastra devem sempre estar um passo à frente de seus adversários.
      Uma vez por dia (ou por sessão de jogo, o que demorar mais), devem executar uma armadilha ou uma
      emboscada com sucesso.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Finntroll',
          'Gnolls',
          'Goblins',
          'Harpias',
          'Hynne',
          'Kliren',
          'Kobolds',
          'Nezumi',
          'Sílfides',
          'Trogs',
          'Bardos',
          'Caçadores',
          'Inventores',
          'Ladinos',
        ],
      },
      {
        id: 995,
        nome: 'Canora',
        tipo: 'Menor',
        dominios: ['Canção'],
        natureza: 'Mortal Ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deusa_canora.png',
        paginas: '',
        armaPreferida: 'Florete',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Com a aparência de uma donzela esguia, pálida e com olheiras, esta deusa é capaz de modular a voz como
      quiser, da melodia mais doce a um guincho doloroso ou mesmo mortal. Suas canções são capazes de agradar
      os mais distintos gostos e seu repertório é infinito — desde as mais delicadas melodias élficas até as mais
      poderosas óperas anãs. Do canto suave de pássaros aos berros agonizantes dos moribundos. Seus devotos
      são ensinados a fazer o mesmo, usando suas vozes para incitar todos os tipos de emoções.
    </p>

    <p>
      A voz de Canora pode ressoar com materiais específicos, destruindo-os com a mesma facilidade com que
      ela encanta seu público. A deusa não aprecia o uso de sua arte como arma, mas sabe que às vezes isso é
      necessário.
    </p>

    <p><b>Crenças e Objetivos.</b> A melodia é a perfeição. Treino vocal é imprescindível. O canto é a mais perfeita
    forma de arte e o jeito certo de conquistar corações. A voz é a mais poderosa das armas.</p>

    <p><b>Símbolo Sagrado.</b> Uma flor em forma de nota musical.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Florete.</p>

    <p>
      <b>Devotos.</b> Anões, elfos, harpias, hynne, qareen, sátiros, sereias/tritões, sílfides, arcanistas, bardos,
      bucaneiros, nobres, paladino.
    </p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Canora nunca recusam uma oportunidade de cantar. Além disso,
      uma vez por semana (ou por sessão de jogo, o que demorar mais), devem se apresentar para uma grande
      plateia, como uma taverna lotada, a corte de um nobre local ou um festival em uma vila.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Anões',
          'Elfos',
          'Harpias',
          'Hynne',
          'Qareen',
          'Sátiros',
          'Sereias/Tritões',
          'Sílfides',
          'Arcanistas',
          'Bardos',
          'Bucaneiros',
          'Nobres',
          'Paladino',
        ],
      },
      {
        id: 994,
        nome: 'Cette',
        tipo: 'Menor',
        dominios: ['Arqueiros'],
        natureza: 'Mortal Ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_cette.png',
        paginas: '',
        armaPreferida: 'Arco longo',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Cette era um deus antigo, que transcendeu até mesmo a extrema longevidade élfica muito antes da queda
      de Lenórienn — alguns dizem que já era uma divindade menor quando os elfos chegaram a Arton. Suas
      maneiras, seu estilo de luta e sua própria aparência remetem a um tempo em que os elfos nunca haviam sido
      humilhados, mas também a uma época ainda sem a arrogância e a autoconfiança excessiva que foram sua
      perdição. De certa forma, Cette foi um símbolo de tudo que os elfos deveriam ter sido: perfeitos, mas sem
      nenhuma noção de superioridade.
    </p>

    <p>
      Embora representasse uma das maiores tradições élficas, Cette não parecia ter grande ligação com Glórienn.
      De alguma forma, ao personificar a disciplina do arco e flecha, Cette se concentrou na arma e se afastou de
      todo o resto. Também adquiriu certas características do arco (flexível, adquire força sob pressão) e da flecha
      (direto, rápido, sem meandros). Assim, continuava apresentando a típica postura élfica de séculos atrás:
      refinamento, delicadeza e tranquilidade, sem empáfia.
    </p>

    <p>
      Cette perdeu muitos seguidores no período entre a chegada dos elfos a Arton e a queda de Glórienn — pois,
      durante esse tempo, a raça se voltou cada vez mais para sua deusa padroeira, de forma quase exclusiva.
      Mesmo assim, o Deus dos Arqueiros não parecia se abalar. Continuava pronto para defender as tradições
      élficas, como sempre fizera.
    </p>

    <p>
      De certa forma, Cette era uma divindade simples: não desafiava a compreensão nem adquiria formas
      metafísicas. Era um elfo esguio, de longos cabelos verdes presos em tranças, tão leve que ao andar seus pés
      mal tocavam o chão. Seu arco era tão alto quanto ele mesmo. Vestia-se com a mais fina malha élfica, trançada
      com folhas vivas. Era um guerreiro eficiente, franco e até mesmo bem-humorado. Sua morte na Batalha de
      Tamu-ra em 1405 foi uma grande perda para Arton.
    </p>

    <p><b>Crenças e Objetivos.</b> Manter vivas as tradições de arquearia élficas. Treinar e aperfeiçoar-se nas artes
    do tiro e da guerra. Honrar juramentos. Lutar por causas justas. Demonstrar força sob pressão e franqueza
    nas palavras.</p>

    <p><b>Símbolo Sagrado.</b> Uma flecha com folhas verdes.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Arco longo.</p>

    <p>
      <b>Devotos.</b> Elfos, medusas, naidoras, caçadores, inventores, guerreiros, nobres, paladino.
    </p>

    <p>
      <b>Obrigações & Restrições.</b> As únicas armas empunhadas que o devoto de Cette pode usar são arcos.
      Além disso, para atacar com outras armas (como naturais), ele deve fazer ao menos um ataque com arco
      na rodada.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Elfos', 'Medusas', 'Naidoras', 'Caçadores', 'Inventores', 'Guerreiros', 'Nobres', 'Paladino'],
      },
      {
        id: 993,
        nome: 'Champarr',
        tipo: 'Menor',
        dominios: ['Jogos'],
        natureza: 'Mortal Ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_champarr.png',
        paginas: '',
        armaPreferida: 'Espada curta',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Patrono dos torneios, dos conflitos e dos jogos, Champarr é a divindade favorita dos atletas, duelistas,
      jogadores e guerreiros entre os moreau. É o juiz de todas as disputas, desde duelos de espadas até guerras
      entre reinos, desde jogos de cartas até corridas de cavalos nos Reinos de Moreania. Ele abençoa os vencedores
      e perdoa (ou amaldiçoa) os perdedores.
    </p>

    <p>
      Os adoradores de Champarr conseguem traçar sua origem até os mais distantes domínios extraplanares. Há
      milhares de anos ele teria participado de um torneio cósmico promovido por um poderoso Deus da Guerra —
      com certeza Keenn, a menos que todas as escrituras sagradas estejam erradas e tenha havido um Deus da
      Guerra antes dele! Esse presumivelmente foi o Torneio do Deus Guerreiro, a mesma disputa que rendeu a
      Arsenal o título de Deus da Guerra.
    </p>

    <p>
      Na ocasião, após sucessivas vitórias, Champarr chegou à grande final e duelou contra o deus em pessoa, mas
      foi derrotado. No entanto, por sua tenacidade, teria recebido a imortalidade e o título de Deus dos Jogos.
    </p>

    <p>
      Champarr tem a aparência de um poderoso gladiador, usando um elmo fechado que mantém suas emoções
      indecifráveis. Está sempre armado com duas espadas curtas idênticas: uma delas concede a bênção da vitória
      e a outra, a maldição da derrota.
    </p>

    <p>
      Champarr é querido em Moreania, especialmente no reino de Brando, onde flâmulas em sua homenagem são
      hasteadas antes de cada grande torneio, e seus clérigos atuam como juízes. Moreau diante de provações muitas
      vezes rogam seu nome, para assegurar a vitória.
    </p>

    <p><b>Crenças e Objetivos.</b> Reverenciar os jogos. Incitar disputas. Derrotar inimigos. Desafiar a si mesmo.
    Superar limites. Promover e participar de torneios e jogos. Vencer em condições justas.</p>

    <p><b>Símbolo Sagrado.</b> Um troféu.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Espada curta.</p>

    <p>
      <b>Devotos.</b> Anões, elfos, hynne, sátiros, sílfides, bardos, bucaneiros, guerreiros, ladinos, lutadores, nobres.
    </p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Champarr devem vencer um jogo por dia (ou por sessão de jogo, o
      que demorar mais). Em termos de regras, devem vencer um teste oposto de Jogatina, Luta ou Pontaria contra
      um oponente digno (a critério do mestre). Outras perícias podem ser usadas para atender essa obrigação,
      também a critério do mestre.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Anões',
          'Elfos',
          'Hynne',
          'Sátiros',
          'Sílfides',
          'Bardos',
          'Bucaneiros',
          'Guerreiros',
          'Ladinos',
          'Lutadores',
          'Nobres',
        ],
      },
      {
        id: 992,
        nome: 'Dahriol',
        tipo: 'Menor',
        dominios: ['Selos'],
        natureza: 'Mortal Ascendido',
        status: '1',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_dahriol.png',
        paginas: '',
        armaPreferida: 'Bordão',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Dahriol foi um grande herói eras atrás, responsável por atravessar verdadeiros infernos para entregar mensagens
      de suma importância que mudaram o destino de reinos inteiros. Qualquer um que quisesse garantir a entrega
      de sua carta buscava Dahriol e o herói nunca rompeu um selo que não devia — fosse o simples selo de cera
      de um pergaminho confidencial, fosse o selo místico de uma porta.
    </p>

    <p>
      Admirado por milhares, arrebanhou tanto poder que começou a ser considerado um deus por muitas pessoas
      ajudadas por seus feitos, além de ter inspirado outros mensageiros a se comportar da mesma forma.
    </p>

    <p>
      Num mundo em que vencer limites, quebrar barreiras e desvendar segredos são demonstrações de heroísmo
      valorizadas por quase todos, Dahriol é um defensor daquilo que deve ser mantido fechado, protegido e seguro.
      Desde entidades malignas que não podem escapar de suas prisões até informações sensíveis que não podem
      chegar aos olhos e ouvidos de inimigos, tudo que deve ficar selado é domínio de Dahriol. Assim, mesmo sem
      a fama de outros deuses menores, esta divindade carrega um grande fardo.
    </p>

    <p>
      Como recompensa por suas ações e seu senso de dever, Dahriol costuma servir como mensageiro de Tanna-Toh,
      a Deusa do Conhecimento, e ocasionalmente também de Khalmyr. Além disso, já foi enviado para Arton em
      missões envolvendo reunir aventureiros e garantir que selos amaldiçoados continuassem intactos.
    </p>

    <p>
      Durante sua participação na saga do Disco dos Três, ajudando a impedir que o deus menor Sartan viesse ao
      mundo, Dahriol foi o instigador de uma das primeiras expedições registradas de aventureiros do continente
      às proximidades de Galrasia. Assim, também é cultuado por alguns exploradores da ilha.
    </p>

    <p>
      Costuma se mostrar aos mortais como um homem velho com longos cabelos e barba branca, vestido com roupas
      simples e empunhando um cajado de madeira em uma das mãos.
    </p>

    <p><b>Crenças e Objetivos.</b> Proteger os selos. Impedir que ameaças seladas causem mal a Arton. Estudar selos
    místicos e manter o mal afastado através deles.</p>

    <p><b>Símbolo Sagrado.</b> Um selo de cera.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Bordão.</p>

    <p>
      <b>Devotos.</b> Anões, elfos, qareen, arcanistas, bardos, cavaleiros, guerreiros, nobres, paladino.
    </p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Dahriol não podem recusar pedidos de ajuda para entregar mensagens
      ou impedir que selos sejam abertos. Além disso, não podem abrir selos trancados sem permissão. Para estes
      fins, um “selo” é qualquer barreira, como uma porta, tranca ou fechadura, mundana ou mágica.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Anões', 'Elfos', 'Qareen', 'Arcanistas', 'Bardos', 'Cavaleiros', 'Guerreiros', 'Nobres', 'Paladino'],
      },
      {
        id: 993,
        nome: 'Drumak',
        tipo: 'Menor',
        dominios: ['Duelo'],
        natureza: 'Conceito Vivo',
        status: '1',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_drumak.png',
        paginas: '',
        armaPreferida: 'Espada longa',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Diferente da imensa maioria de deuses artonianos, o Deus do Duelo não é uma criatura, mas um título.
      A cada ano é realizado o Torneio Deus do Duelo, um campeonato secreto no qual lutadores de toda Arton
      desafiam uns aos outros em duelos formais, em diferentes arenas, muitas vezes mascarando essa competição
      como simples brigas de rua ou lutas entre aventureiros.
    </p>

    <p>
      O vencedor, conhecido como o “Guerreiro de Arton”, é então desafiado pelo Drumak atual. Se o Guerreiro
      de Arton vence o duelo, ele se torna o novo Deus do Duelo, e parte da personalidade da divindade se une à
      do campeão.
    </p>

    <p>
      O segredo do torneio é mantido para que apenas aventureiros considerados combatentes e dignos saibam de sua
      existência. Seus participantes formam uma grande confraria, respeitando-se mesmo sendo oponentes ferrenhos.
      Assim como o deus, seus devotos honram e respeitam duelos formais, jamais interferindo — e jamais se acovardando.
    </p>

    <p>
      O torneio ocorre no outono, tradição herdada de eras antigas quando aventureiros tinham a primavera e o verão
      tomados por missões importantes. No outono, podiam então se dedicar à grande competição.
    </p>

    <p>
      Até hoje, nunca houve um caso em que a luta contra Drumak não fosse a mais difícil do torneio. O deus menor
      usa todas as técnicas, truques e poderes possíveis. Por isso, é comum que o posto permaneça com o hospedeiro
      atual, pois poucos combatentes conseguem vencê-lo.
    </p>

    <p>
      Dizem que a atual Deusa do Duelo, a bárbara Drusilla, está desaparecida há muitos anos. Vários competidores buscam
      encontrá-la — seja por devoção, seja para desafiá-la.
    </p>

    <p><b>Crenças e Objetivos.</b> Honrar duelos individuais. Aventurar-se. Aperfeiçoar a arte do combate.
    Participar do Torneio Deus do Duelo. Buscar o mais forte.</p>

    <p><b>Símbolo Sagrado.</b> Duas espadas se cruzando.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Espada longa.</p>

    <p>
      <b>Devotos.</b> Quaisquer combatentes. A critério do mestre, qualquer personagem que use o combate físico
      como tática principal pode ser convidado ao torneio e assim tornar-se devoto.
    </p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Drumak devem competir no Torneio Deus do Duelo e não podem
      interromper ou recusar lutas justas entre dois oponentes.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Combatentes em geral'],
      },
      {
        id: 994,
        nome: 'Dunsark',
        tipo: 'Menor',
        dominios: ['Mercenários'],
        natureza: 'Mortal Ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_dunsark.png',
        paginas: '',
        armaPreferida: 'Espada longa',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Dunsark é um deus guerreiro, um combatente que carrega uma quantidade aparentemente infinita de armas pendendo de seu corpo, sempre interessado em lutar por dinheiro e arriscar-se por lucro. É o protetor das batalhas sem motivos pessoais, dos conflitos sem moralidade. Protege a noção de risco e ganho, a luta por puro interesse.
    </p>

    <p>
      Reza a lenda que Dunsark foi um mercenário abençoado que já teve tanto ouro quanto os cofres de Sambúrdia e tantos itens mágicos quanto Arsenal. Seus devotos agarram-se a ele como uma esperança de riqueza e glória, anunciando seu nome após cada vitória em batalha, cada ataque bem-sucedido a um castelo, cada contrato lucrativo.
    </p>

    <p>
      Mesmo os mercenários que não acreditam na lenda contam suas histórias ao redor das fogueiras. Sua última grande vitória foi na Batalha de Tamu-ra, em 1405, onde Dunsark enfrentou a Tormenta e escapou para contar a história.
    </p>

    <p>
      Apesar de ser viciado em risco e campeão de incontáveis guerras, sua aparência é comum. Soldados supersticiosos desconfiam que qualquer mercenário poderoso sem vínculos de lealdade possa ser Dunsark disfarçado, buscando um novo contrato, uma nova guerra. Durante a Guerra Artoniana, Dunsark foi “visto” inúmeras vezes — talvez nem todos fossem rumores.
    </p>

    <p><b>Crenças e Objetivos.</b> Lutar por dinheiro. Planejar e arriscar tudo por ouro, joias e espólios. Usar estratégias e técnicas superiores sempre. Colocar lucro acima de lealdade. Assumir grandes riscos por grandes recompensas.</p>

    <p><b>Símbolo Sagrado.</b> Uma espada longa entre joias.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Espada longa.</p>

    <p>
      <b>Devotos.</b> Gnolls, goblins, kobolds, lefou, nezumi, orcs, osteon, suraggel, trogs, bárbaros, bucaneiros, caçadores, guerreiros, ladinos, lutadores, nobres.
    </p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Dunsark não podem recusar aventuras que envolvam recompensa em dinheiro e não podem aceitar aventuras sem esse tipo de pagamento. Além disso, não podem ajudar alguém sem receber algo em troca — e devem ajudar quem estiver disposto a pagar mais.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Gnolls',
          'Goblins',
          'Kobolds',
          'Lefou',
          'Nezumi',
          'Orcs',
          'Osteon',
          'Suraggel',
          'Trogs',
          'Bárbaros',
          'Bucaneiros',
          'Caçadores',
          'Guerreiros',
          'Ladinos',
          'Lutadores',
          'Nobres',
        ],
      },
      {
        id: 993,
        nome: 'Elrophin',
        tipo: 'Menor',
        dominios: ['Vaidade'],
        natureza: 'Mortal Ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_elrophin.png',
        paginas: '',
        armaPreferida: 'Espada bastarda',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Não se sabe muito sobre a origem de Elrophin. Alguns dizem que seria filho de Valkaria, e assim um semideus. Também correm histórias de que teria sido um grande bardo, um poderoso guerreiro, ou ambos. Também dizem que Elrophin foi um antigo sumo-sacerdote da Deusa da Ambição, atuante quando Arton Norte ainda não havia sido desbravada.
    </p>

    <p>
      As histórias afirmam que Elrophin era tão seguro de si em tudo que fazia que aos poucos foi conquistando tudo que desejava: poderes, vitórias, domínios, amores. Sua lábia e autoconfiança eram lendárias. E assim foi crescendo e conquistando uma legião de admiradores e seguidores, até que acabou por se transformar em um deus menor.
    </p>

    <p>
      Talvez esse feito tenha recebido ajuda e bênção da própria Valkaria, que sempre admirou pessoas ambiciosas; outros pensam que Elrophin alcançou a divindade justamente por dar as costas a ela — pois a maior ambição (e a maior vaidade) seria não precisar nem mesmo dos deuses. Muitas lendas correm em torno deste deus — que, embora um tanto obscuro, não deixa de ser poderoso e influente.
    </p>

    <p><b>Crenças e Objetivos.</b> Conhecer seu próprio valor e demonstrá-lo. Conquistar o que deseja através da lábia ou da força. Admirar-se e ser a maior prioridade de si mesmo.</p>

    <p><b>Símbolo Sagrado.</b> Uma espada bastarda entre rosas.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Espada bastarda.</p>

    <p>
      <b>Devotos.</b> Elfos, goblins, medusas, minauros, minotauros, naidoras, qareen, suraggel, tabrachi, bardos, bucaneiros, cavaleiros, guerreiros, lutadores, nobres.
    </p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Elrophin devem pregar o quanto eles mesmos — e seu deus — são incríveis e convencer pessoas de seus feitos pelo menos uma vez por dia (ou por sessão de jogo, o que demorar mais). Em termos de jogo, uma ação exigindo um teste de Diplomacia com CD mínima 15 + metade do seu nível.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Elfos',
          'Goblins',
          'Medusas',
          'Minauros',
          'Minotauros',
          'Naidoras',
          'Qareen',
          'Suraggel',
          'Tabrachi',
          'Bardos',
          'Bucaneiros',
          'Cavaleiros',
          'Guerreiros',
          'Lutadores',
          'Nobres',
        ],
      },
      {
        id: 992,
        nome: 'Escamandra',
        tipo: 'Menor',
        dominios: ['Permanência'],
        natureza: 'Mortal Ascendido',
        status: '1',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_escamandra.png',
        paginas: '',
        armaPreferida: 'Arco curto',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Antes de ser uma deusa, Escamandra foi uma grande líder entre as medusas, acolhendo aquelas que eram caçadas como monstros séculos atrás. Na Floresta dos Basiliscos, em certa área que passou a ser conhecida como Santuário das Estátuas Eternas, Escamandra criou um ambiente seguro para abrigar suas irmãs e, por esse feito, passou a ser adorada.
    </p>

    <p>
      Aos poucos, a área ao redor do Santuário passou a abrigar mais e mais “estátuas de pedra”, na verdade pretensos intrusos que eram petrificados por Escamandra antes que pudessem ameaçar suas protegidas. Para contribuir com os objetivos de sua deusa, as medusas devotas de Escamandra passaram a domesticar os basiliscos da região — e até mesmo outros lagartos enormes sem poderes de petrificação —, usando-os para reduzir as suspeitas sobre as frequentes transformações de visitantes da floresta em estátuas.
    </p>

    <p>
      A deusa Escamandra, uma medusa belíssima, de olhar fulminante e cabelos serpentinos cor de mármore, despreza invasores e envia seus devotos para atacar qualquer um que se aproxime demais de seu santuário — petrificando-os e transformando-os em mais das “estátuas eternas” que dão nome ao local. No entanto, há registros de pessoas que conseguiram dialogar com Escamandra e até mesmo se converteram à sua causa, passando a espalhar sua palavra por Arton.
    </p>

    <p><b>Crenças e Objetivos.</b> Proteger as medusas e sua cultura. Proteger o Santuário das Estátuas Eternas e manter sua localização em sigilo, exceto de medusas em busca de abrigo. Lutar pela permanência e defender a imutabilidade.</p>

    <p><b>Símbolo Sagrado.</b> Olhos de cobra em uma face de mármore.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Arco curto.</p>

    <p>
      <b>Devotos.</b> Anões, centauros, elfos, golens, medusas, osteon, arcanistas, bárbaros, caçadores, cavaleiros, druidas, nobres.
    </p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Escamandra não podem causar dano letal ou perda de PV a medusas, nagahs, trogs e outras criaturas relacionadas com cobras (fornecer bônus em dano letal contra elas também é proibido) a critério do mestre. Podem causar dano não letal e prejudicar essas criaturas (em termos de jogo, impondo condições), desde que não causem dano letal ou perda de PV. Além disso, não podem recusar pedidos de ajuda de medusas inocentes.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Anões',
          'Centauros',
          'Elfos',
          'Golens',
          'Medusas',
          'Osteon',
          'Arcanistas',
          'Bárbaros',
          'Caçadores',
          'Cavaleiros',
          'Druidas',
          'Nobres',
        ],
      },
      {
        id: 991,
        nome: 'Esmeralda',
        tipo: 'Menor',
        dominios: ['Joias'],
        natureza: 'Mortal Ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_esmeralda.png',
        paginas: '',
        armaPreferida: 'Picareta',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Quando ainda era apenas humana, Esmeralda já atuava como uma excelente joalheira e ourives, procurada por especialistas em joias de todo o Reinado. Em meio à infindável batalha entre falsificadores de preciosidades e nobres exigentes, dizia-se que ninguém era mais confiável que Esmeralda para atestar a fidelidade de uma joia. Contudo, apesar de famosa, a ourives era misteriosa e enigmática; sabia que, se sua verdadeira identidade fosse descoberta por contrabandistas e falsificadores, sua vida estaria em risco.
    </p>

    <p>
      Inevitavelmente, Esmeralda desapareceu e, na ausência de alguém igualmente competente, vários comerciantes e até mesmo nobres ergueram templos e passaram a orar por seu retorno — uma medida desesperada para evitar que suas joalherias fossem à falência, ou apenas para que não precisassem estar privados de suas obras. Aos poucos, as joias fabricadas enquanto Esmeralda estava desaparecida passaram a ser consideradas falsas, ou ao menos de qualidade inferior. Sem Esmeralda, nada podia ser realmente precioso. Todos desejavam a volta de Esmeralda que, inesperadamente, atendeu aos desejos daqueles que, a essa altura, já eram seus fiéis. Mas, quando retornou, não era mais a mesma.
    </p>

    <p>
      Ela agora lembrava uma aristocrata humana, mas sua pele era feita de diamante e seus olhos eram gemas coloridas. Vendo nisso um sinal claro do significado transcendental da ourives, seus devotos passaram a espalhar sua palavra. Após seu retorno, podia haver mais uma vez joias “verdadeiras”.
    </p>

    <p>
      Os devotos de Esmeralda aprendem as nuances dos metais valiosos e pedras preciosas, reconhecem o valor potencial de gemas brutas e honram sua deusa usando ou fabricando as mais deslumbrantes joias. Contudo, desprezam de forma quase irracional as joias fabricadas durante o curto período em que ela esteve desaparecida. Para eles, peças dessa época infeliz são como itens malditos.
    </p>

    <p><b>Crenças e Objetivos.</b> Fabricar joias. Identificar pedras preciosas. Usar as mais finas preciosidades. Exalar a nobreza. Exibir a riqueza dos minérios.</p>

    <p><b>Símbolo Sagrado.</b> Um colar de ouro com um pingente de esmeralda.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Picareta.</p>

    <p>
      <b>Devotos.</b> Anões, elfos, qareen, sílfides, arcanistas, bardos, bucaneiros, inventores, ladinos, nobres.
    </p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Esmeralda devem usar um item na forma de uma joia — que sempre será considerado um item vestido. A joia deve estar exposta. Se não estiver usando uma joia por motivo justificável (se for furtado ou preso, por exemplo), o devoto tem um dia para voltar a usar uma joia antes de descumprir estas Obrigações & Restrições.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Anões',
          'Elfos',
          'Qareen',
          'Sílfides',
          'Arcanistas',
          'Bardos',
          'Bucaneiros',
          'Inventores',
          'Ladinos',
          'Nobres',
        ],
      },
      {
        id: 990,
        nome: 'Garanaam',
        tipo: 'Menor',
        dominios: ['Charadas'],
        natureza: 'Mortal Ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_garanaam.png',
        paginas: '',
        armaPreferida: 'Bordão',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Um homem com traços de esfinge, que sempre falava em metáforas, enigmas e perguntas, Garanaam pregava que as respostas só poderiam ser obtidas vendo as coisas por outro ponto de vista e que as mais importantes verdades se escondem da obviedade. Ao mesmo tempo, ensinava a seus devotos que só aqueles capazes de pensar fora dos padrões comuns e ver o que não é evidente eram dignos de suas bênçãos.
    </p>

    <p>
      Diz-se que, apesar de um dia ter sido um mortal, Garanaam não guarda nenhuma semelhança com a pessoa que era antes de ascender. Sua aparência, sotaque, maneirismos e até mesmo seu nome teriam sido totalmente diferentes. De fato, talvez haja uma charada no próprio nome de Garanaam, além de um prêmio místico para quem for capaz de decifrá-la. Ao se tornar um deus menor, Garanaam virou ele mesmo uma charada, um enigma em forma de divindade.
    </p>

    <p>
      Garanaam foi recrutado por Orion Drake para o Exército de Deuses e lutou na Batalha de Tamu-ra. Contudo, diferente da maioria das divindades menores que participaram desse conflito, o Deus das Charadas não está morto! Ao entrar na área de Tormenta de Tamu-ra, Garanaam se deparou com os lefeu e enlouqueceu. Em sua mente surgia a charada suprema: o que são aquelas criaturas? Qual a forma real dos demônios da Tormenta, meramente traduzidos pelos cérebros artonianos em quelíceras e carapaças rubras?
    </p>

    <p>
      O Deus das Charadas agarrou as têmporas e caiu de joelhos, gargalhando insanamente. Quando a batalha acabou e a Tormenta foi sugada de volta para a Anticriação, Garanaam foi resgatado e levado de volta ao continente junto com os deuses feridos, mas carregava em sua mente a loucura que vivenciou. Hoje se veste com panos sujos e puídos. Seu cajado com a forma de um ponto de interrogação está quebrado. No entanto, suas charadas são ainda mais elaboradas: por trás de sua loucura, Garanaam mantém uma lógica em seus enigmas.
    </p>

    <p><b>Crenças e Objetivos.</b> Testar a inteligência dos artonianos. Jogar com as palavras. Compreender significados. Propor enigmas. Esconder o que é óbvio.</p>

    <p><b>Símbolo Sagrado.</b> Um ponto de interrogação.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Bordão.</p>

    <p><b>Devotos.</b> Goblins, kliren, qareen, arcanistas, bardos, bucaneiros, inventores, ladinos.</p>

    <p>
      <b>Obrigações & Restrições.</b> Um devoto de Garanaam deve, pelo menos uma vez por cena, responder a uma pergunta com um enigma, uma charada ou um jogo de palavras que devem ser decifrados por quem perguntou.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Goblins', 'Kliren', 'Qareen', 'Arcanistas', 'Bardos', 'Bucaneiros', 'Inventores', 'Ladinos'],
      },
      {
        id: 989,
        nome: 'Garth',
        tipo: 'Menor',
        dominios: ['Pólvora'],
        natureza: 'Mortal Ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_garth.png',
        paginas: '',
        armaPreferida: 'Pistola',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Garth é um caso triste de um deus menor que odeia aquilo que governa. A maioria daqueles que usam armas de pólvora conhece a história de seu passado. Garth foi o pistoleiro mais sanguinário que já existiu. Era um bandido terrível, mas relutava em matar pessoas indefesas (embora tenha feito isso algumas vezes). Exceto por esses casos, se a morte fosse o caminho mais fácil ou eficiente, mesmo que desnecessário, Garth sempre escolhia-o e, assim, tornou-se temido e caçado nas infindáveis planícies de Petrynia, antes que esse território fizesse parte do Império de Tauron.
    </p>

    <p>
      Contudo, pelo amor a uma mulher capaz de ver bondade dentro dele, Garth cansou da vida sem sentido e tentou se regenerar. Ambos se casaram, tiveram um filho e viveram em paz numa pequena fazenda por alguns anos, sem que Garth disparasse um único tiro. O temido pistoleiro passou a ver que as armas de fogo tinham sido uma prisão, uma maldição.
    </p>

    <p>
      Infelizmente, o destino tinha outros planos para ele. Um bando de pistoleiros surgiu na fazenda, aproveitando sua ausência. Roubaram todo o pouco dinheiro que a família possuía. Mataram sua mulher e filho. Ao chegar em casa, Garth não parou sequer para enterrar os cadáveres. Pegou as pistolas e saiu em busca dos assassinos, caçando-os um a um.
    </p>

    <p>
      Sua alma voltou a endurecer e ele aceitou que nunca teria redenção verdadeira. Garth odiava suas pistolas, mas elas eram tudo que ele tinha. Sua história se espalhou, pistoleiros passaram a cultuá-lo e logo se tornou o Deus Menor da Pólvora. Como uma divindade, poderia trazer sua família de volta à vida — mas sabe ser tarde para isso. Suas mortes, e a jornada de vingança que ele empreendeu, transformaram-no.
    </p>

    <p>
      Hoje em dia, Garth existe apenas para espalhar mais morte, difundir a ciência letal das armas de pólvora que ele tanto odeia, com pistolas que nunca precisam ser recarregadas. Em seu coração, apenas ódio.
    </p>

    <p><b>Crenças e Objetivos.</b> Matar. Matar rápido. Matar sempre. Jamais oferecer perdão ou rendição. Vingar-se de tudo e todos.</p>

    <p><b>Símbolo Sagrado.</b> Uma pistola.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Pistola.</p>

    <p><b>Devotos.</b> Anões, goblins, hobgoblins, kliren, meios-orcs, minauros, osteon, sulfure, bucaneiros, caçadores, inventores, ladinos.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Garth não podem poupar inimigos nem aceitar ou oferecer perdão. Além disso, devem se vingar (de forma letal, usando armas de pólvora) de qualquer um que os prejudique seriamente.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Negativa',
        devotos: [
          'Anões',
          'Goblins',
          'Hobgoblins',
          'Kliren',
          'Meios-orcs',
          'Minauros',
          'Osteon',
          'Sulfure',
          'Bucaneiros',
          'Caçadores',
          'Inventores',
          'Ladinos',
        ],
      },
      {
        id: 988,
        nome: 'Goharom',
        tipo: 'Menor',
        dominios: ['Machados'],
        natureza: 'Mortal Ascendido',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_goharom.png',
        paginas: '',
        armaPreferida: 'Machado anão',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Goharom era um dos deuses anões mais antigos e, à primeira vista, poderia ser confundido com um simples guerreiro da raça. Sua aparência não entregava a verdadeira natureza divina. Era um anão forte, de estatura impressionante, barbudo, sempre trajando armadura pesada e empunhando um imenso machado. Conta-se que, ocasionalmente, Goharom visitava Doherimm apenas para beber grandes quantidades de cerveja nas tavernas, e os outros frequentadores não percebiam estar na presença de um deus até notarem sua resistência fora do comum. Quando essas visitas terminavam, várias tavernas estavam sem estoque e a Guilda dos Cervejeiros precisava enviar carregamentos emergenciais.
    </p>

    <p>
      Em sua vida mortal, Goharom era um habilidoso armeiro e guerreiro anão, especializado no uso de machados. Sua devoção a Rhond, o Deus das Armas, era evidente, mas ele próprio passou a ser cultuado quando suas criações se mostraram incomparáveis, superando tudo que os anões conheciam. Goharom poderia ter se tornado grão-mestre da Guilda dos Armeiros ou até mesmo rei, se quisesse. Contudo, essa nunca foi sua ambição. Após transcender a mortalidade, deixou Doherimm para espalhar a paixão pelos machados por toda Arton.
    </p>

    <p>
      Goharom tinha uma ligação profunda com as armas que governava. Ao se concentrar, conseguia sentir e até visualizar qualquer criatura que empunhava um machado em Arton. Ele acreditava que o machado é uma arma essencialmente anã e seu uso propaga a cultura e estilo de vida dos anões. Isso se devia, em parte, à natureza do machado: uma arma que nunca é embainhada, está sempre pronta para ser usada. Contudo, nem mesmo seu poderoso machado pode protegê-lo da Tormenta, tendo seu fim nas mãos da tempestade rubra em 1405, na Batalha de Tamu-ra.
    </p>

    <p><b>Crenças e Objetivos.</b> Forjar e usar os melhores machados. Honrar e proteger a raça, a cultura e as tradições anãs. Admirar machados como obras de arte, mas respeitá-los e usá-los como as ferramentas de trabalho ou guerra que são.</p>

    <p><b>Símbolo Sagrado.</b> Um machado.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Machado anão.</p>

    <p><b>Devotos.</b> Anões, galokk, trogs, bárbaros, caçadores, cavaleiros, guerreiros, inventores.</p>

    <p>
      <b>Obrigações & Restrições.</b> As únicas armas empunhadas que o devoto de Goharom pode usar são machados. Além disso, para atacar com outras armas (como naturais), ele deve fazer ao menos um ataque com machado na rodada.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Anões', 'Galokk', 'Trogs', 'Bárbaros', 'Caçadores', 'Cavaleiros', 'Guerreiros', 'Inventores'],
      },
      {
        id: 987,
        nome: 'Granto',
        tipo: 'Menor',
        dominios: ['Escultores'],
        natureza: 'Mortal Ascendido',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_granto.png',
        paginas: '',
        armaPreferida: 'Martelo leve',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Granto era um anão robusto e entroncado, cuja presença impunha respeito e admiração. Sua figura era uma verdadeira representação da força e resiliência da raça anã, com músculos visíveis sob a pele áspera e firme. Sua barba era longa e espessa, de um cinza profundo, cuidadosamente moldada em formas minuciosas que narravam a grandiosa história de seu povo. Cada mecha carregava símbolos e figuras que representavam feitos heroicos, batalhas épicas e lendas passadas, desde os primeiros dias de sua civilização até os eventos mais recentes que marcaram sua história.
    </p>

    <p>
      As cicatrizes que atravessavam seu corpo tinham um caráter especial, pois, observadas mais de perto, revelavam formas surpreendentemente belas, como se cada uma fosse testemunho da resistência e coragem que o anão acumulou ao longo da vida. Granto, embora fosse um anão (e não um golem ou outro construto), era uma escultura viva, mais estátua do que gente.
    </p>

    <p>
      Tudo que Granto tocava tinha o potencial de assumir uma forma bela, incluindo o que golpeava com seu estonteante martelo, fosse um objeto ou uma criatura. Até mesmo rachaduras em superfícies que ele martelava adquiriam formas artísticas. Mas, verdadeiro ao espírito anão de praticidade e utilitarismo, tudo que Granto fazia também tinha um propósito. Quando fez parte do Exército de Deuses de Orion Drake, Granto propôs construir uma imensa ponte do continente até Tamu-ra, para que não precisassem usar navios. E, quando esse plano foi rejeitado, Granto esculpiu os acrostólios que o general requisitou para adornar as proas das naus.
    </p>

    <p>
      Granto foi morto pelas forças lefeu durante a Batalha de Tamu-ra. No entanto, muitas de suas obras continuam adornando os salões de Doherimm, além de vários lugares da superfície.
    </p>

    <p><b>Crenças e Objetivos.</b> Esculpir as mais belas obras de arte. Valorizar e pregar a importância do trabalho duro. Honrar e proteger a cultura e as tradições dos escultores. Unir estética e função.</p>

    <p><b>Símbolo Sagrado.</b> Um cinzel e um martelo.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Martelo leve (Heróis de Arton, p. 221).</p>

    <p><b>Devotos.</b> Anões, golens, kliren, qareen, bárbaros, cavaleiros, guerreiros, inventores, lutadores, nobres.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Granto devem fabricar ou consertar uma escultura (um item não consumível simples com preço de T$ 150 por patamar) pelo menos uma vez por aventura.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Anões',
          'Golens',
          'Kliren',
          'Qareen',
          'Bárbaros',
          'Cavaleiros',
          'Guerreiros',
          'Inventores',
          'Lutadores',
          'Nobres',
        ],
      },
      {
        id: 986,
        nome: 'Gratissa',
        tipo: 'Menor',
        dominios: ['Hospitalidade'],
        natureza: 'Mortal Ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deusa_gratissa.png',
        paginas: '',
        armaPreferida: 'Nenhuma',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Outrora humana, Gratissa foi elevada à divindade por seu empenho em receber bem qualquer um que batesse à sua porta. Sua boa vontade comoveu criminosos, acolheu doentes e evitou conflitos, fazendo de sua imagem um símbolo de paz e aliança. A virtude, venerada por milhares de fiéis, rendeu-lhe a imortalidade.
    </p>

    <p>
      A história de Gratissa se confunde com a própria tradição da hospitalidade no Reinado. Alguns historiadores afirmam que, enquanto mortal, Gratissa foi a maior defensora dessa tradição. Sua família descendia de muitos povos nativos de Arton Norte e da Caravana dos Exilados. Assim, foram capazes de notar que essa tradição estava presente em diversas culturas, sendo algo inerente aos costumes humanos. Gratissa teria sido o produto de gerações de educação voltada à hospitalidade.
    </p>

    <p>
      Outros, contudo, afirmam que Gratissa deu origem a essa tradição! Ao receber as comitivas de dois lordes inimigos em sua casa durante uma tempestade, a anfitriã obrigou-os (com educação, simplicidade e palavras duras) a deixar de lado suas desavenças enquanto estivessem sob seu teto. O costume ancestral teria se espalhado a partir daí.
    </p>

    <p>
      Atualmente, a deusa menor perambula pelo mundo ensinando sobre hospitalidade. Imagens suas podem ser encontradas na entrada de estalagens e residências, um culto ao bom anfitrião. Além disso, viajantes, aventureiros e caravaneiros também aprendem e utilizam as práticas do bom anfitrião mesmo em acampamentos.
    </p>

    <p>
      Assim, não é incomum encontrar na estrada grupos muito hospitaleiros e dispostos a oferecer um lugar em suas fogueiras. Na verdade, os devotos de Gratissa afirmam que, no instante em que um grupo de viajantes qualquer prepara uma fogueira e ergue tendas, tem obrigação de acolher qualquer um que peça por sua hospitalidade. Da mesma forma, o acampamento deve ser considerado sua casa e respeitado. A tradição da hospitalidade deve ser preservada, e aqueles que a contrariam não passam de selvagens.
    </p>

    <p>
      Entre as muitas aparências que Gratissa adota, a que mais se destaca é a de uma mulher humana com vestes aconchegantes, olhar convidativo e palavras que acalmam a mente e o coração. Sua chegada em qualquer local é capaz de apaziguar os ânimos e promover convivência pacífica, pelo menos enquanto dois ou mais lados em conflito estiverem sob o mesmo teto.
    </p>

    <p><b>Crenças e Objetivos.</b> Servir bem a todos os que buscam descanso. Pregar o cuidado. Acolher outros da melhor maneira possível. Praticar e ensinar a tradição da hospitalidade.</p>

    <p><b>Símbolo Sagrado.</b> Uma lareira.</p>

    <p><b>Canalizar Energia.</b> Positiva.</p>

    <p><b>Arma Preferida.</b> Não há. Devotos desta deusa não podem lançar a magia Arma Espiritual e similares.</p>

    <p><b>Devotos.</b> Anões, centauros, elfos, hynne, minotauros, qareen, bardos, bucaneiros, caçadores, druidas, nobres, paladino.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Gratissa não podem causar dano, perda de PV e condições (exceto enfeitiçado, fascinado e pasmo) a criaturas inteligentes (Int –3 ou maior) que estejam convivendo, hospedadas ou sendo recebidas no mesmo local (como fregueses em uma taverna ou membros de uma caravana), nem podem fornecer bônus em dano contra essas criaturas. Além disso, não podem recusar hospitalidade a ninguém.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: [
          'Anões',
          'Centauros',
          'Elfos',
          'Hynne',
          'Minotauros',
          'Qareen',
          'Bardos',
          'Bucaneiros',
          'Caçadores',
          'Druidas',
          'Nobres',
          'Paladino',
        ],
      },
      {
        id: 985,
        nome: 'Hippion',
        tipo: 'Menor',
        dominios: ['Cavalos'],
        natureza: 'Mortal Ascendido',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_hippion.png',
        paginas: '',
        armaPreferida: 'Lança',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Hippion é um dos poucos deuses menores cultuados como divindade principal de uma nação inteira no Reinado. Em Namalkah, ele é mais venerado até mesmo que Allihanna e Valkaria. Quando os primeiros colonos vindos do continente sul chegaram ao reino, seu contato com o povo nativo foi relativamente pacífico — daí surgiu boa parte da cultura de tropeiros e do nomadismo de Namalkah, inspirada nos centauros. E os povos nativos dessa região já cultuavam o senhor de todos os cavalos, chamado Hippion.
    </p>

    <p>
      A origem do culto a Hippion se perde no tempo; ninguém sabe quando ele começou a ser cultuado, apenas que sua religião (o “culto hippionte”) sempre fez parte da cultura local. Hippion era venerado pelos centauros (e por cavalos inteligentes) antes que o primeiro humano pisasse nas terras que viriam a ser Namalkah. Diz a tradição que Hippion era um cavalo imortal mesmo antes de se tornar um deus, tendo servido como montaria ou líder para incontáveis heróis ao longo da história dos povos das coxilhas.
    </p>

    <p>
      Quando a Caravana dos Exilados chegou a Arton Norte, um dos primeiros povos a fazer contato pacífico com os refugiados foram as Amazonas de Hippion, durante uma peregrinação periódica para a estátua de Valkaria. A rainha amazona se casou com o líder da caravana, consolidando uma tradição de ajuda mútua que perdura até hoje. Assim, Hippion tornou-se um dos deuses menores mais influentes da história do mundo conhecido.
    </p>

    <p>
      A devoção a Hippion nunca diminuiu em Namalkah — com a integração de povos nativos e exilados de Lamnor, apenas aumentou. Ginetes e tropeiros o consideram sua principal divindade. Como é costume em Namalkah, muitos o chamam por apelidos grosseiros porém afetuosos (“o bagual eterno”). Diz-se que Hippion frequentemente galopa incógnito, deixando-se montar apenas pelos maiores heróis — sempre em pelo, nunca aceitando sela.
    </p>

    <p>
      Contudo, sua presença pode ser reconhecida: ele é seguido por um enorme bando de corcéis, e outros cavalos parecem potros perto dele. Seu pelo é castanho e branco, sua crina é longa e revolta, e ele é capaz de falar. Hippion encarna tudo o que os cavalos são: força, velocidade, selvageria e lealdade. Acredita que cada um deve cumprir seu papel: o cavalo deve ser montado e carregar, o cavaleiro deve montar e lutar.
    </p>

    <p><b>Crenças e Objetivos.</b> Reverenciar Hippion e respeitar os cavalos. Defender o vínculo e promover a harmonia entre montarias e ginetes. Combater monstros, mortos-vivos e criaturas que perturbem o equilíbrio natural. Galopar.</p>

    <p><b>Símbolo Sagrado.</b> Um cavalo galopando.</p>

    <p><b>Canalizar Energia.</b> Positiva.</p>

    <p><b>Arma Preferida.</b> Lança.</p>

    <p><b>Devotos.</b> Aggelus, centauros, eiradaan, bárbaros, caçadores, cavaleiros, druidas, guerreiros, nobres, treinadores, paladino.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Hippion jamais podem matar cavalos, nem mesmo variantes monstruosas (como cavalos glaciais). Também não podem permitir que cavalos sejam assassinados ou maltratados. Além disso, nunca podem usar selas ou equipamentos de montaria enquanto estiverem montados.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: [
          'Aggelus',
          'Centauros',
          'Eiradaan',
          'Bárbaros',
          'Caçadores',
          'Cavaleiros',
          'Druidas',
          'Guerreiros',
          'Nobres',
          'Treinadores',
          'Paladino',
        ],
      },
      {
        id: 984,
        nome: 'Hurlaagh',
        tipo: 'Menor',
        dominios: ['Hobgoblins'],
        natureza: 'Entidade Primordial',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_hurlaagh.png',
        paginas: '',
        armaPreferida: 'Espada longa',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Hurlaagh é um hobgoblin imponente, com presença nobre e sempre trajado com vestes militares. Representa o auge da cultura marcial hobgoblin, uma tradição que ele próprio ajudou a moldar desde eras imemoriais. Ninguém conhece sua verdadeira origem, mas Hurlaagh fazia parte de um trio de entidades irmãs ligadas à guerra, ao conflito e à brutalidade — deuses menores antes mesmo de existirem mortais para cultuá-los. Seus irmãos eram Ragnar, que ascenderia a Deus da Morte, e Graolak. Cada um criou uma raça que refletia seus valores: Ragnar criou os bugbears, Graolak fez os goblins e Hurlaagh forjou os hobgoblins.
    </p>

    <p>
      Enquanto muitas raças do norte durante eras trataram os hobgoblins como meros monstros, a verdade é que eles são muito mais antigos que a humanidade — por dezenas de milhares de anos. Talvez tenham sido a primeira raça de Lamnor a estabelecer fronteiras e reivindicar territórios como seus. Sob a influência de Hurlaagh, os hobgoblins enxergavam a si próprios como conquistadores naturais, donos legítimos de vastas regiões do continente.
    </p>

    <p>
      O culto a Hurlaagh cresceu enormemente com a chegada dos elfos a Lamnor e o início da Infinita Guerra, unindo seu povo contra um inimigo comum. Contudo, sua influência declinou quando Ragnar ascendeu a deus maior, tornando-se a divindade principal dos povos goblinoides. Hurlaagh aliou-se então a um grupo de deuses menores que buscava derrubar Thwor para colocar um novo deus dos goblinoides em seu lugar. Há rumores de que seus cultistas infiltraram-se no exército de Thwor antes da queda de Khalifor, mas foram detidos por Gaardalok, sumo-sacerdote de Ragnar.
    </p>

    <p>
      Com a queda da Flecha de Fogo, todos os planos de Hurlaagh ruíram. Não se sabe se sua aliança de deuses menores ainda existe ou se desistiu de tentar destronar Thwor. Hoje, embora ainda adorado por algumas comunidades hobgoblins ao sul de Arton, Hurlaagh raramente lidera tropas ou campanhas militares. O Deus dos Hobgoblins se tornou uma figura distante das batalhas que outrora definiram sua existência.
    </p>

    <p><b>Crenças e Objetivos.</b> Promover guerra e conflito. Vencer a qualquer custo, seja por força ou estratégia. Jamais oferecer ou aceitar rendição. Jamais demonstrar fraqueza. Proteger a cultura e o modo de vida hobgoblin a qualquer custo.</p>

    <p><b>Símbolo Sagrado.</b> Tambor de guerra hobgoblin.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Espada longa.</p>

    <p><b>Devotos.</b> Goblins, hobgoblins, minotauros, orcs, bárbaros, caçadores, cavaleiros, guerreiros.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Hurlaagh jamais podem desobedecer a ordens de um superior — seja um devoto de Hurlaagh de nível mais alto ou um hobgoblin de patente militar superior. Além disso, devem combater “o Mundo Como Deve Ser”, o ideal de ordem e supremacia goblinoide proposto por Thwor.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Negativa',
        devotos: ['Goblins', 'Hobgoblins', 'Minotauros', 'Orcs', 'Bárbaros', 'Caçadores', 'Cavaleiros', 'Guerreiros'],
      },
      {
        id: 983,
        nome: 'Hydora',
        tipo: 'Dragão-Rei',
        dominios: ['Nuvens', 'Tempestades', 'Dragões-Reais'],
        natureza: 'Dragão-Real',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_hydora.png',
        paginas: '',
        armaPreferida: 'Cimitarra',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Hydora, o Dragão-Rei das Nuvens, é a própria encarnação das tempestades. Um dos mais poderosos Dragões-Reais de Arton, rivaliza com Benthos e só é superado por Tarso e Sckhar. Um ser marcial, volátil e imprevisível, Hydora muda de humor tão rápido quanto um relâmpago — prometendo algo pela manhã e negando ao anoitecer. Suas alianças mudam como o vento; suas palavras, como dizem em Arton, são tão sólidas quanto uma bolha de sabão.
    </p>

    <p>
      Há eras especula-se que Hydora tenha transcendendido a necessidade de tocar o solo. O Dragão-Rei voa quase sem cessar, sem descanso, alimento ou sono. Ele se deleita em tempestades elétricas, cortando nuvens carregadas como quem saboreia a brisa da manhã. Onde há trovoadas, diz-se, Hydora vigia do alto.
    </p>

    <p>
      Da união instável entre o dragão e uma heroína élfica surgiram os <i>naidora</i>, também chamados elfos-do-céu. Algumas versões dizem que Hydora raptou a elfa; outras, que foi amor verdadeiro. Conhecendo sua inconstância, talvez as duas histórias sejam verdade. Sua forma humanoide lembra um naidora de asas magníficas que mudam com seu humor, pele clara e longos cabelos azul-tempestade. Em forma dracônica, possui corpo serpentino, asas que misturam morcego e pássaro, e uma coroa de penas formando algo como uma juba. Seus olhos são de tons diferentes de azul.
    </p>

    <p><b>Crenças e Objetivos.</b> Reverenciar a altivez de Hydora. Honrar os céus, o vento e a liberdade. Jamais permanecer preso ao chão. Agir segundo os próprios instintos. Ser inconstante, criativo e avesso ao conformismo. Promover o progresso e a inventividade.</p>

    <p><b>Símbolo Sagrado.</b> Uma nuvem negra em forma de asa, cuspindo três raios.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Cimitarra.</p>

    <p><b>Devotos.</b> Elfos, kallyanach, kliren, naidoras, qareen, sílfides, suraggel, tengu, arcanistas, bardos, caçadores, cavaleiros, guerreiros, inventores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Hydora devem manter-se inquietos como o vento, proibidos de passar mais de um dia inteiro com os pés no chão — escalar uma montanha ou voar por uma única rodada já satisfaz o Dragão-Rei. Também não podem fixar moradia em locais baixos ou profundos; sua casa deve estar mais próxima dos céus do que da terra.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Elfos',
          'Kallyanach',
          'Kliren',
          'Naidoras',
          'Qareen',
          'Sílfides',
          'Suraggel',
          'Tengu',
          'Arcanistas',
          'Bardos',
          'Caçadores',
          'Cavaleiros',
          'Guerreiros',
          'Inventores',
        ],
      },
      {
        id: 982,
        nome: 'Inghlblhpholstgt',
        tipo: 'Grande Divindade Anfíbia',
        dominios: ['Pântanos', 'Anfíbios', 'Transformação'],
        natureza: 'Entidade primordial',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_inghlblhpholstgt.png',
        paginas: '',
        armaPreferida: 'Lança',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Inghlblhpholstgt — um nome impronunciável para quase todos os mortais — é cultuado principalmente pelos tabrachi, que o chamam de Grande Deus Sapo. Antigos murais o retratam como o primeiro ser marinho a pisar em terra firme, uma criatura ancestral que teria atendido ao chamado de Allihanna para abandonar as profundezas oceânicas e migrar para o continente. Outras tradições afirmam que ele é uma cria de Megalokk, o Deus dos Monstros; há até relatos sugerindo que sua semente veio do éter divino, precedendo a própria vida em Arton.
    </p>

    <p>
      Seu templo mais famoso fica no Pântano dos Juncos, em Deheon. Ele é guardado por um <i>catoblepas sagrado</i>, uma criatura capaz de transformar qualquer ser em um batráquio apenas com o olhar. Diz-se que essa bênção-amaldiçoada é responsável pelo contínuo aumento da população tabrachi na região desde os primórdios.
    </p>

    <p>
      As intenções de Inghlblhpholstgt são desconhecidas. Há uma antiga profecia que fala de uma inundação mundial que transformará Arton inteiro em pântanos — mas, como seu culto é desorganizado e carece de registros, isso pode não passar de superstição. Ainda assim, locais de culto espalhados pelo continente sugerem que seu domínio remonta a uma era em que pântanos dominavam o mundo e libélulas gigantes voavam pelos céus. Talvez a Grande Divindade Anfíbia busque restaurar esse passado perdido… ou apenas espalhar sua bênção pelo mundo.
    </p>

    <p><b>Crenças e Objetivos.</b> Reverenciar Inghlblhpholstgt. Proteger o povo-sapo e todos os anfíbios. Pregar a transformação do mundo em um imenso pântano. Trabalhar para a chegada do grande dilúvio profetizado.</p>

    <p><b>Símbolo Sagrado.</b> Um sapo sobre uma pirâmide.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Lança.</p>

    <p><b>Devotos.</b> Dahllan, goblins, lefou, sereias/tritões, tabrachi, trogs, arcanistas, bárbaros, caçadores, druidas, ladinos, treinadores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos da Grande Divindade Anfíbia devem converter pelo menos um novo devoto por mês. Além disso, devem proteger e ajudar criaturas anfíbias sempre que possível, desde que isso não prejudique seus aliados.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Dahllan',
          'Goblins',
          'Lefou',
          'Sereias/Tritões',
          'Tabrachi',
          'Trogs',
          'Arcanistas',
          'Bárbaros',
          'Caçadores',
          'Druidas',
          'Ladinos',
          'Treinadores',
        ],
      },
      {
        id: 981,
        nome: 'Irione',
        tipo: 'Deus da Sedução',
        dominios: ['Sedução', 'Desejo', 'Manipulação'],
        natureza: 'Mortal ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_irione.png',
        paginas: '',
        armaPreferida: 'Chicote',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Irione é um duplo que elevou suas habilidades a tal extremo que alcançou a divindade. Como todas as criaturas de sua espécie, ele nasceu capaz de assumir qualquer forma — mas logo percebeu que seu verdadeiro poder estava na sedução. Irione descobriu o êxtase de ser desejado, de ver homens e mulheres disputando sua atenção, e isso se tornou um vício. Para ele, a única evolução possível era tornar-se uma entidade digna de adoração.
    </p>

    <p>
      Sua habilidade mais marcante é a metamorfose psíquica. Irione não altera seu corpo fisicamente; ele altera a percepção da vítima. Assim, cada pessoa que o vê enxerga a figura que mais a seduz. Para alguns, é um amor perdido; para outros, um ideal irresistível. Orion Drake, por exemplo, via Irione como sua esposa Vanessa.
    </p>

    <p>
      Outra característica do deus é sua inacessibilidade quase mítica. Seus devotos e admiradores sentem a compulsão de ir ao seu encontro, mas ele permanece sempre um passo além — na próxima porta, na próxima esquina, no próximo suspiro. No entanto, Irione é obcecado por atenção. Ignorá-lo é a única maneira de obrigá-lo a agir em favor de alguém, pois a indiferença fere seu orgulho divino.
    </p>

    <p><b>Crenças e Objetivos.</b> Tornar-se objeto de desejo. Inspirar suspiros, favores e devoção. Manipular pela sedução. Permanecer inalcançável para que todos o sigam.</p>

    <p><b>Símbolo Sagrado.</b> Uma marca de beijo.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Chicote.</p>

    <p><b>Devotos.</b> Elfos, harpias, medusas, nagahs, naidoras, sereias/tritões, sílfides, suraggel, arcanistas, bardos, bucaneiros, ladinos, lutadores, nobres.</p>

    <p>
      <b>Obrigações & Restrições.</b> Um devoto de Irione deve, ao menos uma vez por aventura (ou mês, o que demorar menos), transformar um NPC originalmente indiferente em alguém prestativo — e, após isso, tornar-se objeto de sua admiração e adoração.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Elfos',
          'Harpias',
          'Medusas',
          'Nagahs',
          'Naidoras',
          'Sereias/Tritões',
          'Sílfides',
          'Suraggel',
          'Arcanistas',
          'Bardos',
          'Bucaneiros',
          'Ladinos',
          'Lutadores',
          'Nobres',
        ],
      },
      {
        id: 980,
        nome: 'Jandra',
        tipo: 'Deusa das Boas Maneiras',
        dominios: ['Etiqueta', 'Comedimento', 'Civilidade'],
        natureza: 'Mortal ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_jandra.png',
        paginas: '',
        armaPreferida: 'Adaga',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Jandra é a epítome da elegância. Sempre usando penteados altos e vestidos requintados, adornados por joias discretas, ela irradia sofisticação, autocontrole e refinamento. Sua presença é tão impecável que poucos imaginariam que, em vida, ela foi apenas uma governanta dedicada.
    </p>

    <p>
      Quando mortal, Jandra ensinava jovens nobres, criados e até plebeus sobre comportamento adequado diante dos poderosos. Suas regras de etiqueta — muitas vezes vistas como arbitrárias — quase sempre tinham propósitos práticos: identificar comida estragada, impedir que armas fossem introduzidas em eventos sociais, evitar a ativação de maldições e garantir segurança em reuniões importantes.
    </p>

    <p>
      Após anos trabalhando em uma única mansão no antigo condado de Portsmouth, ela decidiu viajar pelo Reinado, disseminando seus ensinamentos. Sua influência preveniu inúmeros conflitos, pois ao seguir normas de etiqueta, as pessoas sentiam estar honrando o evento, os presentes… e a própria Jandra. Esse componente ritualístico e simbólico acabou transformando sua figura em algo sagrado.
    </p>

    <p>
      Com o tempo, sua fama se tornou devoção — e a devoção tornou-se divindade. Hoje, Jandra percorre Arton como convidada de honra em bailes e jantares formais, especialmente onde grandes decisões políticas e sociais serão tomadas. Cada gesto seu é um lembrete de que boas maneiras são mais que etiqueta: são respeito, civilidade e cuidado com o coletivo.
    </p>

    <p><b>Crenças e Objetivos.</b> Ensinar etiqueta, julgar boas maneiras, educar futuros aristocratas, treinar servos a agir com discrição e elegância, tratar cada convidado como o mais importante do evento.</p>

    <p><b>Símbolo Sagrado.</b> Uma xícara.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Adaga.</p>

    <p><b>Devotos.</b> Aggelus, anões, elfos, golens, hynne, minotauros, bardos, cavaleiros, nobres.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Jandra nunca deixam de fazer testes de Diplomacia ou Nobreza quando apropriado. Além disso, não suportam grosseria: ao presenciarem alguém falhar em Diplomacia ou Nobreza, devem corrigi-lo com elegância — passando no mesmo teste e explicando discretamente o erro.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: ['Aggelus', 'Anões', 'Elfos', 'Golens', 'Hynne', 'Minotauros', 'Bardos', 'Cavaleiros', 'Nobres'],
      },
      {
        id: 979,
        nome: 'Klangor',
        tipo: 'Deus das Armaduras',
        dominios: ['Armaduras', 'Forja', 'Proteção'],
        natureza: 'Mortal ascendido',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_klangor.png',
        paginas: '',
        armaPreferida: 'Martelo de guerra',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Klangor é uma das figuras mais respeitadas entre as divindades anãs, símbolo máximo de resistência e resiliência. Seu corpo é protegido por uma couraça formada de pedra e metal — uma verdadeira armadura viva. Ninguém sabe ao certo se essa couraça foi forjada por ele mesmo ou se faz parte de sua essência divina.
    </p>

    <p>
      Nos primórdios de Doherimm, Klangor foi um dos primeiros membros da Guilda dos Armeiros, responsável por inovações que moldaram a tradição anã de fabricação de armaduras. Com o tempo, suas técnicas atingiram um nível tão elevado que se tornaram impossíveis de replicar ou ensinar. Suas armaduras eram mais fortes que aço e mais leves que seda. A maestria extrema levou-o a ser cultuado em vida, até ascender à divindade.
    </p>

    <p>
      Klangor esteve presente na Batalha de Tamu-ra em 1405, quando o exército de deuses menores enfrentou a Tormenta. Foi um dos poucos a sobreviver ao massacre e aos horrores indescritíveis do combate. Mesmo traumatizado, ergueu-se das cinzas com um novo propósito.
    </p>

    <p>
      Desde então, Klangor dedica-se a forjar armaduras metafísicas e obras-primas únicas para guerreiros que enfrentam as trevas de Arton. Pode ser encontrado tanto nas profundezas anãs quanto na superfície, sempre moldando novas proteções e preservando a tradição de sua raça.
    </p>

    <p><b>Crenças e Objetivos.</b> Forjar armaduras perfeitas. Proteger guerreiros. Honrar a cultura anã. Preservar as tradições da forja.</p>

    <p><b>Símbolo Sagrado.</b> Um elmo anão.</p>

    <p><b>Canalizar Energia.</b> Positiva.</p>

    <p><b>Arma Preferida.</b> Martelo de guerra.</p>

    <p><b>Devotos.</b> Aggelus, anões, cavaleiros, guerreiros, inventores, paladino.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Klangor devem dedicar pelo menos uma hora diária a limpar, polir, consertar ou treinar vestindo uma armadura. Além disso, devem fabricar ao menos uma armadura por aventura.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: ['Aggelus', 'Anões', 'Cavaleiros', 'Guerreiros', 'Inventores', 'Paladino'],
      },
      {
        id: 978,
        nome: 'Kurur Lianth',
        tipo: 'Deus Vulcão de Khubar',
        dominios: ['Fogo', 'Destruição', 'Renovação'],
        natureza: 'Objeto desperto',
        status: '1',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_kurur_lianth.png',
        paginas: '',
        armaPreferida: 'Lança',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Kurur Lianth é o maior e mais temido vulcão ativo de Khubar, localizado na ilha de Hurtka, a mais próxima da costa de Bielefeld. Considerado uma força viva e consciente, o “Velho Furioso” desperta em ciclos violentos de uma semana ou mais de erupções intensas, seguidos por meses de repouso inquieto.
    </p>

    <p>
      Segundo antigas lendas, a única maneira de acalmar sua fúria é através de um sacrifício humanoide <i>voluntário</i>, ofertado no instante em que o vulcão desperta. Caso isso não seja feito, Kurur Lianth tomará ele mesmo as vidas necessárias. Há histórias dizendo que, dentro do vulcão, jaz aprisionado um deus menor do fogo derrotado por Thyatis; outras afirmam que a cratera é a boca de um colossal dragão flamejante, preso no interior da terra.
    </p>

    <p>
      Com séculos de reverência, temor e sacrifícios, Kurur Lianth ascendeu à condição de deus menor. Para seus devotos, ele não é apenas destruição — é também proteção. Acreditam que sua fúria mantém à distância um grande mal profetizado que um dia surgirá em Khubar.
    </p>

    <p><b>Crenças e Objetivos.</b> Cultuar o Velho Furioso. Proteger o povo de Hurtka e de todo o arquipélago. Pregar a renovação trazida pelo vulcão e a proteção contra o mal previsto nas profecias antigas.</p>

    <p><b>Símbolo Sagrado.</b> Um vulcão em erupção.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Lança.</p>

    <p><b>Devotos.</b> Qareen, suraggel, trogs, bárbaros, bardos, druidas, guerreiros, lutadores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Kurur Lianth devem reunir-se com seu deus uma vez por ano para sacrificar um humanoide voluntário. Na ausência de um voluntário, o devoto mais velho deve oferecer-se de imediato. Caso se recuse, perde imediatamente sua condição de devoto e o dever passa ao próximo mais velho.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Negativa',
        devotos: ['Qareen', 'Suraggel', 'Trogs', 'Bárbaros', 'Bardos', 'Druidas', 'Guerreiros', 'Lutadores'],
      },
      {
        id: 977,
        nome: 'Laan',
        tipo: 'Deus das Viagens',
        dominios: ['Viagens', 'Movimento', 'Comunicação'],
        natureza: 'Entidade primordial',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_laan.png',
        paginas: '',
        armaPreferida: 'Bordão',
        aceitaPaladinos: true,
        descricao: `
    <p>
      Talvez o mais antigo dos deuses menores, Laan é tão ancestral que muitos acreditam que ele simplesmente <i>sempre esteve lá</i>. Alguns teólogos supõem que tenha surgido quando as primeiras criaturas deixaram os oceanos, respondendo ao chamado de Allihanna — um impulso de movimento tão intenso que teria dado origem ao próprio deus das viagens.
    </p>

    <p>
      Inquieto, curioso e perpetuamente em movimento, Laan governa não apenas as viagens, mas todos os viajantes e o próprio conceito de deslocamento. Sua influência se estende também à comunicação, mensageiros, e até às jornadas espirituais, como a passagem das almas aos reinos divinos após a morte.
    </p>

    <p>
      O deus possui a fascinante capacidade de criar uma "estrada reta": um caminho impossível, que ignora obstáculos físicos e permite atravessar grandes distâncias sem paradas. É descrito como um homem alto, forte, de risada estrondosa, vestindo uma toga simples, uma tiara dourada e andando sempre descalço.
    </p>

    <p><b>Crenças e Objetivos.</b> Viajar. Estar sempre em movimento. Explorar locais novos. Conectar pessoas e lugares. Transportar mensagens, objetos e indivíduos até onde são necessários.</p>

    <p><b>Símbolo Sagrado.</b> Uma estrada que some no horizonte.</p>

    <p><b>Canalizar Energia.</b> Positiva.</p>

    <p><b>Arma Preferida.</b> Bordão.</p>

    <p><b>Devotos.</b> Goblins, golens, kliren, lefou, naidoras, bardos, bucaneiros, caçadores, guerreiros, paladino.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Laan são proibidos de fixar moradia. Não podem permanecer mais de <i>1d10 + 10 dias</i> na mesma cidade, vila ou povoado, ou mais de <i>1d4 + 1 meses</i> no mesmo reino.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Positiva',
        devotos: [
          'Goblins',
          'Golens',
          'Kliren',
          'Lefou',
          'Naidoras',
          'Bardos',
          'Bucaneiros',
          'Caçadores',
          'Guerreiros',
          'Paladino',
        ],
      },
      {
        id: 976,
        nome: 'Lamashtu',
        tipo: 'Deusa da Matança',
        dominios: ['Morte', 'Mal', 'Destruição'],
        natureza: 'Entidade primordial',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_lamashtu.png',
        paginas: '',
        armaPreferida: 'Cimitarra',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Uma das divindades mais temidas entre todos os reinos divinos, Lamashtu é chamada de muitos nomes terríveis: <i>Deusa da Matança</i>, <i>Senhora do Genocídio</i>, <i>Rainha dos Massacres</i>. É venerada por cultos secretos e sociedades sanguinárias, sempre ocultas entre becos, ruínas e fortalezas esquecidas.
    </p>

    <p>
      Os relatos a descrevem como uma belíssima mulher-serpente de seis braços, cada mão empunhando uma arma letal. Lamashtu é a pura personificação da morte e da brutalidade. Seus cultistas — alguns dos vilões mais odiados de Arton — realizam rituais profanos e oferecem vítimas vivas, buscando atrair a atenção de sua cruel patrona.
    </p>

    <p>
      A Deusa comanda legiões de demônios em Werra, o Reino de Arsenal, onde a guerra nunca cessa. Quando avança para a batalha, sua fúria é tão avassaladora que até mesmo entidades divinas hesitam em cruzar seu caminho.
    </p>

    <p>
      Embora adore sacrifícios sangrentos, Lamashtu possui uma fraqueza curiosa: belas joias. Aventureiros costumam se gabar dizendo “<i>posso até roubar o tesouro de Lamashtu</i>”, embora poucos ousariam tentar.
    </p>

    <p><b>Crenças e Objetivos.</b> Praticar violência e matança em nome da Rainha dos Massacres. Não reprimir instintos. Jamais ser controlado. Nunca perdoar. Destruir inimigos sem piedade. Acumular joias e pedras preciosas como oferendas à deusa.</p>

    <p><b>Símbolo Sagrado.</b> Uma joia ensanguentada.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Cimitarra.</p>

    <p><b>Devotos.</b> Medusas, minotauros, osteon, sulfure, trogs, bárbaros, bucaneiros, guerreiros, ladinos, lutadores, nobres.</p>

    <p>
      <b>Obrigações & Restrições.</b> Uma vez por nível, o devoto deve consagrar uma de suas vítimas fatais à Lamashtu. A vítima deve ser uma criatura inteligente (Int –3 ou maior) morta pelo próprio devoto. O ritual exige o corpo presente e o sacrifício de joias equivalentes a 10% da diferença entre o dinheiro inicial do nível atual e o próximo.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: false,
        fundamentalista_druida: '',
        canalizaEnergia: 'Negativa',
        devotos: [
          'Medusas',
          'Minotauros',
          'Osteon',
          'Sulfure',
          'Trogs',
          'Bárbaros',
          'Bucaneiros',
          'Guerreiros',
          'Ladinos',
          'Lutadores',
          'Nobres',
        ],
      },
      {
        id: 975,
        nome: 'Luvithy',
        tipo: 'Deusa da Peste',
        dominios: ['Peste', 'Doenças', 'Decadência'],
        natureza: 'Mortal ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deusa_luvithy.png',
        paginas: '',
        armaPreferida: 'Gadanho',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Luvithy é lembrada nas sombras da história: uma deusa temida, cultuada em regiões isoladas e nas tradições secretas de povos esquecidos. Antes da ascensão divina, foi uma bruxa humana nos tempos antigos de Lamnor, quando seu povo agonizava em guerra constante. Para salvar sua aldeia, lançou uma praga devastadora que exterminou seus inimigos — um ato terrível que inspirou medo profundo. Assim, mesmo sem desejar, Luvithy recebeu devoção suficiente para ascender como a Deusa Menor da Peste.
    </p>

    <p>
      Com o passar dos séculos, seu culto se espalhou silenciosamente por Arton e Lamnor. Famílias desesperadas que temiam perder seus filhos, servos que suplicavam pela sobrevivência de seus senhores moribundos, pessoas aterrorizadas pela fragilidade do corpo — todos, ao implorar piedade à doença, sem saber, reverenciavam Luvithy. Seu culto sempre foi íntimo, doméstico, escondido.
    </p>

    <p>
      A Praga Coral que devastou Lomatubar reacendeu seu nome. Mesmo não sendo responsável pela enfermidade, Luvithy passou a ouvir preces aflitas que imaginavam sua mão por trás do desastre. Com a morte de Ragnar e a ascensão de Thwor, seus devotos vislumbram uma oportunidade: restaurar a glória perdida e reivindicar para ela o título de Deusa da Morte.
    </p>

    <p><b>Crenças e Objetivos.</b> Espalhar doenças. Enfraquecer povos e estruturas sociais. Reviver a antiga glória da deusa entre os temerosos.</p>

    <p><b>Símbolo Sagrado.</b> Um crânio encapuzado.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Gadanho.</p>

    <p><b>Devotos.</b> Dahllan, kobolds, nezumi, orcs, osteon, sulfure, trogs, arcanistas, bárbaros, caçadores, druidas, guerreiros, ladinos.</p>

    <p>
      <b>Obrigações & Restrições.</b> O devoto deve contaminar ao menos uma criatura Pequena ou maior com uma doença por semana. Se não houver alvo disponível, o devoto pode — e deve — contaminar a si mesmo.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Negativa',
        devotos: [
          'Dahllan',
          'Kobolds',
          'Nezumi',
          'Orcs',
          'Osteon',
          'Sulfure',
          'Trogs',
          'Arcanistas',
          'Bárbaros',
          'Caçadores',
          'Druidas',
          'Guerreiros',
          'Ladinos',
        ],
      },
      {
        id: 974,
        nome: 'Marina',
        tipo: 'Deusa dos Marinheiros',
        dominios: ['Marinheiros', 'Viagens Marítimas', 'Aventura'],
        natureza: 'Mortal ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deusa_marina.png',
        paginas: '',
        armaPreferida: 'Florete',
        aceitaPaladinos: false,
        descricao: `
    <p>
      Nenhuma deusa tem tantas histórias de origem quanto Marina — e ela mesma garante que todas são verdade. Para alguns, foi uma sereia apaixonada por um marinheiro; para outros, a maior pirata do Mar Negro. Há quem diga que foi salva por Oceano após ser jogada ao mar, ou que era uma criança criada por peixes em águas mágicas. Há até aqueles que acreditam que a deusa nasceu de um acrostólio adorando por uma tripulação inteira.
    </p>

    <p>
      Marina é a personificação viva das histórias contadas por marinheiros, piratas e pescadores ao longo dos séculos. É a deusa não do mar, mas daqueles que o dominam e o desbravam. Abençoa tanto oficiais honrados quanto bucaneiros temíveis, pois seu domínio é o ato de navegar — e todos que se lançam às ondas são seus protegidos.
    </p>

    <p>
      A deusa é capaz de conjurar navios impossíveis: embarcações velozes, resistentes e majestosas, cuja origem ninguém conhece. Alguns acreditam que ela governa um império subaquático; outros dizem que constrói navios sozinha, ou com carpinteiros fantasmagóricos que aparecem apenas à noite. No comando de uma frota, Marina guia seus seguidores através das piores tempestades, dobrando ventos e ondas a seu favor.
    </p>

    <p>
      Sua devoção se fortaleceu ainda mais após a Tempestade Rubra. Foi nas embarcações de Marina que o exército divino de Orion Drake alcançou a área de Tormenta de Tamu-ra, desempenhando papel essencial na guerra contra a corrupção.
    </p>

    <p><b>Crenças e Objetivos.</b> Desbravar o mar. Desafiar tempestades. Superar limites. Construir, pilotar e manter embarcações. Navegar sempre rumo ao desconhecido.</p>

    <p><b>Símbolo Sagrado.</b> Um redemoinho marinho.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Florete.</p>

    <p><b>Devotos.</b> Elfos, elfos-do-mar, hynne, kappa, minotauros, qareen, sereias/tritões, arcanistas, bárbaros, bucaneiros, caçadores, druidas, ladinos.</p>

    <p>
      <b>Obrigações & Restrições.</b> Cada devoto deve carregar sempre um recipiente hermético com água do mar (0,5 espaço). Além disso, ao menos uma vez por aventura, deve passar uma noite a bordo de uma embarcação em mar aberto.
    </p>
  `,
        fundamentalista_paladino: '',
        aceitaDruidas: true,
        fundamentalista_druida: '',
        canalizaEnergia: 'Qualquer',
        devotos: [
          'Elfos',
          'Elfos-do-Mar',
          'Hynne',
          'Kappa',
          'Minotauros',
          'Qareen',
          'Sereias/Tritões',
          'Arcanistas',
          'Bárbaros',
          'Bucaneiros',
          'Caçadores',
          'Druidas',
          'Ladinos',
        ],
      },
      {
        id: 973,
        nome: 'Mzzileyn',
        tipo: 'Dragão-Rei das Trevas',
        dominios: ['Trevas', 'Sombra', 'Mentira', 'Destruição'],
        natureza: 'Dragão-Real',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/dragao_rei_mzzileyn.png',
        paginas: '',
        armaPreferida: 'Adaga',
        canalizaEnergia: 'Negativa',
        aceitaPaladinos: false,
        aceitaDruidas: false,
        descricao: `
    <p>
      Mzzileyn, o Dragão-Rei das Trevas, é uma das entidades mais cruéis, manipuladoras e devastadoras que Arton já testemunhou. Sua inteligência é tão profunda quanto sua maldade — cada plano envolve outro plano ainda pior, formando teias de intrigas cujo propósito é sempre o mesmo: espalhar sofrimento, destruição e caos.
    </p>

    <p>
      Em eras antigas, Mzzileyn colaborou com servos de Sszzaas, o Deus da Traição, e especulava-se que o próprio Sszzaas o havia criado — teoria que se provou falsa desde o retorno de Kallyadranoch, mas que ainda encontra defensores. Curiosamente, o Dragão-Rei teve um gosto próprio de traição quando seus devotos dragões o abandonaram para seguir o Dragão da Tormenta. Isso apenas reforçou sua filosofia: <i>ninguém é confiável</i>.
    </p>

    <p>
      Desde então, Mzzileyn resolveu trair todos antes que eles possam traí-lo. Mesmo enquanto tenta restaurar seu culto, sacrificaria qualquer seguidor por uma mínima vantagem. Uma das raras demonstrações de coragem do Dragão-Rei foi sua atuação contra os lefeu durante a batalha de Tamu-ra.
    </p>

    <p>
      Diferente dos outros Dragões-Reais, ele quase nunca assume sua forma verdadeira. Prefere assumir aparências humanoides simpáticas e confiáveis — como um mercador, um taverneiro ou um pedinte — mas sempre com cabelos e olhos escuros. Na forma dracônica, é um réptil esguio, de escamas sombrias e rosto semelhante a um crânio exposto, com asas arrancadas e substituídas por apêndices feitos de pura sombra.
    </p>

    <p><b>Crenças e Objetivos.</b> Reverenciar a astúcia de Mzzileyn. Mentir, manipular e trair. Espalhar caos e destruição. Usar qualquer recurso disponível para atingir objetivos próprios. Exaltar sombras e escuridão.</p>

    <p><b>Símbolo Sagrado.</b> O crânio de um dragão vertendo sombras.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Adaga.</p>

    <p><b>Devotos.</b> Finntroll, gnolls, goblins, kallyanach, nagah, tengu, arcanistas, bardos, bucaneiros, ladinos.</p>

    <p>
      <b>Obrigações & Restrições.</b> Sempre que confrontado com um desafio — seja combate, obstáculo complexo ou qualquer cena que exija superação — o devoto deve realizar pelo menos um teste de Enganação que realmente contribua para superar o desafio. Cabe ao mestre decidir se a ação se qualifica.
    </p>
  `,
        devotos: [
          'Finntroll',
          'Gnolls',
          'Goblins',
          'Kallyanach',
          'Nagah',
          'Tengu',
          'Arcanistas',
          'Bardos',
          'Bucaneiros',
          'Ladinos',
        ],
        fundamentalista_paladino: '',
        fundamentalista_druida: '',
      },
      {
        id: 972,
        nome: 'Nerelim',
        tipo: 'Deusa da Água Doce',
        natureza: 'Mortal ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deusa_nerelim.png',
        paginas: '',
        canalizaEnergia: 'Qualquer',
        armaPreferida: 'Arpão',
        aceitaPaladinos: false,
        aceitaDruidas: true,

        descricao: `
    <p>
      Nerelim é uma deusa ancestral, cujo culto floresceu no antigo reino de Callistia, onde sua devoção era tão forte que famílias que não a veneravam sequer eram consideradas respeitáveis na capital. Mesmo após a absorção de Callistia pelas Repúblicas Livres de Sambúrdia, sua fé continuou viva, agora difundida pelos Príncipes Mercantes e navegantes que cruzam as águas da região.
    </p>

    <p>
      A deusa costuma aparecer como uma mulher de longos cabelos trançados, lembrando uma vasta rede de pesca. Filha de Oceano, Nerelim teria ensinado os primeiros habitantes de Callistia a pescar e a sobreviver graças aos inúmeros rios da região. Seus devotos — os nerelitas — pregam o respeito às águas doces, proibindo a poluição, defendendo os ciclos naturais de pesca e garantindo que os rios continuem abundantes.
    </p>

    <p>
      O culto, antes restrito, expandiu-se com a integração de Callistia ao resto do continente. Agora, comerciantes, pescadores e viajantes fluviais reconhecem a importância de sua proteção e buscam sua bênção para cruzar águas calmas ou perigosas.
    </p>

    <p><b>Crenças e Objetivos.</b> Reverenciar e proteger rios e lagos. Preservar as criaturas que habitam as águas doces. Promover harmonia entre o mundo terrestre e o fluvial. Exigir respeito às águas correntes.</p>

    <p><b>Símbolo Sagrado.</b> Um rio cortando a várzea.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Arpão.</p>

    <p><b>Devotos.</b> Elfos, elfos-do-mar, hynne, kappa, minotauros, qareen, sereias/tritões, bárbaros, bucaneiros, caçadores, druidas, treinadores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Nerelim não podem permanecer afastados de um grande corpo de água doce por mais de um mês. Além disso, devem pescar em águas doces ao menos uma vez por semana.
    </p>
  `,

        devotos: [
          'Elfos',
          'Elfos-do-mar',
          'Hynne',
          'Kappa',
          'Minotauros',
          'Qareen',
          'Sereias/Tritões',
          'Bárbaros',
          'Bucaneiros',
          'Caçadores',
          'Druidas',
          'Treinadores',
        ],

        fundamentalista_paladino: '',
        fundamentalista_druida: `
    <p>
      <b>Druidas devotos de Nerelim</b> raramente se afastam de rios e lagoas, servindo como guardiões naturais dos ecossistemas fluviais. Costumam patrulhar margens, curar áreas degradadas e combater qualquer ameaça que polua ou perturbe as águas correntes. Para esses druidas, a água doce é mais que um recurso: é um elo sagrado entre o espírito, o ciclo da vida e a própria Nerelim.
    </p>
  `,
      },

      {
        id: 971,
        nome: 'Neruíte',
        tipo: 'Deusa do Sono',
        natureza: 'Mortal ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deusa_neruite.png',
        paginas: '',
        canalizaEnergia: 'Qualquer',
        armaPreferida: 'Maça',
        aceitaPaladinos: false,
        aceitaDruidas: false,

        descricao: `
    <p>
      Neruíte é uma deusa maternal de voz suave e melodiosa, convidando todos a repousar em um sono
      tranquilo e restaurador. Sua presença serena e acolhedora dissipa preocupações e envolve qualquer
      criatura em conforto e paz. Suas canções de ninar são mágicas, capazes de adormecer até seres colossais
      — e aqueles que caem sob sua melodia não despertam até que tenham obtido um descanso adequado.
    </p>

    <p>
      Seus seguidores acreditam que o sono é um ritual sagrado e que o equilíbrio entre vigília e descanso deve
      ser preservado. Sacerdotes da deusa, conhecidos como “Sonhadores”, dedicam-se a interpretar sonhos,
      compreender pesadelos e curar mentes fatigadas através de rituais e cânticos suaves.
    </p>

    <p>
      A origem de Neruíte é incerta. Histórias antigas falam de uma princesa que dormiu por décadas sem
      envelhecer, sendo velada por seus súditos, que se tornaram seus primeiros devotos. O fim dessa lenda
      jamais é contado — todos que a narram acabam adormecendo antes de completá-la.
    </p>

    <p>
      Templos dedicados a Neruíte são silenciosos, vestidos em tecidos macios, iluminados por velas delicadas
      e perfumados com essências relaxantes. São locais de repouso, cura emocional e renovação espiritual.
    </p>

    <p><b>Crenças e Objetivos.</b> Valorizar o descanso adequado. Ajudar outros a dormir. Proteger o sono alheio. Entender pesadelos. Interpretar sonhos. Buscar harmonia entre vigília e repouso.</p>

    <p><b>Símbolo Sagrado.</b> Uma vela apagada.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Maça.</p>

    <p><b>Devotos.</b> Aggelus, elfos, qareen, sereias/tritões, sílfides, arcanistas, bardos, caçadores, nobres.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos jamais podem acordar alguém intencionalmente, nem permitir que
      outros o façam. Além disso, sempre que acorda, o devoto fica <i>pasmo por 1 rodada</i>, enquanto seu espírito
      desperta lentamente do sono sagrado.
    </p>
  `,

        devotos: [
          'Aggelus',
          'Elfos',
          'Qareen',
          'Sereias/Tritões',
          'Sílfides',
          'Arcanistas',
          'Bardos',
          'Caçadores',
          'Nobres',
        ],

        fundamentalista_paladino: '',

        fundamentalista_druida: `
    <p>
      <b>Druidas devotos de Neruíte</b> são raros e profundamente contemplativos. Praticam rituais de equilíbrio
      entre vigília e descanso, zelam por lugares de paz e sonham como forma de comunhão espiritual. Em seus
      retiros silenciosos, buscam visões por meio de longos estados de descanso meditativo.
    </p>
  `,
      },
      {
        id: 970,
        nome: 'O Deus das Cidades',
        tipo: 'Conceito vivo',
        natureza: 'Conceito vivo',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_das_cidades.png',
        paginas: '',
        canalizaEnergia: 'Qualquer',
        armaPreferida: 'Martelo de guerra',
        aceitaPaladinos: false,
        aceitaDruidas: false,

        descricao: `
    <p>
      Chamado por muitos nomes — Nova Malpetrim, Smokestone, Norm, Roschfallen, Var Raan, Gallien,
      Ghallystryx… até mesmo Valkaria ou Rhond — o Deus das Cidades possui infinitos nomes, pois recebe
      um novo a cada vez que uma comunidade nasce. Ele é a soma de todos os centros urbanos de Arton,
      uma divindade de imenso poder formada pela própria existência coletiva dos povos civilizados.
    </p>

    <p>
      Alguns acreditam que um dia ele foi um mortal, talvez um mendigo viajando entre comunidades. Mas
      a teoria mais aceita afirma que jamais houve um "primeiro indivíduo". O Deus das Cidades teria surgido
      espontaneamente quando a vida urbana floresceu — ou talvez antes disso. Ele é a manifestação viva do
      modo de vida urbano, encarnando tudo o que significa existir dentro de uma cidade.
    </p>

    <p>
      Sua forma física é imensa e desconcertante: um corpo composto de ruas, prédios, telhados e muralhas.
      Ainda assim, não é grande o bastante para conter todas essas estruturas, o que leva alguns estudiosos a
      crer que seu corpo funcione como um portal vivo interligando diversas cidades do mundo. Em combate,
      sua massa colossal rivaliza até com deuses guerreiros, tornando-o um adversário devastador. Seu poder
      cresce sempre que uma comunidade se reúne e prospera — viver em sociedade é, por si só, adoração.
    </p>

    <p>
      Pode ser encontrado em esgotos, passagens subterrâneas ou locais ocultos de grandes metrópoles como
      Valkaria. Outros dizem que ele está presente em todas as cidades simultaneamente. Para encontrá-lo,
      basta procurar.
    </p>

    <p><b>Crenças e Objetivos.</b> Fundar comunidades. Ajudar centros urbanos a prosperar. Estabelecer entrepostos e rotas comerciais. Proteger o modo de vida urbano.</p>

    <p><b>Símbolo Sagrado.</b> Torres amontoadas atrás de um muro.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Martelo de guerra.</p>

    <p><b>Devotos.</b> Anões, elfos, goblins, hynne, kliren, minotauros, arcanistas, bardos, inventores, ladinos, lutadores, nobres.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos jamais podem permanecer afastados de um centro urbano por mais
      de <i>2d10 + 10 dias</i>, nem podem negar auxílio a uma comunidade em necessidade.
    </p>
  `,

        devotos: [
          'Anões',
          'Elfos',
          'Goblins',
          'Hynne',
          'Kliren',
          'Minotauros',
          'Arcanistas',
          'Bardos',
          'Inventores',
          'Ladinos',
          'Lutadores',
          'Nobres',
        ],

        fundamentalista_paladino: '',
        fundamentalista_druida: '',
      },
      {
        id: 969,
        nome: 'O Deus do Medo',
        tipo: 'Conceito vivo',
        natureza: 'Conceito vivo',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_do_medo.png',
        paginas: '',
        canalizaEnergia: 'Negativa',
        armaPreferida: 'Corrente de espinhos',
        aceitaPaladinos: false,
        aceitaDruidas: false,

        descricao: `
    <p>
      Um deus sem nome, cuja presença é sempre sentida, mas jamais vista diretamente — pois tudo é mais
      amedrontador quando não é visto, e mais terrível quando não pode ser nomeado. O Deus do Medo
      está sempre fora do ângulo de visão de um observador, como se permanecesse à margem da percepção,
      nunca totalmente revelado, mas sempre inevitavelmente presente. Ele representa o instinto primitivo
      do medo, uma emoção que permeia todos os seres vivos.
    </p>

    <p>
      Por ser a divindade que personifica esse instinto básico e universal, o Deus do Medo é extremamente
      poderoso. O medo é infinito: governa vida e morte, ação e inação, coragem e desespero. Seus devotos
      são aqueles que enxergam o medo como ferramenta, manipulando-o para subjugar, controlar e influenciar
      outros — seja por estratégias psicológicas, seja em batalhas, chantagens ou intrigas.
    </p>

    <p>
      Ao provocar terror, seus seguidores aumentam o poder de sua divindade. Cada sombra suspeita,
      cada sussurro gelado, cada calafrio inesperado fortalece o Deus sem Nome. Porém, existem também os
      devotos involuntários: todos que vivem tomados pelo medo. Medo da morte, de fracassar, de perder,
      de tentar, até mesmo medo da própria felicidade. Esses indivíduos acabam, sem perceber, cultuando
      o Deus do Medo — e muitos relatam sentir sua presença atrás de si… mas ele nunca está lá quando
      se viram.
    </p>

    <p><b>Crenças e Objetivos.</b> Espalhar medo e terror. Amedrontar inimigos. Semear insegurança em todos os
      lugares. Perturbar crianças. Transformar o medo em um estado permanente.</p>

    <p><b>Símbolo Sagrado.</b> Uma silhueta sombria.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Corrente de espinhos.</p>

    <p><b>Devotos.</b> Bugbears, lefou, minotauros, medusas, osteon, sulfure, trogs, voracis, arcanistas, bárbaros,
      bardos, bucaneiros, guerreiros, ladinos, lutadores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos devem deixar uma criatura sob qualquer efeito de medo pelo menos
      uma vez por dia (ou por sessão de jogo, o que demorar mais) para honrar sua divindade.
    </p>
  `,

        devotos: [
          'Bugbears',
          'Lefou',
          'Minotauros',
          'Medusas',
          'Osteon',
          'Sulfure',
          'Trogs',
          'Voracis',
          'Arcanistas',
          'Bárbaros',
          'Bardos',
          'Bucaneiros',
          'Guerreiros',
          'Ladinos',
          'Lutadores',
        ],

        fundamentalista_paladino: '',
        fundamentalista_druida: '',
      },
      {
        id: 968,
        nome: 'Piscigeros',
        tipo: 'Deus dos Homens-Peixes',
        natureza: 'Conceito vivo',
        status: '1',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_piscigeros.png',
        paginas: '',
        canalizaEnergia: 'Negativa',
        armaPreferida: 'Tridente',
        aceitaPaladinos: false,
        aceitaDruidas: true,

        descricao: `
    <p>
      Também chamado entre os homens-peixes de Pai Peixe, Piscigeros possui uma origem curiosa. Originalmente,
      ele não passava de uma mentira criada pelos thalassothan — criaturas marinhas cruéis, capazes de herdar 
      memórias de seus progenitores e absorver as de suas vítimas. Esses monstros convenceram os homens-peixes 
      da existência de Piscigeros para controlá-los, afirmando serem arautos desta divindade inexistente.
    </p>

    <p>
      Porém, a força da crença em Arton é tão intensa — e a farsa durou tantas gerações — que surgiu um indivíduo 
      nas profundezas afirmando ser Piscigeros. E ele está sendo cultuado como tal. Os próprios thalassothan foram 
      surpreendidos quando vários homens-peixes se revoltaram ao perceber que os supostos “arautos do Pai Peixe” 
      sabiam menos sobre o deus do que seus devotos!
    </p>

    <p>
      Se o ser que atende por Piscigeros é uma entidade real que assumiu o papel, ou algo criado espontaneamente 
      pelo poder da crença, ninguém da superfície sabe. O que é certo é que a fé dos homens-peixes é verdadeira, 
      e seus devotos lideram essa raça submarina — alguns até desafiando o domínio thalassothan.
    </p>

    <p><b>Crenças e Objetivos.</b> Obedecer aos arautos do Pai Peixe. Vencer pela força ou estratégia. Proteger a 
      cultura e o modo de vida dos homens-peixes. Dominar os mares e aqueles que vivem sob as ondas.</p>

    <p><b>Símbolo Sagrado.</b> Um peixe imenso cercado por um cardume de peixes menores.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Tridente.</p>

    <p><b>Devotos.</b> Dahllan, elfos-do-mar, hynne, kappa, minotauros, sereias/tritões, bárbaros, bucaneiros,
      caçadores, druidas, treinadores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Piscigeros jamais podem ignorar um pedido de ajuda de um homem-peixe,
      devendo protegê-lo até a morte, se necessário. Além disso, nunca podem desobedecer aos arautos de sua 
      divindade, nem causar-lhes dano letal ou perda de PV — mesmo habilidades que aumentem dano contra eles 
      são proibidas. Alguns sacerdotes contestam esse dogma, mas as consequências ainda são desconhecidas.
    </p>
  `,

        devotos: [
          'Dahllan',
          'Elfos-do-mar',
          'Hynne',
          'Kappa',
          'Minotauros',
          'Sereias/Tritões',
          'Bárbaros',
          'Bucaneiros',
          'Caçadores',
          'Druidas',
          'Treinadores',
        ],

        fundamentalista_paladino: '',
        fundamentalista_druida: `
    <p>
      <b>Druidas devotos de Piscigeros</b> agem como guardiões dos homens-peixes e das regiões submarinas onde 
      vivem. Eles mantêm o equilíbrio ecológico de cardumes inteiros e combatem qualquer criatura ou força 
      que ameace as comunidades submersas. Para eles, a água profunda é um território sagrado, e a sobrevivência 
      dos homens-peixes é responsabilidade direta de sua devoção ao Pai Peixe.
    </p>
  `,
      },
      {
        id: 967,
        nome: 'Rhond',
        tipo: 'Deus das Armas',
        natureza: 'Mortal ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_rhond.png',
        paginas: '',
        canalizaEnergia: 'Qualquer',
        armaPreferida: 'Martelo de guerra',
        aceitaPaladinos: false,
        aceitaDruidas: false,

        descricao: `
    <p>
      Rhond é um dos deuses menores mais conhecidos e acessíveis, residindo na Cidade de Rhond, no reino de
      Zakharov — local que também abriga seu principal templo e a maior parte de seus clérigos. Sua história é famosa:
      ele teria sido um dos mais antigos clérigos de Keenn, o antigo Deus da Guerra, além de um armeiro supremo e 
      aventureiro lendário.
    </p>

    <p>
      Forjando incontáveis armas ao longo de sua vida, Rhond atingiu tal maestria que criou artefatos mágicos 
      de poder extraordinário. Convencido de sua força, viajou ao Reino de Keenn para desafiá-lo e tomar seu posto. 
      Foi derrotado, mas Keenn não o puniu — ao contrário, ficou impressionado com sua coragem e o recompensou com 
      imortalidade e poder ainda maior na arte da forja.
    </p>

    <p>
      No entanto, como punição pela arrogância, Keenn aprisionou Rhond em uma forma monstruosa de seis braços e o 
      obrigou a forjar armas eternamente. Rhond viu isso como uma injustiça e abandonou o sacerdócio. Com o passar 
      dos séculos, sua fama se tornou tão vasta que ele próprio passou a ser cultuado, ascendendo a Deus Menor das Armas.
    </p>

    <p>
      Rhond trabalha incessantemente em sua oficina — uma caverna cujo centro é uma forja vulcânica, com lava borbulhante 
      e paredes cobertas de armamentos. A Cidade de Rhond cresceu ao redor dessa caverna, e o som do martelo do deus é 
      ouvido noite e dia em todos os cantos da cidade.
    </p>

    <p>
      Apesar de impaciente e pouco generoso, Rhond às vezes oferece suas magníficas armas quando acredita que o propósito 
      é digno. Teve papel vital na Batalha de Tamu-ra. Muitos outros deuses menores governam aspectos de seu vasto 
      portfólio — como o Deus da Pólvora e o Deus dos Machados.
    </p>

    <p><b>Crenças e Objetivos.</b> Forjar e usar as melhores armas. Honrar armas como obras de arte. Vencer pela força ou estratégia. Realizar grandes feitos. Derrotar monstros usando suas próprias criações.</p>

    <p><b>Símbolo Sagrado.</b> Uma espada, um machado de batalha e um martelo de guerra cruzados sobre uma bigorna.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Martelo de guerra.</p>

    <p><b>Devotos.</b> Anões, elfos, golens, minotauros, bárbaros, bucaneiros, caçadores, cavaleiros, guerreiros, inventores, nobres.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Rhond devem dedicar pelo menos uma hora diária à manutenção ou 
      ao treinamento com uma arma. Além disso, pelo menos uma vez por aventura devem fabricar uma arma qualquer.
    </p>
  `,

        devotos: [
          'Anões',
          'Elfos',
          'Golens',
          'Minotauros',
          'Bárbaros',
          'Bucaneiros',
          'Caçadores',
          'Cavaleiros',
          'Guerreiros',
          'Inventores',
          'Nobres',
        ],

        fundamentalista_paladino: `
    <p>
      <b>Paladinos devotos de Rhond</b> tratam suas armas como extensões de sua própria alma. Acreditam que 
      cada lâmina ou martelo carrega um propósito sagrado e que a justiça é forjada no calor da batalha. 
      Seguem códigos rígidos de honra na criação, manutenção e uso de armas, jamais usando uma lâmina sem antes 
      dedicar uma prece ao Deus das Armas.
    </p>
  `,

        fundamentalista_druida: '',
      },
      {
        id: 966,
        nome: 'Sartan',
        tipo: 'Deus da Desolação',
        natureza: 'Entidade primordial',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_sartan.png',
        paginas: '',
        canalizaEnergia: 'Negativa',
        armaPreferida: 'Maça',
        aceitaPaladinos: false,
        aceitaDruidas: false,

        descricao: `
    <p>
      Sartan é o terrível Deus da Desolação, uma entidade primordial tão antiga quanto o próprio mundo. 
      Milênios atrás, quando Arton ainda era jovem, ele e outras forças cósmicas surgiram com o intuito de dominar o mundo. 
      Embora todas tenham sido derrotadas pelo Panteão, Sartan conseguiu retornar tempos depois, trazendo consigo guerra, fome,
      doença e destruição.
    </p>

    <p>
      Naquele período, os deuses maiores já não caminhavam pela terra em forma verdadeira, mas guiavam seus campeões mortais. 
      Um grupo de heróis foi escolhido para enfrentar Sartan, usando o sagrado Disco dos Três. O deus foi banido, mas não destruído. 
      Pacientemente esperou até que os astros se alinhassem — e tentou retornar novamente.
    </p>

    <p>
      Mais uma vez um grupo de heróis foi reunido, desta vez por Dahriol, o Deus dos Selos. Eles recuperaram as partes do Disco dos Três 
      e descobriram o ritual em andamento. O que viram era indescritível: uma colossal cabeça demoníaca, repleta de chifres, espinhos 
      e vermes rastejando por sua carne corrompida. Ainda assim, triunfaram, e Sartan foi banido mais uma vez.
    </p>

    <p>
      Desde então, seu culto sobrevive nas sombras. Nem mesmo seus devotos conhecem sua verdadeira natureza, mas a proibição 
      de sua presença em Arton — e os rumores de que ele destruiria o mundo caso retornasse — parecem apenas alimentar o fanatismo 
      que mantém seus seguidores ativos.
    </p>

    <p><b>Crenças e Objetivos.</b> Trazer Sartan de volta a Arton. Preparar o mundo para seu retorno. Espalhar guerra, morte, fome e peste. Abraçar devassidão e perversão. Deturpar o que é puro. Celebrar dor, agonia e crueldade.</p>

    <p><b>Símbolo Sagrado.</b> Uma cabeça demoníaca com a boca arreganhada.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Maça.</p>

    <p><b>Devotos.</b> Quaisquer — Sartan aceita todos que o ajudem a retornar.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Sartan jamais podem se recusar a participar de qualquer tentativa 
      de trazê-lo de volta a Arton. Devem estudar constantemente os alinhamentos astrais para prever seu retorno. 
      Além disso, devem praticar pelo menos um ato de crueldade por dia (ou por sessão de jogo), ferindo uma criatura indefesa 
      como oferenda à sua divindade.
    </p>

    <p><i>Esta divindade menor não é permitida para jogadores.</i></p>
  `,

        devotos: ['Quaisquer'],

        fundamentalista_paladino: `
  `,

        fundamentalista_druida: `
  `,
      },
      {
        id: 965,
        nome: 'Sckhar',
        tipo: 'Dragão-Rei do Fogo',
        natureza: 'Dragão-Real',
        status: '5',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_sckhar.png',
        paginas: '',
        canalizaEnergia: 'Negativa',
        armaPreferida: 'Lança',
        aceitaPaladinos: false,
        aceitaDruidas: false,

        descricao: `
    <p>
      Sckhar é a própria personificação do dragão levado ao extremo — força, orgulho, ambição e destruição
      em seu estado mais puro. Sua presença é opressora, intimidando até mesmo quando permanece calmo.
      Sua fúria, porém, é famosa: o Dragão-Rei do Fogo é conhecido por executar servos, guardas e até esposas
      diante da menor transgressão.
    </p>

    <p>
      Governante absoluto de Sckharshantallas, Sckhar dedica grande parte de seus recursos ao próprio culto.
      Para ele, todo o reino é seu covil, e tudo dentro de suas fronteiras pertence ao seu tesouro. Seu povo,
      os sckharjagar, vivem sob devoção obrigatória — alguém que não reverencia o Dragão-Rei é visto com
      desconfiança, quase como um criminoso.
    </p>

    <p>
      Sckhar também é um tirano feroz em combate. Foi peça decisiva na luta contra o Dragão da Tormenta,
      e poucos adversários vivem para contar um encontro com sua fúria. Ainda assim, rumores sugerem que
      ele já sentiu amor: histórias falam de Be-Rei, uma deusa-luhga, e de um pacto inusitado com um cavaleiro
      humano, Lothar Algherulff.
    </p>

    <p>
      Seu culto é marcado por festivais e rituais sangrentos. Sacrifícios são feitos anualmente no Dia da
      Execução, logo após o Sckharal, outro feriado dedicado ao deus. Em troca de sua devoção absoluta,
      Sckhar concede aos súditos uma fruta extremamente nutritiva, garantindo que não passem fome —
      embora nunca deixem de temê-lo.
    </p>

    <p>
      Em forma humanoide, Sckhar parece um elfo de porte altivo, cabelos vermelhos e roupas luxuosas em
      tons quentes. Seu olho esquerdo é cego, riscado por três cicatrizes profundas. Em sua forma verdadeira,
      contudo, Sckhar é uma visão aterradora: um dragão escarlate gigantesco, com escamas e garras brilhando
      em tons rubros e dourados, coroado por chifres espiralados.
    </p>

    <p><b>Crenças e Objetivos.</b> Reverenciar a soberania absoluta de Sckhar. Honrar seus filhos e seu reino. Destruir
    qualquer heresia ou afronta às leis do Dragão-Rei. Proteger os sckharjagar. Caçar dragões que invadam
    Sckharshantallas.</p>

    <p><b>Símbolo Sagrado.</b> Chamas vermelhas com uma coroa dourada no centro.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Lança.</p>

    <p><b>Devotos.</b> Elfos, kallyanach, meios-elfos, arcanistas, bardos, cavaleiros, nobres, treinadores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Sckhar devem obedecer sem questionar qualquer ordem do
      Dragão-Rei, especialmente quando convocados para expulsar dragões e criaturas aparentadas de seu território.
      Além disso, uma vez por mês, devem doar <b>20% de todo seu tesouro</b>, sempre em ouro, para os cofres de Sckhar.
    </p>
  `,

        devotos: ['Elfos', 'Kallyanach', 'Meios-elfos', 'Arcanistas', 'Bardos', 'Cavaleiros', 'Nobres', 'Treinadores'],

        fundamentalista_paladino: ``,
        fundamentalista_druida: ``,
      },
      {
        id: 964,
        nome: 'Sunnary',
        tipo: 'Deusa da Culinária',
        natureza: 'Mortal ascendido',
        status: '2',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deusa_sunnary.png',
        paginas: '',
        canalizaEnergia: 'Positiva',
        armaPreferida: 'Adaga',
        aceitaPaladinos: true,
        aceitaDruidas: true,

        descricao: `
    <p>
      Dona Sunnary nasceu em uma pequena vila esquecida, onde se tornou a figura mais amada da comunidade.
      Mesmo sem marido ou filhos, adotou todos como sua própria família, sempre com uma refeição quente
      e uma palavra acolhedora. Sua devoção a Marah guiava sua vida simples, pacífica e profundamente
      generosa.
    </p>

    <p>
      Sua fama como cozinheira excepcional espalhou-se pela região, atraindo viajantes e curiosos. No entanto,
      sua ascensão divina começou quando um terrível dragão ameaçou destruir sua vila. Sem guerreiros, armas
      ou esperança, os aldeões imploraram aos deuses. E então, movida por coragem, fé e amor por sua gente,
      Dona Sunnary fez o impensável.
    </p>

    <p>
      Preparou um banquete magnífico e convidou o dragão para conversar. O ato inusitado funcionou: após a
      sobremesa, a criatura desistiu da destruição e, encantada com a comida e a compaixão da anfitriã, adotou
      a vila como protegida — em troca de refeições preparadas por ela. O temor deu lugar à convivência, e logo
      peregrinos de toda parte chegavam para provar sua culinária lendária.
    </p>

    <p>
      Assim, Dona Sunnary ascendeu, tornando-se a Deusa Menor da Culinária, padroeira da boa comida,
      da convivência pacífica e da arte de alimentar com amor.
    </p>

    <p>
      Como deusa, ela se apresenta como uma senhora baixa, roliça, de cabelos grisalhos presos em coque,
      olhos gentis e sorriso constante — sempre pronta a servir um prato quente.
    </p>

    <p><b>Crenças e Objetivos.</b> Reverenciar a culinária. Alimentar os necessitados. Cozinhar com prazer. Criar novas receitas. Celebrar a boa comida.</p>

    <p><b>Símbolo Sagrado.</b> Uma panela sobre uma fogueira.</p>

    <p><b>Canalizar Energia.</b> Positiva.</p>

    <p><b>Arma Preferida.</b> Adaga.</p>

    <p><b>Devotos.</b> Aggelus, anões, elfos, hynne, qareen, bardos, druidas, nobres, paladino.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Sunnary jamais podem recusar um pedido para cozinhar.
      Além disso, devem preparar ao menos um prato especial por semana, em honra à deusa.
    </p>
  `,

        devotos: ['Aggelus', 'Anões', 'Elfos', 'Hynne', 'Qareen', 'Bardos', 'Druidas', 'Nobres', 'Paladino'],

        fundamentalista_paladino: ``,
        fundamentalista_druida: ``,
      },
      {
        id: 963,
        nome: 'Tamagrah',
        tipo: 'Deus da Ilha Viva',
        natureza: 'Entidade primordial',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_tamagrah.png',
        paginas: '',
        canalizaEnergia: 'Qualquer',
        armaPreferida: 'Lança',
        aceitaPaladinos: false,
        aceitaDruidas: true,
        descricao: `
    <p>
      Em Moreania existem criaturas colossais — mas poucas se comparam a Tamagrah. A entidade se assemelha
      a um peixe achatado, com boca de bagre, olhos esbugalhados, seis nadadeiras e uma cauda curta porém
      incrivelmente poderosa. Suas costas são recobertas por uma grossa carapaça repleta de longos espinhos,
      formando uma aparência tão monstruosa quanto imponente.
    </p>

    <p>
      Ainda mais aterrador que sua forma é seu tamanho descomunal: seu casco possui cerca de 12 km de diâmetro,
      dos quais 8 km permanecem sempre acima da água. Tamagrah desliza lentamente pelos mares, jamais
      submergindo totalmente. Com o passar dos séculos, vegetação brotou em sua carapaça, seguida por fauna
      diversa — de modo que criaturas, tribos e ecosferas inteiras vivem em suas costas como se fosse uma ilha
      natural.
    </p>

    <p>
      A maioria dos habitantes do mundo acredita que Tamagrah é apenas uma ilha peculiar. Porém, aqueles que
      conhecem sua verdadeira natureza o reverenciam como um deus — e são atendidos. Tamagrah concede poderes
      aos seus devotos, embora interfira pouco no mundo dos mortais. Sua mente é ancestral, profunda e imprevisível
      como os próprios mares.
    </p>

    <p>
      Tamagrah pode atender orações e proteger seus seguidores… ou causar maremotos devastadores com um único
      bater de nadadeira. Seu culto é pequeno, mas profundamente dedicado.
    </p>

    <p><b>Crenças e Objetivos.</b> Reverenciar Tamagrah. Proteger a vida selvagem e os habitantes da Ilha Viva. Combater monstros, mortos-vivos e invasores que perturbem o delicado equilíbrio do ecossistema.</p>

    <p><b>Símbolo Sagrado.</b> Um casco de tartaruga com seis nadadeiras de peixe.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Lança.</p>

    <p><b>Devotos.</b> Anões, dahllan, elfos, hynne, sílfides, bárbaros, bucaneiros, caçadores, druidas, treinadores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Tamagrah devem proteger seu deus e a Ilha Viva realizando missões
      além-mar para impedir ameaças (ao menos uma missão a cada 1d4+2 meses). Contudo, não podem permanecer
      mais de 1d4+2 meses longe da Ilha Viva, sob risco de serem privados das bênçãos do deus.
    </p>
  `,

        devotos: [
          'Anões',
          'Dahllan',
          'Elfos',
          'Hynne',
          'Sílfides',
          'Bárbaros',
          'Bucaneiros',
          'Caçadores',
          'Druidas',
          'Treinadores',
        ],

        fundamentalista_paladino: ``,
        fundamentalista_druida: ``,
      },
      {
        id: 962,
        nome: 'Teldiskan',
        tipo: 'O Gigante Máximo',
        natureza: 'Entidade primordial',
        status: '1',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_teldiskan.png',
        paginas: '',
        canalizaEnergia: 'Qualquer',
        armaPreferida: 'Tacape',
        aceitaPaladinos: false,
        aceitaDruidas: true,

        descricao: `
    <p>
      Em Deheon, o Reino Capital, estende-se a imensa cordilheira conhecida como Montanhas Teldiskan —
      parte da mesma formação das Montanhas Uivantes, mas com identidade própria por ser o lar de Teldiskan,
      o Gigante Máximo. Provavelmente a criatura mais alta de toda Arton, dizem que quando se ergue ele é capaz
      de enxergar as nuvens que se formam nos reinos inteiros do Reinado, prevendo o clima com semanas ou meses
      de antecedência. Por isso os humanos, há séculos, o cultuam como divindade menor do clima.
    </p>

    <p>
      Contudo, Teldiskan nem sempre foi pacífico — e talvez ainda não seja. Muitas eras atrás, quando Valkaria era
      apenas um assentamento de refugiados recém-chegados com a Caravana dos Exilados, o Gigante Máximo atacou
      a cidade. Apenas a união da Rainha Yvanna das Amazonas e de Roramar Pruss, o Rei Profeta, foi capaz de derrotá-lo
      e bani-lo para as montanhas. A partir daí teria se arrependido, tornando-se uma divindade pastoril que protege
      pequenas aldeias ao pé de sua cordilheira… ou talvez apenas esteja aguardando o momento certo para vingança.
    </p>

    <p>
      Atualmente, seus devotos se espalham pelas aldeias nas encostas das montanhas, realizando rituais para prever
      o clima e guiar o povo em seus rebanhos de cabras e carneiros. Entre eles existe uma facção chamada Pastores de
      Teldiskan, que viaja por Deheon pregando a benevolência de seu patrono e prometendo bom tempo e fartura.
      No entanto, estes mesmos pastores possuem um objetivo secreto: fortalecer o gigante o bastante para romper
      seu confinamento e dominar (ou destruir) Deheon, vingando-se da humilhação sofrida. Os fanáticos chegam a
      realizar sacrifícios humanos.
    </p>

    <p>
      Assim, Teldiskan permanece uma divindade ambígua. Suas bênçãos são reais, sua proteção é sentida — mas seus
      cultistas também incluem assassinos e extremistas. Seria o gigante um arrependido protetor pastoril, um tirano
      paciente, ou ambos?
    </p>

    <p><b>Crenças e Objetivos.</b> Vigiar o céu e prever o clima. Reverenciar e proteger as Montanhas Teldiskan. Ajudar o Gigante Máximo a alcançar liberdade. Espalhar sua suposta benevolência. Vingar-se de Deheon.</p>

    <p><b>Símbolo Sagrado.</b> Vários picos de montanhas surgindo por entre as nuvens.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Tacape.</p>

    <p><b>Devotos.</b> Dahllan, gnolls, harpias, hynne, kallyanach, medusas, ogros, trogs, bárbaros, caçadores, druidas, lutadores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos devem pregar a benevolência da divindade por palavras e ações.
      Uma vez por dia (ou por sessão), o devoto deve convencer alguém de que Teldiskan é um salvador ou prever
      o clima local, passando em um teste de Enganação ou Sobrevivência de CD 15 + metade do nível do personagem.
    </p>
  `,

        devotos: [
          'Dahllan',
          'Gnolls',
          'Harpias',
          'Hynne',
          'Kallyanach',
          'Medusas',
          'Ogros',
          'Trogs',
          'Bárbaros',
          'Caçadores',
          'Druidas',
          'Lutadores',
        ],

        fundamentalista_paladino: ``,
        fundamentalista_druida: ``,
      },
      {
        id: 961,
        nome: 'Tessalus',
        tipo: 'Deus dos Elfos-do-Mar',
        natureza: 'Mortal ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_tessalus.png',
        paginas: '',
        canalizaEnergia: 'Qualquer',
        armaPreferida: 'Tridente',
        aceitaPaladinos: false,
        aceitaDruidas: false,

        descricao: `
    <p>
      Nascido nas profundezas turbulentas de Arton, Tessalus cresceu imerso na tradição guerreira de seu povo,
      os elfos-do-mar. Desde jovem, foi treinado para a batalha, manejando o tridente encantado que se tornaria
      símbolo de sua força e da bravura ancestral dos marinhos. Seu nome ficou marcado em sangue e glória durante
      o longo conflito contra as sereias, quando se destacou como líder feroz e indomável.
    </p>

    <p>
      O momento decisivo de sua vida ocorreu no dia em que enfrentou Ayllana, a mais poderosa feiticeira das
      sereias. O duelo foi lendário — o mar se contorceu em redemoinhos, criaturas abissais foram evocadas, e
      tempestades sobrenaturais se formaram ao redor dos combatentes. Ayllana desviava golpes com magia pura,
      enquanto Tessalus avançava com ferocidade implacável. Ao final, a feiticeira fugiu, derrotada, e Tessalus
      se tornou herói incontestável entre os elfos marinhos.
    </p>

    <p>
      A devoção em torno de sua figura cresceu tanto que Tessalus ascendeu à divindade, tornando-se o Deus dos
      Elfos-do-Mar. Seu culto exalta coragem, força e tradição. Os rituais envolvem cânticos, duelos e cerimônias
      guerreiras, preservando a memória do combate contra Ayllana. Seus fiéis percorrem os mares de Arton e
      dominam territórios de Pelágia, jurando proteger o povo marinho, manter a supremacia nos oceanos e enfrentar
      qualquer ameaça — especialmente as sereias.
    </p>

    <p><b>Crenças e Objetivos.</b> Proteger os elfos-do-mar. Buscar soberania nos oceanos. Levar guerra às sereias.
    Dominar as águas profundas. Honrar a fúria e tradição do Deus dos Elfos-do-Mar.</p>

    <p><b>Símbolo Sagrado.</b> Um tridente.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Tridente.</p>

    <p><b>Devotos.</b> Elfos-do-mar, qareen, bárbaros, bucaneiros, caçadores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Tessalus jamais podem matar elfos-do-mar, negar auxílio a um deles,
      ou recusar missões de resgate, proteção ou preservação de rituais elfos-do-mar.
    </p>
  `,

        devotos: ['Elfos-do-mar', 'Qareen', 'Bárbaros', 'Bucaneiros', 'Caçadores'],
        fundamentalista_paladino: ``,
        fundamentalista_druida: ``,
      },
      {
        id: 960,
        nome: 'Toris',
        tipo: 'Deusa de Jallar',
        natureza: 'Entidade primordial',
        status: '1',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deusa_toris.png',
        paginas: '',
        canalizaEnergia: 'Qualquer',
        armaPreferida: 'Espada longa',
        aceitaPaladinos: true,
        aceitaDruidas: false,

        descricao: `
    <p>
      Toris é a misteriosa e paranoica Deusa de Jallar, um minúsculo e quase desconhecido reino nos limites do
      Reinado. A existência do próprio reino é incerta para muitos, graças a um poderoso feitiço que a deusa lançou
      para ocultá-lo do mundo — um ato motivado por seu medo constante de perder seguidores para outras divindades.
    </p>

    <p>
      Praticamente toda a população de Jallar é devota de Toris, embora seus clérigos sejam raros. Há anos, seu maior
      orgulho foi seu paladino: um guerreiro sagrado que patrulhava exaustivamente as fronteiras, eliminando monstros
      e perigos. Entretanto, após passar uma noite com uma jovem que o admirava, o paladino foi fulminado por um
      relâmpago lançado pela própria Toris, tomada de ciúmes e zelo possessivo.
    </p>

    <p>
      O corpo do paladino foi encontrado por um necromante, criando rumores e versões conflitantes sobre seu destino.
      Alguns afirmam que ele morreu novamente em um covil de Sckhar. Outros sugerem que pode ter havido dois
      paladinos — ou até uma cópia mágica. Muitos acreditam que essas contradições são estimuladas pela própria Toris:
      afinal, ninguém busca um reino cuja existência parece duvidosa.
    </p>

    <p>
      O surgimento de Toris permanece envolto em mistério. Alguns dizem que ela existe desde sempre; outros acreditam
      ser um espírito local que se tornou deusa apenas quando Jallar se formou. O fato é que Jallar e Toris se definem
      mutuamente, e sua divindade é totalmente dedicada a proteger o reino — e mantê-lo escondido.
    </p>

    <p><b>Crenças e Objetivos.</b> Proteger Jallar e suas fronteiras. Manter seu povo seguro. Convencer os habitantes de que
    o mundo exterior é perigoso, cruel e não confiável.</p>

    <p><b>Símbolo Sagrado.</b> Um castelo dentro de um círculo.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Espada longa.</p>

    <p><b>Devotos.</b> Caçadores, cavaleiros, guerreiros, ladinos, nobres, paladino.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Toris jamais podem ignorar um pedido de ajuda de um cidadão de Jallar e
      devem protegê-lo até a morte, se necessário. Mesmo quando saem do reino em missões ordenadas pela deusa, devem
      manter contato constante com ela — não podendo permanecer mais de <i>2d10+10 dias</i> sem se comunicar por meios
      mundanos ou mágicos, nem ficar mais de <i>1d4+2 meses</i> sem retornar a Jallar para prestar relatório pessoalmente.
      A deusa é infame por seus ciúmes: qualquer dedicação excessiva a outra pessoa, entidade ou causa pode ser vista
      como traição… e resultar em sua fúria divina.
    </p>
  `,

        devotos: ['Caçadores', 'Cavaleiros', 'Guerreiros', 'Ladinos', 'Nobres', 'Paladino'],

        fundamentalista_paladino: ``,
        fundamentalista_druida: ``,
      },
      {
        id: 959,
        nome: 'Tukala',
        tipo: 'Deusa dos Texugos Alados',
        natureza: 'Mortal ascendido',
        status: '1',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deusa_tukala.png',
        paginas: '',
        canalizaEnergia: 'Qualquer',
        armaPreferida: 'Espada curta',
        aceitaPaladinos: false,
        aceitaDruidas: true,

        descricao: `
    <p>
      Tukala, a exaltada Deusa dos Texugos Alados, é reverenciada pela peculiar Tribo do Texugo Cinzento,
      originária dos Ermos Púrpuras. A tribo carrega consigo um mito peculiar — e altamente questionável — sobre o
      Texugo primordial, um ser alado que teria tido suas asas roubadas por Sszzaas, que as ofereceu aos seus filhos,
      criando assim as serpes. Em vingança, o Texugo teria roubado ovos de serpentes, chocando-os ele mesmo e
      imbuindo seus filhotes com sua fúria, criando assim os primeiros kobolds.
    </p>

    <p>
      Embora o mito pareça cada vez menos real a cada repetição, ele é contado com orgulho pelos kobolds da Tribo do
      Texugo Cinzento. Dele nasceu até mesmo uma ordem de guerreiros alados conhecida como os <i>Furiosos Cinzentos</i>,
      bárbaros que acreditam carregar a benção ancestral do Texugo.
    </p>

    <p>
      Tukala em si é apenas uma fêmea de texugo que a tribo trouxe como mascote ao serem expulsos de seu território.
      Não existe prova alguma de que possua ascendência divina — mas a fé intensa da tribo, sustentada a guloseimas e
      besouros deixados como oferenda, manifestou milagres reais. Tukala abençoa os Texugos Cinzentos e permite que
      Grund, o chefe da tribo, evoque enxames de texugos espectrais para auxiliá-los.
    </p>

    <p>
      Assim, Tukala tornou-se deusa por crença pura — uma divindade nutrida pela devoção ardente de seus seguidores.
      Onde a tribo via graça, proteção e poder, a magia respondeu.
    </p>

    <p><b>Crenças e Objetivos.</b> Proteger texugos e pequenos mamíferos escavadores. Permitir que criaturinhas
    inocentes alcem voo. Combater Sszzaas e toda forma de mentira. Impedir o roubo de asas — literal ou simbólico. Voar
    como é natural para todos os texugos.</p>

    <p><b>Símbolo Sagrado.</b> O rosto cinzento de um texugo sobre asas de morcego.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Espada curta.</p>

    <p><b>Devotos.</b> Duendes, goblins, kobolds, sílfides, bárbaros, bardos, caçadores, druidas, inventores, treinadores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Tukala jamais podem mentir ou utilizar Enganação, pois isso
      representaria trilhar os caminhos de Sszzaas. Não podem matar texugos ou pequenos mamíferos escavadores
      (incluindo carcajus, raposas, tatus e canídeos). Devem permitir que outras criaturas realizem o sonho de voar,
      desde que isso não seja usado para o mal ou para propósitos enganadores.
    </p>
  `,

        devotos: [
          'Duendes',
          'Goblins',
          'Kobolds',
          'Sílfides',
          'Bárbaros',
          'Bardos',
          'Caçadores',
          'Druidas',
          'Inventores',
          'Treinadores',
        ],

        fundamentalista_paladino: ``,
        fundamentalista_druida: ``,
      },
      {
        id: 958,
        nome: 'Ur',
        tipo: 'Deus dos Carvalhos',
        natureza: 'Entidade primordial',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_ur.png',
        paginas: '',
        canalizaEnergia: 'Positiva',
        armaPreferida: 'Bordão',
        aceitaPaladinos: false,
        aceitaDruidas: true,

        descricao: `
    <p>
      Ur é uma das mais antigas criaturas de toda Arton. Ele se lembra do mundo antes mesmo da Revolta dos Três e
      até de épocas anteriores à chegada dos elfos. Não se sabe se Ur foi um carvalho que despertou por causa da
      devoção que recebeu ou se sempre foi um ente ancestral. Segundo o próprio Ur, tais detalhes são irrelevantes —
      lembrar minúcias de tempos tão distantes tomaria uma vida inteira.
    </p>

    <p>
      Se as árvores possuem algum tipo de consciência, é certo que as florestas de Tollon cultuam Ur. Os entes também
      o seguem, marchando lentamente em sua direção numa peregrinação tão vagarosa que nem humanos, nem mesmo
      elfos, percebem seus deslocamentos. Ur prefere permanecer em longos períodos de contemplação, permitindo
      que silêncio e serenidade sejam sua forma de orientação.
    </p>

    <p>
      Somente diante de grandes urgências — como incêndios devastadores ou ameaças que perturbem o equilíbrio
      natural — Ur ergue suas raízes do solo, movendo-se com colossal lentidão e imponência, e fala com a voz profunda
      de troncos antigos.
    </p>

    <p><b>Crenças e Objetivos.</b> Reverenciar Ur e todas as árvores. Proteger florestas e a vida selvagem. Combater
    incêndios, desmatamento excessivo, monstros, mortos-vivos e qualquer força que desequilibre a natureza.
    Realizar peregrinação até Ur.</p>

    <p><b>Símbolo Sagrado.</b> Um carvalho com uma face.</p>

    <p><b>Canalizar Energia.</b> Positiva.</p>

    <p><b>Arma Preferida.</b> Bordão.</p>

    <p><b>Devotos.</b> Anões, dahllan, eiradaan, elfos, sílfides, bárbaros, caçadores, druidas.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Ur jamais podem causar dano de fogo, direta ou indiretamente, a
      qualquer criatura. Além disso, não podem descansar em comunidades maiores que aldeias: continuam com seus
      poderes divinos, mas não recuperam pontos de vida ou mana enquanto estiverem em cidades, vilas grandes ou
      outros assentamentos maiores.
    </p>
  `,

        devotos: ['Anões', 'Dahllan', 'Eiradaan', 'Elfos', 'Sílfides', 'Bárbaros', 'Caçadores', 'Druidas'],

        fundamentalista_paladino: ``,
        fundamentalista_druida: ``,
      },
      {
        id: 957,
        nome: 'Yasshara',
        tipo: 'Deusa da Opressão',
        natureza: 'Mortal ascendido',
        status: '3',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deusa_yasshara.png',
        paginas: '',
        canalizaEnergia: 'Negativa',
        armaPreferida: 'Espada longa',
        aceitaPaladinos: false,
        aceitaDruidas: false,

        descricao: `
    <p>
      Yasshara, inimiga mortal de Anilatir, é uma divindade cuja história difere conforme quem a conta — mas todas
      as versões convergem para um único tema: a obsessão pela ordem absoluta. Sua origem é marcada por tragédias
      e interpretações contraditórias, mas cada uma revela um aspecto fundamental da Deusa da Opressão.
    </p>

    <p>
      Uma das versões mais aceitas afirma que Yasshara perdeu os pais para uma assassina insana que buscava moldar
      jovens “com potencial” para se tornarem aventureiros. Arrasada e buscando respostas, Yasshara entrou para o
      clero de Khalmyr, procurando sentido e justiça… mas nada conseguiu preencher o vazio em sua alma.
      Eventualmente, ela abandonou o ideal de justiça e passou a acreditar que apenas a ordem completa — rígida,
      previsível e imutável — poderia impedir novas tragédias.
    </p>

    <p>
      Outra versão, difundida pelos devotos de Anilatir, retrata Yasshara como uma nobre obcecada por controle. Ela
      teria proibido invenções, novidades e até a entrada de aventureiros em suas terras, impondo uma ordem tão
      absoluta que acabou, ironicamente, ascendendo como deusa da opressão.
    </p>

    <p>
      Há ainda um terceiro rumor: Yasshara e Anilatir seriam a mesma entidade, adversária de si própria — pois para
      existir inspiração, deve haver opressão, e vice-versa.
    </p>

    <p><b>Crenças e Objetivos.</b> Destruir o caos. Impor ordem absoluta. Eliminar o novo e imprevisível. Moldar Arton em
    padrões simples, rígidos e constantes. Controlar vidas e destinos.</p>

    <p><b>Símbolo Sagrado.</b> Uma balança dentro de um círculo perfeito.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Espada longa.</p>

    <p><b>Devotos.</b> Anões, elfos, finntroll, minotauros, cavaleiros, guerreiros, nobres.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Yasshara devem impor sua vontade sobre outros diariamente. Pelo menos
      uma vez por dia (ou por sessão), precisam fazer com que uma criatura obedeça a suas ordens — exigindo um teste
      de Diplomacia ou Intimidação com CD mínima igual a 15 + metade do nível do devoto. Devem também vigiar
      constantemente as tramas de Anilatir. Por fim, sempre que houver a possibilidade de escolher 10 em um teste, o
      devoto é obrigado a fazê-lo.
    </p>
  `,

        devotos: ['Anões', 'Elfos', 'Finntroll', 'Minotauros', 'Cavaleiros', 'Guerreiros', 'Nobres'],
        fundamentalista_paladino: ``,
        fundamentalista_druida: ``,
      },
      {
        id: 956,
        nome: 'Zadbblein',
        tipo: 'Dragoa-Rainha das Florestas',
        natureza: 'Dragão-Real',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deusa_zadbblein.png',
        paginas: '',
        canalizaEnergia: 'Negativa',
        armaPreferida: 'Bordão',
        aceitaPaladinos: false,
        aceitaDruidas: true,

        descricao: `
    <p>
      Zadbblein, a Dragoa-Rainha das Florestas, é irmã gêmea de Heart, o antigo Dragão-Rei das Montanhas.
      Embora fisicamente menos poderosa que o irmão, é muito mais inteligente, ardilosa e profundamente ligada
      à magia. Enquanto Heart era preguiçoso e cruel por comodidade, Zadbblein sempre foi agressiva, territorial
      e protetora de tudo que considera “seu”.
    </p>

    <p>
      Com a morte de Heart pelas mãos do Paladino de Arton, Zadbblein retornou às suas aparições, reclamando
      para si grandes extensões da Floresta das Escamas Verdes e outras regiões florestais do entorno. Sua energia
      vital é tão intensa que as florestas se expandem onde ela permanece por longos períodos, o que fez alguns
      druidas acreditarem que sua presença poderia simbolizar uma reconciliação entre Allihanna e Megalokk.
      Outros, no entanto, apontam seus atos de crueldade contra intrusos — especialmente mortos-vivos,
      construtos e criaturas “não naturais”.
    </p>

    <p>
      Zadbblein nunca acreditou na falsa ideia de que Megalokk era o “criador dos dragões”. Assim, quando
      Kallyadranoch retornou ao mundo, preso no corpo da elfa Yadallina, foi uma das primeiras a oferecer-lhe sua
      magia e sua astúcia. Sua relação com a natureza é peculiar: ao mesmo tempo em que ama e protege as florestas,
      considera que pode “aperfeiçoá-las” por meio da intervenção arcana.
    </p>

    <p>
      Em forma humanoide, Zadbblein se apresenta como uma bela elfa de longos cabelos negros e olhos verdes,
      trajando roupas que lembram suas próprias escamas. Em forma dracônica, é relativamente pequena para
      um Dragão-Real, mas ainda assim majestosa: suas escamas têm a cor de esmeraldas polidas e sua presença
      inspira reverência — ou terror.
    </p>

    <p><b>Crenças e Objetivos.</b> Reverenciar Zadbblein. Proteger e aperfeiçoar as florestas. Garantir harmonia entre suas criaturas vivas.
    Expandir seus domínios. Reforçar a superioridade dos dragões da terra. Expulsar invasores e ameaças.</p>

    <p><b>Símbolo Sagrado.</b> Uma árvore cujas folhas são escamas verdes.</p>

    <p><b>Canalizar Energia.</b> Negativa.</p>

    <p><b>Arma Preferida.</b> Bordão.</p>

    <p><b>Devotos.</b> Centauros, dahllan, eiradann, elfos, kallyanach, sátiros, tabrachi, trogs, arcanistas, bárbaros, caçadores, druidas, guerreiros, treinadores.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos de Zadbblein devem proteger a Floresta das Escamas Verdes e jamais
      ferir animais ou dragões nativos dessas terras. Além disso, uma vez por mês, devem expandir os domínios
      ou influência da Dragoa-Rainha de maneira significativa.
    </p>
  `,

        devotos: [
          'Centauros',
          'Dahllan',
          'Eiradann',
          'Elfos',
          'Kallyanach',
          'Sátiros',
          'Tabrachi',
          'Trogs',
          'Arcanistas',
          'Bárbaros',
          'Caçadores',
          'Druidas',
          'Guerreiros',
          'Treinadores',
        ],

        fundamentalista_paladino: ``,
        fundamentalista_druida: ``,
      },
      {
        id: 955,
        nome: 'Zakharov',
        tipo: 'Deus da Bravura',
        natureza: 'Mortal ascendido',
        status: '4',
        referencias: Referencia.GUIA_DEUSES_MENORES,
        imagem: 'assets/img/deus_zakharov.png',
        paginas: '',
        canalizaEnergia: 'Qualquer',
        armaPreferida: 'Machado anão',
        aceitaPaladinos: true,
        aceitaDruidas: false,

        descricao: `
    <p>
      Zakharov, um dos mais lendários heróis anões, era tão forte e robusto que sua pele parecia ser feita de
      pedra talhada. Diferente da maioria de seu povo, raramente usava armadura — preferia enfrentar qualquer
      adversário de peito aberto, confiando apenas em sua força inabalável e em seu lendário machado mágico,
      Zakharin. Sua coragem era tamanha que ultrapassou o limite do heroísmo e se tornou devoção; assim,
      Zakharov ascendeu como Deus da Bravura.
    </p>

    <p>
      Suas histórias são inúmeras — e contraditórias. Em certas lendas, enfrentou sozinho um clã inteiro de
      gigantes do fogo nas profundezas de Doherimm; em outras, caçou uma coluna de finntroll na superfície no
      mesmo período. Teria encarado a suposta Rainha das Medusas, olhando diretamente para ela até que a
      criatura se petrificasse, e depois desembaraçado suas serpentes como prova de amizade. Também se diz que
      domou todos os javalis doheritas, criando a espécie ao desafiar um rinoceronte a “ser mais compacto”.
    </p>

    <p>
      Apesar da força e da fama, Zakharov era simples, despojado e até esquecido: às vezes deixava o machado
      Zakharin em tavernas ou cavernas após aventuras. Em determinada ocasião, ao receber de volta a arma das
      mãos de uma comitiva de devotos, disse apenas que ficassem com ela e “usassem para algo útil um dia”.
      Esse gesto inspirou o presente dado pelos anões aos primeiros colonizadores humanos do reino que hoje
      leva seu nome: Zakharov, cuja capital é Zakharin.
    </p>

    <p>
      O paradeiro atual da divindade é desconhecido. Alguns dizem que está cavando um túnel para o outro lado
      do mundo, só porque seria uma façanha perigosa. Outros acreditam que vaga pela superfície, buscando
      novos desafios. Há quem o considere morto na Batalha de Tamu-ra, em 1405, enquanto outros garantem que
      vive tranquilamente em Doher, bebendo cerveja e rindo alto em tavernas anãs.
    </p>

    <p><b>Crenças e Objetivos.</b> Honrar o povo anão. Defender sua cultura e tradições. Combater finntrolls e inimigos
    da raça. Demonstrar coragem. Encarar desafios difíceis sem proteção excessiva. Valorizar riscos e feitos heroicos.</p>

    <p><b>Símbolo Sagrado.</b> Um braço segurando o machado Zakharin.</p>

    <p><b>Canalizar Energia.</b> Qualquer.</p>

    <p><b>Arma Preferida.</b> Machado anão.</p>

    <p><b>Devotos.</b> Anões, centauros, golens, minotauros, trogs, bárbaros, cavaleiros, guerreiros, lutadores, paladino.</p>

    <p>
      <b>Obrigações & Restrições.</b> Devotos devem realizar ao menos uma demonstração genuína de coragem por
      aventura (ou por mês, conforme o mestre). Isso inclui qualquer ação arriscada capaz de causar morte ou
      consequências graves, tomada sem preparação que garanta segurança — como enfrentar um ogro sozinho,
      escalar uma montanha sem equipamento ou pegar para si um item provavelmente amaldiçoado. O mestre tem
      a palavra final sobre o que constitui um ato de coragem.
    </p>
  `,

        devotos: [
          'Anões',
          'Centauros',
          'Golens',
          'Minotauros',
          'Trogs',
          'Bárbaros',
          'Cavaleiros',
          'Guerreiros',
          'Lutadores',
          'Paladino',
        ],

        fundamentalista_paladino: ``,
        fundamentalista_druida: ``,
      },
    ];
  }
}
