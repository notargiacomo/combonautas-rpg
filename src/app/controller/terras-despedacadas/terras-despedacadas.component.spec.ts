import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrasDespedacadasComponent } from './terras-despedacadas.component';

describe('TerrasDespedacadasComponent', () => {
  let component: TerrasDespedacadasComponent;
  let fixture: ComponentFixture<TerrasDespedacadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerrasDespedacadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrasDespedacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
