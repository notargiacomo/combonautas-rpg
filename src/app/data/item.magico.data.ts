import { Injectable } from '@angular/core';
import { ItemMagico } from '../model/item.magico';
import { TipoItem } from '../enum/tipo.item.enum';
import { Chave } from '../enum/chave.enum';
import { Referencia } from '../enum/referencia.enum';
import { Alcance } from '../enum/alcance.enum';
import { TipoDano } from '../enum/tipo.dano.enum';

@Injectable({
  providedIn: 'root',
})
export class ItemMagicoData {
  private itens: ItemMagico[] = [];

  get(): any[] {
    return this.itens;
  }

  constructor() {
    this.itens = [
      {
        id: 1,
        nome: 'Arco do Poder',
        tipo: TipoItem.ARMA,
        chave: [Chave.ATAQUE, Chave.ATAQUE_A_DISTANCIA, Chave.ESFERA, Chave.NAO_LETAL, Chave.ACAO_AGARRAR],
        descricao: `O arco do poder conta como um arco longo formidável, mas parece apenas o corpo de um arco — não tem corda e não aceita flechas. Contudo, quando você o empunha e faz o gesto de puxar a corda inexistente, o arco cria uma corda e uma flecha de energia dourada. O arco do poder é capaz de ler suas intenções, produzindo diferentes tipos de flechas energéticas a sua escolha.
        <ul>
        <li><i>Flecha Normal.</i> 3d8 pontos de dano de essência.</li>
        <li><i>Flecha Piedosa.</i> 4d8 pontos de dano de essência não letal.</li>
        <li><i>Flecha Explosiva.</i> 3d6 pontos de dano de fogo no alvo e em todas as criaturas adjacentes a ele. Essas têm direito a um teste de Reflexos (CD Des) para reduzir o dano à metade.</li>
        <li><i>Flecha-Rede.</i> Não causa dano, mas deixa a vítima agarrada por uma rede de energia. A criatura pode se soltar passando em um teste de Força ou Acrobacia (CD 25). A rede se dissipa quando a criatura se solta ou no fim da cena.</li>
        </ul>
        `,
        dano: '3d8/4d8/3d6',
        margem_ameaca: 20,
        multiplicador_critico: 3,
        alcance: Alcance.MEDIO,
        espaco: 2,
        tipo_dano: [TipoDano.ESSENCIA, TipoDano.FOGO],
        preco: 90000,
        rd: 45,
        pv: 50,
        pericia_fabricacao_conserto: 'Ofício Armeiro',
        preco_fabricacao: 30.000,
        cd_fabricacao: 40,
        custo_permanente_pontos_mana: 3,
        tempo_fabricacao_em_horas: 160,
        preco_conserto: 9000,
        tempo_conserto_em_horas: 1,
        referencias: Referencia.BASICO,
        paginas: '336 e 337'
        
      }
    ];
  }
}
