import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentoAventuraComponent } from './equipamento-aventura.component';

describe('EquipamentoAventuraComponent', () => {
  let component: EquipamentoAventuraComponent;
  let fixture: ComponentFixture<EquipamentoAventuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipamentoAventuraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipamentoAventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
