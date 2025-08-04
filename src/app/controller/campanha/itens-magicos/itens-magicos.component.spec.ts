import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensMagicosComponent } from './itens-magicos.component';

describe('ItensMagicosComponent', () => {
  let component: ItensMagicosComponent;
  let fixture: ComponentFixture<ItensMagicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensMagicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensMagicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
