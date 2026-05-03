import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoAtributosComponent } from './calculo-atributos.component';

describe('CalculoAtributosComponent', () => {
  let component: CalculoAtributosComponent;
  let fixture: ComponentFixture<CalculoAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculoAtributosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
