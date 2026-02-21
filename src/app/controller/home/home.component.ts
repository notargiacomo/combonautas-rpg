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
}
