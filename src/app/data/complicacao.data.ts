import { Injectable } from '@angular/core';
import { Complicacao } from '../model/complicacao';

@Injectable({
  providedIn: 'root',
})
export class ComplicacaoData {
  private complicacoes: Complicacao[] = [];

  get(): any[] {
    return this.complicacoes;
  }

  constructor() {
    this.complicacoes = [
      {
        id: 1,
        nome: 'Amaldiçoado',
        descricao:
          'Você foi amaldiçoado por uma ntidade poderosa, como um lich, um nobre feérico, um Lorde da Tormenta ou mesmo um deus. No início de cada cena envolvendo qualquer tipo de risco ou perigo, role 1d6. Em um resultado 1, você não consegue usar seus pontos de mana nessa cena.',
        e_restritiva: false,
      },
      {
        id: 2,
        nome: 'Apetitoso',
        descricao:
          'Por algum motivo, feras salivam ao farejá-lo. Animais e monstros recebem +5 em testes de ataque e rolagens de dano contra você.',
        e_restritiva: false,
      },
      {
        id: 3,
        nome: 'Assombrado',
        descricao:
          'Você é assombrado por um ser desagradável, como o fantasma de um ancestral, uma fada travessa ou um diabrete zombeteiro. Ele conta no seu limite de parceiros, mas não fornece nenhum benefício. Além disso, no início de cada cena envolvendo qualquer tipo de risco ou perigo, role um dado. Em um resultado ímpar, você fica alquebrado até o fim da cena..',
        e_restritiva: false,
      },
      {
        id: 4,
        nome: 'Cabeça Quente',
        descricao:
          'Sempre que você sofre dano, seu próximo turno deve ser dedicado a atacar a fonte do dano. Se não puder atacá-la — por exemplo, se a fonte do dano for um inimigo fora do seu alcance ou algo que por definição não possa ser atacado, como um raio proveniente de uma tempestade — você deve gastar sua próxima ação de movimento esbravejando contra o ar.',
        e_restritiva: false,
      },
      {
        id: 5,
        nome: 'Caolho',
        descricao:
          'Você não tem um dos olhos. Você sofre –2 em Iniciativa, Percepção, Pontaria e Reflexos e fica automaticamente lanqueado por dois ou mais oponentes em corpo a corpo.',
        e_restritiva: false,
      },
      {
        id: 6,
        nome: 'Chato',
        descricao:
          'Sempre que você sai de uma aldeia, uma festa acontece. Você sofre –5 em Diplomacia e a atitude inicial de NPCs em relação a você é uma categoria pior.',
        e_restritiva: false,
      },
      {
        id: 7,
        nome: 'Criado na Cidade',
        descricao:
          'VVocê não se dá bem no mato. Você sofre –5 em Sobrevivência e, quando descansa nos ermos, sua recuperação é uma categoria pior (se já era ruim, você recupera apenas 1 PV e 1 PM, independentemente do seu nível)).',
        e_restritiva: false,
      },
      {
        id: 8,
        nome: 'Combalido',
        descricao:
          'Por alguma razão, natural ou sobrenatural, sua saúde é frágil. Você sofre –5 em Fortitude e recebe –1 PV por nível de personagem.',
        e_restritiva: false,
      },
      {
        id: 9,
        nome: 'Covarde',
        descricao:
          'Seu lema é “aquele que foge hoje vive para lutar amanhã”. Claro, se puder evitar a luta de amanhã também, melhor ainda! Você sofre –5 em testes de resistência contra efeitos de medo e, no início de cada cena envolvendo qualquer tipo de risco ou perigo, deve rolar um dado. Em um resultado ímpar, você fica abalado (mesmo que seja imune a isso).',
        e_restritiva: false,
      },
      {
        id: 10,
        nome: 'Cria de Nimb',
        descricao:
          'Você tem um parafuso a menos (talvez literalmente, se for um golem). Você sofre –5 em testes de perícias baseadas em Carisma. Além disso, no início de cada cena de ação, role 1d6. Com um resultado 1, você fica confuso (mesmo que seja imune a essa condição). Você não pode escolher esta complicação se for devoto de Nimb ou se, por algum outro motivo, seguir suas Obrigações & Restrições.',
        e_restritiva: false,
      },
      {
        id: 11,
        nome: 'Crise de Fé',
        descricao:
          'Você segue um dos deuses do Panteão, mas no fundo se pergunta se isso é o certo a fazer. Você sofre –2 em Vontade e segue as Obrigações & Restrições de um deus, mas não recebe nenhum poder concedido por isso nem conta como devoto dessa divindade para cumprir pré-requisitos. Você não pode ser devoto de outro deus. ',
        e_restritiva: true,
      },
      {
        id: 12,
        nome: 'Desprotegido',
        descricao: 'Você nunca aprendeu a se defender. Você sofre –2 na Defesa e em testes de resistência.',
        e_restritiva: false,
      },
      {
        id: 13,
        nome: 'Distraído',
        descricao:
          'Você é muito desligado e... Hein? Do que estávamos falando? Você sofre –5 em Iniciativa e Percepção.',
        e_restritiva: false,
      },
      {
        id: 14,
        nome: 'Expurgo de Wynna',
        descricao:
          'Algo em você não agrada a Deusa da Magia. Você sofre –5 em testes de resistência contra efeitos mágicos.',
        e_restritiva: false,
      },
      {
        id: 15,
        nome: 'Fracote',
        descricao:
          'Você cresceu dentro dos muros de um palácio ou enfurnado na torre de um mago e nunca praticou atividades físicas. Você está permanentemente fraco (mesmo que seja imune a essa condição).',
        e_restritiva: false,
      },
      {
        id: 16,
        nome: 'Hedonista',
        descricao:
          'Você está acostumado a viver no luxo e não aceita nada abaixo disso. Em condições luxuosas, sua recuperação de PV e PM é igual ao seu nível. Em condições confortáveis, sua recuperação é igual à metade do seu nível. Em condições normais ou ruins, você recupera apenas 1 PV e 1 PM, independentemente do seu nível.',
        e_restritiva: false,
      },
      {
        id: 17,
        nome: 'Ímpio',
        descricao:
          'Você odeia os deuses — e eles sabem disso. Você sofre –5 em testes de resistência contra magias divinas e não pode se beneficiar de efeitos dessas magias. ',
        e_restritiva: true,
      },
      {
        id: 18,
        nome: 'Impulsivo',
        descricao:
          'Você age primeiro e pensa depois (ou nunca). Você sofre –5 em Furtividade e Investigação, e não pode fazer as ações atrasar e preparar',
        e_restritiva: false,
      },
      {
        id: 19,
        nome: 'Inculto',
        descricao:
          'Você não teve acesso à educação. Você é analfabeto e recebe duas perícias treinadas a menos (isso pode reduzir as perícias que você pode escolher a zero, mas não afeta as perícias fixas de sua classe).',
        e_restritiva: false,
      },
      {
        id: 20,
        nome: 'Indolente',
        descricao: 'Você é apático e preguiçoso. Você sofre –5 em Reflexos e –3m em seu deslocamento.',
        e_restritiva: false,
      },
      {
        id: 21,
        nome: 'Ingênuo',
        descricao: 'Não há maldade em seu coração. Você sofre –5 em Enganação, Intuição, Investigação e Ladinagem.',
        e_restritiva: false,
      },
      {
        id: 22,
        nome: 'Maneta',
        descricao:
          'Você não tem uma das mãos. Você só pode empunhar um item (e, obviamente, não pode usar armas de duas mãos).',
        e_restritiva: false,
      },
      {
        id: 23,
        nome: 'Marcado pelo Passado',
        descricao:
          'Um evento em seu passado o deixou taciturno e sombrio. Você sofre –5 em Diplomacia e recebe –1 PM por nível de personagem.',
        e_restritiva: false,
      },
      {
        id: 24,
        nome: 'Matugo',
        descricao:
          'Você não se dá bem em cidades. Você fica alquebrado em ambientes urbanos e, quando descansa nesses ambientes, sua recuperação é uma categoria pior (se já era ruim, você recupera apenas 1 PV e 1 PM, independentemente do seu nível).',
        e_restritiva: false,
      },
      {
        id: 25,
        nome: 'Míope',
        descricao:
          'Você tem dificuldade de enxergar objetos distantes. Como alternativa, acha covardia atacar de longe e nunca treinou com armas de ataque à distância. Você sofre –5 em Percepção e Pontaria, e fica desprevenido contra efeitos que se originem além de alcance curto.',
        e_restritiva: false,
      },
      {
        id: 26,
        nome: 'Mouco',
        descricao: 'Sua audição é ruim. Você sofre –2 em Iniciativa, Percepção e Reflexos.',
        e_restritiva: false,
      },
      {
        id: 27,
        nome: 'Paranoico',
        descricao:
          'Você não confia em ninguém, nem em seus aliados. Você precisa passar em um teste de Vontade (CD 20 + seu nível) para aceitar qualquer ajuda — até mesmo cura! Se falhar no teste, recusa a ajuda e, se for ajudado mesmo assim (contra sua vontade), fica alquebrado até o fim da cena. Além disso, você não dorme direito: sua condição de descanso é sempre uma categoria pior do que seria pelas circunstâncias (se já era ruim, você recupera apenas 1 PV e 1 PM, independentemente do seu nível)',
        e_restritiva: false,
      },
      {
        id: 28,
        nome: 'Temeroso',
        descricao:
          'Você tem medo de se machucar. Como alternativa, treinou apenas com armas de ataque à distância e não sabe o que fazer quando as coisas ficam mais “pessoais”. Você sofre –5 em Luta e, enquanto estiver adjacente a um inimigo, fica abalado.',
        e_restritiva: false,
      },
      {
        id: 29,
        nome: 'Tolo',
        descricao: 'É fácil enganá-lo e manipulá-lo. Você sofre –5 em Intuição e Vontade.',
        e_restritiva: false,
      },
      {
        id: 30,
        nome: 'Vagaroso',
        descricao:
          'Você está permanentemente sob efeito da condição lento (todas as suas formas de deslocamento são reduzidas à metade e você não pode correr ou fazer investidas).',
        e_restritiva: false,
      },
      {
        id: 31,
        nome: 'Arcanista de Rotina',
        descricao:
          'Você não está acostumado a lançar magias sob pressão. Se estiver em alcance curto de qualquer ameaça, é considerado sob condição ruim para lançar magias. Se já estiver sob efeito de uma condição ruim ou terrível para conjurar, a CD do teste aumenta em +2.',
        classe: { id: 1 },
        e_restritiva: false,
      },
      {
        id: 32,
        nome: 'Foco Exigente',
        descricao: `Seu foco o pune quando você falha. Sempre que uma criatura passa em um teste de resistência contra uma magia sua, você perde 1 PV por PM gasto na magia. Pré-requisito: Bruxo`,
        classe: { id: 1 },
        e_restritiva: false,
      },
      {
        id: 33,
        nome: 'Linhagem Prepotente',
        descricao: `Sua magia inata rejeita auxílio de cacarecos. Você não pode usar catalisadores e itens esotéricos mundanos. Você ainda pode usar itens esotéricos mágicos, já que esses são verdadeiramente imbuídos de magia — como você! Pré-requisito: Feiticeiro.`,
        classe: { id: 1 },
        e_restritiva: false,
      },
      {
        id: 34,
        nome: 'Mente Cansada',
        descricao: `Quanto mais magias você aprende, mais difícil fica lembrar de todas! Para cada círculo de magia que você 
  pode lançar, o total de magias que pode memorizar diminui em 1. Pré-requisito: Mago.`,
        classe: { id: 1 },
        e_restritiva: false,
      },
      {
        id: 35,
        nome: 'De Peito Aberto',
        descricao: `Você tem tatuagens tribais que quer exibir, confia na sua resistência natural ou só acha seu corpo lindo. Seja qual for o motivo, você não pode vestir armaduras e seu limite de itens vestidos diminui em dois. `,
        classe: { id: 2 },
        e_restritiva: true,
      },
      {
        id: 36,
        nome: 'Totem Gigante',
        descricao: `Você interpreta a orientação de levar o totem de sua tribo consigo muito literalmente. Você carrega uma grande coluna de madeira esculpida que jamais pode abandonar. A coluna ocupa 10 espaços e impõe penalidade de armadura –5. `,
        classe: { id: 1 },
        e_restritiva: true,
      },
      {
        id: 37,
        nome: 'Estrelismo',
        descricao: `Você é lindo, talentoso e… extremamente egocêntrico. Você sofre –5 em testes de Diplomacia e Intuição. Além disso, sempre que falha em um teste de Atuação, fica alquebrado até o fim da cena.`,
        classe: { id: 3 },
        e_restritiva: false,
      },
      {
        id: 38,
        nome: 'Falastrão',
        descricao: `Você está sempre dando suas palestrinhas. Você não consegue ficar quieto e deve ser sempre o primeiro a falar, por mais inconveniente que isso possa ser. Você sofre –5 em testes de Furtividade e Nobreza e pode se envolver em diversos problemas, especialmente se estiver diante de certas autoridades ou tentando passar discretamente por alguém. `,
        classe: { id: 3 },
        e_restritiva: true,
      },
      {
        id: 39,
        nome: 'Coragem Líquida',
        descricao: `No início do seu turno, em cenas envolvendo qualquer risco ou perigo, role 1d4. Em um resultado 1, você precisa gastar uma ação de movimento para tomar um gole de bebida. Se não puder, fica pasmo pela rodada (mesmo se for imune a isso). Hic! `,
        classe: { id: 4 },
        e_restritiva: false,
      },
      {
        id: 40,
        nome: 'Esbanjador',
        descricao: `Você tem certas necessidades, que alguns chamam de “luxo” — mas, para você, são o motivo de viver! Para subir de nível, além de acumular XP suficiente, você deve “torrar” tibares em um festas e frivolidades, em um valor igual a 20% da diferença do dinheiro inicial do nível que vai alcançar para o nível atual (por exemplo, T$ 200 para subir para o 5° nível).`,
        classe: { id: 4 },
        e_restritiva: false,
      },
      {
        id: 41,
        nome: 'Limitado a (Criatura)',
        descricao: `Você se especializou em lutar contra um inimigo específico — e só. Escolha um tipo de criatura do poder Inimigo de (Criatura). O custo base para usar Marca da Presa contra criaturas de outros tipos muda para 3 PM.`,
        classe: { id: 5 },
        e_restritiva: false,
      },
      {
        id: 42,
        nome: 'Superprotetor',
        descricao: `Você se preocupa com o bem-estar do seu grupo e faz questão de ficar perto de seus companheiros — mesmo que isso não seja a melhor estratégia! Durante qualquer cena envolvendo qualquer tipo de risco ou perigo, você sempre deve terminar seu turno adjacente a um aliado. Se não fizer isso, fica alquebrado e sofre –2 em seus testes por 1 rodada.`,
        classe: { id: 6 },
        e_restritiva: false,
      },
      {
        id: 43,
        nome: 'Divindade Exigente',
        descricao: `Você serve a sua divindade com afinco, mas às vezes ela quer sua atenção exclusiva. Sempre que lançar uma magia divina, role 1d6. Em um resultado 1, você fica frustrado (essa 
  condição é cumulativa).`,
        classe: { id: 7 },
        e_restritiva: false,
      },
      {
        id: 44,
        nome: 'Preparação Litúrgica',
        descricao: `Você só pode lançar magias preparadas; suas outras magias não podem ser lançadas, mesmo que você tenha pontos de mana para isso. Para preparar magias, você precisa gastar uma hora de seu dia orando, meditando, entoando mantras ou fazendo qualquer outro tipo de ritual litúrgico. Ao fazer isso, você escolhe metade das magias que conhece (por exemplo, se conhece 5 magias, escolhe 2) e só pode lançar as magias escolhidas. Caso não possa se preparar, não pode trocar as magias escolhidas no dia anterior.`,
        classe: { id: 7 },
        e_restritiva: false,
      },
      {
        id: 45,
        nome: 'Tosco',
        descricao: `Você não se dá bem com objetos civilizados. Você não pode usar itens superiores. `,
        classe: { id: 8 },
        e_restritiva: true,
      },
      {
        id: 46,
        nome: 'Precavido',
        descricao: `Enquanto não conhece as capacidades do inimigo, 
  você prefere lutar de maneira cautelosa. Tanta preocupação causa –2 em testes de ataque e resistência. A partir da segunda rodada de combate, você pode se livrar dessa penalidade até o fim da cena gastando uma ação de movimento e passando em um teste de Guerra (CD 15 + ND do inimigo mais poderoso na cena).`,
        classe: { id: 9 },
        e_restritiva: false,
      },
      {
        id: 47,
        nome: 'Trabalhador Ocupado',
        descricao: `Você está tão ocupado trabalhando para os outros que não tem tempo de fazer seus próprios projetos! 
  Você não recebe a habilidade Protótipo e, quando recebe a habilidade Fabricar Item Superior, não recebe um item gratuito.`,
        classe: { id: 10 },
        e_restritiva: false,
      },
      {
        id: 48,
        nome: 'Honra de Ladrão',
        descricao: `Você pode ser um bandido e salafrário, mas tem seus princípios. Você sempre cumpre suas promessas e nunca rouba ou tira vantagem de pessoas com menos recursos que você e seu grupo. O mestre tem a palavra final sobre o que é “tirar vantagem” de alguém. `,
        classe: { id: 11 },
        e_restritiva: true,
      },
      {
        id: 49,
        nome: 'Firula',
        descricao: `Na primeira rodada de cada combate, você deve gastar uma ação padrão apresentando-se, fazendo uma coreografia ou informando seu peso, altura e cartel. `,
        classe: { id: 12 },
        e_restritiva: true,
      },
      {
        id: 50,
        nome: 'Filantropo',
        descricao: `Você doa parte de sua riqueza para fazer o bem. Você não recebe a habilidade Espólio e, quando usa sua habilidade Riqueza, recebe apenas metade do valor normal.`,
        classe: { id: 13 },
        e_restritiva: false,
      },
      {
        id: 51,
        nome: 'Mimado',
        descricao: `Bajulado desde criança, você fica desconcertado sempre que percebe que não é tão bom quanto lhe diziam. Na primeira vez em cada cena que falha em um teste de perícia, você perde 1 PM por patamar. Se já estiver sem PM, você fica frustrado por 1 rodada..`,
        classe: { id: 13 },
        e_restritiva: false,
      },
      {
        id: 52,
        nome: 'Certinho',
        descricao: `Você faz tudo do jeito correto e fica desconfortável quando um de seus companheiros não age dessa forma. Sempre que um aliado fizer algo que violaria seu Código do Herói, isso conta como uma violação sua — a menos que você não note, o que exige dele um teste de Enganação ou Furtividade contra a sua Percepção ou Intuição (o que for maior).`,
        classe: { id: 14 },
        e_restritiva: false,
      },
      {
        id: 53,
        nome: 'Paladar infantil',
        descricao: `Você é chato para comer. Não se beneficia de itens da categoria alimentação, nem de poções. Além disso, sofre –2 em testes de perícias baseadas em Carisma durante situações sociais baseadas em refeições, como um banquete no palácio ou uma noite na taverna.`,
        e_restritiva: false,
      },
      {
        id: 54,
        nome: 'Emotivo',
        descricao: `Fadado a sofrer, você não se beneficia de efeitos que forneçam bônus numéricos (em atributos, testes, Defesa etc.) usados por outros personagens.`,
        e_restritiva: false,
      },
      {
        id: 55,
        nome: 'Código de Honra',
        descricao: `Você não pode atacar um oponente pelas costas (em termos de regras, não pode se beneficiar do bônus de flanquear), caído, desprevenido ou incapaz de lutar.`,
        e_restritiva: false,
      },
      {
        id: 56,
        nome: 'Código de Honestidade',
        descricao: `Você não pode mentir, trapacear ou roubar e sofre uma penalidade de –5 em testes de Enganação, Furtividade e Ladinagem.`,
        e_restritiva: false,
      },
      {
        id: 57,
        nome: 'Código de Herói',
        descricao: `Você deve sempre manter sua palavra e nunca pode recusar um pedido de ajuda de alguém inocente. Além disso, nunca pode mentir, trapacear ou roubar.`,
        e_restritiva: false,
      },
      {
        id: 58,
        nome: 'Código Especial',
        descricao: `De acordo com o mestre, você pode criar um código diferente para seu personagem. Entretanto, um código só vale como desvantagem se realmente penalizá-lo. O mestre decide se um código é restritivo o bastante para valer como desvantagem.`,
        e_restritiva: false,
      },
      {
        id: 59,
        nome: 'Abatido',
        descricao: `Seu vigor se foi. Você recebe –2 PV por nível.`,
        e_idade: true,
      },
      {
        id: 60,
        nome: 'Catarata',
        descricao: `Seus olhos já não são os mesmos. Você sofre –5 em Percepção e Pontaria.`,
        e_idade: true,
      },
      {
        id: 61,
        nome: 'Dedos Trêmulos',
        descricao: `Você sofre –2 em Luta e Pontaria. Além disso, quando usa um item que esteja empunhando, role 1d4. Em um resultado 1, você derruba esse item.`,
        e_idade: true,
      },
      {
        id: 62,
        nome: 'Definhamento',
        descricao: `A idade roubou seu peso, deixando-o um fiapo do que era antes. Você sofre –5 em Fortitude e em testes de manobras de combate.`,
        e_idade: true,
      },
      {
        id: 63,
        nome: 'Desatento',
        descricao: `Você já não é mais tão atento quanto outrora. Na primeira rodada de qualquer cena de ação, role um dado. Em um resultado ímpar, você fica surpreendido (mesmo que um efeito possa evitar isso).`,
        e_idade: true,
      },
      {
        id: 64,
        nome: '“Devagar, Jovem!”',
        descricao: `Você já não anda no mesmo ritmo que antes. Seu deslocamento diminui em –3m e você não pode correr ou fazer investidas.`,
        e_idade: true,
      },
      {
        id: 65,
        nome: 'Gota',
        descricao: `Sempre que faz um teste de Destreza ou de perícias baseadas nesse atributo você perde 1d6 pontos de vida. Você só pode recuperar esses PV com descanso.`,
        e_idade: true,
      },
      {
        id: 66,
        nome: 'Juntas Duras',
        descricao: `Suas articulações doem. Você sofre –5 em testes de Acrobacia e Reflexos.`,
        e_idade: true,
      },
      {
        id: 67,
        nome: 'Melancólico',
        descricao: `Você já não tem mais tanta motivação para realizar grandes façanhas. Você perde 1 PM por nível.`,
        e_idade: true,
      },
      {
        id: 68,
        nome: 'Memórias Tristes',
        descricao: `Você passou por um trauma, como a perda de um ente querido ou a culpa por um erro que cometeu e pelo qual nunca se perdoou. Sempre que rola um resultado 1 natural em qualquer teste, você fica pasmo por 1 rodada e frustrado até o fim do dia (cumulativo).`,
        e_idade: true,
      },
      {
        id: 69,
        nome: '“No Meu Tempo...”',
        descricao: `Você se prende a visões idealizadas de um passado que nunca existiu e se torna presa fácil para manipulação. Você sofre –5 em Intuição e Vontade.`,
        e_idade: true,
      },
      {
        id: 70,
        nome: 'Pulmão Ruim',
        descricao: `Quando corre ou prende a respiração, você precisa fazer testes de Fortitude para não ficar fatigado a partir da primeira rodada (normalmente, personagens só precisam fazer esses testes após um número de rodadas igual a sua Constituição +1). Além disso, sempre que faz uma investida, você fica fatigado até o fim da cena.`,
        e_idade: true,
      },
      {
        id: 71,
        nome: 'Rabugento',
        descricao: `Você reclama de tudo. Você sofre –5 em testes de Carisma e de perícias baseadas nesse atributo, exceto Intimidação.`,
        e_idade: true,
      },
      {
        id: 72,
        nome: 'Recurvado',
        descricao: `A idade dobrou suas costas. Você conta como uma categoria de tamanho menor para alcance natural, modificador de manobras e armas que pode empunhar (mas não para espaço ocupado, modificador de Furtividade ou dano de armas naturais).`,
        e_idade: true,
      },
      {
        id: 73,
        nome: 'Sono Ruim',
        descricao: `Você acorda várias vezes no meio da noite, o que atrapalha seu descanso. Sua recuperação de PM e PV é sempre uma categoria pior. Se a condição de descanso já é ruim, você recupera apenas 1 PM e 1 PV, independentemente do seu nível. Se já recupera apenas 1 PM e 1 PV, não recupera nada!`,
        e_idade: true,
      },
      {
        id: 74,
        nome: 'Teimoso',
        descricao: `Sempre que falha em um teste de atributo ou de perícia que possa tentar novamente, você é obrigado a tentar pelo menos mais uma vez (mesmo que isso possa prejudicá-lo). Teimoso é quem teima com você!`,
        e_idade: true,
      },
      {
        id: 75,
        nome: 'Tosse',
        descricao: `Em cenas de ação, role 1d6 no início de cada rodada. Num resultado 1, você tem uma crise de tosse e fica atordoado por 1 rodada. Em cenas de interpretação, role 1d6 sempre que fizer um teste de perícia baseada em Carisma. Num resultado 1, você tem uma crise de tosse e sofre uma penalidade de –5 nesse teste.`,
        e_idade: true,
      },
      {
        id: 76,
        nome: 'Turrão',
        descricao: `Você faz tudo sempre do seu jeito e tem dificuldade de lidar com coisas nas quais não é perito. Você não recebe o bônus de metade do nível em perícias nas quais não é treinado.`,
        e_idade: true,
      },
      {
        id: 77,
        nome: 'Velha Ferida',
        descricao: `Você tem um machucado antigo, que nunca cicatrizou direito. Sempre que você sofre um acerto crítico, o multiplicador de dano aumenta em +1 e você fica fraco (mesmo que seja imune, cumulativo).`,
        e_idade: true,
      },
    ];
  }
}
