import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicoesComponent } from './municoes.component';

describe('MunicoesComponent', () => {
  let component: MunicoesComponent;
  let fixture: ComponentFixture<MunicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
