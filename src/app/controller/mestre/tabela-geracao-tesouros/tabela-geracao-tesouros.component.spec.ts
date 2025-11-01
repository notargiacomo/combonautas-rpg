import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaGeracaoTesourosComponent } from './tabela-geracao-tesouros.component';

describe('TabelaGeracaoTesourosComponent', () => {
  let component: TabelaGeracaoTesourosComponent;
  let fixture: ComponentFixture<TabelaGeracaoTesourosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaGeracaoTesourosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaGeracaoTesourosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
