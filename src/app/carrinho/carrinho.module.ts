import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';
import {FormsModule} from '@angular/forms'
import { CarrinhoProdutosComponent } from './carrinho-produtos/carrinho-produtos.component';
import { CarrinhoServicoComponent } from './carrinho-servico/carrinho-servico.component';
import { CarrinhoCupomComponent } from './carrinho-cupom/carrinho-cupom.component';
import { CarrinhoTotalComponent } from './carrinho-total/carrinho-total.component';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    CarrinhoComponent,
    CarrinhoProdutosComponent,
    CarrinhoServicoComponent,
    CarrinhoCupomComponent,
    CarrinhoTotalComponent
    
  ],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class CarrinhoModule { }
