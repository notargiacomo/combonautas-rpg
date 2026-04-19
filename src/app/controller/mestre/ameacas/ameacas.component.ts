import { Component, OnInit } from '@angular/core';
import { AmeacaService } from '@app/service/ameaca.service';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { AmeacaMapa } from '@app/mapa/ameaca.mapa';

@Component({
  selector: 'app-ameacas',
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, MatTabGroup, MatTab],
  templateUrl: './ameacas.component.html',
  styleUrl: './ameacas.component.scss',
})
export class AmeacasComponent implements OnInit {
  constructor(readonly service: AmeacaService) {}

  ngOnInit(): void {
    // this.service.consult('').subscribe((res: any[]) => {
    //   let object = null;
    //   object = res[0];
    //   let resultado = this.mapearParaRoll20(object);
    //   console.log(object);
    //   console.log(resultado);
    // });
  }

  mapearParaRoll20(dados: any) {
    const resultado: Record<string, any> = {};

    for (const attr in AmeacaMapa) {
      resultado[`attr_${attr}`] = AmeacaMapa[attr](dados);
    }

    return resultado;
  }
}
