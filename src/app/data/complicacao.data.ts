import { Injectable } from '@angular/core';
import { Complicacao } from '../model/complicacao';

@Injectable({
  providedIn: 'root',
})
export class ComplicacaoData {
  private complicacoes: Complicacao[] = [];

  getComplicacoes(): any[] {
    return this.complicacoes;
  }

  constructor() {
    this.complicacoes = [
      { id:1,  nome: 'Amaldiçoado', descricao: 'Você foi amaldiçoado por uma entidade poderosa, como um lich, um lorde da Tormenta ou mesmo um deus. No início de cada cena envolvendo um perigo, role 1d6. Em um resultado 1, você perde todos os seus pontos de mana.',  e_restritiva: false
      },
      { id:2,  nome: 'Apetitoso', descricao: 'Por algum motivo, feras salivam ao vê-lo. Animais e monstros recebem +5 em testes de ataque e rolagens de dano contra você.',  e_restritiva: false
      },
      { id:3,  nome: 'Assombrado', descricao: 'Você é assombrado por um ser desagradável, como o fantasma de um ancestral, uma fada travessa ou um diabrete zombeteiro. No início de cada cena envolvendo um perigo, role 1d6. Em um resultado ímpar, você fica alquebrado até o fim da cena. Além disso, seu companheiro inconveniente conta em seu limite de parceiros.',  e_restritiva: false
      },
      { id:4,  nome: 'Cabeça Quente', descricao: 'Sempre que sofre dano, seu próximo turno deve ser dedicado a atacar a fonte do dano. Se não puder atacá-la — por exemplo, se a fonte do dano for um inimigo fora de seu alcance ou algo que por definição não possa ser atacado, como um raio proveniente de uma tempestade — você deve gastar sua próxima ação de movimento esbravejando contra o ar.',  e_restritiva: false
      },
      { id:5,  nome: 'Caolho', descricao: 'Você não tem um dos olhos. Você sofre –2 em Iniciativa, Percepção, Pontaria e Reflexos.',  e_restritiva: false
      },
      { id:6,  nome: 'Chato', descricao: 'Sempre que você sai de uma aldeia, uma festa acontece. Você sofre –5 em Diplomacia e a atitude inicial de NPCs em relação a você é uma categoria pior.',  e_restritiva: false
      },
      { id:7,  nome: 'Citadino', descricao: 'Você não se dá bem no mato. Você sofre –5 em Sobrevivência e, quando descansa nos ermos, sua recuperação é uma categoria pior (se já era ruim, você recupera apenas 1 PV e 1 PM, independentemente do seu nível).',  e_restritiva: false
      },
      { id:8,  nome: 'Combalido', descricao: 'Por alguma razão, natural ou sobrenatural, sua saúde é frágil. Você sofre –5 em Fortitude e recebe –1 PV por nível de personagem.',  e_restritiva: false
      },
      { id:9,  nome: 'Covarde', descricao: 'Seu lema é “aquele que foge hoje vive para lutar amanhã”. Claro, se der para evitar a luta de amanhã também, melhor! Você sofre –5 em testes de resistência contra efeitos de medo e, no início de cada cena envolvendo um perigo, deve rolar 1d4. Em um resultado ímpar, você fica abalado.',  e_restritiva: false
      },
      { id:10,  nome: 'Cria de Nimb', descricao: 'Você tem um parafuso a menos (talvez literalmente, se for um golem). Você sofre –5 em testes de perícias baseadas em Carisma. Além disso, no início de cada cena de ação, role 1d6. Com um resultado 1, você fica confuso (mesmo que seja imune a esta condição). Você não pode escolher essa complicação se for devoto de Nimb ou, por algum outro motivo, seguir suas obrigações e restrições.',  e_restritiva: false
      },
      { id:11,  nome: 'Crise de Fé', descricao: 'Você segue um dos deuses do Panteão, mas, no fundo, se pergunta se isso é o certo a se fazer. Você sofre –2 em Vontade e segue as Obrigações & Restrições de um deus, mas não recebe nenhum poder concedido por isso nem conta como devoto dessa divindade para cumprir pré-requisitos. Você não pode ser devoto de outro deus. ',  e_restritiva: true
      },
      { id:12,  nome: 'Desprotegido', descricao: 'Você nunca aprendeu a se defender. Você sofre –2 na Defesa e em testes de resistência.',  e_restritiva: false
      },
      { id:13,  nome: 'Distraído', descricao: 'Você é muito desligado e... Hein? Do que estávamos falando? Você sofre –5 em Iniciativa e Percepção.',  e_restritiva: false
      },
      { id:14,  nome: 'Expurgo de Wynna', descricao: 'Algo em você não agrada a Deusa da Magia. Você sofre –5 em testes de resistência contra efeitos mágicos.',  e_restritiva: false
      },
      { id:15,  nome: 'Fracote', descricao: 'Você cresceu dentro dos muros de um palácio ou enfurnado na torre de um mago e nunca praticou atividades físicas. Você está permanentemente fraco (–2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos).',  e_restritiva: false
      },
      { id:16,  nome: 'Hedonista', descricao: 'Você está acostumado a viver no luxo e não aceita nada abaixo disso. Em condições luxuosas, sua recuperação de PV e PM é igual ao seu nível. Em condições confortáveis, sua recuperação é igual à metade do seu nível. Em condições normais ou ruins, você recupera apenas 1 PV e 1 PM, independentemente do seu nível.',  e_restritiva: false
      },
      { id:17,  nome: 'Ímpio', descricao: 'Você odeia os deuses — e eles sabem disso. Você sofre –5 em testes de resistência contra magias divinas e não pode se beneficiar de efeitos de magias divinas. ',  e_restritiva: true
      },
      { id:18,  nome: 'Impulsivo', descricao: 'Você age primeiro e pensa depois (ou nem pensa). Você sofre –5 em Furtividade e Investigação e não pode fazer a ação preparar.',  e_restritiva: false
      },
      { id:19,  nome: 'Inculto', descricao: 'Você não teve acesso à educação. Você é analfabeto e recebe duas perícias treinadas a menos (isso pode reduzir as perícias que você pode escolher a zero, mas não afeta as perícias fixas de sua classe).',  e_restritiva: false
      },
      { id:20,  nome: 'Indolente', descricao: 'Você é apático e preguiçoso. Você sofre –5 em Reflexos e –3m em seu deslocamento.',  e_restritiva: false
      },
      { id:21,  nome: 'Ingênuo', descricao: 'Não há maldade em seu coração. Você sofre –5 em Enganação, Intuição, Investigação e Ladinagem.',  e_restritiva: false
      },
      { id:22,  nome: 'Maneta', descricao: 'Você não tem uma das mãos. Você só pode empunhar um item (e, obviamente, não pode usar armas de duas mãos).',  e_restritiva: false
      },
      { id:23,  nome: 'Marcado pelo Passado', descricao: 'Um evento em seu passado o deixou taciturno e sombrio. Você sofre –5 em Diplomacia e recebe –1 PM por nível de personagem.',  e_restritiva: false
      },
      { id:24,  nome: 'Matugo', descricao: 'Você não se dá bem em cidades. Você fica alquebrado em ambientes urbanos e, quando descansa nesses ambientes, sua recuperação é uma categoria pior (se já era ruim, você recupera apenas 1 PV e 1 PM, independentemente do seu nível).',  e_restritiva: false
      },
      { id:25,  nome: 'Míope', descricao: 'Você tem dificuldade de enxergar objetos distantes. Como alternativa, acha covardia atacar de longe e nunca treinou com armas de ataque à distância. Você sofre –5 em Percepção e Pontaria.',  e_restritiva: false
      },
      { id:26,  nome: 'Mouco', descricao: 'Sua audição é ruim. Você sofre –2 em Iniciativa, Percepção e Reflexos. Além disso, sempre conta como estando em condições ruins para lançar magias. Magias afetadas pelo poder Magia Discreta não sofrem essa limitação.',  e_restritiva: false
      },
      { id:27,  nome: 'Paranoico', descricao: 'Você não confia em ninguém, nem em seus aliados. Precisa passar em um teste de Vontade (CD 20 + seu nível) para aceitar qualquer ajuda — até cura! Se falhar no teste, não vai querer ser ajudado e, se for mesmo assim (contra sua vontade), fica alquebrado até o fim da cena. Além disso, não dorme direito: sua condição de descanso é sempre uma categoria pior do que seria pelas circunstâncias (se já era ruim, você recupera apenas 1 PV e 1 PM, independentemente do seu nível).',  e_restritiva: false
      },
      { id:28,  nome: 'Temeroso', descricao: 'Você tem medo de se machucar. Como alternativa, treinou apenas com armas de ataque à distância e não sabe o que fazer quando as coisas ficam mais “pessoais”. Você sofre –5 em Luta.',  e_restritiva: false
      },
      { id:29,  nome: 'Tolo', descricao: 'É fácil enganá-lo e manipulá-lo. Você sofre –5 em Intuição e Vontade.',  e_restritiva: false
      },
      { id:30,  nome: 'Vagaroso', descricao: 'Você está permanentemente sob efeito da condição lento (todas as suas formas de deslocamento são reduzidas à metade e você não pode correr ou fazer investidas).',  e_restritiva: false
      },
      { id:31,  nome: 'Arcanista de Rotina', descricao: 'Você não está acostumado a lançar magias sob pressão. Se estiver em alcance médio de qualquer ameaça, é considerado sob condição ruim para lançar magias. Se estiver em alcance curto, é considerado sob condição terrível!', classe: {id:1}, e_restritiva: false
      },
      { id:32,  nome: 'Foco Exigente', descricao: `Seu foco o pune quando você falha. Sempre que uma criatura passa em um teste de resistência contra uma magia sua, você perde 1 PV por PM gasto na magia. Pré-requisito: bruxo.`, classe: {id:1}, e_restritiva: false
      },
      { id:33,  nome: 'Linhagem Prepotente', descricao: `Sua magia inata rejeita auxílio de cacarecos. Você não pode usar catalisadores e itens esotéricos mundanos. Você ainda pode usar itens esotéricos mágicos, já que esses são verdadeiramente imbuídos de magia — como você! Pré-requisito: feiticeiro.`, classe: {id:1}, e_restritiva: false
      },
      { id:34,  nome: 'Mente Cansada', descricao: `Sua memória é péssima. Quanto mais magias você aprende, mais difícil fica lembrar de todas! Para cada círculo de magia que você pode lançar, o total de magias que pode memorizar diminui em 1. Pré-requisito: mago.`, classe: {id:1}, e_restritiva: false
      },
      { id:35,  nome: 'De Peito Aberto', descricao: `Você tem tatuagens tribais que quer exibir, confia na sua resistência natural ou só acha seu corpo lindo. Seja qual for o motivo, você não pode vestir armaduras e seu limite de itens vestidos diminui em dois. `, classe: {id:2}, e_restritiva: true
      },
      { id:36,  nome: 'Totem Gigante', descricao: `Você levou a orientação de levar o totem de sua tribo consigo muito literalmente. Você carrega uma grande coluna de madeira esculpida que jamais pode abandonar. A coluna ocupa 10 espaços e impõe penalidade de armadura –5. `, classe: {id:1}, e_restritiva: true
      },
      { id:37,  nome: 'Estrelismo', descricao: `Você é lindo, talentoso e… extremamente egocêntrico. Você sofre –5 em testes de Diplomacia e Intuição. Além disso, sempre que falha em um teste de Atuação, fica alquebrado até o fim da cena.`, classe: {id:3}, e_restritiva: false
      },
      { id:38,  nome: 'Falastrão', descricao: `Você está dando suas palestrinhas. Você não consegue ficar quieto e deve ser sempre o primeiro a falar, por mais inconveniente que isso possa ser. Você sofre –5 em testes de Furtividade e Nobreza e pode se envolver em diversos problemas, especialmente se estiver diante de certas autoridades ou tentando passar discretamente por alguém. `, classe: {id:3}, e_restritiva: true
      },
      { id:39,  nome: 'Coragem Líquida', descricao: `Você não vai a lugar algum sem uma caneca ou garrafa. Você sempre ocupa uma de suas mãos com uma bebida e, na primeira rodada de qualquer cena envolvendo um perigo, deve gastar uma ação de movimento para tomar um gole. A bebida não o beneficia, mas também não causa penalidades (além do gasto da ação) — de tanto beber, você já está acostumado a aguentar o tranco!`, classe: {id:4}, e_restritiva: false
      },
      { id:40,  nome: 'Esbanjador', descricao: `Você tem certas necessidades, que alguns chamam de “luxo” — mas, para você, são o motivo de viver! Para subir de nível, além de acumular XP suficiente, você deve “torrar” tibares em um festas e frivolidades, em um valor igual à 25% da diferença do dinheiro inicial do nível que vai alcançar para o nível atual (por exemplo, T$ 250 para subir para o 5° nível).`, classe: {id:4}, e_restritiva: false
      },
      { id:41,  nome: 'Limitado a (Criatura)', descricao: `Você se especializou contra um inimigo específico — e só. Escolha um tipo de criatura do poder Inimigo de (Criatura). Você só pode usar Marca da Presa contra criaturas deste tipo e sofre –2 em testes de ataque contra criaturas de outro tipo.`, classe: {id:5}, e_restritiva: false
      },
      { id:42,  nome: 'Superprotetor', descricao: `Você se preocupa com o bem-estar do seu grupo e faz questão de estar perto de seus companheiros — mesmo que isso não seja a melhor estratégia! Durante qualquer cena envolvendo um perigo, você sempre deve terminar seu turno adjacente a um aliado. Se não fizer isso, fica alquebrado e sofre –2 em seus testes por uma rodada.`, classe: {id:6}, e_restritiva: false
      },
      { id:43,  nome: 'Divindade Exigente', descricao: `Você serve sua divindade com afinco, mas às vezes parece que ela não fica satisfeita. No início de cada dia, role 1d4. Com um resultado 1, o custo de suas magias divinas aumenta em +1 PM por círculo até o fim do dia.`, classe: {id:7}, e_restritiva: false
      },
      { id:44,  nome: 'Preparação Litúrgica', descricao: `Você só pode lançar magias preparadas; suas outras magias não podem ser lançadas, mesmo que você tenha pontos de mana para tal. Para preparar magias, você precisa gastar uma hora de seu dia orando, meditando, entoando mantras ou fazendo qualquer outro tipo de ritual litúrgico. Ao fazer isso, você escolhe metade das magias que conhece (por exemplo, se conhece 5 magias, escolhe 2) e só poderá lançar as magias escolhidas. Caso não possa se preparar, não poderá trocar as magias escolhidas no dia anterior.`, classe: {id:7}, e_restritiva: false
      },
      { id:45,  nome: 'Tosco', descricao: `Você não se dá bem com objetos civilizados. Você não pode usar armas metálicas, nem nenhum equipamento superior. `, classe: {id:8}, e_restritiva: true
      },
      { id:46,  nome: 'Precavido', descricao: `Enquanto não conhece as capacidades do inimigo, você prefere lutar de maneira cautelosa. Tanta preocupação causa –2 em testes de ataque e resistência. Você pode se livrar desta penalidade até o final da cena gastando uma ação de movimento e passando em um teste de Guerra (CD 15 + ND do inimigo mais poderoso na cena).`, classe: {id:9}, e_restritiva: false
      },
      { id:47,  nome: 'Trabalhador Ocupado', descricao: `Você está tão ocupado trabalhando para os outros que não tem tempo de fazer seus próprios projetos! Você não recebe a habilidade Protótipo e, quando ganha a habilidade Fabricar Item Superior, não recebe um item gratuito.`, classe: {id:10}, e_restritiva: false
      },
      { id:48,  nome: 'Honra de Ladrão', descricao: `Você pode ser um bandido e salafrário, mas tem seus princípios. Você sempre cumpre suas promessas e nunca rouba ou tira vantagem de pessoas com menos recursos que você e seu grupo. `, classe: {id:11}, e_restritiva: true
      },
      { id:49,  nome: 'Firula', descricao: `Na primeira rodada de cada combate, você deve gastar uma ação padrão se apresentando, fazendo uma coreografia ou declamando seu peso, altura e histórico. `, classe: {id:12}, e_restritiva: true
      },
      { id:50,  nome: 'Filantropo', descricao: `Você doa parte de sua riqueza para fazer o bem. Você não recebe a habilidade Espólio e, quando usa sua habilidade Riqueza, recebe apenas metade do valor normal.`, classe: {id:13}, e_restritiva: false
      },
      { id:51,  nome: 'Mimado', descricao: `Bajulado desde criança, você fica desconcertado sempre que percebe que não é tão bom quanto lhe diziam. Na primeira vez em que cada cena que você falha em um teste de perícia, você perde 1 PM por patamar. Se já estiver sem PM, você fica frustrado por uma rodada.`, classe: {id:13}, e_restritiva: false
      },
      { id:52,  nome: 'Mimado', descricao: `Você faz tudo do jeito certo e fica desconfortável quando um de seus companheiros não age dessa forma. Sempre que um aliado fizer algo que violaria seu Código do Herói, isso conta como uma violação sua — a menos que você não note; o que exige dele um teste de Enganação ou Furtividade contra a sua Percepção ou Intuição (o que for maior).`, classe: {id:14}, e_restritiva: false
      },
    ];
  }
}
