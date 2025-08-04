import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsotericosComponent } from './esotericos.component';

describe('EsotericosComponent', () => {
  let component: EsotericosComponent;
  let fixture: ComponentFixture<EsotericosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsotericosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsotericosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
