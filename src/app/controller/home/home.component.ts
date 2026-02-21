import { Component, OnInit } from '@angular/core';
import { CardPresentationComponent } from '@app/components/card-presentation/card-presentation.component';
import { MatCard } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  imports: [CardPresentationComponent, MatCard],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {}

  /**
   *  MENU PERSONAGEM
   */
  titulo_menu_personagem = 'Personagem';
  caminho_imagem_menu_personagem = 'assets/img/menu_personagem.png';
  descricao_menu_personagem = `
        <div class="descricao-personagem">
        <p class="intro">
          Todo grande herói começa como uma ideia… e é aqui que essa ideia ganha carne, alma e ficha técnica.
          Neste santuário da criação, você molda cada fragmento do seu personagem — da origem esquecida ao poder capaz de alterar destinos.
          Escolha com sabedoria… ou com estilo.
        </p>
        <ul class="lista-menus">
          <li>
            <b>Raças:</b>
            a essência do seu ser, moldando corpo, instinto e lugar no mundo.
          </li>
          <li>
            <b>Origens:</b>
            o passado que deixou cicatrizes, histórias e motivações.
          </li>
          <li>
            <b>Classes:</b>
            o caminho de poder que define como você enfrenta o impossível.
          </li>
          <li>
            <b>Perícias:</b>
            as habilidades que separam amadores de verdadeiras lendas.
          </li>
          <li>
            <b>Deuses:</b>
            as entidades que observam, julgam… e às vezes respondem.
          </li>
          <li>
            <b>Complicações:</b>
            porque nenhuma boa história nasce de uma vida fácil.
          </li>
          <li>
            <b>Poderes:</b>
            dons extraordinários que desafiam as regras da realidade.
          </li>
          <li>
            <b>Magias:</b>
            o domínio das forças invisíveis que dobram o mundo à sua vontade.
          </li>
        </ul>
        <p class="encerramento">
          Cada escolha é um golpe na bigorna do destino. Então vá em frente… e forje algo que o mundo jamais esquecerá.
        </p>
        </div>
  `;
  links_menu_personagem = [
    { nome: 'Raças', link: 'personagem/racas' },
    { nome: 'Origens', link: 'personagem/origens' },
    { nome: 'Classes', link: 'personagem/classes' },
    { nome: 'Perícias', link: 'personagem/pericias' },
    { nome: 'Deuses', link: 'personagem/deuses' },
    { nome: 'Complicações', link: 'personagem/complicacoes' },
    { nome: 'Poderes', link: 'personagem/poderes' },
    { nome: 'Magias', link: 'personagem/magias' },
  ];

  /**
   *  MENU ITEM
   */
  titulo_menu_item = 'Item';
  caminho_imagem_menu_item = 'assets/img/menu_item.png';
  descricao_menu_item = `
  <p>
Alguns itens são herdados, outros comprados com moedas suadas, e muitos você encontrará nos momentos mais improváveis. Mas os verdadeiros heróis não apenas encontram poder — eles o constroem com as próprias mãos.
</p>

<ul>
  <li><b>Armas & Munições:</b> as ferramentas do ataque, extensões da sua vontade e determinação no combate.</li>

  <li><b>Armaduras & Escudos:</b> sua defesa contra o caos, a barreira entre você e o fim prematuro da sua história.</li>

  <li><b>Itens Gerais:</b> tudo que sustenta sua jornada — ferramentas, roupas, instrumentos e utilidades essenciais.</li>

  <li><b>Itens Superiores:</b> melhorias extraordinárias que elevam equipamentos comuns a relíquias dignas de lendas.</li>
</ul>

<p>
Cada item conta uma história. Cada lâmina carrega batalhas, cada armadura guarda cicatrizes, e cada ferramenta é um passo rumo ao impossível. Escolha bem o que leva com você — pois, no fim, não é apenas o herói que molda o destino... mas também aquilo que ele empunha.
</p>
  `;
  links_menu_item = [
    { nome: 'Armas & Munições', link: 'itens/armas-municoes' },
    { nome: 'Armaduras & Escudos', link: 'itens/armaduras-escudos' },
    { nome: 'Itens Gerais', link: 'itens/itens-gerais' },
    { nome: 'Itens Superiores', link: 'itens/itens-superiores' },
  ];

  /**
   *  MENU Campanha
   */
  titulo_menu_campanha = 'Campanha';
  caminho_imagem_menu_campanha = 'assets/img/menu_campanha.png';
  descricao_menu_campanha = `
  <p>Novos aliados surgirão no seu caminho, trazendo saberes esquecidos e segredos valiosos.
Desafios testarão sua coragem, e apenas os que perseverarem tocarão o extraordinário.
Pois além do horizonte, relíquias mágicas aguardam aqueles ousados o bastante para sobreviver e reivindicá-las.</p>

<ul>
  <li><b>Parceiros:</b> encontre todos os tipos de parceiros do sistema aqui(e CAPIVARAS TAMBÉM).</li>

  <li><b>Distinções:</b> você não quer ser igual a todo mundo? Que tal ser um Golem Cozinheiro?</li>

  <li><b>Itens Mágicos:</b> parece que Arsenal deixou cair uns por ai!</li>

  <li><b>Artefatos:</b> Meu Deus! EXATAMENTE, MEU DEUS!.</li>
</ul>

<p>Não tema em não voltar da Jornada, por que você não vai voltar. Seja vivo ou morto, o que voltar de você, não será mais você. Mas ainda sim ... vai ficar?
</p>
  `;
  links_menu_campanha = [
    { nome: 'Parceiros', link: 'campanha/parceiros' },
    { nome: 'Distinções', link: 'campanha/distincoes' },
    { nome: 'Itens Mágicos', link: 'campanha/itens-magicos' },
    { nome: 'Artefatos', link: 'campanha/artefatos' },
  ];

  /**
   *  MENU Regras
   */
  titulo_menu_regras = 'Regras';
  caminho_imagem_menu_regras = 'assets/img/menu_regras.png';
  descricao_menu_regras = `
  <p>
    As regras existem para moderar o caos, alinhar expectativas e garantir que todos compartilhem o mesmo mundo.
    Elas são o alicerce invisível que sustenta cada decisão, cada risco e cada vitória — mas, acima de tudo,
    existem para proteger o verdadeiro propósito da jornada: a diversão.
  </p>

  <ul>

    <li>
      <b>Regras:</b>
      consulte rapidamente os fundamentos oficiais que governam o mundo e suas possibilidades.
    </li>

    <li>
      <b>Ações:</b>
      descubra tudo que seu personagem pode fazer, do simples ao extraordinário.
    </li>

    <li>
      <b>Condições:</b>
      entenda os efeitos que podem limitar, desafiar ou transformar seu personagem.
    </li>

  </ul>

  <p>
    Domine as regras, dobre as probabilidades e desafie o destino — mas lembre-se:
    se tudo der errado, a culpa é de Nimb.
  </p>
  `;
  links_menu_regras = [
    { nome: 'Regras', link: 'regras/regras' },
    { nome: 'Ações', link: 'regras/acoes' },
    { nome: 'Condições', link: 'regras/condicoes' },
  ];

  /**
   *  MENU Mestre
   */
  titulo_menu_mestre = 'Mestre';
  caminho_imagem_menu_mestre = 'assets/img/menu_mestre.png';
  descricao_menu_mestre = `<p>
            O mestre também tem direito a alguns brinquedinhos, afinal é quem mais trabalha para a felicidade do grupo.
            Enquanto os jogadores aparecem, causam caos, ignoram pistas óbvias e adotam goblins aleatórios,
            é o mestre quem mantém o universo inteiro funcionando com fita adesiva, café e sofrimento silencioso.
        </p>

        <p>
            O <strong>Combonautas</strong> reconhece esse sacrifício heroico e oferece ferramentas dignas de quem carrega o destino do grupo nas costas:
        </p>

        <ul>
            <li>
                <b>[BETA] Cálculo de Desafios: </b>
                Calcula o nível de desafio ideal, evitando TPKs acidentais… ou garantindo-os, se preferir.
            </li>

            <li>
                <b>[ALPHA] Geração de Tesouros: </b>
                Gera recompensas aleatórias, desde relíquias lendárias até aquele pergaminho inútil que ninguém pediu.
            </li>
        </ul>

        <p class="final">
            Porque um mestre feliz é um mestre equilibrado.  
            E um mestre equilibrado é muito mais criativo na hora de fazer os jogadores sofrerem.
        </p>`;
  links_menu_mestre = [
    { nome: 'Cálculo de Desafios', link: 'utilitarios/personagem-aleatorio' },
    { nome: 'Geração de Tesouros', link: 'utilitarios/ficha-rapida' },
  ];

  /**
   *  MENU Utilitários
   */
  titulo_menu_utilitarios = 'Utilitários';
  caminho_imagem_menu_utilitarios = 'assets/img/menu_utilitario.png';
  descricao_menu_utilitarios = `
  <p>
    Ferramentas e Brinquedos para todos brincarem. 
  </p>

  <ul>

    <li>
      <b>[BETA] Personagem Aleatório:</b> cansou de planejar minuciosamente seus personagens e quer mesmo abraçar Nimb e ver o circo pegar fogo? Vocês está no lugar certo doidão.
    </li>

    <li>
     <b>[ALPHA] Ficha:</b> crie, planeje, altere, salve, exporte seu peronagem aqui.
    </li>

  </ul>

  <p>Não é muito, mas Combonautas oferece de coração.
  </p>`;
  links_menu_utilitarios = [
    { nome: 'Personagem Aleatório', link: 'utilitarios/personagem-aleatorio' },
    { nome: 'Ficha', link: 'utilitarios/ficha-rapida' },
  ];
}
