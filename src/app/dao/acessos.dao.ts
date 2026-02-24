import { Injectable } from '@angular/core';
import { GenericRepository } from './generic.repository';
import { AcessoSb } from '@app/model/acesso.sb';

@Injectable({
  providedIn: 'root',
})
export class Acesso extends GenericRepository<AcessoSb> {
  constructor() {
    super('tb_acesso');
  }

  async buscar() {
    const { data, error } = await this.client.from('tb_acesso').select('total').eq('id', 1).single();

    return data!.total;
  }

  async atualizar() {
    const totalAtual = await this.buscar();

    const { data, error } = await this.client
      .from('tb_acesso')
      .update({ total: totalAtual + 1 })
      .eq('id', 1)
      .select('total')
      .single();

    if (error) {
      console.error('Erro ao inserir regra:', error);
      throw error;
    }
    return data.total;
  }
}
