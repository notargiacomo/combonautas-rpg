import { Injectable } from '@angular/core';
import { Magia } from '../model/magia';
import { EscolasMagia } from '../enum/escolas.magia.enum';
import { TipoMagia } from '../enum/tipo.magia.enum';
import { CirculoMagia } from '../enum/circulo.magia.enum';
import { ExecucaoMagia } from '../enum/execucao.magia.enum';
import { AlcanceMagia } from '../enum/alcance.magia.enum';
import { DuracaoMagia } from '../enum/duracao.magia.enum';
import { Referencia } from '../enum/referencia.enum';
import { PalavraChave } from '../enum/palavra.chave.enum';
import { AlvoMagia } from '../enum/alvo.magia.enum';

@Injectable({
  providedIn: 'root',
})
export class MagiaData {
  private magias: Magia[] = [];

  get(): any[] {
    return this.magias;
  }

  constructor() {
    this.magias = [
      {
        id: 1,
        nome: 'Abençoar Alimentos',
        descricao: `Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia.`,
        escola: EscolasMagia.TRANSMUTACAO,
        tipo: TipoMagia.DIVINA,
        circulo: CirculoMagia.PRIMEIRO_CIRCULO,
        custo: 1,
        execucao: ExecucaoMagia.PADRAO,
        alcance: AlcanceMagia.CURTO,
        alvo_descricao: 'alimento para 1 criatura',
        alvo: AlvoMagia.OBJETO,
        efeito: '',
        duracao: DuracaoMagia.CENA,
        resistencia: '',
        custoespecial: '',
        tracos: [TipoMagia.DIVINA, EscolasMagia.TRANSMUTACAO, CirculoMagia.PRIMEIRO_CIRCULO],
        referencias: Referencia.BASICO,
        paginas: '178',
        aprimoramentos: [
          {
            id: 1,
            e_aumenta: false,
            checkado:false,
            descricao: `<b>Truque:</b> o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não fornece bônus ao ser consumido.`,
            tipo: TipoMagia.DIVINA,
            circulo: CirculoMagia.PRIMEIRO_CIRCULO,
            custo: 0,
            execucao: ExecucaoMagia.PADRAO,
            alcance: AlcanceMagia.CURTO,
            alvo: AlvoMagia.OBJETO,
            alvo_descricao: 'alimento para 1 criatura',
            efeito: '',
            duracao: DuracaoMagia.CENA,
            resistencia: '',
            custoespecial: '',
            tracos: [PalavraChave.TRUQUE],
          },
          {
            id: 2,
            e_aumenta: true,
            aumenta: 0,
            descricao: `<b>+1 PM:</b> aumenta o número de alvos em +1.`,
            tipo: TipoMagia.DIVINA,
            circulo: CirculoMagia.PRIMEIRO_CIRCULO,
            custo: 1,
            execucao: ExecucaoMagia.PADRAO,
            alcance: AlcanceMagia.CURTO,
            alvo: AlvoMagia.OBJETO,
            alvo_descricao: 'alimento para 1 criatura',
            efeito: '',
            duracao: DuracaoMagia.CENA,
            resistencia: '',
            custoespecial: '',
            tracos: [PalavraChave.AUMENTA],
          },
          {
            id: 3,
            e_aumenta: false,
            checkado:false,
            descricao: `<b>+1 PM:</b> muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta.`,
            tipo: TipoMagia.DIVINA,
            circulo: CirculoMagia.PRIMEIRO_CIRCULO,
            custo: 1,
            custo_material: 5,
            execucao: ExecucaoMagia.PADRAO,
            alcance: AlcanceMagia.CURTO,
            alvo: AlvoMagia.OBJETO,
            alvo_descricao: '1 frasco com água',
            efeito: '',
            duracao: DuracaoMagia.PERMANENTE,
            resistencia: '',
            custoespecial: 'componente material (pó de prata no valor de T$ 5).',
            tracos: [DuracaoMagia.PERMANENTE, PalavraChave.COMPONENTE_MATERIAL],
          },
        ],
      }
    ];
  }
}
