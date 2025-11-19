import { Injectable } from '@angular/core';
import { Artefato } from '@app/model/artefato';

@Injectable({
  providedIn: 'root',
})
export class ArtefatoData {
  private artefatos: Artefato[] = [];

  get(): any[] {
    return this.artefatos;
  }

  constructor() {
    this.artefatos = [
      {
        id: 1,
        nome: 'Espada-Deus',
        descricao: `
<p>Poucos duvidam: as divindades estão presentes em cada aspecto da vida em Arton. Uma das provas
disso é a capacidade dos mortais de se tornarem
deuses menores. Contudo, tão forte é o poder divino
que até mesmo objetos podem ser deuses.</p>

<p>A Espada-Deus não é um objeto sagrado. Não é
poderosa porque foi abençoada por um deus. A espada-deus é, ela própria, cultuada. Ela oferece bênçãos,
possui clérigos, ouve preces. Alguns têm dificuldade
de entender como um objeto pode ser alvo de adora-
ção — mas, ao olhar pela janela, qualquer um é capaz
de ver alguém que venera o ouro ou uma bandeira.
Pessoas veneram objetos o tempo todo.</p>

<p>A Espada-Deus é a melhor arma já forjada por
Rhond, o Deus Menor das Armas. Foi empunhada
por incontáveis heróis e vilões, mas os nomes desses
mortais foram esquecidos — a arma é maior que
todos. Após ser usada por algum tempo, sempre
acaba em algum local inóspito de onde só pode ser
tirada por um mortal digno. Pode estar no fundo de
um lago, sendo entregue por uma fada, ou cravada
em uma pedra, selecionando quem pode arrancá-la.
A arma foi vista pela última vez nas mãos de Orion
Drake, na batalha contra a Tormenta em Tamu-ra.</p>

<p>A Espada-Deus é uma espada longa atroz precisa
pungente ameaçadora magnífica veloz, com dano básico
de 2d12. Alguns estudiosos e armeiros dizem que
seu fio é tão fino que pode cortar qualquer coisa e em
todos os Planos de existência simultaneamente. Por
isso, a espada-deus ignora redução de dano e seus
acertos críticos afetam até mesmo criaturas imunes a
acertos críticos. A espada-deus é indestrutível.</p>

<p>Quando há chance de combate, a Espada-Deus
vibra na mão do usuário, ou mesmo na bainha.
Apenas personagens com pelo menos 15 níveis em
classes com Luta como perícia inicial podem usar a
espada-deus. Os demais erram todos os ataques com a
arma. Quando está aguardando seu próximo usuário,
a Espada-Deus não permite que um personagem que
não cumpra esse pré-requisito tire-a de onde está.</p>

<p>Fisicamente, a Espada-Deus é surpreendentemente simples. Seu cabo é forrado com couro, seu
guarda-mão é uma barra de metal simples, sua
lâmina não possui adornos. Seu poder real não se
revela na aparência — apenas na luta.</p>
`,
      },

      {
        id: 2,
        nome: 'Joia da Alma',
        descricao: `
<p>No princípio não havia deuses. Nem vida, nem
mundo, nem mesmo o próprio tempo. Não havia
luz ou trevas, calor ou frio. Não havia forma nem tamanho, sequer havia o conceito de existir. Foi em
meio à não existência que o Nada e o Vazio se casaram e deram origem à Criação e tudo que a compõe.
O mundo de Arton. Engana-se, porém, quem pensa
que nenhum vestígio restou da aurora do universo.</p>

<p>Há uma fagulha. Um resíduo da inexistência que
se manifesta na forma de gema preciosa que ainda
hoje busca cumprir o propósito de sua essência. Os
mortais a chamam de Joia da Alma.</p>

<p>É tênue a linha entre a existência e a não existência. Perdida em um ambiente que não o seu, a
Joia da Alma busca transpor essa barreira. Para isso,
vasculha a memória daqueles que a tocam, procurando por falhas — ou fendas — na realidade, algo que
possa usar como meio para se reunir ao outro lado.
Não é capaz de impor uma ação aos seres de carne
e osso, mas se alimenta daquilo que enxerga. Isso
torna o contato prolongado algo perigoso, capaz de
causar danos irreparáveis ao espírito do portador.</p>

<p>Qualquer um que toque a Joia da Alma terá seu
passado esmiuçado pela pedra. Como efeito colateral, recuperará instantaneamente todas as memórias
de sua vida, tanto momentos bons quanto ruins,
desde o nascimento até agora. Por contrariar leis da
natureza, muitas vezes isso acontece de forma dolorosa. Nem todos estão preparados para o turbilhão
de emoções acarretado pela lembrança. O portador
mantém todas as lembranças enquanto segurar a joia.
Ao soltá-la, as memórias retornam ao esquecimento.</p>

<p>Portar a Joia da Alma fornece +3 em Inteligência
(somente após um dia de uso). O artefato é cobiçado
por arcanistas que memorizam magias, pois impede
que elas sumam da memória — para magos, o custo
para lançar magias arcanas diminui para 0 PM (custos
de aprimoramentos ainda precisam ser pagos).</p>

<p>Empunhar a Joia da Alma exige um teste de Vontade (CD 25). Se falhar, o personagem fica atordoado
por uma rodada e larga o artefato no chão. Se passar,
consegue segurar a Joia sem efeitos colaterais. Mesmo assim, precisa repetir o teste no início de cada
dia, com a CD aumentando cumulativamente em +1
por dia. Se falhar, fica frustrado. Se falhar novamente, fica esmorecido. Se falhar num terceiro teste, sua
sanidade se esvai. Se for um personagem jogador,
torna-se um NPC sob controle do mestre — a Joia
não foi feita para ser empunhada por mortais.</p>

<p>A Joia da Alma é uma gema indestrutível e semi-transparente, lapidada com vinte faces iguais. As
mesmas faces dos vinte deuses primordiais, cujo
nascimento presenciou.</p>
`,
      },

      {
        id: 3,
        nome: 'O Baralho do Caos',
        descricao: `
<p>Este artefato parece um baralho comum, com
cartas bastante gastas. Ele pode ser usado para jogos
como wyrt e fornece +10 em testes de Jogatina para
seu usuário — mas caso ele abuse da sorte, o bônus
se transforma em uma penalidade de –10. O mestre
decide o que é "abusar da sorte".</p>

<p>Porém, o verdadeiro poder do Baralho do Caos
se revela quando um personagem diz "Eu aposto
tudo" e saca de uma a quatro cartas, a sua escolha.
O artefato muda para ter 22 cartas, cada uma com
um símbolo específico. As cartas devem ser sacadas
ao mesmo tempo e seus efeitos acontecem instantaneamente — para o bem ou para o mal. Role 1d%
na tabela ao lado para cada carta, para saber qual foi
sacada (role novamente resultados repetidos). Um
personagem treinado em Jogatina pode fazer um
teste (CD 30) para ignorar uma carta que não queira
e sacar outra no lugar (apenas uma vez).</p>

<p>Quando é usado dessa forma, o Baralho do Caos
desaparece, para reaparecer em uma mesa de jogo
qualquer de Arton. Dizem que ele já apareceu nas
mais imundas tavernas portuárias e nos mais elegantes salões de palácios, transformando mendigos em
reis e reis em mendigos.</p>

<p><b>Tabela (role 1d% para cada carta):</b></p>

<table border='1' cellpadding='4' cellspacing='0'>
  <tr><th>D%</th><th>Carta</th><th>Efeito</th></tr>
  <tr><td>01-05</td><td>Abismo</td><td>Receba redução de dano</td></tr>
  <tr><td>06-09</td><td>Amigo</td><td>Um de seus parceiros racionais irá traí-lo no pior momento possível (a traição ocorre em no máximo um ano)</td></tr>
  <tr><td>10-14</td><td>Anel</td><td>+5 pontos de mana permanentes</td></tr>
  <tr><td>15-19</td><td>Árvore</td><td>+10 pontos de vida permanentes</td></tr>
  <tr><td>20-24</td><td>Coração</td><td>+1 em um atributo à sua escolha permanentemente</td></tr>
  <tr><td>25-28</td><td>Crânio</td><td>Enfrente cópia sombria</td></tr>
  <tr><td>29-33</td><td>Donzela</td><td>Derrote um monstro e suba de nível</td></tr>
  <tr><td>34-38</td><td>Fogo</td><td>Ressuscite quando morrer</td></tr>
  <tr><td>39-43</td><td>Gema</td><td>Receba tesouro mundano</td></tr>
  <tr><td>44-48</td><td>Lua</td><td>Receba 1d4 Desejos</td></tr>
  <tr><td>49-52</td><td>Martelo</td><td>Perca todos os itens mágicos</td></tr>
  <tr><td>53-56</td><td>Noite</td><td>-1 em todos os testes de resistência</td></tr>
  <tr><td>57-60</td><td>Presas</td><td>Perca dinheiro e itens mundanos</td></tr>
  <tr><td>61-65</td><td>Servo</td><td>Receba os serviços de um espírito (o servo é um parceiro veterano de um tipo à sua escolha)</td></tr>
  <tr><td>66-70</td><td>Sol</td><td>Receba uma arma mágica maior</td></tr>
  <tr><td>71-75</td><td>Tentáculo</td><td>-1 em um atributo aleatório permanente (defina com 1d6)</td></tr>
  <tr><td>76-80</td><td>Tolo</td><td>Perca 10.000 XP e saque outra carta</td></tr>
  <tr><td>81-85</td><td>Trono</td><td>+2 em Diplomacia e um feudo</td></tr>
  <tr><td>86-90</td><td>Vizir</td><td>Receba a resposta para uma pergunta (usar em até 1 ano)</td></tr>
  <tr><td>91-94</td><td>Nada</td><td>Escape de um perigo qualquer (uma força primoridal surge para protegê-lo; em termos de jogo, qualquer ataque ou efeito contra você é anulado e você recebe imunidade a tudo por uma rodada)</td></tr>
  <tr><td>95-98</td><td>Vazio</td><td>Sua alma deixa seu corpo (seu corpo continua funcionando, mas em coma)</td></tr>
  <tr><td>99-100</td><td>Curinga</td><td>Ganhe 10.000 XP ou saque mais duas cartas</td></tr>
</table>

<p>Observações: no texto original há descrições expandidas para cada carta (por exemplo, 'Fogo' ressuscita com PV/PM restaurados; 'Crânio' convoca sombra com suas estatísticas; 'Servo' descreve que o servo se redime servindo-o até que seus serviços não sejam mais requisitados; etc.).</p>
`,
      },

      {
        id: 4,
        nome: 'Olho de Sszzaas',
        descricao: `
<p>Como parte de seu plano para retornar ao Panteão, o deus Sszzaas removeu um de seus próprios olhos para forjar um artefato — o Olho de Sszzaas, uma gema esverdeada segura por um cajado de madeira fossilizada. As extremidades do cajado são ligadas por uma corrente, cujo comprimento pode variar magicamente.</p>

<p>Cultistas de Sszzaas foram encarregados de esconder o artefato em um templo nas proximidades de Lenórienn, onde deveria ser encontrado pela pessoa certa. O portador da peça acreditaria ser capaz de usar magia poderosa, quando na verdade estaria servindo aos interesses do Grande Corruptor. De fato, o Olho carrega parte da consciência do próprio Sszzaas, que testemunha e manipula tudo à distância.</p>

<p>O cajado permite ao personagem lançar qualquer magia que conheça ou tenha ouvido falar — seja arcana ou divina — como se fosse uma habilidade mágica, sem precisar gastar pontos de mana. O personagem ainda pode usar aprimoramentos, mas precisa pagar por eles.</p>

<p>Lançar uma magia exige um teste de Misticismo (CD 20 + o custo em PM da magia, incluindo aprimoramentos). Se o teste falhar, a magia não funciona ou provoca algum efeito imprevisível (alvo trocado, efeito invertido, Teletransporte para um local diferente...) ou assim parece. Na verdade, sempre que uma magia “falha”, isso quer dizer que Sszzaas está no controle — e as coisas estão saindo exatamente como ele planejou, seguindo algum plano intrincado e desconhecido pelo portador do cajado.</p>

<p>Apesar de poderoso, o Olho de Sszzaas é uma peça pouco conhecida. Reconhecê-lo e descobrir como usá-lo exige um teste de Conhecimento (CD 30).</p>
`,
      },

      {
        id: 5,
        nome: 'Rubis da Virtude',
        descricao: `
<p>Criados para selar um pacto entre os deuses do Panteão, os Rubis da Virtude quase foram a causa de sua morte. Cada um, se destruído, destruiria também o deus que estivesse secretamente ligado a ele — sem que fosse possível descobrir qual rubi pertencia a quem. Entregues a cada deus após sua criação, seriam mantidos como provas de confiança, garantias de que os deuses, mesmo aqueles envolvidos em disputas, jamais tentariam destruir uns aos outros.</p>

<p>As gemas não podem ser danificadas por mortais ou mesmo por deuses menores; apenas um deus do Panteão pode destruí-las. Além disso, não podem ser detectadas por meios mágicos.</p>

<p>Mesmo sem saber a quem estava ligada, cada deus guardou em lugar seguro a gema em sua posse. No entanto, conseguindo o que parecia ser impossível, Sszzaas — o mais traiçoeiro e furtivo dos seres — roubou todos os rubis. Ele foi descoberto e julgado antes de descobrir como utilizá-los, mas teve tempo de escondê-los em Arton. E os Rubis, protegidos de qualquer detecção mágica, não puderam ser encontrados.</p>

<p>Como castigo, Sszzaas foi transformado em avatar e condenado a vagar pelo mundo até ser destruído ou aceito de volta. Os Rubis estavam desaparecidos, mas nenhum mortal poderia danificá-los. Mesmo assim, para evitar riscos, Khalmyr decretou que as ligações vitais entre os rubis e os deuses fossem rompidas. E assim foi feito.</p>

<p>Mesmo sem essa conexão, as gemas ainda eram poderosas, pois traziam parte da essência divina dos vinte deuses. Sabendo que poderia utilizá-las de alguma forma, Sszzaas tratou de mantê-las longe dos olhos dos deuses, até o último instante.</p>

<p>Os Rubis da Virtude trazem grande poder a quem encontrá-los. Cada Rubi fornece a seu portador um nível de experiência em uma classe que ele já possua. Para isso, a gema deve ser incrustada no corpo da criatura, o que exige um teste de Cura (CD 25). O efeito leva um dia para se manifestar. Por sua invulnerabilidade, cada Rubi fornece redução de dano 2 e +1 em testes de resistência, cumulativos com efeitos já existentes — incluindo outros rubis. Por fim, por sua indetectabilidade, cada rubi torna o portador mais difícil de observar por meios mágicos. Um conjurador que lance uma magia de adivinhação contra o portador de um destes artefatos deve passar em um teste de Misticismo (CD 30 + a quantidade de rubis) ou a magia não terá efeito.</p>
`,
      },

      {
        id: 6,
        nome: 'Amuleto do Abutre',
        descricao: `
<p>Este pingente de ouro em formato de abutre é um
poderoso amuleto arcano, cuja origem sombria é cercada
de mistério. Sabe-se que ele surgiu na mesma época
em que Ferren Asloth realizou seu famigerado ritual e
que é um dos mais poderosos itens do Arquilich Ferren
Asloth.</p>

<p>Capaz de conceder habilidades arcanas incríveis fornece ao usuário +50 PM (somente após um dia de
uso), aumenta em +5 a CD para resistir a suas magias
arcanas e permite utilizar a habilidade Conhecimento
Sequestrado (CD Int, veja p. 294).</p>

<p>Tamanho poder, entretanto, não passa de uma
armadilha. Em sua obsessão pela vida eterna, Ferren
aprisionou uma pequena parte de sua essência neste
amuleto, fazendo com que ele funcione como um
segundo filactério. No início de cada dia em que estiver
usando o amuleto, o portador deve fazer um teste
de Vontade (CD 20 + 1 por dia adicional). Se falhar,
começa a ter pensamentos cruéis, que o incentivam
a buscar mais poder a qualquer custo. Se falhar uma
segunda vez, torna-se dependente do amuleto e não
consegue mais removê-lo por vontade própria (e fica
agressivo caso outra pessoa tente fazê-lo). Por fim, se
falhar uma terceira vez, sua alma é destruída. Quando
isso acontecer, se Ferren estiver destruído, o fragmento
de sua alma armazenado no amuleto se apossa do
corpo do portador, trazendo o Arquilich de volta à
existência. O portador passa automaticamente no teste
de Vontade sempre que tiver matado um conjurador
arcano no dia anterior.</p>
`,
      },

      {
        id: 7,
        nome: 'Rompedor da Realidade',
        descricao: `
<p>Este artefato lefeu é um machado de guerra gigante
atroz pungente anticriatura (não lefeu) magnífico de matéria
vermelha.</p>

<p>Ataques com ele ignoram redução de dano,
fortificação e imunidade a acertos críticos. Além disso,
seus golpes distorcem a vítima: uma criatura atingida
pela arma perde 1 ponto cumulativo de um atributo
aleatório permanentemente (Fort CD For evita). Um
não lefeu que empunhe o Rompedor fica debilitado até
o fim da cena.</p>
`,
      },

      {
        id: 8,
        nome: 'Armadura de Crânio Negro',
        descricao: `
<p>Este artefato é tão conhecido quanto a figura sinistra que o trajava: o primeiro algoz da Tormenta. O
temível e mortal Crânio Negro — caçador e assassino
forjado em sombras rubras, servindo aos até então
desconhecidos Lordes da Tormenta.</p>

<p>Dizem que, ao cruzar as terras corrompidas de
Trebuck, ele se curvou aos invasores lefeu e recebeu
bênçãos macabras que o marcariam para sempre. Sob
o comando de Gatzvalith, um dos poderosos senhores
lefeu, Crânio Negro seria enviado em missões de assassinato por toda Arton, matando nobres e plebeus
com igual impiedade. Seu rosto, sempre oculto sob o
elmo em forma de caveira, logo lhe conferiu a alcunha.
E essa alcunha logo se tornou sinônimo de morte.</p>

<p>Dizia-se que a armadura escura não era de metal,
mas feita de uma liga tão forte e misteriosa que nada
podia perfurá-la. Movia-se como se fosse viva, suas
placas deslizando para facilitar movimentos e bloquear
lâminas. Mas o mais aterrador em Crânio Negro era
sua imortalidade, sua habilidade de retornar da morte.
Não importava quantas vezes fosse derrotado, em
quantos pedaços fosse separado, ele surgia novamente. Implacável e inevitável como a própria Tormenta.</p>

<p>Sua identidade foi um mistério profundo. Acredita-se que ele próprio ignorava seu passado, ou que isso
fora apagado de sua mente por Gatzvalith. Assolado
por fragmentos de lembranças de antigos heróis,
conhecidos como o Esquadrão do Inferno, ele lutava
sem saber quem realmente era, mesclando seus poderes com aqueles de aventureiros esquecidos. Mas a
verdade, conhecida por poucos, é que suas memórias
foram utilizadas por diabretes negociantes para forjar
a própria armadura negra.</p>

<p>Crânio Negro travou combates épicos contra
alguns dos maiores heróis de Arton, liderando as
forças lefeu. Acabou se tornado ele próprio um Lorde
da Tormenta. Mas terminou derrotado e destruído
em definitivo, sua verdadeira identidade conhecida
apenas por aqueles presentes na batalha final. Quanto
à armadura, dizem ser cobiçada por outros algozes da
Tormenta, talvez aguardando em alguma masmorra
sinistra para ser encontrada.</p>

<p>A Armadura de Crânio Negro é uma armadura completa
fortificada guardiã macabra que parece se mover sozinha
(suas placas deslizam para manter o usuário protegido
e defendê-lo). Apesar de seu peso e rigidez, não atrapalha os movimentos, permitindo saltos e acrobacias
em meio ao combate: conta como uma armadura leve com penalidade de armadura 0. Contudo, tem um efeito
colateral: bombardeia o usuário com pensamentos da
pessoa cujas memórias foram usadas em sua confecção,
um membro do Esquadrão do Inferno. No início de cada combate, você deve fazer um teste de Vontade
(CD 25) ou fica atordoado por 1 rodada.</p>
`,
      },

      {
        id: 9,
        nome: 'Escudo Impérvio',
        descricao: `
<p>No coração das ruínas esquecidas de um templo
sszzaazita, jaziam tesouros ocultos que sussurravam
histórias de poder e perdição. Entre eles, erguia-se
o Escudo Impérvio, obra-prima de mistério e magia.
Moldado a partir de uma liga impossível de adamante e mitral, o artefato parecia desafiar todas as
leis conhecidas da forja mortal. Muitos estão certos
de que sua criação só pode envolver interferência
direta de forças divinas, tamanha sua resistência e
perfeição. De fato, até mesmo um deus teria dificuldade para quebrá-lo.</p>

<p>Imenso e adornado com uma carranca monstruosa, este escudo teria sido um dos primeiros artefatos
conquistados por Mestre Arsenal em suas jornadas por
Arton. Alguns sussurram que tudo sobre o escudo seria
mentira sszzaazita, simples armadilha para atrair desavisados; outros dizem que foi o prêmio de uma batalha
épica no templo, contra o próprio avatar rastejante de
Sszzaas. A única certeza é que, em posse de Arsenal, o
Escudo Impérvio se tornou sinônimo de invencibilidade.</p>

<p>Diz-se que o escudo não apenas protege fisicamente, mas reflete a força de vontade de quem o empunha.
Nas mãos de Arsenal, cuja determinação é descrita
como infinita, o Escudo Impérvio acabaria se tornando
a mais impenetrável muralha, capaz de repelir o fogo
dos dragões e a fúria de tempestades. Muitos o viram
resistir a explosões que destruíram exércitos inteiros,
incólume como o próprio aço do destino.</p>

<p>O Escudo Impérvio é um escudo pesado que fornece
+8 na Defesa, +5 em testes de resistência e redução
de dano 30.</p>
`,
      },

      {
        id: 10,
        nome: 'Kailash',
        descricao: `
<p>Esta é a icônica arma do notório (não) ladino
Sandro Galtran, que teria atuado na derrota do Paladino
de Arton. “Kailash” significa “grande matador” num
antigo idioma hynne; assim como os hynne, esta é uma
arma pequena e de aspecto quase inofensivo. Lembra
uma esfera metálica com cravos, com um cordão de suporte para arremesso. No entanto, uma vez dominada,
tem habilidades variadas e grande poder destrutivo.</p>

<p>Sendo improvável que os próprios hynne tenham
forjado o artefato, sua verdadeira origem é misteriosa. Talvez tenha sido ofertado a algum aventureiro
hynne do passado por Hyninn ou outra divindade.
Sabe-se apenas que o Kailash ressurgiu em tempos
relativamente recentes — o célebre ladino Leon
Galtran e seus companheiros teriam sido contratados
por um rico fazendeiro de Deheon para salvar sua
filha desaparecida, Karin (que mais tarde se tornaria
esposa de Leon e mãe de Sandro). Para ajudá-los na
empreitada, todos receberam itens mágicos diversos.
A Leon coube esta estranha e improvável arma má-
gica, cujo potencial completo não havia ainda sido
revelado até então.</p>

<p>O Kailash é uma boleadeira precisa de arremesso dilacerante flamejante magnífica, com as seguintes habilidades:</p>

<p>• Captura. Quando o Kailash é arremessado para
agarrar à distância, seu cordão cresce e forma um
laço ou rede, fornecendo +5 no teste de manobra.
Além disso, se for usada para agarrar uma criatura
Pequena ou menor, pode agarrar criaturas desses
tamanhos adjacentes ao alvo principal (você faz
um único teste e compara o resultado com os
testes de cada criatura).</p>

<p>• Arrastar. Se você tiver agarrado uma ou mais
criaturas com o Kailash, pode gastar uma ação de
movimento para fazer um novo teste de agarrar
contra essas criaturas. Se vencer, arrasta-as até
9m em qualquer direção.</p>

<p>• Nova Arma. Sob um comando do usuário, o Kailash
pode distender um ou mais de seus espigões,
que então funcionam como empunhaduras ou
extremidades agressivas, mudando a forma e
os poderes da arma. O artefato se transforma
em uma maça-estrela anticriatura (mortos-vivos), uma picareta anticriatura (gigantes) ou uma lança
anticriatura (dragões). O artefato mantém seus
demais encantos e poderes.</p>
`,
      },

      {
        id: 11,
        nome: 'Lorde Enxame',
        descricao: `
<p>Nos confins de Arton, uma lenda sinistra se espalhou como uma literal nuvem de gafanhotos.
Fala sobre o monstruoso Lorde Enxame, vilão
cujo corpo enganosamente humanoide era formado
por milhares de insetos densamente agrupados — a
mão composta empunhando uma reluzente espada
mágica. Lorde Enxame se mostrava capaz de comandar todos os insetos presentes em regiões inteiras,
lançando pragas voadoras e rastejantes contra os
reinos, reduzindo batalhões a ossos. Seu propósito:
exterminar as criaturas de sangue vermelho, transformar o mundo em um império rastejante, dominado
por insetos. Sua presença aterrorizou vilarejos e
causou grande pânico, até que corajosos aventureiros — auxiliados pela maga Raven Blackmoon e por
ninguém menos que Mestre Arsenal — desvendaram
o segredo do estranho conquistador.</p>

<p>Descobriu-se que Lorde Enxame não era o que
aparentava: o “corpo” feito de praga compacta não
representava sua forma real. A inteligência maligna
na verdade se alojava na própria espada, um raro
artefato senciente, com vontade e objetivos próprios.
Forjada por alguma civilização há muito desaparecida,
ou mesmo em algum ponto longínquo no vazio entre
mundos. Caprichosa, a arma até mesmo projetava
sua voz zumbidora para sustentar a ilusão do corpo
falso empunhando-a.</p>

<p>Por muitos anos a espada esteve armazenada
em um cofre metálico, trancado e protegido por
poderosas magias, uma prisão edificada por mãos
desconhecidas. Porém, um tremor de terra causou
o rompimento da tranca — e Lorde Enxame escapou,
convocando uma legião de insetos para realizar sua
fuga. O artefato, mais tarde sob a posse de Mestre
Arsenal, teria sido novamente trancado em segurança. Contudo, após sua ascensão divina, estará Lorde
Enxame ainda seguro? Correm rumores de que o vilão
insetoide foi novamente libertado, já planejando
trazer novos horrores a Arton.</p>

<p>Aquele capaz de dominar a perigosa espada
também poderá reescrever o destino de Arton.
Exterminar populações, destruir lavouras, dizimar
florestas, debelar exércitos. É imperativo que Lorde
Enxame jamais retorne.</p>

<p>Lorde Enxame é uma espada longa certeira cruel anticriatura (humanoides) magnífica venenosa. Seu usuário
pode lançar a magia Legião (CD Car), mas apenas em
criaturas que, a critério do mestre, tenham natureza
insetoide (inclui alguns kaiju). Por fim, ela é uma arma
inteligente com as seguintes características: Artefato
(nível 20); Ego 39, Int 5, Sab 2, Car 4 e 31 PM; Perícias
Conhecimento +21, Enganação +20, Percepção +18;
Magias Compreensão, Enxame de Pestes, Visão Mística (CD
25, atributo-chave Inteligência). Ele é capaz de falar
e tem percepção às cegas (médio).</p>
`,
      },

      {
        id: 12,
        nome: 'Monóculo da Verdade',
        descricao: `
<p>Entre os tesouros mais enigmáticos de Arton, o
Monóculo da Verdade carrega a lenda de um soberano cuja astúcia rivalizava com qualquer deus.
Este artefato teria sido forjado nos salões ocultos
dos magos de Ahlen e pertenceu a Orestes Rigaud,
o Longevo — monarca que desafiou tanto o tempo
quanto as intrigas de seus inimigos. Com armação de
prata ornada e lente escura como a noite, o monóculo
brilhava em arcos coloridos ao capturar a luz, como se
revelasse fragmentos da verdade universal.</p>

<p>A obsessão de Orestes por desmascarar mentiras e traições se tornou lendária. Com o monóculo,
enxergava através de ilusões e reconhecia venenos
ocultos, frustrando assassinos e desarmando conspirações. Sob sua vigília severa, o reino de Ahlen
permaneceu estável e sua coroa, segura. Contudo,
nenhum monarca vive para sempre. Após décadas
de reinado, Orestes sucumbiu à morte natural, e o
monóculo desapareceu misteriosamente.</p>

<p>A história conta que um clérigo de Hyninn, enviado para destruir o artefato por ordem divina, foi
seduzido por sua cobiça. Substituindo-o por uma
imitação, vendeu o original a Mestre Arsenal por
uma fortuna exorbitante, traindo tanto sua missão
quanto seu deus. Transformado de relíquia de justiça
em ferramenta de engano, hoje o Monóculo da Verdade
está nas mãos de algum novo dono, ou em meio aos
tesouros de alguma masmorra. Seu brilho colorido não
revela apenas verdades ocultas, mas também reflete
as escolhas sombrias daqueles que ousam possuí-lo.</p>

<p>O usuário do Monóculo da Verdade recebe +10 PM
(apenas após um dia de uso) e +10 em Iniciativa,
Intuição e Percepção. Além disso, pode lançar as magias Orientação e Visão da Verdade e pode usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um clérigo de seu nível.</p>
`,
      },

      {
        id: 13,
        nome: 'Slash Calliber',
        descricao: `
<p>Os artefatos de Arton acompanham grandes campeões ou figuram em aventuras épicas. Quase sempre.
Era uma vez uma espada mágica chamada Slash
Calliber, cujas histórias enchiam tavernas de incredulidade. Mais que uma arma encantada consciente,
era uma personalidade — e das mais inconvenientes.
Forjada como uma combinação improvável de magia
divina e sarcasmo puro, a espada tinha um talento
singular: transformar qualquer encontro pacífico em
uma batalha sangrenta (ou, no mínimo, desastrosa).</p>

<p>Dizia-se que Slash Calliber podia ler os pensamentos mais sombrios e proibidos de seu portador e de
quem mais estivesse por perto. “Meu dono acha que
você fede mais que um cadáver de orc”, proclamava
a espada para um bárbaro que até então era aliado de
seu portador. Quando o bárbaro inevitavelmente se
enfurecia e decidia mostrar quem seria o cadáver agora,
o portador de Slash Calliber só podia tentar desmentir
(e escapar).</p>

<p>Outras histórias mencionam sua incapacidade
completa de ficar calada. Quando um ladino tentou
utilizá-la durante uma infiltração no palácio imperial,
percebeu tarde demais ser impossível percorrer dois
metros sem que o artefato disparasse sonoros insultos contra cada progenitora de cada guarda, nobre ou
regente. Conta-se que o infeliz acabou capturado e
sentenciado a dezessete prisões perpétuas. Quanto
à arma, agora integrando o tesouro do palácio, teria
sido parcialmente responsável por incitar a Guerra
Artoniana. Exagero, é claro. Ou não.</p>

<p>Mas o ápice de sua infâmia teria ocorrido séculos
antes, durante a Guerra dos Seis Reinos, evento sem
registros oficiais na história de Arton — mencionado
apenas em causos de credibilidade escassa. Durante
uma reunião de paz, Slash Calliber, então na bainha de
um nobre distraído, decidiu fazer uma piada sobre a
cintura avantajada do rei anão. A tensão aumentou,
culminando em uma peleja tão grandiosa quanto
catastrófica. A espada ficaria conhecida nos antigos
reinos de Lamnor como “a Iniciadora de Guerras”.</p>

<p>Mas nem tudo é desastre. Uma vez satisfeita
com o caos obtido, diz-se que esta arma compensa
seu portador com relâmpagos destruidores e habilidades de combate dignas de um guerreiro veterano.
O segredo é evitar que ela fique entediada: quando
esse evento terrível acontece, Slash Calliber é capaz
de qualquer coisa!</p>

<p>Slash Calliber é uma espada longa certeira cruel elétrica
formidável. Você pode lançar Relâmpago (se já puder
lançar essa magia, seu custo diminui em –1 PM). Ela é
uma arma inteligente com as seguintes características:
artefato (nível 20); Ego 31, Int 1, Sab –1, Car 5 e 25 PM;
Perícias Enganação +21, Intimidação +21, Intuição
+18, Percepção +18; Magias Compreensão, Relâmpago
(CD 25, atributo-chave Carisma). Ela é capaz de falar
(mais do que devia) e tem visão no escuro.</p>
`,
      },

      {
        id: 14,
        nome: 'Vingança de Khinlanas',
        descricao: `
<p>A queda da cidade-estado de Lenórienn é bem
conhecida. Contudo, nem todos sabem sobre o último
rei élfico e seu arco encantado.</p>

<p>No coração da grande tragédia élfica, destaca-se
a figura imponente do Rei Khinlanas. Orgulhoso e
intransigente, portava-se um como símbolo vivo da
superioridade élfica, governando com políticas de isolamento absoluto. A crença de Khinlanas na perfeição
de seu próprio povo se tornou um muro, separando
Lenórienn do restante de Lamnor, até mesmo de
aliados em potencial.</p>

<p>Mesmo quando a Aliança Negra marchou sobre o
continente, liderada pelo cruel Thwor Khoshkothruk,
o altivo Khinlanas se recusou a buscar ajuda das “raças
inferiores”. A captura de sua filha Tanya pelas mãos
do líder bugbear deveria ter sido um alerta, mas seu
orgulho inabalável o manteve obstinado. Enquanto
as torres delicadas de Lenórienn ardiam, nenhum
reforço humano veio em socorro. O destino da cidade
foi selado, sangue élfico regou as ruínas. Quanto a
Khinlanas, seu cadáver acabou transformado em parte
de um trono para o general bugbear.</p>

<p>A lenda, no entanto, não termina com sua morte. Seu arco pessoal sagrado, ofertado pela própria
Glórienn, acabaria resgatado por aventureiros. Feito
de madeira verde-oliva e banhado em séculos de
magia, ficaria conhecido como Vingança de Khinlanas.
Um artefato que evoca a arrogância do monarca, mas
também uma promessa de justiça para os elfos.</p>

<p>Diz-se que o arco contém a fúria reprimida de
Khinlanas, amplificando a força do portador, especialmente se for elfo ou devoto de Glórienn. Em batalha,
seu poder é nutrido pela determinação do arqueiro
e, paradoxalmente, pela fama — ou infâmia — que
o acompanha.</p>

<p>Vingança de Khinlanas é um arco longo atroz preciso
pungente magnífico. Se você for elfo e/ou devoto de
Glórienn, recebe um bônus adicional cumulativo de
+1 em testes de ataque e rolagens de dano (ou seja,
+2 se for ambos). Além disso, por pertencer ao rei
de uma raça orgulhosa, reage à personalidade de seu
portador: você soma seu Carisma ao dano.</p>
`,
      },

      {
        id: 15,
        nome: 'Wakizashi da Morte',
        descricao: `
<p>Esta bela espada curta tamuraniana não é apenas
uma arma, mas um arauto do inevitável. Forjada nos
dias dourados de Tamu-ra, muito antes de sua destrui-
ção pela Tormenta, a espada, diz-se, foi abençoada pelo
próprio Deus da Honra. Sua missão: ser empunhada
pelo Executor Imperial, uma casta samurai destinada
a eliminar aqueles apontados por seu senhor.</p>

<p>Embora o nome da espada soe agourento aos povos
do Reinado, o Império de Jade tem postura diferente
em relação à morte. Consideram-na algo natural e
necessário, tão importante quanto a própria vida.
Tudo que inicia deve terminar, tudo que nasce deve
morrer. Em Tamu-ra, não existe aspiração maior que
encontrar a morte com plenitude, dignidade e honra.
Assim, o Executor Imperial com a Wakizashi da Morte
na verdade tem a importante missão de proporcionar
morte honrada aos escolhidos do Imperador.</p>

<p>É interessante notar que o nome da arma tem
significado especial no idioma tamuraniano. Uma espada curta normal, wakizashi, é escrita 脇差: algo como
“inserida lateralmente”, devido ao hábito tradicional
de usá-la em uma faixa na cintura. A arma sagrada de
execução tem a mesma pronúncia, /wakizashi/, mas é
escrita com símbolos diferentes — 脇座死, que podem
ser interpretados como “morte ao lado”.</p>

<p>Aquele que encara o portador da arma como
inimigo em batalha enfrenta uma provação terrível.
Brilhante como o luar, a lâmina polida guarda um segredo: ao refletir o rosto de alguém, revela o momento
exato de sua morte. Contam os bardos que guerreiros
destemidos já tremeram ao testemunhar seus destinos,
enquanto nobres e senhores da guerra esmoreceram
vislumbrando a inexorável decadência de suas vidas.</p>

<p>Aqueles que enxergam a própria morte recebem forças
extraordinárias para adiar o momento fatal: tornam-se
mais ágeis, mais resistentes, como se a Criação lhes
concedesse uma última chance de recuperar a honra.
Contudo, quando o instante profetizado se aproxima,
o fio da espada corta a favor do destino, tornando
impossível resistir ao golpe derradeiro.</p>

<p>A Wakizashi da Morte é uma espada curta formidável.
Qualquer criatura inteligente (Int –3 ou maior) que veja
seu reflexo na lâmina enxerga o momento da própria
morte. Essa criatura passa a receber +2 na Defesa e
em testes de resistência. Contudo, quando o evento
profetizado se aproxima, em vez disso ela sofre –10 na
Defesa e em testes de resistência, e qualquer ataque
que a acerte é um crítico automático. Tudo conspira
para que a profecia se cumpra.</p>

<p>Quando a morte prevista não envolve combate, os
efeitos mudam. Por exemplo, um personagem marcado
para morrer de doença recebe +5 em Fortitude, mas
falha automaticamente ao entrar em contato com a
peste que vai matá-lo.</p>

<p>Nem sempre o destino profetizado é inevitável.
Caso o condenado consiga eliminar por completo a
causa da morte (matando o assassino, erradicando
a doença...), o futuro muda. Contudo, muitas vezes
essa solução será ilusória: o assassino tinha um irmão
gêmeo, ou a doença “erradicada” volta mais forte.</p>
`,
      },
      {
        id: 16,
        nome: 'Anel da Felicidade de Vallen',
        descricao: `
<p>Este anel foi criado pelos diabretes negociantes
a partir da felicidade de Vallen Allond. Foi
concedido a Crânio Negro por motivos que
apenas os diabretes conhecem — mas que, de
forma geral, podem ser resumidos a sadismo e
desejo de destruição. O anel da felicidade de Vallen
fornece cura acelerada 10 (somente após um dia
de uso) que recupera até perda de vida. Além
disso, se o usuário for morto enquanto estiver
usando o anel e continuar com ele, irá recuperar
1 ponto de vida por dia e, quando chegar a PV
positivos, será ressuscitado. Sendo feito a partir
da felicidade de Vallen Allond, o anel tem um
efeito colateral: o usuário é assaltado por visões
desse aventureiro e sente compulsão de protegê-
lo, estar perto dele ou garantir sua felicidade. É
claro que, para um usuário insano, os conceitos
de “proteger” e “garantir a felicidade” tornam-se
bem distorcidos… O anel também influencia
o comportamento do usuário (tornando-o um
pouco mais semelhante a Vallen). </p>
`,
      },
      {
        id: 17,
        nome: 'Carthalkan, a Espada Cristalina',
        descricao: `
<p>Esta espada longa atroz e pungente é feita de
um cristal translúcido. Empunhá-la traz uma
sensação estranha, pois ela não tem o peso de
materiais comuns, como metal ou madeira.
Quando brandida por um herdeiro da família
Sharpblade, a arma emite uma luz límpida e
revela todos os seus poderes: torna-se uma
espada longa atroz pungente ameaçadora magnífica,
que tem dano base 4d8. </p>
`,
      },
      {
        id: 18,
        nome: 'Coroa Imperial',
        descricao: `
<p>Símbolo do trono do Reinado, esta coroa é usada
pelos Reis-Imperadores há séculos. Ao longo das
gerações, foi imbuída pela força de cada um dos
monarcas que a usou, até se tornar um artefato
capaz de auxiliar o regente na tarefa de guiar a
humanidade. O usuário da Coroa Imperial recebe
+2 em Sabedoria e Carisma (cumulativo com
outros itens), aplica seu Carisma na Defesa e
em testes de resistência e recebe imunidade
a encantamento. Como um artefato, a Coroa
Imperial não pode ser danificada por meios
mundanos. A única maneira de destruí-la é
roubá-la e escondê-la em uma masmorra. Se
nenhum herói resgatar a Coroa dentro de um
ano e um dia, ela será reduzida a pó. </p>
`,
      },
      {
        id: 19,
        nome: 'O Artefato de Cross',
        descricao: `
<p>Esta arma única é um item puramente mundano
e tecnológico, inventado e forjado pelas mentes
geniais e doentias de demônios. Ela é composta
por diversos canos de mosquete, que giram por
meio de engrenagens quando o usuário puxa uma
alavanca. O artefato é pesado e desajeitado, mas
quando acionado, dispara todos os seus canos,
banhando os alvos com uma chuva de chumbo.</p>

<p>O Artefato de Cross é uma arma de fogo de duas
mãos (dano 2d12, crítico 19/x3, alcance médio,
perfuração) que fornece +10 nos testes de ataque
e, em caso de acerto, causa +1d12 pontos de
dano para cada 2 pontos pelos quais o resultado
do ataque passar a Defesa do alvo. Recarregá-lo
é uma ação padrão.</p>

<p>Atualmente, o Artefato de Cross está em posse
do Senhor Porrada. O meio-orc vaga pelos ermos
para manter a arma longe da civilização. Mas,
claro, pode acabar sendo encontrado por um
grupo de aventureiros. Nesse caso, será melhor
para eles que o encontro seja amistoso…</p>
`,
      },
      {
        id: 20,
        nome: 'Gemas Eternas',
        descricao: `
<p>Esta joia é formada por uma correntinha de
mitral, adornada por safiras, esmeraldas, rubis
e diamantes que emitem luz própria, brilhando
com todas as cores do arco-íris. A beleza das
Gemas Eternas só é rivalizada por seu poder. O
usuário recebe +2 em Carisma, +5 na Defesa
e 1 ponto de mana extra por nível (após um
dia de uso). Se possuir a capacidade de lançar
magias arcanas, a CD de suas magias aumenta
em +2.</p>
`,
      },
    ];
  }
}
