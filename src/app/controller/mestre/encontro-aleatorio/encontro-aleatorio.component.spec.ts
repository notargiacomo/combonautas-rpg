import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontroAleatorioComponent } from './encontro-aleatorio.component';

describe('EncontroAleatorioComponent', () => {
  let component: EncontroAleatorioComponent;
  let fixture: ComponentFixture<EncontroAleatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncontroAleatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncontroAleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
