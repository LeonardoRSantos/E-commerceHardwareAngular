import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoCupomComponent } from './carrinho-cupom.component';

describe('CarrinhoCupomComponent', () => {
  let component: CarrinhoCupomComponent;
  let fixture: ComponentFixture<CarrinhoCupomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoCupomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
