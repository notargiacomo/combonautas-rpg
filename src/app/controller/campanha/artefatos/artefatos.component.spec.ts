import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefatosComponent } from './artefatos.component';

describe('ArtefatosComponent', () => {
  let component: ArtefatosComponent;
  let fixture: ComponentFixture<ArtefatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtefatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtefatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
