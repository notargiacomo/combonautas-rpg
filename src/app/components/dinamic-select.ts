import { Component, ElementRef, Renderer2, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-select',
  template: '<div #container></div>',
})
export class DynamicSelectComponent implements AfterViewInit {
    
  @Input() listaDinamicaInstrucao: any;
  @Output() valorSelecionado = new EventEmitter<any>();

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    // Criando o elemento <select>
    const select = this.renderer.createElement('select');
    this.renderer.setAttribute(select, 'id', 'custom-select');
    this.renderer.setStyle(select, 'padding', '5px');
    this.renderer.setStyle(select, 'font-size', '16px');

    this.listaDinamicaInstrucao.forEach((opt: { chave: string; valor: string; }) => {
      const option = this.renderer.createElement('option');
      this.renderer.setAttribute(option, 'value', opt.valor);
      const text = this.renderer.createText(opt.chave);
      this.renderer.appendChild(option, text);
      this.renderer.appendChild(select, option);
    });

    // Adicionando evento onChange
    this.renderer.listen(select, 'change', (event) => {
        this.valorSelecionado.emit(event.target.value);
    });


    const container = this.el.nativeElement.querySelector('div');
    this.renderer.appendChild(container, select);
  }
}

// USAR A CHAMADA ASSIM
// <app-dynamic-select [listaDinamicaInstrucao]="opcoes" (valorSelecionado)="mostraValorSelecionado($event)"></app-dynamic-select>

// INSERE DINAMICAMENTE O HTML AQUI 
// <div [innerHTML]="poder.resolucao"></div>

// REBER O RESUSTADO ASSIM
// valorSelecionado(event: any){
//     alert('Você selecionou: ' + event);
// }


// EXEMPLO
// <app-dynamic-select [listaDinamicaInstrucao]="[{chave: '2 Perícias', valor: 'this.personagem.recalculaNumeroPericias(2);' }, {chave: '1 Perícia + 1 Poder Geral', valor: 'this.personagem.recalculaNumeroPericias(1); this.personagem.adicionaVinculoPoderPersonagem()' } ]" (valorSelecionado)="executaResolucao($event)"></app-dynamic-select>
