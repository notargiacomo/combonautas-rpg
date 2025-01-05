import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesComponent } from './habilidades.component';

describe('HabilidadesComponent', () => {
  let component: HabilidadesComponent;
  let fixture: ComponentFixture<HabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
