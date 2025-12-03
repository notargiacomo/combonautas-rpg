import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { CombonautasBase } from '@app/components/combonautas-base';
import { AlvoMagia } from '@app/enum/alvo.magia.enum';
import { CirculoMagia } from '@app/enum/circulo.magia.enum';
import { TipoAlquimico } from '@app/enum/tipo.alquimico.enum';
import { Magia } from '@app/model/magia';
import { MagiaService } from '@app/service/magia.service';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-magias',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, MatTabGroup, MatTab, NgIf, MatCheckbox],
  templateUrl: './magias.component.html',
  styleUrl: './magias.component.scss',
})
export class MagiasComponent extends CombonautasBase {
  constructor(readonly service: MagiaService) {
    super();
  }

  calculaTudo(objeto: Magia) {
    objeto.custo_total = 0;
    objeto.custo_material_total = 0;
    objeto.aprimoramentos?.forEach(aprimoramento => {
      aprimoramento.checkado = false;
    });

    this.calculaPreco(objeto);
  }

  calculaPreco(objeto: Magia) {
    let preco = 0;
    let custo_material = 0;

    preco += objeto.custo ? objeto.custo : 0;
    custo_material += objeto.custo_material ? objeto.custo_material : 0;

    objeto.aprimoramentos?.forEach(aprimoramento => {
      let custo = aprimoramento.custo ? aprimoramento.custo : 0;
      if (aprimoramento.checkado) {
        preco += custo;
        custo_material += aprimoramento.custo_material ? aprimoramento.custo_material : 0;
      } else if (aprimoramento.e_aumenta) {
        preco += aprimoramento.aumenta ? aprimoramento.aumenta * custo : 0;
        custo_material += aprimoramento.custo_material
          ? aprimoramento.aumenta
            ? aprimoramento.aumenta * aprimoramento.custo_material
            : 0
          : 0;
      }
    });

    objeto.total_pm = preco;
    objeto.custo_total = preco ? preco ** 2 * 30 : 0;
    objeto.custo_material_total = custo_material;
    objeto.custo_total += custo_material;
  }

  calculoCusto(objeto: Magia): number {
    let material = objeto.custo_material_total ? objeto.custo_material_total : 0;
    let custo = objeto.custo_total ? (objeto.custo_total - material) / 3 : 0;
    custo += material;
    return Math.floor(custo);
  }

  calculaCD(objeto: Magia): number {
    return objeto.total_pm ? objeto.total_pm + 20 : 0;
  }

  calculaCDEngenhoqueiro(objeto: Magia): number {
    return objeto.custo ? objeto.custo + 20 : 0;
  }

  calculaPMEngenhoqueiro(objeto: Magia): number {
    let tipo: string = '';

    switch (objeto.circulo) {
      case CirculoMagia.PRIMEIRO_CIRCULO: {
        return objeto.total_pm ? objeto.total_pm - 1 : 0;
      }
      case CirculoMagia.SEGUNDO_CIRCULO: {
        return objeto.total_pm ? objeto.total_pm - 3 : 0;
      }
      case CirculoMagia.TERCEIRO_CIRCULO: {
        return objeto.total_pm ? objeto.total_pm - 6 : 0;
      }
      case CirculoMagia.QUARTO_CIRCULO: {
        return objeto.total_pm ? objeto.total_pm - 10 : 0;
      }
      case CirculoMagia.QUINTO_CIRCULO: {
        return objeto.total_pm ? objeto.total_pm - 15 : 0;
      }
      default: {
        return 0;
      }
    }
  }

  descobreTipoAlquimico(objeto: Magia): string {
    let tipo: string = '';

    switch (objeto.alvo) {
      case AlvoMagia.CRIATURA: {
        return TipoAlquimico.POCAO;
      }
      case AlvoMagia.OBJETO: {
        return TipoAlquimico.OLEO;
      }
      case AlvoMagia.AREA: {
        return TipoAlquimico.GRANADA;
      }
      default: {
        return 'INTERPRETATIVO';
      }
    }
  }

  aumentaAprimoramento(aprimoramento: any, objeto: Magia): Magia {
    objeto.aprimoramentos?.forEach(indice => {
      if (indice.id === aprimoramento.id) {
        aprimoramento.aumenta += 1;
        this.calculaPreco(objeto);
      }
    });
    return objeto;
  }

  diminuiAprimoramento(aprimoramento: any, objeto: Magia): Magia {
    objeto.aprimoramentos?.forEach(indice => {
      if (aprimoramento.aumenta !== 0 && indice.id === aprimoramento.id) {
        aprimoramento.aumenta -= 1;
        this.calculaPreco(objeto);
      }
    });
    return objeto;
  }

  calculaCheck(aprimoramento: any, objeto: Magia): boolean {
    aprimoramento.checkado = !aprimoramento.checkado;
    this.calculaPreco(objeto);
    return aprimoramento.checkado;
  }

  checkaAumenta(objeto: Magia) {
    objeto!.e_aumenta = !objeto.e_aumenta;
    return objeto!.e_aumenta;
  }

  checkaTruque(objeto: Magia) {
    objeto!.e_truque = !objeto.e_truque;
    return objeto!.e_truque;
  }
}
