import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadurasEscudosComponent } from './armaduras-escudos.component';

describe('ArmadurasEscudosComponent', () => {
  let component: ArmadurasEscudosComponent;
  let fixture: ComponentFixture<ArmadurasEscudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmadurasEscudosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmadurasEscudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
