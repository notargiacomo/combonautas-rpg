import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistincoesComponent } from './distincoes.component';

describe('DistincoesComponent', () => {
  let component: DistincoesComponent;
  let fixture: ComponentFixture<DistincoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistincoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistincoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
