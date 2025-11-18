import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensSuperioresComponent } from './itens-superiores.component';

describe('ItensSuperioresComponent', () => {
  let component: ItensSuperioresComponent;
  let fixture: ComponentFixture<ItensSuperioresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensSuperioresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensSuperioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
