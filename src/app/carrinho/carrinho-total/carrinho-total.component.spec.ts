import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoTotalComponent } from './carrinho-total.component';

describe('CarrinhoTotalComponent', () => {
  let component: CarrinhoTotalComponent;
  let fixture: ComponentFixture<CarrinhoTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
