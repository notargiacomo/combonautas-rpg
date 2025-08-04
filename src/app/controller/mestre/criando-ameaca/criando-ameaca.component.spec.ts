import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriandoAmeacaComponent } from './criando-ameaca.component';

describe('CriandoAmeacaComponent', () => {
  let component: CriandoAmeacaComponent;
  let fixture: ComponentFixture<CriandoAmeacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriandoAmeacaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriandoAmeacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
