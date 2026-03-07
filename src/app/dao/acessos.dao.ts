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

    if (error) {
      console.error('Erro ao buscar acessos:', error);
      throw error;
    }

    return data?.total ?? 0;
  }

  async atualizar() {
    const { data, error } = await this.client.rpc('incrementar_acesso');

    if (error) {
      console.error('Erro ao incrementar acessos:', error);
      throw error;
    }

    return data;
  }
}
