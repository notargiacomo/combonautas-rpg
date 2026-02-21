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

  titulo_menu_personagem = 'Personagem';
  subtitulo_menu_personagem = 'Tudo para criação de Personagem. Ou quase =).';
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
      <strong>Raças:</strong>
      a essência do seu ser, moldando corpo, instinto e lugar no mundo.
    </li>

    <li>
      <strong>Origens:</strong>
      o passado que deixou cicatrizes, histórias e motivações.
    </li>

    <li>
      <strong>Classes:</strong>
      o caminho de poder que define como você enfrenta o impossível.
    </li>

    <li>
      <strong>Perícias:</strong>
      as habilidades que separam amadores de verdadeiras lendas.
    </li>

    <li>
      <strong>Deuses:</strong>
      as entidades que observam, julgam… e às vezes respondem.
    </li>

    <li>
      <strong>Complicações:</strong>
      porque nenhuma boa história nasce de uma vida fácil.
    </li>

    <li>
      <strong>Poderes:</strong>
      dons extraordinários que desafiam as regras da realidade.
    </li>

    <li>
      <strong>Magias:</strong>
      o domínio das forças invisíveis que dobram o mundo à sua vontade.
    </li>

  </ul>

  <p class="encerramento">
    Cada escolha é um golpe na bigorna do destino. Então vá em frente… e forje algo que o mundo jamais esquecerá.
  </p>

</div>`;
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

  ngOnInit(): void {}
}
