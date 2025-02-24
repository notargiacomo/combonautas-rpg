import { Injectable } from '@angular/core';
import { Deus } from '../model/deus';
import { Referencia } from '../enum/referencia.enum';

@Injectable({
  providedIn: 'root',
})
export class DeusData {
  private deuses: Deus[] = [];

  get(): any[] {
    return this.deuses;
  }

  constructor() {
    this.deuses = [
      {
        id:1,
        nome: 'Aharadak',
        nome_arquivo_descricao: 'deus_aharadak_descricao',
        nome_arquivo_poderes: 'deus_aharadak_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_aharadak.png',
        imagem: 'assets/img/deus_aharadak.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:2,
        nome: 'Allihanna',
        nome_arquivo_descricao: 'deus_allihanna_descricao',
        nome_arquivo_poderes: 'deus_allihanna_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_allihanna.png',
        imagem: 'assets/img/deus_allihanna.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:3,
        nome: 'Arsenal',
        nome_arquivo_descricao: 'deus_arsenal_descricao',
        nome_arquivo_poderes: 'deus_arsenal_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_arsenal.png',
        imagem: 'assets/img/deus_arsenal.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:4,
        nome: 'Azgher',
        nome_arquivo_descricao: 'deus_azgher_descricao',
        nome_arquivo_poderes: 'deus_azgher_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_azgher.png',
        imagem: 'assets/img/deus_azgher.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:5,
        nome: 'Hyninn',
        nome_arquivo_descricao: 'deus_hyninn_descricao',
        nome_arquivo_poderes: 'deus_hyninn_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_hyninn.png',
        imagem: 'assets/img/deus_hyninn.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:6,
        nome: 'Kallyadranoch',
        nome_arquivo_descricao: 'deus_kallyadranoch_descricao',
        nome_arquivo_poderes: 'deus_kallyadranoch_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_kallyadranoch.png',
        imagem: 'assets/img/deus_kallyadranoch.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:7,
        nome: 'Khalmyr',
        nome_arquivo_descricao: 'deus_khalmyr_descricao',
        nome_arquivo_poderes: 'deus_khalmyr_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_khalmyr.png',
        imagem: 'assets/img/deus_khalmyr.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:8,
        nome: 'Lena',
        nome_arquivo_descricao: 'deus_lena_descricao',
        nome_arquivo_poderes: 'deus_lena_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_lena.png',
        imagem: 'assets/img/deus_lena.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:9,
        nome: 'Lin-Wu',
        nome_arquivo_descricao: 'deus_linwu_descricao',
        nome_arquivo_poderes: 'deus_linwu_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_linwu.png',
        imagem: 'assets/img/deus_linwu.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:10,
        nome: 'Marah',
        nome_arquivo_descricao: 'deus_marah_descricao',
        nome_arquivo_poderes: 'deus_marah_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_marah.png',
        imagem: 'assets/img/deus_marah.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:11,
        nome: 'Megalokk',
        nome_arquivo_descricao: 'deus_megalokk_descricao',
        nome_arquivo_poderes: 'deus_megalokk_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_megalokk.png',
        imagem: 'assets/img/deus_megalokk.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:12,
        nome: 'Nimb',
        nome_arquivo_descricao: 'deus_nimb_descricao',
        nome_arquivo_poderes: 'deus_nimb_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_nimb.png',
        imagem: 'assets/img/deus_nimb.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:13,
        nome: 'Oceano',
        nome_arquivo_descricao: 'deus_oceano_descricao',
        nome_arquivo_poderes: 'deus_oceano_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_oceano.png',
        imagem: 'assets/img/deus_oceano.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:14,
        nome: 'Sszzaas',
        nome_arquivo_descricao: 'deus_sszzaas_descricao',
        nome_arquivo_poderes: 'deus_sszzaas_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_sszzaas.png',
        imagem: 'assets/img/deus_sszzaas.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:15,
        nome: 'Tanna-Toh',
        nome_arquivo_descricao: 'deus_tannatoh_descricao',
        nome_arquivo_poderes: 'deus_tannatoh_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_tannatoh.png',
        imagem: 'assets/img/deus_tannatoh.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:16,
        nome: 'Tenebra',
        nome_arquivo_descricao: 'deus_tenebra_descricao',
        nome_arquivo_poderes: 'deus_tenebra_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_tenebra.png',
        imagem: 'assets/img/deus_tenebra.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:17,
        nome: 'Thwor',
        nome_arquivo_descricao: 'deus_thwor_descricao',
        nome_arquivo_poderes: 'deus_thwor_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_thwor.png',
        imagem: 'assets/img/deus_thwor.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:18,
        nome: 'Thyatis',
        nome_arquivo_descricao: 'deus_thyatis_descricao',
        nome_arquivo_poderes: 'deus_thyatis_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_thyatis.png',
        imagem: 'assets/img/deus_thyatis.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:19,
        nome: 'Valkaria',
        nome_arquivo_descricao: 'deus_valkaria_descricao',
        nome_arquivo_poderes: 'deus_valkaria_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_valkaria.png',
        imagem: 'assets/img/deus_valkaria.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
      {
        id:20,
        nome: 'Wynna',
        nome_arquivo_descricao: 'deus_wynna_descricao',
        nome_arquivo_poderes: 'deus_wynna_poderes',
        tipo: 'Maior',
        simbolo: 'assets/img/simbolo_deus_wynna.png',
        imagem: 'assets/img/deus_wynna.png',
        referencias: Referencia.BASICO,
        paginas: '96'
      },
    ];
  }
}
