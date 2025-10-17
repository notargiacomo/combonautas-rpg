import { Injectable } from '@angular/core';
import { GenericRepository} from './generic.repository';
import { MagiaSB } from '@app/model/supamodel/magia.sb';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaDao extends GenericRepository<MagiaSB>{

  constructor(){
    super('tb_referenia')
  }

}