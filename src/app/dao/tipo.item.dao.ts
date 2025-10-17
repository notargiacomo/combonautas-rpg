import { Injectable } from '@angular/core';
import { TipoItemSB } from '@app/model/supamodel/tipo.item.sb';
import { GenericRepository } from './generic.repository';

@Injectable({
  providedIn: 'root'
})
export class TipoItemDao extends GenericRepository<TipoItemSB> {

  constructor(){
    super('tb_tipo_item')
  }
}