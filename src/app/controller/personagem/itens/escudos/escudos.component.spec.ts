import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscudosComponent } from './escudos.component';

describe('EscudosComponent', () => {
  let component: EscudosComponent;
  let fixture: ComponentFixture<EscudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscudosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
