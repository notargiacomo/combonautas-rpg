import { Injectable } from '@angular/core';
import { Referencia } from '../enum/referencia.enum';
import { Origem } from '../model/origem';

@Injectable({
  providedIn: 'root',
})
export class OrigemData {
  private origens: Origem[] = [];

  getOrigens(): any[] {
    return this.origens;
  }

  constructor() {
    this.origens = [
      // RAÇAS BASE DO referencia BÁSICO
      {
        id: 1,
        nome: 'Acólito',
        regiao: 'Geral',
        descricao: `
        <p>Neste mundo agraciado com tantos deuses e igrejas, muitos ingressam cedo em alguma ordem religiosa — o que, dependendo de quem é seu deus padroeiro, pode ser motivo de admiração ou repulsa. Talvez você tenha ouvido o chamado da fé, seguiu a tradição espiritual de sua família, ou apenas foi abandonado quando pequeno às portas de um templo ou mosteiro. Tenha ou não se tornado um devoto, suas lembranças são carregadas de orações, evangelhos e outros ensinamentos.</p>
        <p><b>Itens.</b> Símbolo sagrado, traje de sacerdote.</p>
        <p><b>Benefícios.</b> Cura, Religião, Vontade (perícias); Medicina, Membro da Igreja, Vontade de Ferro (poderes).</p>
        <h4>Membro da Igreja</h4>
        <p>Você consegue hospedagem confortável e informação em qualquer templo de sua divindade, para você e seus aliados.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'85'
      },
      {
        id: 2,
        nome: 'Amigo dos Animais',
        regiao: 'Geral',
        descricao: `
        <p>Você pode ter sido cavalariço no estábulo de um castelo, criador de gado em uma fazenda, ginete de Namalkah ou mesmo tratador em um zoológico ou circo — em Arton, existem espetáculos circenses com animais em jaulas, que talvez você tenha desejado libertar. Ou então nada disso: desde criança você tem facilidade em lidar com animais, sempre conversou com eles, sentiu ser capaz de compreendê-los. Em certos lugares ou tribos, alguma montaria especial seria destinada a você.</p>
        <p><b>Itens.</b> Cão de caça, cavalo, pônei ou trobo (escolha um).</p>
        <p><b>Benefícios.</b> Adestramento, Cavalgar (perícias); Amigo Especial (poder).</p>
        <h4>Amigo Especial</h4>
        <p>Você recebe +5 em testes de Adestramento com animais. Além disso, possui um animal de estimação que o auxilia e o acompanha em suas aventuras. Em termos de jogo, é um parceiro que fornece +2 em uma perícia a sua escolha (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de parceiros.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'85'
      },
      {
        id: 3,
        nome: 'Amnésico',
        regiao: 'Geral',
        descricao: `
        <p>Você perdeu a maior parte da memória. Sabe apenas o próprio nome ou nem isso. Talvez tenha alguns itens pessoais, mas nenhuma ideia de como os conseguiu — podem ser relíquias de família, presentes de um ente querido ou apenas coisas que pegou de viajantes mortos lá atrás. Você não sabe como recebeu seu treinamento; apenas tem uma intuição sobre aquilo que consegue fazer. Seus atuais companheiros são a única família que conhece. Talvez viajando com eles você descubra algo sobre seu passado.</p>
        <p><b>Itens.</b>  Um ou mais itens (somando até T$ 500), aprovados pelo mestre, que podem ser uma pista misteriosa do seu passado.</p>
        <p><b>Benefícios.</b>  Em vez de dois benefícios de uma lista, você recebe uma perícia e um poder escolhidos pelo mestre e o poder Lembranças Graduais.</p>
        <h4>Lembranças Graduais</h4>
        <p>Durante suas aventuras, em determinados momentos a critério do mestre, você pode fazer um teste de Sabedoria (CD 10) para reconhecer pessoas, criaturas ou lugares que tenha encontrado antes de perder a memória.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'86'
      },
      {
        id: 4,
        nome: 'Aristocrata',
        regiao: 'Geral',
        descricao: `
        <p>Você nasceu na nobreza. Recebeu educação sofisticada em assuntos acadêmicos, política mercantil, torneios de cavalaria ou mesmo conjuração arcana, dependendo das tradições em sua linhagem e desejos de seus pais. Você ainda procura cumprir seus compromissos como nobre? Luta para conciliar as expectativas da família com a vida de aventuras? Ou cortou totalmente seus laços com o passado, mantendo apenas alguns pertences valiosos e contatos úteis?</p>
        <p><b>Itens.</b>Joia de família no valor de T$ 300, traje da corte.</p>
        <p><b>Benefícios.</b>Diplomacia, Enganação, Nobreza (perícias); Comandar, Sangue Azul (poderes).</p>
        <h4>Sangue Azul</h4>
        <p>Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma audiência com o nobre local etc.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'86'
      },
      {
        id: 5,
        nome: 'Artesão',
        regiao: 'Geral',
        descricao: `
        <p>Do alfaiate habilidoso em costurar as vestes da nobreza ao armeiro que forja armas letais, você foi treinado por um parente, mestre ou guilda para fabricar itens importantes no mundo civilizado. Suas habilidades podem ter sido aprendidas para o trabalho, mas se mostraram úteis durante as aventuras.</p>
        <p><b>Itens.</b>Instrumentos de ofício (qualquer), um item que você possa fabricar de até T$ 50.</p>
        <p><b>Benefícios.</b> Ofício, Vontade (perícias); Frutos do Trabalho, Sortudo (poderes).</p>
        <h4>Frutos do Trabalho</h4>
        <p>No início de cada aventura, você recebe  até 5 itens gerais que possa fabricar num valor total de até T$ 50. Esse valor aumenta para T$ 100 no patamar aventureiro, T$ 300 no heroico e T$ 500 no lenda.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'86'
      },
      {
        id: 6,
        nome: 'Artista',
        regiao: 'Geral',
        descricao: `
        <p>Você possui talento, nasceu com um “dom” — pelo menos é o que outras pessoas gostam de pensar. Será verdade? Ou será que você apenas sentiu atração por certa forma de arte e treinou muito, muito mesmo? Enquanto o artesão fabrica itens  “mundanos”,  o  artista produz entretenimento, alimento para o coração e a alma. Talvez você apenas saiba entoar belas canções, aprendidas na infância com pais amorosos, ou ouvindo fadas na floresta. Ou talvez seja um ator ou dançarino formado em alguma escola de artes prestigiada.</p>
        <p><b>Itens.</b>Estojo de disfarces ou um instrumento musical a sua escolha.</p>
        <p><b>Benefícios.</b> Atuação,  Enganação  (perícias); Atraente, Dom Artístico, Sortudo, Torcida (poderes).</h4>
        <h4>Dom artístico</h4>
        <p>Você recebe +2 em testes de Atuação, e recebe o dobro de tibares em apresentações</p>`,
        referencias:Referencia.BASICO ,
        paginas:'86 e 87'
      },
      {
        id: 7,
        nome: 'Assistente de Laboratório',
        regiao: 'Geral',
        descricao: `
        <p>Você atuou como ajudante para um alquimista, inventor ou mago. Costumava tomar notas, limpar o laboratório, arrumar as ferramentas, vasculhar mercados em busca de ingredientes exóticos, recapturar a aberração antinatural que fugiu da jaula... enfim, não era o trabalho mais fácil, limpo ou seguro do mundo. Exposição prolongada a substâncias e experimentos perigosos talvez tenham prejudicado sua saúde (ou despertado suas habilidades de classe...).</p>
        <p><b>Itens.</b>Instrumentos de Ofício (alquimista)</p>
        <p><b>Benefícios.</b> Ofício  (alquimista),  Misticismo (perícias); Esse Cheiro..., Venefício, um poder da Tormenta a sua escolha (poderes).</p>
        <h4>Esse Cheiro..</h4>
        <p>Você recebe +2 em Fortitude e detecta automaticamente a presença (mas não a localização ou natureza) de itens alquímicos em alcance curto.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'87 e 88'
      },
      {
        id: 8,
        nome: 'Capanga',
        regiao: 'Geral',
        descricao: `
        <p>Agilidade e esperteza são importantes no mundo do crime, mas não são tudo; às vezes é preciso esmurrar alguém. Por ser grande, forte ou mal-encarado, você acabou trabalhando como músculos para algum bandido, ou integrando um bando, quadrilha ou guilda de ladrões. Talvez você não fosse muito bom em bater carteiras nas ruas de Ahlen, mas sabia erguer alguém pelo tornozelo e sacudir até as moedas caírem. Hoje, como aventureiro, você provavelmente deixou essa época para trás — pelo menos até que alguém precise ser “convencido” a colaborar</p>
        <p><b>Itens.</b>Tatuagem ou outro adereço de sua gangue (+1 em Intimidação), uma arma simples corpo
        a corpo.</p>
        <p><b>Benefícios.</b> Luta, Intimidação (perícias); Confissão, um poder de combate a sua escolha (poderes).</p>
        <h4>Confissão</h4>
        <p>Você pode usar Intimidação para interrogar sem custo e em uma hora (veja Investigação).</p>`,
        referencias:Referencia.BASICO ,
        paginas:'88'
      },
      {
        id: 9,
        nome: 'Charlatão',
        regiao: 'Geral',
        descricao: `
        <p>Você sempre teve talento para resolver problemas com conversa, sincera ou nem tanto. Talvez tenha aprendido andando com más companhias. Por ser pequeno e fraco em meio a guerreiros truculentos, talvez fosse pura questão de sobrevivência. Ou foi tocado por Hyninn, Sszzaas ou outra entidade traiçoeira. Seja como for, após um pouco de diálogo, você percebe o que as pessoas mais querem ou temem, usando palavras para vencer obstáculos tão facilmente quanto espadas e magias. Ou melhor.</p>
        <p><b>Itens.</b> Estojo de disfarces, joia falsificada (valor aparente de T$ 100, sem valor real).</p>
        <p><b>Benefícios.</b>Enganação, Jogatina (perícias); Alpinista Social, Aparência Inofensiva, Sortudo (poderes).</p>
        <h4>Alpinista Social</h4>
        <p>Você pode substituir testes de Diplomacia por testes de Enganação</p>`,
        referencias:Referencia.BASICO ,
        paginas:'88 e 89'
      },
      {
        id: 10,
        nome: 'Circense',
        regiao: 'Geral',
        descricao: `
        <p>Você treinou acrobacia, malabarismo, mágica ou outra forma de arte circense. Talvez tenha aprendido sozinho, durante as brincadeiras de infância. Talvez tenha sido ensinado por um ente querido, tornando essa arte uma forte ligação com seu passado. Ou ainda, é possível que tenha sido forçado a aprender seus truques para sobreviver nas ruas. De qualquer forma, são aptidões que podem ser úteis em suas aventuras.</p>
        <p><b>Itens.</b> Três bolas coloridas para malabarismo (+1 em Atuação).</p>
        <p><b>Benefícios.</b>  Acrobacia,   Atuação,   Reflexos (perícias);  Acrobático,  Torcida,  Truque  de  Mágica (poderes).</p>
        <h4>Truque de Mágica</h4>
        <p>Você pode lançar Explosão de Chamas, Hipnotismo e Queda Suave, mas apenas com o aprimoramento Truque. Esta não é uma habilidade mágica — os efeitos provêm de prestidigitação.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'89'
      },
      {
        id: 11,
        nome: 'Criminoso',
        regiao: 'Geral',
        descricao: `
        <p>Fazer o bem é bonito, mas não enche barriga — pelo menos, assim você foi ensinado. Por necessidade, ambição ou apenas sem conhecer outra vida, você foi um bandido durante boa parte da juventude. Furtava bolsas, trapaceava em jogos de taverna, emboscava viajantes nas estradas ou até aceitava contratos para matar. Agia sozinho, com seu próprio bando, pertencia a uma guilda de ladrões. Tornar-se aventureiro talvez seja uma forma de expiar por seus crimes, ou apenas o passo seguinte; em vez de mercadores, roubar tesouros de dragões!</p>
        <p><b>Itens.</b>Estojo de disfarces ou gazua.</p>
        <p><b>Benefícios.</b>. Enganação, Furtividade, Ladinagem (perícias); Punguista, Venefício (poderes).</p>
        <h4>Punguista</h4>
        <p>Você pode fazer testes de Ladinagem para sustento (como a perícia Ofício), mas em apenas um dia. Se passar, recebe o dobro do dinheiro, mas, se falhar, pode ter problemas com a lei (a critério do mestre).</p>`,
        referencias:Referencia.BASICO ,
        paginas:'89'
      },
      {
        id: 12,
        nome: 'Curandeiro',
        regiao: 'Geral',
        descricao: `
        <p>Que bom seria se a cura milagrosa dos clérigos estivesse ao alcance de todos! Talvez você tenha sido ajudante do curandeiro da vila, testemunhando quando ele tratava doenças e lesões sem conjurar qualquer magia. Ou teve um estudo formal e sofisticado de medicina no Colégio Real de Médicos em Salistick. De qualquer modo, você é treinado em curar com remédios e tratamentos naturais — algo sempre útil, mesmo quando há um clérigo por perto.</p>
        <p><b>Itens.</b> Bálsamo restaurador x2, maleta de medicamentos.</p>
        <p><b>Benefícios.</b> Cura, Vontade (perícias); Medicina, Médico de Campo, Venefício (poderes).</p>
        <h4>Médico de Campo</h4>
        <p>Você soma sua Sabedoria aos PV restaurados por suas habilidades e itens mundanos de cura.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'89'
      },
      {
        id: 13,
        nome: 'Eremita',
        regiao: 'Geral',
        descricao: `
        <p>Você passou parte da vida isolado, afastado da sociedade. Foi banido ainda criança, por nascer lefou ou com alguma deformidade da Tormenta. Ouviu um chamado dos deuses, buscando o isolamento para meditar sobre seu significado. Viveu enclausurado em um mosteiro, mantendo contato apenas com monges silenciosos. Ou foi praticante de artes arcanas proibidas, mantendo-se longe de olhares curiosos. A vida simples o tornou forte de corpo e espírito. Mas, em algum momento, você decidiu que bastava — ou teve sua tranquilidade interrompida.</p>
        <p><b>Itens.</b> Barraca, equipamento de viagem.</p>
        <p><b>Benefícios.</b> Misticismo, Religião, Sobrevivência (perícias); Busca Interior, Lobo Solitário (poderes).</p>
        <h4>Busca Interior</h4>
        <p>Quando você e seus companheiros estão diante de um mistério, incapazes de prosseguir, você pode gastar 1 PM para meditar sozinho durante algum tempo e receber uma dica do mestre.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'89'
      },
      {
        id: 14,
        nome: 'Escravo',
        regiao: 'Geral',
        descricao: `
        <p>De minotauros odiosos no Império de Tauron aos cruéis mestres subterrâneos de Trollkyrka, várias culturas praticam a escravidão. Você já nasceu escravo, fez parte de um povo derrotado na guerra ou foi capturado em alguma rua escura para depois despertar na jaula, em algum mercado clandestino? Encontrou uma chance de escapar, tornando-se agora um escravo foragido? Recebeu a liberdade como recompensa por realizar um grande favor a seu algoz? Foi resgatado por aventureiros que agora se tornaram sua nova família?</p>
        <p><b>Itens.</b>Algemas, uma ferramenta pesada (mesmas estatísticas de uma maça).</p>
        <p><b>Benefícios.</b>Atletismo, Fortitude, Furtividade (perícias); Desejo de Liberdade, Vitalidade (poderes).</p>
        <h4>Desejo de Liberdade</h4>
        <p>Ninguém voltará a torná-lo um escravo! Você recebe +5 em testes contra a manobra agarrar e efeitos de movimento.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'89 e 90'
      },
      {
        id: 15,
        nome: 'Estudioso',
        regiao: 'Geral',
        descricao: `
        <p>Não importa se você já nasceu apaixonado por certo assunto, testemunhou um evento incrível que atiçou sua curiosidade ou se viu forçado a estudar por imposição familiar. Longos anos de sua vida foram gastos em meio a livros e pergaminhos. Da engenharia dos anões à geopolítica do Reinado, das táticas militares puristas aos sistemas de conjuração da Academia Arcana, da anatomia dos dragões aos enigmas cósmicos da Tormenta... em Arton não faltam campos a conquistar, segredos a desvendar. Agora, como aventureiro, você tem a chance de vivenciar aquilo que aprendeu e também auxiliar o grupo com o fruto de seus estudos.</p>
        <p><b>Itens.</b>Coleção de livros (+1 em Conhecimento, Guerra, Misticismo ou Nobreza, a sua escolha).</p>
        <p><b>Benefícios.</b>Conhecimento, Guerra, Misticismo (perícias); Aparência Inofensiva, Palpite Fundamentado (poderes)..</p>
        <h4>Palpite Fundamentado</h4>
        <p>Você pode gastar 2 PM para substituir um teste de qualquer perícia originalmente baseada em Inteligência ou Sabedoria por um teste de Conhecimento.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'90'
      },
      {
        id: 16,
        nome: 'Fazendeiro',
        regiao: 'Geral',
        descricao: `
        <p>Boa parte da população de Arton jamais conheceu outro modo de viver. Em algum lugar na perigosa transição entre os ermos e as cidades, você trabalhou duro em campos e fazendas. Cultivando a terra ou criando animais, viveu longos anos em contato com a natureza, orando e trabalhando por boas colheitas ou gado saudável, só ocasionalmente visitando povoados para negociar sua produção. Por que essa vida tranquila acabou? Sua família foi assassinada por goblins? Sua fazenda foi devastada por um dragão? Ou você apenas foi atraído pelo chamado da aventura?</p>
        <p><b>Itens.</b>Carroça, uma ferramenta agrícola (mesmas estatísticas de uma lança), 10 rações de viagem, um animal não combativo (como uma galinha, porco ou ovelha).</p>
        <p><b>Benefícios.</b> Adestramento, Cavalgar, Ofício, Sobrevivência  (perícias);  Água  no  Feijão,  Ginete (poderes).</p>
        <h4>Água no Feijão</h4>
        <p>Você não sofre a penalidade de –5 e não gasta matéria prima adicional para fabricar pratos para cinco pessoas.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'90'
      },
      {
        id: 17,
        nome: 'Forasteiro',
        regiao: 'Geral',
        descricao: `
        <p>Você veio de longe. Sua cultura nativa é quase ou totalmente desconhecida no Reinado, tornando-o uma  figura  exótica,  de  hábitos  estranhos.  Você pertence a uma tribo perdida nas Montanhas Sanguinárias? Nasceu em uma bela cidade de cúpulas douradas no Deserto da Perdição? Navegou em navios audazes desde os Reinos de Moreania? Talvez você até tenha chegado de outro mundo, através de algum portal mágico. Será que conseguiu ajustar-se a este Reinado, agora chamando-o de lar? Ou procura até hoje o caminho de volta para casa?</p>
        <p><b>Itens.</b> Equipamento de viagem, instrumento musical exótico (+1 em uma perícia de Carisma aprovada pelo mestre), traje estrangeiro.</p>
        <p><b>Benefícios.</b> Cavalgar, Pilotagem, Sobrevivência  (perícias);  Cultura  Exótica,  Lobo  Solitário (poderes).</p>
        <h4>Cultura Exótica</h4>
        <p>Por sua diferente visão de mundo, você encontra soluções inesperadas. Você pode gastar 1 PM para fazer um teste de perícia somente treinada, mesmo sem ser treinado na perícia.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'90'
      },
      {
        id: 18,
        nome: 'Gladiador',
        regiao: 'Geral',
        descricao: `
        <p>Combates de arena são um entretenimento popular em Arton — a ponto de atrair muitos jovens praticantes. Podem ser combates até a morte ou apenas encenações elaboradas ou ainda corridas de cavalo, arquearia e outros esportes menos sangrentos. Você se envolveu nesse mundo glamoroso por ser tradição em sua família, por admirar algum gladiador renomado ou apenas por sede de fama e fortuna. Um evento traumático, uma desilusão ou o puro tédio levou você a abandonar as arenas e aplausos, usando sua experiência em torneios para viver aventuras.</p>
        <p><b>Itens.</b> Uma arma marcial ou exótica, um item sem valor recebido de um admirador.</p>
        <p><b>Benefícios.</b> Atuação, Luta (perícias); Atraente, Pão e Circo, Torcida, um poder de combate a sua escolha (poderes).</p>
        <h4>Pão e Circo</h4>
        <p>Por seu treino em combates de exibição, você sabe “bater sem machucar”. Pode escolher causar dano não letal sem sofrer a penalidade de –5.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'90 e 91'
      },
      {
        id: 19,
        nome: 'Guarda',
        regiao: 'Geral',
        descricao: `
        <p>Você atuou como agente da lei em uma vila ou cidade. Nem de longe uma profissão tão glamorosa ou emocionante quanto parece; boa parte de seu trabalho resumia-se a guardar um portão, fazer rondas tediosas ou recolher bêbados em tavernas. Pelo menos você recebeu algum treino em investigação e combate. Também tem consigo alguma boa arma, que “esqueceu” de devolver quando abandonou a milícia para se tornar aventureiro.</p>
        <p><b>Itens.</b> Apito, insígnia da milícia, uma arma marcial.</p>
        <p><b>Benefícios.</b> Investigação, Luta, Percepção (perícias);  Detetive,  Investigador,  um  poder  de combate a sua escolha (poderes).</p>
        <h4>Detetive</h4>
        <p>Você pode gastar 1 PM para substituir testes de Percepção e Intuição por testes de Investigação até o fim da cena.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'91'
      },
      {
        id: 20,
        nome: 'Herdeiro',
        regiao: 'Geral',
        descricao: `
        <p>Você pertence a uma linhagem de nobres, mercadores, conjuradores, acadêmicos, assassinos, ou outra atividade tradicional em sua família — tão tradicional que, de você, não se espera outra coisa. Pode ser uma longa e antiquíssima ascendência, traçada até antes da Grande Batalha, ou você apenas é filho de uma importante personalidade. Talvez tenha nascido em alguma ordem de cavalaria em Bielefeld, ou uma influente estirpe da nobreza de Deheon, ou como filho de um célebre arquimago com planos de enviá-lo à Academia Arcana, ou até cresceu em um culto familiar secreto a um deus maligno. Graças a essa herança, recebeu treino e equipamento adequados. Mas você pretende mesmo seguir esse caminho?</p>
        <p><b>Itens.</b> Um símbolo de sua herança, como um anel de sinete ou manto cerimonial. Enquanto estiver com esse item, você pode ser reconhecido por sua descendência, o que pode ser bom... ou não!</p>
        <p><b>Benefícios.</b> Misticismo, Nobreza, Ofício (perícias); Comandar, Herança (poderes).</p>
        <h4>Herança</h4>
        <p>Você herdou um item de preço de até T$ 1.000. Você pode escolher este poder duas vezes, para um item de até T$ 2.000.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'91'
      },
      {
        id: 21,
        nome: 'Herói Camponês',
        regiao: 'Geral',
        descricao: `
        <p>Quando o povoado foi atacado por goblins, você empunhou o forcado para expulsá-los. Quando o estábulo pegou fogo, você se arriscou para salvar todos os animais. Quando todos temiam a mansão assombrada na colina, você encontrou a carta de amor perdida que trouxe descanso à alma torturada. Você era o campeão local, amado pelo povo, mas também destinado a feitos maiores. Houve comoção quando você partiu para uma vida de aventuras, mas ninguém deixou de orar por seu sucesso. Talvez você até tenha sido presenteado com alguma arma ou item há tempos guardado no povoado.</p>
        <p><b>Itens.</b> Instrumentos de ofício ou uma arma simples, traje de plebeu.</p>
        <p><b>Benefícios.</b> Adestramento, Ofício (perícias); Coração Heroico, Sortudo, Surto Heroico, Torcida (poderes).</p>
        <h4>Coração Heroico</h4>
        <p>Você recebe +3 pontos de mana. Quando atinge um novo patamar (no 5º, 11º e 17º níveis), recebe +3 PM.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'91 e 92'
      },
      {
        id: 22,
        nome: 'Marujo',
        regiao: 'Geral',
        descricao: `
        <p>Você foi tripulante em uma embarcação — um barco pesqueiro, galé pirata, caravela exploradora, trirreme dos minotauros... — no Mar Negro, no Mar do Dragão Rei ou mesmo ao longo do imenso Rio dos Deuses. Você também pode ter trabalhado em um veículo exótico, como um dirigível goblin, ou mesmo em uma embarcação mágica, como as naves vivas gog’magogue que viajam entre mundos!</p>
        <p><b>Itens.</b> T$ 2d6 (seu último salário), corda.</p>
        <p><b>Benefícios.</b> Atletismo, Jogatina, Pilotagem (perícias); Acrobático, Passagem de Navio (poderes).</p>
        <h4>Passagem de Navio</h4>
        <p>Você consegue transporte marítimo para você e seus aliados, sem custos, desde que todos paguem com trabalho (passar em pelo menos um teste de perícia adequado durante a viagem).`,
        referencias:Referencia.BASICO ,
        paginas:'92'
      },
      {
        id: 23,
        nome: 'Mateiro',
        regiao: 'Geral',
        descricao: `
        <p>Nem todos em Arton vivem em cidades confortavelmente abastecidas por fazendeiros, mineiros ou pescadores — muitas comunidades ainda obtêm sustento através da caça. Você aprendeu cedo a abater animais selvagens para colocar comida na mesa, ou como esporte de gosto duvidoso. Se você caça com reverência a Allihanna ou apenas coleciona troféus com orgulho, a escolha é sua. De qualquer forma, para alguém habituado a flechar cervos e colocar armadilhas para coelhos, combater ogros, demônios e dragões seria apenas o passo seguinte.</p>
        <p><b>Itens.</b> Arco curto, barraca, equipamento de viagem, 20 flechas.</p>
        <p><b>Benefícios.</b> Atletismo, Furtividade, Sobrevivência (perícias); Lobo Solitário, Sentidos Aguçados, Vendedor de Carcaças (poderes).</p>
        <h4>Vendedor de Carcaças</h4>
        <p>Você pode extrair recursos de criaturas em um minuto, em vez de uma hora, e recebe +5 no teste.`,
        referencias:Referencia.BASICO ,
        paginas:'92'
      },
      {
        id: 24,
        nome: 'Membro de Guilda',
        regiao: 'Geral',
        descricao: `
        <p>Você foi, ou ainda é, membro atuante em uma grande guilda — uma associação de artesãos, mercadores, magos, criminosos ou mesmo aventureiros. A guilda forneceu o treinamento e equipamento necessários para suas atividades, esperando que você seja útil em troca. Você se manteve fiel a seus patronos, cumprindo missões e colhendo os benefícios de pertencer a uma vasta organização? Ou deixou essa vida para trás, sendo agora desprezado ou até caçado por seus antigos mestres?</p>
        <p><b>Itens.</b>  Gazua ou instrumentos de ofício.</p>
        <p><b>Benefícios.</b> Diplomacia, Enganação,   Misticismo,   Ofício   (perícias); Foco em Perícia, Rede de Contatos (poderes).</p>
        <h4>Rede de Contatos</h4>
        <p>Graças à influência de sua guilda, você pode usar Diplomacia para interrogar sem custo e em uma hora (veja Investigação).`,
        referencias:Referencia.BASICO ,
        paginas:'92'
      },
      {
        id: 25,
        nome: 'Mercador',
        regiao: 'Geral',
        descricao: `
        <p>Seguindo uma tradição de família, após herdar um estabelecimento ou apenas como um jovem empregado, você atuou como comerciante — pelo menos por algum tempo. Uma tenda modesta em algum grande mercado urbano? Uma caravana mercante cruzando o Reinado? Um belo bazar na prestigiada cidade voadora de Vectora? Após alguns anos de negociações e jornadas (nem tão tranquilas quanto outros imaginam), você talvez não tenha ficado rico, mas reuniu algum equipamento e dinheiro suficientes para começar carreira como aventureiro.</p>
        <p><b>Itens.</b> Carroça, trobo, mercadorias para vender no valor de T$ 100.</p>
        <p><b>Benefícios.</b>  Diplomacia, Intuição, Ofício (perícias); Negociação, Proficiência, Sortudo (poderes).</p>
        <h4>Negociação</h4>
        <p>Você  pode  vender  itens  10%  mais  caro  (não cumulativo com barganha).`,
        referencias:Referencia.BASICO ,
        paginas:'93'
      },
      {
        id: 26,
        nome: 'Minerador',
        regiao: 'Geral',
        descricao: `
        <p>Ser aventureiro é a profissão mais perigosa de todas; ser mineiro, talvez a segunda mais perigosa. Você mergulhou nas profundezas da terra atrás de metais necessários à civilização ou riquezas em gemas preciosas. Enquanto humanos e outras raças consideram essa vida um pesadelo, quase todos os anões acreditam ser a mais feliz das carreiras. A escuridão e o sufocamento dos subterrâneos talvez tenham sido assustadores, mas trouxeram a você bens materiais valiosos, bem como informação profunda (sem trocadilhos) sobre túneis e masmorras.</p>
        <p><b>Itens.</b> Gemas preciosas no valor de T$ 100, picareta.</p>
        <p><b>Benefícios.</b>  Atletismo, Fortitude, Ofício (minerador) (perícias); Ataque Poderoso, Escavador, Sentidos Aguçados (poderes).</p>
        <h4>Escavador</h4>
        <p>Você se torna proficiente em picaretas, causa +1 de dano com elas e não é afetado por terreno difícil em masmorras e subterrâneos.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'93'
      },
      {
        id: 27,
        nome: 'Nômade',
        regiao: 'Geral',
        descricao: `
        <p>Até onde se lembra, você nunca pertenceu a um só lugar. Sua família viajava constantemente, como parte de alguma grande caravana comercial, peregrinação religiosa ou algum povo primitivo que nunca praticou agricultura. Ou talvez suas razões para viajar sejam bastante diferentes e pessoais — após a quase extinção de seu povo, muitos elfos temem criar raízes, enquanto a deusa Valkaria exige que seus devotos se mantenham sempre em viagem. Para você, habituado às estradas e sem laços com nenhuma terra, bastou um pequeno passo para se tornar aventureiro.</p>
        <p><b>Itens.</b> Bordão, equipamento de viagem.</p>
        <p><b>Benefícios.</b>  Cavalgar, Pilotagem, Sobrevivência (perícias); Lobo Solitário, Mochileiro, Sentidos Aguçados (poderes).</p>
        <h4>Mochileiro</h4>
        <p>Seu limite de carga aumenta em 5 espaços.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'93'
      },
      {
        id: 28,
        nome: 'Pivete',
        regiao: 'Geral',
        descricao: `
        <p>Você era uma criança de rua. Não conheceu seus pais, foi abandonado por eles ou fugiu para evitar maus tratos. Sem muitas escolhas na vida, aprendeu cedo a sobreviver em grandes cidades, pedindo esmolas, roubando bolsas ou cumprindo pequenas tarefas para bandidos. Tornar-se aventureiro não parecia apenas um jeito de ficar rico e famoso, mas também a única chance de uma vida melhor. Talvez você não tenha as armaduras e mantos chiques de seus companheiros, mas sabe se virar nas ruas melhor que ninguém.</p>
        <p><b>Itens.</b> Gazua, traje de plebeu, um animal urbano (como um cão, gato, rato ou pombo).</p>
        <p><b>Benefícios.</b>  Furtividade, Iniciativa, Ladinagem (perícias); Acrobático, Aparência Inofensiva, Quebra-Galho (poderes).</p>
        <h4>Quebra-galho</h4>
        <p>Em cidades ou metrópoles, você pode comprar qualquer item mundano não superior por metade do preço normal. Esses itens não podem ser matérias-primas e não podem ser revendidos (são velhos, sujos, furtados...).</p>`,
        referencias:Referencia.BASICO ,
        paginas:'93'
      },
      {
        id: 29,
        nome: 'Refugiado',
        regiao: 'Geral',
        descricao: `
        <p>Neste mundo assolado por tantas guerras e tragédias, você acabou sobrevivendo a alguma delas. Sendo elfo, estava presente durante a sofrida queda de Lenórienn. Escapou à destruição de Tamu-ra. Teve sorte em sair do caminho de Mestre Arsenal, conseguiu esconder-se das forças puristas ou testemunhou a chegada da Flecha de Fogo e viveu para contar a história. Trauma e privações talvez tenham tornado você amargo, sombrio, embrutecido... mas também um sobrevivente tenaz, acostumado a uma vida perigosa.</p>
        <p><b>Itens.</b>  Um item estrangeiro de até T$ 100.</p>
        <p><b>Benefícios.</b>  Fortitude,   Reflexos,   Vontade (perícias); Estoico, Vontade de Ferro (poderes).</p>
        <h4>Estoico</h4>
        <p>Sua condição de descanso é uma categoria acima do padrão pela situação (normal em condições ruins, confortável em condições normais e luxuosa em condições confortáveis ou melhores). Veja as regras de recuperação na página 106.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'93 e 94'
      },
      {
        id: 30,
        nome: 'Seguidor',
        regiao: 'Geral',
        descricao: `
        <p>Você não nasceu herói, mas viveu algum tempo na companhia de um. Pode ter sido escudeiro de um cavaleiro de Khalmyr, garoto de recados para um ladino, criado de um nobre... enfim, um ajudante para um aventureiro de verdade. Durante esse tempo adquiriu aprendizado valioso, testemunhou eventos incríveis, mas você não seria um seguidor para sempre. Como ocorreu a separação? Você apenas disse adeus e trilhou seu próprio caminho? Seu mestre desapareceu de forma misteriosa ou foi assassinado diante de seus olhos? Você ficou com parte de seus itens, como presente ou lembrança?</p>
        <p><b>Itens.</b>  Um item recebido de seu mestre de até T$ 100.</p>
        <p><b>Benefícios.</b>  Adestramento,  Ofício  (perícias); Antigo Mestre, Proficiência, Surto Heroico (poderes).</p>
        <h4>Antigo Mestre</h4>
        <p>Você ainda mantém contato com o herói que costumava servir. Uma vez por aventura, ele surge para ajudá-lo por uma cena. Ele é um parceiro mestre de um tipo a sua escolha (definido ao obter este poder) que não conta em seu limite de aliados.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'94'
      },
      {
        id: 31,
        nome: 'Selvagem',
        regiao: 'Geral',
        descricao: `
        <p>Você nasceu em uma tribo de bárbaros incultos ou tem uma origem bem mais exótica. Perdeu-se dos pais verdadeiros em alguma região remota, sobrevivendo graças aos cuidados de um eremita, ou criado por animais, ou por pura bondade dos deuses. Você pode nem mesmo ter nascido de pais humanoides — talvez seja cria de dragões, demônios ou deuses, com poderes a serem revelados no momento certo. Será que você ainda teme a civilização, assustando-se com uma simples fogueira? Ou já aprendeu algumas coisas, graças a seus novos companheiros?</p>
        <p><b>Itens.</b>  Uma arma simples, um pequeno animal de estimação como um pássaro ou esquilo.</p>
        <p><b>Benefícios.</b>  Percepção,  Reflexos,  Sobrevivência  (perícias);  Lobo  Solitário,  Vida  Rústica, Vitalidade (poderes).</p>
        <h4>Vida Rústica</h4>
        <p>Você come coisas que fariam um avestruz vomitar (sendo imune a efeitos prejudiciais de itens ingeríveis) e também consegue descansar nos lugares mais desconfortáveis (mesmo dormindo ao relento, sua recuperação de PV e PM nunca é inferior a seu próprio nível).</p>`,
        referencias:Referencia.BASICO ,
        paginas:'94'
      },
      {
        id: 32,
        nome: 'Soldado',
        regiao: 'Geral',
        descricao: `
        <p>Deheon. Bielefeld. A Supremacia Purista. Em Arton existem vastas forças militares. Ainda jovem, você se alistou (ou foi convocado) como soldado em um grande exército. Independentemente de sua função exata dentro da máquina de guerra — infantaria, cavalaria, arqueiro, cozinheiro... —, você recebeu treinamento em combate e equipamento decente. Mas em alguma ocasião você abandonou a vida militar para se tornar aventureiro. Foi dispensado com honras, após uma grande façanha? Sobreviveu a um conflito sangrento? Desertou antes de um massacre?</p>
        <p><b>Itens.</b>  Uma arma marcial, um uniforme militar, uma insígnia de seu exército.</p>
        <p><b>Benefícios.</b>   Fortitude, Guerra, Luta, Pontaria (perícias); Influência Militar, um poder de combate a sua escolha (poderes).</p>
        <h4>Influência Militar</h4>
        <p>Você fez amigos nas forças armadas. Onde houver acampamentos ou bases militares, você pode conseguir hospedagem e informações para você e seus aliados.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'94'
      },
      {
        id: 33,
        nome: 'Taverneiro',
        regiao: 'Geral',
        descricao: `
        <p>Não é incomum que heróis aposentados se tornem donos de tavernas ou estalagens, mas o contrário também pode ocorrer. Você foi dono, filho do dono ou empregado em algum lugar frequentado por aventureiros — esses tipos sempre cheios de ouro e bravatas, atiçando sua ambição. Claro, eles nem sempre mencionam os horrores, amputações e mortes! Ainda assim, parece bem melhor que a vida atrás do balcão, limpando canecas sujas. Você ouviu todas as grandes histórias, trocou socos em algumas brigas e até ganhou uma lembrança ou outra de algum herói bêbado.</p>
        <p><b>Itens.</b>  Rolo de macarrão ou martelo de carne (mesmas estatísticas de uma clava), uma panela, um avental, uma caneca e um pano sujo.</p>
        <p><b>Benefícios.</b>   Diplomacia, Jogatina, Ofício (cozinheiro) (perícias); Gororoba, Proficiência, Vitalidade (poderes).</p>
        <h4>Gororoba</h4>
        <p>Você não sofre a penalidade de –5 para fabricar um prato especial adiconal.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'94 E 95'
      },
      {
        id: 34,
        nome: 'Trabalhador',
        regiao: 'Geral',
        descricao: `
        <p>Nenhum glamour aqui, apenas trabalho braçal pesado. De origem humilde, sem grandes chances na vida, você trabalhou duro desde muito jovem. Transportou pedras na construção de templos e castelos, carregou sacas de grãos em fazendas, empilhou cargas em portos, puxou arado feito um animal de tração. Talvez sua vida tenha sido um pouco melhor, como servo em um palácio. Ou muito pior, arrastando ou queimando corpos em campos de batalha. Não é surpresa que a carreira como aventureiro, mesmo perigosa, tenha parecido muito mais atraente.</p>
        <p><b>Itens.</b>  Uma ferramenta pesada (mesmas estatísticas de uma maça ou lança, a sua escolha).</p>
        <p><b>Benefícios.</b>    Atletismo, Fortitude (perícias); Atlético, Esforçado (poderes).</p>
        <h4>Esforçado</h4>
        <p>Você não teme trabalho duro, nem prazos apertados. Você  recebe  um  bônus  de  +2 em todos os testes de perícias estendidos (incluindo perigos complexos).</p>`,
        referencias:Referencia.BASICO ,
        paginas:'95'
      },
      {
        id: 35,
        nome: 'Batedor',
        regiao: 'Geral',
        descricao: `
        <p>Seja conduzindo caravanas através dos reinos, rastreando inimigos nos campos de batalha ou guiando exploradores nas vastidões selvagens, você aprendeu a achar caminhos e dirigir outros com segurança. Batedores podem surgir nas tribos mais primitivas, acompanhando grupos de caça, como profissionais sofisticados nas grandes cidades e forças militares ou ainda na perigosa atividade de caça-recompensas. Pouco importando a carreira que adotou mais tarde, como aventureiro, seu antigo treino acaba se revelando útil em numerosas ocasiões.</p>
        <p><b>Itens.</b>   Barraca, equipamento de viagem, uma arma simples ou marcial de ataque à distância.</p>
        <p><b>Benefícios.</b>    Furtividade, Percepção, Sobrevivência (perícias); À Prova de Tudo, Estilo de Disparo, Sentidos Aguçados (poderes).</p>
        <h4>À Prova de Tudo</h4>
        <p>Você não sofre penalidade em deslocamento e Sobrevivência por clima ruim e por terreno difícil natura</p>`,
        referencias:Referencia.BASICO ,
        paginas:'88'
      },
      {
        id: 36,
        nome: 'Agricultor de Sambur',
        regiao: 'Sambúrdia',
        descricao: `
        <p>Você trabalhou nos campos férteis das Repúblicas Livres, onde aprendeu muito sobre os animais, a natureza e o trabalho duro..</p>
        <p><b>Itens.</b>  Ferramenta agrícola (mesmas estatísticas de uma lança), T$ 100 (um presente de despedida da sua família).</p>
        <p><b>Benefícios.</b>  Você é treinado em Adestramento e Sobrevivência e, uma vez por cena, pode gastar 1 PM para receber +1d6 em um teste de perícia.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'470'
      },
      {
        id: 37,
        nome: 'Amazone de Hippion',
        regiao: 'Deheon, Namalkah',
        descricao: `
        <p>Você é uma das orgulhosas amazonas de Hippion, um dos povos nativos de Arton Norte.</p>
        <p><b>Itens.</b> Arma simples ou marcial, cavalo de guerra.</p>
        <p><b>Benefícios.</b> Você é treinada em Cavalgar e, se não estiver usando armadura pesada, soma seu Carisma nos PM, limitado pelo seu nível (apenas após um dia).</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'470'
      },
      {
        id: 38,
        nome: 'Amóque Púrpura',
        regiao: 'Ermos Púrpuras',
        descricao: `
        <p>Raiva compele os golpes de guerreiros por todo o mundo, mas nos Ermos Púrpuras a prática é refinada ao limite. Você cresceu entre esses lutadores imprevisíveis.</p>
        <p><b>Itens.</b> Arma simples, estandarte da sua tribo.</p>
        <p><b>Benefícios.</b> Você é treinado em Intimidação e, quando está sob efeito de Fúria, Fúria Divina ou Poder Oculto, recebe +2 em rolagens de dano.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'470'
      },
      {
        id: 39,
        nome: 'Anão de Armas',
        regiao: 'Doherimm',
        descricao: `
        <p>Você foi treinado pela Guilda dos Armeiros, tendo aprendido a fabricar — e usar — armas anãs.</p>
        <p><b>Itens.</b> Arma marcial tradicional anã, instrumentos de Ofício (armeiro).</p>
        <p><b>Benefícios.</b> Você é treinado em Ofício (armeiro) e recebe +2 em rolagens de dano com armas tradicionais anãs (machados, martelos, marretas e picaretas).</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'470'
      },
      {
        id: 40,
        nome: 'Andarilho Ubaneri',
        regiao: 'Ubani',
        descricao: `
        <p>Sonhando um dia ser membro da Patrulha da Fronteira, você pratica técnicas de lança e escudo e já conquistou a amizade de um alikunhá. </p>
        <p><b>Itens.</b> Escudo pesado, lança.</p>
        <p><b>Benefícios.</b> Você recebe um alikunhá, um parceiro iniciante que não conta em seu limite de parceiros (veja o quadro na página 471), e proficiência com escudos. Caso já tenha essa proficiência, o bônus na Defesa que seu escudo fornece aumenta em +1.</p>
        <h4>Alikunhá</h4>
        <p>Os elementais que acompanham os ubaneri são conhecidos como alikunhá. Cada um desses espíritos é ligado a um elemento e conta como um parceiro iniciante de um tipo a sua escolha entre os associados ao seu elemento. Ar: assassino, perseguidor ou vigilante; água: ajudante, guardião ou médico; fogo:atirador, combatente ou fortão; terra:combatente, guardião ou montaria; luz:guardião, médico ou vigilante; trevas: assassino, magivocador ou perseguidor.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'470'
      },
      {
        id: 41,
        nome: 'Aprendir de Dragoeiro',
        regiao: 'Sckharshantallas',
        descricao: `
        <p>Você aprendeu técnicas para enfrentar dragões tolos a ponto de entrar em Sckharshantallas — o que certamente será útil contra outras feras.</p>
        <p><b>Itens.</b> Arma simples ou marcial à sua escolha, troféu de caça, treckod</p>
        <p><b>Benefícios.</b> Você recebe +2 na Defesa contra criaturas maiores que você e +2 em Reflexos. Além disso, se passar em um teste de Reflexos, seus ataques contra a fonte do efeito causam +1d8 pontos de dano até o final da cena.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'470'
      },
      {
        id: 42,
        nome: 'Aprendiz de Drogadora',
        regiao: 'Galrasia',
        descricao: `
        <p>Você era discípula de uma voracis drogadora e estudou as artes de cura em Galrasia.</p>
        <p><b>Itens.</b> Bálsamo restaurador x2, poção de curar ferimentos x2, maleta de medicamentos.</p>
        <p><b>Benefícios.</b> Você é treinada em Cura e Ofício (alquimista). Como usa partes de seu corpo para fabricar preparados alquímicos e poções, você gasta apenas 1/4 do preço dos itens em matérias-primas.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'470'
      },
      {
        id: 43,
        nome: 'Aristocrata de Dai’zenshi',
        regiao: 'Tamu-ra',
        descricao: `
        <p>Você faz parte da nobreza tamuraniana, como descendente direto de um dos três Grandes Clãs ou como vassalo em alguma família samurai. Assim, é visto como um exemplo a ser seguido.</p>
        <p><b>Itens.</b> Traje da corte, katana superior com uma melhoria (exceto material especial).</p>
        <p><b>Benefícios.</b> Você é treinado em Nobreza. Além disso, ao completar um descanso, caso não tenha feito nenhum teste de Enganação, Furtividade ou Ladinagem desde seu último descanso, você recebe +1 PM temporário para cada dois níveis</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'471'
      },
      {
        id: 44,
        nome: 'Armeiro Armado',
        regiao: 'Zakharov',
        descricao: `
        <p>Você aprendeu o ofício mais tradicional e respeitado de Zakharov. Suas armas não são apenas instrumentos de combate, mas obras de arte.</p>
        <p><b>Itens.</b> Arma marcial, instrumentos de Ofício (armeiro).</p>
        <p><b>Benefícios.</b> Você é treinado em Ofício (armeiro) e pode fabricar armas com uma melhoria. Se aprender a fabricar armas superiores por outra habilidade, gasta apenas 1/4 do preço das melhorias que aplica em armas.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'471'
      },
      {
        id: 45,
        nome: 'Aspirante a Herói',
        regiao: 'Deheon',
        descricao: `
        <p>Você nasceu para ser herói, com potencial para se tornar protagonista das canções épicas dos bardos.</p>
        <p><b>Itens.</b> Essência de mana, mochila de aventureiro.</p>
        <p><b>Benefícios.</b> Você recebe +1 em um atributo à sua escolha.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'471'
      },
      {
        id: 46,
        nome: 'Assistente Forense',
        regiao: 'Salistick',
        descricao: `
        <p>Você cresceu em Salistick, onde teve contato com o que a ciência tem de mais avançado para a detecção e solução de crimes. Suas capacidades de dedução e análise se tornaram profundamente aguçadas.</p>
        <p><b>Itens.</b> Lupa (conta como uma ferramenta que fornece +1 em Investigação).</p>
        <p><b>Benefícios.</b> Você é treinado em Investigação e pode usar esta perícia para necropsia, identificar itens alquímicos e rastrear (veja as perícias Cura, Ofício e Sobrevivência, em Tormenta20). Além disso, pode identificar criaturas em uma cena de crime ou equivalente mesmo que elas não estejam mais presentes. Isso funciona como um teste de identificar criatura, com uma penalidade de –1 para cada dia decorrido. Se passar, além do normal, você identifica a raça da criatura.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'471'
      },
      {
        id: 47,
        nome: 'Bandoleiro da Fortaleza',
        regiao: 'Khalifor',
        descricao: `
        <p>Você cresceu se esgueirando pelos becos de Khalifor, vendo o pior que humanos e duyshidakk têm a oferecer.</p>
        <p><b>Itens.</b> Adaga, gazua, manto camuflado (urbano).</p>
        <p><b>Benefícios.</b> Você é treinado em Furtividade e Intimidação, e recebe resistência a medo +5.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'471'
      },
      {
        id: 48,
        nome: 'Barão Arruinado',
        regiao: 'Trebuck',
        descricao: `
        <p>Você estava destinado a se tornar o senhor de um feudo, mas seu título se perdeu. Pelo menos isso o ensinou a lidar com os reveses da vida.</p>
        <p><b>Itens.</b> Anel com símbolo da família (T$ 200), títulos de terras expirados (+2 em Diplomacia com nobres e burocratas), traje da corte.</p>
        <p><b>Benefícios.</b> Você é treinado em Nobreza. Sempre que falha em um teste de perícia e a falha acarreta uma consequência negativa (gastar uma ação, perder PV, sofrer um efeito etc.), você recebe +2 em testes da mesma perícia até o final da cena.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'471'
      },
      {
        id: 49,
        nome: 'Catador da Cidade Velha',
        regiao: 'Nova Malpetrim',
        descricao: `
        <p>As ruínas inundadas da Velha Malpetrim guardam riquezas, segredos e incontáveis perigos. Você cresceu vasculhando essas profundezas em busca do almoço do dia seguinte.</p>
        <p><b>Itens.</b> Luneta, luvas de pelica, tranqueiras resgatadas do mar (2 espaços, valor de venda T$ 100).</p>
        <p><b>Benefícios.</b> Você é treinado em Fortitude e Percepção e pode gastar 1 PM para receber deslocamento de natação igual ao seu deslocamento básico (se já tiver deslocamento de natação, em vez disso ele aumenta em +3m) por uma cena. Esse deslocamento não permite respirar debaixo d’água automaticamente, mas dobra o limite de tempo em que você pode segurar sua respiração.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'471 e 472'
      },
      {
        id: 50,
        nome: 'Cativo das Fadas',
        regiao: 'Pondsmânia',
        descricao: `
        <p>Quando era um bebê, você foi levado para a Pondsmânia. Talvez tenha sido trocado por seus pais em um acordo com uma fada, talvez tenha sido roubado pelas Cyruthnallach. De qualquer forma, sua infância foi permeada de brincadeiras bizarras e jogos feéricos.</p>
        <p><b>Itens.</b> Corda, ração de viagem x10, essência de mana.</p>
        <p><b>Benefícios.</b> Você recebe resistência a espíritos e magia +2 e +1 PV por nível de personagem.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'472'
      },
      {
        id: 51,
        nome: 'Competidor do Circuito',
        regiao: 'Trebuck',
        descricao: `
        <p>Você percorreu o grande Circuito de Torneios de Trebuck. Pode ter sido parte da equipe de um cavaleiro ou um aspirante a competidor, ansiando por um dia disputar os eventos principais. Sua hora ainda não chegou, mas enquanto isso você usa o que aprendeu em suas aventuras.</p>
        <p><b>Itens.</b> Arma marcial, T$ 100 (suas economias para comprar equipamentos de torneio).</p>
        <p><b>Benefícios.</b> Você recebe o poder Torcida. Enquanto está sob efeito desse poder, sempre que reduz um inimigo a 0 PV com um ataque corpo a corpo, você recupera 1 PM.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'472'
      },
      {
        id: 52,
        nome: 'Cosmopolita',
        regiao: 'Valkaria',
        descricao: `
        <p>Tendo crescido na maior cidade de Arton, você já viu de tudo e está preparado para a maior parte.</p>
        <p><b>Itens.</b> Equipamento de viagem, traje de viajante, um item artístico de origem cultural indefinida (½ espaço, T$ 100).</p>
        <p><b>Benefícios.</b>  Escolha um poder geral ou de uma classe na qual você tenha pelo menos dois níveis, e cujos requisitos você cumpra (exceto poderes concedidos ou da Tormenta). Você recebe esse poder. Uma vez por aventura, após concluir um descanso (oito horas de sono), pode trocar esse poder por outro.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'472'
      },
      {
        id: 53,
        nome: 'Cria de Favela',
        regiao: 'Valkaria',
        descricao: `
        <p>A Favela dos Goblins é um lugar empobrecido e injustiçado, esquecido pelos governantes de Valkaria. Essa comunidade o tornou resistente e incansável.</p>
        <p><b>Itens.</b> Andrajos de aldeão, corda, vara de madeira.</p>
        <p><b>Benefícios.</b> Você recebe +1 em Constituição e, por piores que sejam as condições de descanso, sua recuperação é sempre pelo menos normal.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'472'
      },
      {
        id: 54,
        nome: 'Criado pelas Voracis',
        regiao: 'Galrasia',
        descricao: `
        <p>Ainda jovem, você foi encontrado por um grupo de voracis em Galrasia. Elas o adotaram e o criaram de acordo com suas tradições e valores.</p>
        <p><b>Itens.</b> Arma simples, armadura leve, lança.</p>
        <p><b>Benefícios.</b>  Você recebe +2 na Defesa e Sobrevivência e +3m em seu deslocamento.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'472'
      },
      {
        id: 55,
        nome: 'De Outro Mundo',
        regiao: 'Éter Divino',
        descricao: `
        <p>Você veio de outro mundo através do Éter Divino. Como alternativa, pode ter chegado a Arton por uma tempestade de areia do Deserto da Perdição, via uma viagem planar de Vectora ou por qualquer outra forma mágica ou maluca.</p>
        <p><b>Itens.</b> Trajes exóticos, um item qualquer de até T$ 100 do seu mundo natal.</p>
        <p><b>Benefícios.</b> Você possui uma habilidade ou tecnologia especial de seu mundo de origem. Para representar esse efeito, escolha uma magia de 1º círculo e um atributo-chave para ela. Se for uma habilidade, você pode lançar essa magia. Se for uma tecnologia, você recebe um item Minúsculo (RD 10, PV iguais à metade dos seus) que ocupa 1 espaço e deve ser empunhado para lançar a magia, mas seu limite de PM para ela aumenta em +2. Por fim, escolha se o efeito será mágico ou mundano (nesse caso, não contará como uma magia, exceto para fins de acúmulo). O mestre tem a palavra final sobre qualquer efeito e combinação.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'472'
      },
      {
        id: 56,
        nome: 'Descendente Colleniano',
        regiao: 'Ahlen',
        descricao: `
        <p>Você descende do povo de Collen, um antigo reino insular absorvido por Ahlen. Sua linhagem tem olhos de cores incomuns, com alguns poucos chegando a apresentar poderes mágicos ligados à visão. Você é um desses poucos.</p>
        <p><b>Itens.</b> Arma simples, estojo de disfarces, ração de viagem x5.</p>
        <p><b>Benefícios.</b> Você recebe +2 em Percepção e pode lançar a magia Visão Mística. Caso aprenda essa magia novamente, seu custo diminui em –1 PM. e</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'473'
      },
      {
        id: 57,
        nome: 'Desertor da Supremacia',
        regiao: 'Supremacia',
        descricao: `
        <p>Você passou pelo treinamento padrão dos batalhões puristas e talvez tenha visto de perto as atrocidades desses vilões. Seja como for, decidiu que não podia ficar neutro frente à Supremacia.</p>
        <p><b>Itens.</b> Brunea com símbolo purista raspado, escudo pesado, espada bastarda, ração de viagem x10.</p>
        <p><b>Benefícios.</b> Você é treinado em Guerra e recebe proficiência com espadas bastardas e escudos. Se estiver empunhando uma espada bastarda e um escudo pesado, recebe +2 em testes de ataque.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'473'
      },
      {
        id: 58,
        nome: 'Duplo Feérico',
        regiao: 'Pondsmânia',
        descricao: `
        <p>Em algum lugar de Arton, há alguém igual a você. Com a mesma aparência, as mesmas capacidades, os mesmos ideais. Talvez isso rendesse uma boa amizade, mas esse alguém veio primeiro. Você é apenas a cópia feita por uma fada.</p>
        <p><b>Itens.</b> Essência de mana, marca no corpo ou característica física não possuída pela sua versão original.</p>
        <p><b>Benefícios.</b> Escolha uma habilidade de classe de 1º nível de uma classe que não seja a sua. Você recebe essa habilidade e pode usá-la como se tivesse 1 nível naquela classe (se escolher a habilidade Magias, você aprende uma única magia e recebe +1 ponto de mana, mas não soma o atributo-chave da habilidade em seu total de PM).</p>
        <h4>Encontrando-se Consigo Mesmo</h4>
        <p>Quando um duplo encontra sua versão original, tem extrema dificuldade em lidar com o fato de ser uma cópia. Quando isso ocorre, deve passar em um teste de Vontade (CD seu próprio Car). Se falhar, o duplo entra em um frenesi homicida até o fim da cena, tendo como único propósito matar sua versão original.</p>
        <p>Caso uma das duas criaturas morra nesse encontro, a versão sobrevivente herda todas as lembranças do morto, incluindo uma de suas perícias treinadas, mas perde permanentemente 1 ponto de Carisma — já que, para o bem ou para o mal, perdeu uma parte de si para sempre.</p>
        `,
        referencias:Referencia.ATLAS ,
        paginas:'474'
      },
      {
        id: 59,
        nome: 'Duyshidakk Infiltrado',
        regiao: 'Tyrondir',
        descricao: `
        <p>Você viveu entre o povo do Reinado por muito tempo, absorvendo seu modo de vida… mas secretamente devotado a construir O Mundo Como Deve Ser. </p>
        <p><b>Itens.</b> Arma marcial, peças sobressalentes (T$ 100 para vender ou construir engenhocas).</p>
        <p><b>Benefícios.</b> Você recebe +2 em Furtividade e Vontade e pode usar Sabedoria como atributo-chave de Enganação (em vez de Carisma).</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'474'
      },
      {
        id: 60,
        nome: 'Emissário Ubaneri',
        regiao: 'Ubani',
        descricao: `
        <p>Você foi preparado para percorrer as terras distantes e conhecer mais sobre o mundo além da Savana. Você nunca fica solitário, pois está acompanhado de um alikunhá, um pequeno pedaço de Ubani.</p>
        <p><b>Itens.</b> Essência de mana, mochila de aventureiro.</p>
        <p><b>Benefícios.</b> Você recebe um alikunhá, um parceiro iniciante que não conta em seu limite de parceiros (veja o quadro na página 471) e pode usar Sabedoria como atributo-chave de Misticismo (em vez de Inteligência).</p>
        <h4>Alikunhá</h4>
        <p>Os elementais que acompanham os ubaneri são conhecidos como alikunhá. Cada um desses espíritos é ligado a um elemento e conta como um parceiro iniciante de um tipo a sua escolha entre os associados ao seu elemento. Ar: assassino, perseguidor ou vigilante; água: ajudante, guardião ou médico; fogo:atirador, combatente ou fortão; terra:combatente, guardião ou montaria; luz:guardião, médico ou vigilante; trevas: assassino, magivocador ou perseguidor.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'474'
      },
      {
        id: 61,
        nome: 'Escudeiro da Luz',
        regiao: 'Bielefeld',
        descricao: `
        <p>Você não serviu a um cavaleiro errante qualquer, mas a um nobre e honrado cavaleiro da Luz. Ao lado dele, aprendeu todas as tarefas diárias desse ofício, além dos valores da nobreza e da justiça.</p>
        <p><b>Itens.</b> Cota de malha ou escudo pesado, enfeite de elmo com o símbolo da Ordem da Luz.</p>
        <p><b>Benefícios.</b> Você é treinado em Nobreza. Além disso, recebe +2 na Defesa e +3 PM.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'474'
      },
      {
        id: 62,
        nome: 'Escudeiro Solitário',
        regiao: 'Bielefeld',
        descricao: `
        <p>Ninguém sabe, mas você foi escudeiro de um cavaleiro de Bielefeld… ou cupincha de um trambiqueiro. Seu mestre era membro dos Cavaleiros Solitários, disposto a todo tipo de subterfúgio, intriga e traição para ajudar os verdadeiros heróis. </p>
        <p><b>Itens.</b> Cota de malha, escudo pesado, enfeite de elmo.</p>
        <p><b>Benefícios.</b> Você é treinado em Enganação e Ladinagem e recebe +10 em testes de Enganação para se disfarçar como cavaleiro da Luz. Além disso, se tiver Código de Honra (ou outro semelhante), atacar pelas costas não faz com que você o viole.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'474'
      },
      {
        id: 63,
        nome: 'Estandarde Vivo',
        regiao: 'Ermos Púrpuras',
        descricao: `
        <p>Muitas tribos dos Ermos Púrpuras acabaram extintas — por guerra, por doença ou pela corrupção da Tormenta. Sua tribo se foi, mas você permanece, uma prova viva de que um dia seu povo existiu.</p>
        <p><b>Itens.</b> Arma simples ou marcial, gibão de peles, fragmento do estandarte do seu povo (se vestido, fornece +1 em testes de Vontade).</p>
        <p><b>Benefícios.</b> Você recebe +2 em Sobrevivência e um poder de combate ou da Tormenta à sua escolha.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'474'
      },
      {
        id: 64,
        nome: 'Estudante da Academia',
        regiao: 'Academia Arcana',
        descricao: `
        <p>Você frequentou a Academia Arcana. Pode ou não ter se tornado um arcanista, mas com certeza aprendeu algo sobre lançar magias.</p>
        <p><b>Itens.</b>  Coleção de livros (uma qualquer), essência de mana x2.</p>
        <p><b>Benefícios.</b> Você aprende e pode lançar uma magia arcana de 1o círculo a sua escolha (atributo-chave Inteligência). Além disso, pode fazer testes de Misticismo mesmo sem ser treinado nessa perícia. Se for treinado, recebe +2 em testes dela.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'474 e 475'
      },
      {
        id: 65,
        nome: 'Estudante do Colégio Real',
        regiao: 'Salistick',
        descricao: `
        <p>Você teve a oportunidade de estudar no ilustríssimo Colégio Real de Médicos de Salistick. Seu ceticismo e rigor científico o afastam dos deuses e o aproximam da compreensão da vida.</p>
        <p><b>Itens.</b>  Bálsamo restaurador x3, maleta de medicamentos.</p>
        <p><b>Benefícios.</b> Você é treinado em Cura. Além disso, seus efeitos de cura recuperam +2 PV por dado. Você perde esse benefício caso se torne um devoto de qualquer tipo.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'475'
      },
      {
        id: 66,
        nome: 'Explorador de Ruínas',
        regiao: 'Tyrondir',
        descricao: `
        <p>A destruição de Tyrondir atraiu exploradores em busca de riquezas que possam ter sobrevivido à queda da Flecha de Fogo. Após um tempo nessa atividade, você aprendeu alguns truques úteis.</p>
        <p><b>Itens.</b>  Mochila de aventureiro, tocha, vara de madeira (3m).</p>
        <p><b>Benefícios.</b> Você recebe +2 em Ladinagem, Percepção e Reflexos e +3m em seu deslocamento.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'475'
      },
      {
        id: 67,
        nome: 'Filhote da Revoada',
        regiao: 'Lamnor',
        descricao: `
        <p>Você passou grande parte de sua juventude entre a Revoada Carnívora e seus perigosos e fantásticos engenhos voadores. Você ainda não tem seu próprio veículo, mas aprendeu duras lições entre voos e quedas.</p>
        <p><b>Itens.</b>  Instrumentos de Ofício (artesão), T$ 100 (que você está juntando para fabricar seu primeiro veículo aéreo).</p>
        <p><b>Benefícios.</b> Você é treinado em Acrobacia e Pilotagem. Quando faz um teste de uma dessas perícias, pode gastar 1 PM para rolar um dado adicional e usar o melhor resultado.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'475'
      },
      {
        id: 68,
        nome: 'Futura Lenda',
        regiao: 'Nova Malpetrim',
        descricao: `
        <p>Você nasceu ouvindo histórias sobre heróis, talvez tenha sido batizado com o nome de um deles e por fim decidiu fazer a única coisa que tinha sentido: superá-los! </p>
        <p><b>Itens.</b> Arma simples ou marcial com nome pomposo (e nenhuma melhoria), essência de mana x2</p>
        <p><b>Benefícios.</b> Escolha um dos poderes de sua classe, normalmente disponíveis a partir do 2º nível. Você recebe esse poder.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'475'
      },
      {
        id: 69,
        nome: 'Ginete Tumarkhân',
        regiao: 'Khubar',
        descricao: `
        <p>O povo de Khubar usa o lagarto tumarkhân como montaria. Você estabeleceu um elo com um desses animais, que o acompanha em suas jornadas.</p>
        <p><b>Itens.</b> Bálsamo restaurador, sela.</p>
        <p><b>Benefícios.</b> Você é treinado em Cavalgar e possui um parceiro tumarkhân iniciante, com quem recebe +2 em testes de Adestramento e Cavalgar. Se receber outra montaria especial (como pelos poderes Montaria ou Montaria Sagrada), você pode usar seu tumarkhân como essa montaria, acumulando o bônus em perícias com os benefícios da montaria especial</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'475'
      },
      {
        id: 70,
        nome: 'Grumete Pirata',
        regiao: 'Três Mares',
        descricao: `
        <p>Por paixão, sede de liberdade ou pura necessidade, você serviu em uma embarcação pirata.</p>
        <p><b>Itens.</b> Adaga, corda, tatuagem de sua antiga tripulação (+1 em Intimidação).</p>
        <p><b>Benefícios.</b> Você é treinado em Acrobacia, Atletismo e Reflexos e, se estiver se equilibrando, escalando ou nadando, só cai ou afunda se falhar no teste de perícia por 10 ou mais (em vez de 5 ou mais).</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'475'
      },
      {
        id: 71,
        nome: 'Guardião Glacial',
        regiao: 'Uivantes',
        descricao: `
        <p>As Uivantes são inclementes, mas também precisam de seus protetores. Você treinou com eles e aprendeu como afugentar intrometidos.</p>
        <p><b>Itens.</b> Casaco longo, cavalo glacial.</p>
        <p><b>Benefícios.</b> Você recebe redução de frio 5 e proficiência em arco longo e machado de batalha. Caso já possua proficiência com essas armas, você recebe +2 em rolagens de dano com elas.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'475'
      },
      {
        id: 72,
        nome: 'Iniciado dos Caça-Monstros',
        regiao: 'Sanguinárias',
        descricao: `
        <p>Você foi iniciado na Guilda dos Caça-Monstros. Mesmo que ainda não seja capaz de vencer todas as criaturas, consegue ao menos identificá-las!</p>
        <p><b>Itens.</b> Arma simples ou marcial, gibão de peles.</p>
        <p><b>Benefícios.</b> Você pode fazer testes para identificar criaturas com uma ação de movimento e, quando acerta um ataque em uma criatura não humanoide, pode gastar 1 PM para causar +1d8 pontos de dano.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'475'
      },
      {
        id: 73,
        nome: 'Insurgente Tapistano',
        regiao: 'Império de Tauron',
        descricao: `
        <p>O Império de Tauron está ruindo. O Deus da Força está morto. Para você, isso ainda não é suficiente. O povo só estará satisfeito quando todos os antigos generais e escravagistas forem punidos.</p>
        <p><b>Itens.</b> Amuleto com um símbolo da resistência reconhecível por outros rebeldes, arma simples.</p>
        <p><b>Benefícios.</b> Você recebe +1 em Fortitude, Reflexos e Vontade. Além disso, recebe +3 pontos de vida no 1º nível e +1 PV por nível seguinte.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'475 e 476'
      },
      {
        id: 74,
        nome: 'Irmão sem Esporas',
        regiao: 'Namalkah',
        descricao: `
        <p>Você possui um cavalo que o acompanha desde a infância; vocês cresceram juntos, tornando-se ver- dadeiros irmãos.</p>
        <p><b>Itens.</b> Bálsamo restaurador, sela.</p>
        <p><b>Benefícios.</b> Você possui um irmão cavalo, um cavalo de guerra parceiro iniciante que fornece +1 em testes de ataque e Reflexos. Se receber outra montaria especial (como aquela concedida pelos poderes Montaria ou Montaria Sagrada), você pode usar seu irmão cavalo como essa montaria, acumulando o bônus em perícias com os benefícios da montaria especial.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'476'
      },
      {
        id: 75,
        nome: 'Legionário',
        regiao: 'Império de Tauron',
        descricao: `
        <p>Você serviu nas legiões do Império de Tauron, onde aprendeu a usar o equipamento de um legionário. Agora que seu serviço terminou, você espera usar as técnicas aprendidas para dar um novo rumo a Tapista.</p>
        <p><b>Itens.</b> Brunea com símbolo de sua legião, escudo pesado, gládio, ração de viagem x10.</p>
        <p><b>Benefícios.</b> Você é treinado em Guerra e recebe proficiência com gládios (veja Ameaças de Arton) e escudos. Se estiver empunhando um gládio e um escudo pesado, recebe +1 na margem de ameaça e +1 na Defesa.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'476'
      },
      {
        id: 76,
        nome: 'Lenhador de Tollan',
        regiao: 'Tollon',
        descricao: `
        <p>Você foi criado entre as imponentes árvores da Floresta de Tollon, que lhe serviram tanto como casa quanto como fonte de sustento.</p>
        <p><b>Itens.</b> Item superior de madeira Tollon.</p>
        <p><b>Benefícios.</b> Você é treinado em Ofício (artesão) e recebe +5 em testes de perícias (exceto testes de ataque) relacionados a madeira. Além disso, você recebe proficiência com machadinhas e machados de batalha; caso já possua proficiência com essas armas, recebe +2 em rolagens de dano com elas.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'476'
      },
      {
        id: 77,
        nome: 'Liricista de Lenórienn',
        regiao: 'Lamnor',
        descricao: `
        <p>Você Mesmo não tendo vivido o auge do Reino dos Elfos, você ouviu histórias suficientes para admirá-lo. Inspirado pelas tradições élficas, você aprendeu a transformar sua magia em arte.</p>
        <p><b>Itens.</b> Alaúde élfico, réplica de uma peça artística élfica (1 espaço, T$ 50).</p>
        <p><b>Benefícios.</b> Você é treinado em Atuação e recebe +2 nessa perícia. Além disso, pode usar Carisma como atributo-chave de Misticismo (no lugar de Inteligência).</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'476'
      },
      {
        id: 78,
        nome: 'Membro do Principado',
        regiao: 'Sambúrdia',
        descricao: `
        <p>Você faz parte do Principado Mercante, uma das organizações mais poderosas das Repúblicas Livres. Ainda está longe do topo, mas até mesmo os Príncipes Mercantes começaram em algum lugar.</p>
        <p><b>Itens.</b> Carroça, mercadorias sortidas (8 espaços, T$ 400).</p>
        <p><b>Benefícios.</b> Você é treinado em Diplomacia e Intuição. Quando chega em uma cidade pela primeira vez em cada aventura, pode fazer um teste de Diplomacia (CD 20). Se passar, recebe 10% de desconto em todos os itens que comprar neste lugar (cumulativo com barganha).</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'476'
      },
      {
        id: 79,
        nome: 'Nitamuraniano',
        regiao: 'Valkaria',
        descricao: `
        <p>Você foi criado na maior comunidade tamuraniana fora do próprio Império de Jade. Seus valores culturais misturam as complexas e distintas tradições deheoni e tamuranianas.</p>
        <p><b>Itens.</b> Arco longo ou katana, camisa bufante ou traje de seda.</p>
        <p><b>Benefícios.</b> Você recebe proficiência em katana e arco longo. Caso receba proficiência nessas armas novamente, recebe +2 em rolagens de dano com elas. Além disso, quando falha em um teste de perícia originalmente baseada em Sabedoria, você pode gastar 2 PM para refazer esse teste (apenas uma vez por teste).</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'476'
      },
      {
        id: 80,
        nome: 'Nobre Zakharoviano',
        regiao: 'Zakharov',
        descricao: `
        <p>Você descende de uma das tradicionais famílias de nobres armeiros zakharovianos. Além do sobrenome, ostenta com orgulho uma de suas obras-primas.</p>
        <p><b>Itens.</b> Traje da corte.</p>
        <p><b>Benefícios.</b> Você é treinado em Ofício (armeiro) e recebe uma arma superior com uma melhoria (exceto material especial). Se estiver de posse dessa arma, recebe +2 PM por patamar (apenas após um dia).</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'476'
      },
      {
        id: 81,
        nome: 'Nômade de Sar-Allan',
        regiao: 'Halak-Tûr',
        descricao: `
        <p>Você cresceu entre os sar-allan, aprendendo a resistir aos rigores — e aos predadores — do deserto.</p>
        <p><b>Itens.</b> Arma simples ou marcial, corcel do deserto ou dromedário (veja Ameaças de Arton), manto camuflado (deserto).</p>
        <p><b>Benefícios.</b> Você recebe +2 em Fortitude e Sobrevivência e nas rolagens de dano com alfanges, arcos curtos e cimitarras.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'476 e 477'
      },
      {
        id: 82,
        nome: 'Pescador Parrudo',
        regiao: 'Khubar',
        descricao: `
        <p>Desde criança, você pesca nas águas profundas de Khubar. Tal atividade deixou seu corpo forte e resistente.</p>
        <p><b>Itens.</b> Vara de pesca (pode usar Sobrevivência para sustento), peixes raros salgados para revenda (1 espaço, T$ 50).</p>
        <p><b>Benefícios.</b> Você recebe +2 em Atletismo, Fortitude e Sobrevivência e +3 PV. Além disso, quando faz um teste de Atletismo para nadar você avança seu deslocamento (em vez de apenas a metade).</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'477'
      },
      {
        id: 83,
        nome: 'Plebeu Arcano',
        regiao: 'Wynlla',
        descricao: `
        <p>Crescer em Wynlla é estar próximo da magia. Esse contato o deixou mais acostumado aos aspectos místicos de Arton.</p>
        <p><b>Itens.</b> Bandoleira de poções, gorro de ervas, poção arcana de 1  círculo.</p>
        <p><b>Benefícios.</b> Você recebe +2 PM. Além disso, uma vez por rodada, quando falha em um teste de resistência contra um efeito mágico, você pode gastar 1 PM para rolar novamente esse teste.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'477'
      },
      {
        id: 84,
        nome: 'Prisioneiro das Catacumbas',
        regiao: 'Leverick',
        descricao: `
        <p>Você vivia uma vida comum e sem grandes emoções, até ter o azar de abrir a porta errada. Talvez também tenha sido por mero acaso que você escapou das Catacumbas de Leverick.</p>
        <p><b>Itens.</b> Arma marcial encontrada no corpo de alguém que não sobreviveu às Catacumbas.</p>
        <p><b>Benefícios.</b> Você é treinado em Percepção e Reflexos e recebe resistência a armadilhas e efeitos de movimento +5.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'477'
      },
      {
        id: 85,
        nome: 'Procurado: Vivo ou Morto',
        regiao: 'Smokestone',
        descricao: `
        <p>Você é um pistoleiro infame nas cercanias de Smokestone, odiado e caçado por outros durões. Provavelmente foi tudo um engano e você ainda não faz jus a esse renome, mas sua cabeça está a prêmio!</p>
        <p><b>Itens.</b> Pistola, balas cruéis (20).</p>
        <p><b>Benefícios.</b> Você recebe proficiência com armas de fogo. Além disso, recebe +5 em testes de Intimidação e –5 em testes de Diplomacia contra qualquer um que, a critério do mestre, o reconheça e saiba de sua fama.</p>
        <h4>Por um Punhado de Tibares</h4>
        <p>Personagens com a origem Procurado: Vivo ou Morto são caçados por pistoleiros e todo tipo de mercenários. Uma vez por aventura, a critério do mestre, você e seu grupo são atacados por caçadores de recompensa (um encontro de ND igual ou inferior ao do grupo). Cruéis e dispostos a qualquer coisa por uma recompensa, esses caçadores tendem a atacar nos momentos mais inconvenientes…</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'477'
      },
      {
        id: 86,
        nome: 'Profeta do Akzath',
        regiao: 'Lamnor',
        descricao: `
        <p>Você conhece a verdade sobre o tempo e o destino, na forma do Akzath. Quem sabe será você a encontrar o novo Ayrrak?</p>
        <p><b>Itens.</b> Arma simples ou marcial, bordão, pergaminho com diagrama do Akzath.</p>
        <p><b>Benefícios.</b> Você é treinado em Religião e pode lançar magias mesmo sob o efeito de Fúria Divina.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'477'
      },
      {
        id: 87,
        nome: 'Querido Filho',
        regiao: 'Aslothia',
        descricao: `
        <p>Você passou parte de sua juventude em Aslothia. Lá, por escolha ou imposição do destino, abraçou a dádiva das trevas.</p>
        <p><b>Itens.</b> Essência de sombra, manto camuflado (urbano).</p>
        <p><b>Benefícios.</b> Você redução de frio e trevas 5 e visão no escuro. Se já possuir visão no escuro, em vez disso recebe +2 em Percepção.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'477'
      },
      {
        id: 88,
        nome: 'Rebelde Agitador',
        regiao: 'Sckharshantallas',
        descricao: `
        <p>Sua terra natal, Sckharshantallas, está sob o jugo permanente de um monstro tirano. Você fez parte de grupos rebeldes, mas agora partiu para se aventurar. Espera se tornar forte para, um dia, depor o Dragão-Rei.</p>
        <p><b>Itens.</b>  Arma simples ou marcial, panfleto revolucionário, T$ 6d12 (impostos que você deixou de pagar).</p>
        <p><b>Benefícios.</b> Você é treinado em Iniciativa e, uma vez por aventura, pode gastar um dia para convencer pessoas comuns a ajudá-lo. Faça um teste de Diplomacia (CD 10). Se passar, você convence uma pessoa, mais uma para cada 10 pontos acima da CD (duas pessoas com resultado 20, três com resultado 30 e assim por diante). Cada pessoa pode ser usada como um parceiro iniciante de um tipo à sua escolha por uma cena. As pessoas não contam em seu limite de parceiros e ficam com você até serem usadas ou até o fim da aventura.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'477'
      },
      {
        id: 89,
        nome: 'Receptador das Nuvens',
        regiao: 'Vectora',
        descricao: `
        <p>Você cresceu em Vectora, o fabuloso Mercado nas Nuvens. Andando entre os bazares e becos da cidade, conheceu diversos mercadores.</p>
        <p><b>Itens.</b>  Mercadorias raras e variadas (2 espaços, T$ 300).</p>
        <p><b>Benefícios.</b> Você possui contatos em Vectora que lhe dão acesso a mercadorias. Se estiver em uma cidade ou outro lugar em que, a critério do mestre, possa acessar seus contatos, você pode gastar 1 dia para obter um aparato mágico: um item de 1 espaço que você (e apenas você) pode empunhar para lançar uma magia de 1º círculo (atributo-chave Inteligência), escolhida ao obter o aparato. Você pode ter até 2 aparatos ao mesmo tempo. Os aparatos não têm valor comercial.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'478'
      },
      {
        id: 90,
        nome: 'Recruta Arcano',
        regiao: 'Wynlla',
        descricao: `
        <p>Você serviu entre os Magos de Batalha de Wynlla. Agora, livre de suas obrigações cívicas, está pronto para seguir sua vida de aventuras.</p>
        <p><b>Itens.</b> Essência de mana x2, varinha arcana.</p>
        <p><b>Benefícios.</b> A CD para resistir a suas magias arcanas aumenta em +1 e elas causam +1 ponto de dano.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'478'
      },
      {
        id: 91,
        nome: 'Recruta da Fenix',
        regiao: 'Triunphus',
        descricao: `
        <p>Você começou o treinamento para combater a Horda Moóck montado em um majestoso grifo. Por vontade própria ou imposição, você saiu da cidade antes de completar o treinamento… ou morrer!</p>
        <p><b>Itens.</b> Arma marcial, brunea, grifo iniciante.</p>
        <p><b>Benefícios.</b> Você recebe +1 PV por nível e redução de fogo 5, e é treinado em Cavalgar.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'478'
      },
      {
        id: 92,
        nome: 'Sábio Matemático',
        regiao: 'Halak-Tûr',
        descricao: `
        <p>Você estudou as complexas equações que os sar-allan usam para calcular a formação de portais no deserto. Talvez ainda não consiga prever esses eventos tão bem quanto seus mestres, mas sabe usar o poder da matemática para resolver diversos problemas.</p>
        <p><b>Itens.</b> Coleção de livros, luneta.</p>
        <p><b>Benefícios.</b> Você é treinado em Conhecimento. Além disso, aprende e pode lançar Concentração de Com bate e Orientação. Estes efeitos não contam como magias (exceto para fins de acúmulo) e não são mágicos — eles provêm de sua habilidade de calcular resultados a partir de uma mistura de geometria, análise de probabilidades e outros campos da matemática.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'478'
      },
      {
        id: 93,
        nome: 'Selvagem Sanguinário',
        regiao: 'Sanguinárias',
        descricao: `
        <p>Você nasceu ou foi criado nas Montanhas Sanguinárias, um dos lugares mais brutais de Arton, onde aprendeu a sobreviver com base na determinação e força bruta.</p>
        <p><b>Itens.</b> Arma marcial, gibão de peles.</p>
        <p><b>Benefícios.</b> Você é treinado em Sobrevivência e, se não estiver usando armadura pesada, recebe +1 em rolagens de dano com armas e redução de dano 1.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'478'
      },
      {
        id: 94,
        nome: 'Sucateiro de Batalha',
        regiao: 'Conflagração do Aço',
        descricao: `
        <p>Muitos dizem que a Guerra Artoniana acabou. Não onde você foi criado. Em uma terra onde escaramuças são frequentes, você se especializou em pilhar armas e outros itens abandonados nos campos de batalha.</p>
        <p><b>Itens.</b> Arma simples ou marcial, bálsamo restaurador, escudo leve ou pesado, essência de mana, ração de viagem x5, T$ 4d6.</p>
        <p><b>Benefícios.</b> Você é treinado em Guerra e Investigação. Além disso, quando rola na Tabela 8-1: Tesouro por Nível de Desafio (Tormenta20, p. 328), para cada tipo de tesouro (dinheiro ou item) você pode rolar novamente o resultado.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'478'
      },
      {
        id: 95,
        nome: 'Tamalu',
        regiao: 'Khubar',
        descricao: `
        <p>Você nasceu entre os tamalus, a casta política de Khubar que ostenta tatuagens mágicas mostrando sua história. Embora sua saga esteja apenas começando, você já conquistou sua primeira tatuagem.</p>
        <p><b>Itens.</b> Traje da corte.</p>
        <p><b>Benefícios.</b> Você é treinado em Diplomacia e Nobreza e recebe uma tatuagem mística à sua escolha.</p>
        <h4>Tatuagem Mística</h4>
        <p>Os tatuadores tamalus de Khubar podem criar tatuagens especiais com Ofício (tatuador). Essas tatuagens podem terum entre três benefícios: +1 na Defesa, resistência a magia +2 ou a habilidade de lançar uma magia de 1  círculo (atributo-chave Sabedoria). Tatuagens precisam estar visíveis para funcionarem e, quando expostas, ocupam o espaço de um item vestido. Cada tatuagem custa T$ 1.000 x sua quantidade de tatuagens místicas (a primeira custa T$ 1.000, a segunda custa T$ 2.000 e assim progressivamente).</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'478'
      },
      {
        id: 96,
        nome: 'Tocado pela Dama Altiva',
        regiao: 'Moreania',
        descricao: `
        <p>Nascido em Moreania, você foi agraciado pela própria Mãe Natureza. Você consegue entender as vozes da natureza e pode invocar o auxílio dos filhos de Allihanna.</p>
        <p><b>Itens.</b> Bordão, ração de viagem x5.</p>
        <p><b>Benefícios.</b> Você é treinado em Adestramento e pode gastar 1 minuto e 1 PM para convocar um animal Minúsculo a sua escolha, como um falcão ou gato, em seu auxílio. A criatura convocada fornece +2 nos seus testes de uma perícia específica, adequada às suas capacidades, e permanece auxiliando-o até o fim da cena, quando então retorna para os ermos. Você pode ter um número de criaturas convocadas simultâneas igual à sua Sabedoria (mínimo de 1). O mestre tem a palavra final sobre quais criaturas estão disponíveis e em quais perícias elas podem prestar auxílio.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'479'
      },
      {
        id: 97,
        nome: 'Tocado pelo Indomável',
        regiao: 'Moreania',
        descricao: `
        <p>A face oposta da Dama Altiva, o Indomável é uma divindade de ferocidade e selvageria. Agraciado com o poder dos monstros, você tem dificuldade em se adequar às normas e restrições da sociedade.</p>
        <p><b>Itens.</b> Trapos surrados, carcaça de couro de algum animal caçado por você (conta como um gibão de peles).</p>
        <p><b>Benefícios.</b>  Você é treinado em Atletismo e recebe +2 em rolagens de dano com armas naturais e ataques desarmados.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'479'
      },
      {
        id: 98,
        nome: 'Tradicionalista Svalano',
        regiao: 'Svalas',
        descricao: `
        <p>Svalas é díspar, honrado e livre. Após todos os registros escritos do reino terem sido destruídos, a tradição svalana foi passada pela oralidade. Você é o fruto dessas histórias.</p>
        <p><b>Itens.</b> Arma simples ou marcial, corda, mochila de aventureiro, vara de madeira (3 m).</p>
        <p><b>Benefícios.</b> Você pode usar Sabedoria como atributo-chave de Conhecimento e Nobreza e pode fazer testes dessas perícias mesmo sem treinamento. Além disso, recebe +1 em Fortitude e Vontade.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'479'
      },
      {
        id: 99,
        nome: 'Trapaceiro Ahleniense',
        regiao: 'Ahlen',
        descricao: `
        <p>Há um ditado em Ahlen: todo dia saem de casa um malandro e um otário. Você definitivamente aprendeu como não ser o otário.</p>
        <p><b>Itens.</b> Essência de sombra, gazua, estojo de disfarces.</p>
        <p><b>Benefícios.</b> Você recebe +2 em Enganação e Furtividade e pode usar Carisma como atributo-chave de Ladinagem (em vez de Destreza).</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'479'
      },
      {
        id: 100,
        nome: 'Turista da Academia',
        regiao: 'Academia Arcana',
        descricao: `
        <p>Você assistiu a algumas aulas na Academia Arcana. Não se tornou um arcanista, mas aprendeu a lidar com magias e enjambrar alguns truques!</p>
        <p><b>Itens.</b> Três pergaminhos de magias arcanas de 1º círculo à sua escolha.</p>
        <p><b>Benefícios.</b> Você recebe resistência a magia +2 e pode ativar pergaminhos de todas as magias arcanas de 1º círculo como se as conhecesse.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'479'
      },
      {
        id: 101,
        nome: 'Um com os Kami',
        regiao: 'Tamu-ra',
        descricao: `
        <p>Desde muito novo, você vê e ouve seres que não podem ser percebidos pela maioria das pessoas. São os kami, os espíritos divinos de Tamu-ra. Às vezes estão enfurecidos; outras vezes, querem pedir sua ajuda. Na maior parte das ocasiões, apenas acham graça de ser percebidos por você e por isso o tratam como amigo.</p>
        <p><b>Itens.</b> Bálsamo restaurador, essência de mana.</p>
        <p><b>Benefícios.</b> Você pode usar Sabedoria como atributo-chave de Misticismo (em vez de Inteligência). Além disso, é acompanhado por um kami incorpóreo e invisível. Ele é um parceiro especial, que permite que você veja criaturas incorpóreas invisíveis e afete criaturas com seus ataques e habilidades como se fossem mágicos, e não conta em seu limite de parceiros. Além disso, uma vez por rodada você pode gastar 1 PM para executar o equivalente a uma ação de movimento que só pode ser usada para manipular um objeto solto em alcance curto. O kami não pode se afastar além de alcance curto de você. Se for destruído por qualquer efeito, o kami desaparece, retornando no início da próxima cena.</p>`,
        referencias:Referencia.ATLAS ,
        paginas:'479'
      },
    ];
  }
}
