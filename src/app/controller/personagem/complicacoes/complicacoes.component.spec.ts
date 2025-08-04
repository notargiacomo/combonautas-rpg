import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplicacoesComponent } from './complicacoes.component';

describe('ComplicacoesComponent', () => {
  let component: ComplicacoesComponent;
  let fixture: ComponentFixture<ComplicacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplicacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
