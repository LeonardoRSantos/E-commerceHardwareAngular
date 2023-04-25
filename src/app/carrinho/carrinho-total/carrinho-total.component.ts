import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { IProdutoCarrinho } from 'src/app/produtos';

@Component({
  selector: 'app-carrinho-total',
  templateUrl: './carrinho-total.component.html',
  styleUrls: ['./carrinho-total.component.css']
})
export class CarrinhoTotalComponent implements OnInit{
  itensCarrinho: IProdutoCarrinho[] = [];
  taxaFrete: number = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.carrinhoService.calcularTotalAVistaComTaxa(this.itensCarrinho);
  }

  comprar(){
    alert("Parabéns, você finalizou a sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

  continuarComprando(){
    this.router.navigate(["produtos"]);
  }
  

}
