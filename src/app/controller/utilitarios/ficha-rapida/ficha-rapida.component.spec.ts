import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaRapidaComponent } from './ficha-rapida.component';

describe('FichaRapidaComponent', () => {
  let component: FichaRapidaComponent;
  let fixture: ComponentFixture<FichaRapidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaRapidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaRapidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
