import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadurasComponent } from './armaduras.component';

describe('ArmadurasComponent', () => {
  let component: ArmadurasComponent;
  let fixture: ComponentFixture<ArmadurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmadurasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmadurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
