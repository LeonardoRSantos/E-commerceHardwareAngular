import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoServicoComponent } from './carrinho-servico.component';

describe('CarrinhoServicoComponent', () => {
  let component: CarrinhoServicoComponent;
  let fixture: ComponentFixture<CarrinhoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
