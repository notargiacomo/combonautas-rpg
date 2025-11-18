import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmasMunicoesComponent } from './armas-municoes.component';

describe('ArmasMunicoesComponent', () => {
  let component: ArmasMunicoesComponent;
  let fixture: ComponentFixture<ArmasMunicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmasMunicoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmasMunicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
