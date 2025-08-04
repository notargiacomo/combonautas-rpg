import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemAleatorioComponent } from './personagem-aleatorio.component';

describe('PersonagemAleatorioComponent', () => {
  let component: PersonagemAleatorioComponent;
  let fixture: ComponentFixture<PersonagemAleatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagemAleatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonagemAleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
