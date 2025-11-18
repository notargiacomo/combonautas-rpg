import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensGeraisComponent } from './itens-gerais.component';

describe('ItensGeraisComponent', () => {
  let component: ItensGeraisComponent;
  let fixture: ComponentFixture<ItensGeraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensGeraisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensGeraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
