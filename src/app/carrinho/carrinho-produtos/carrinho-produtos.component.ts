import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';


@Component({
  selector: 'app-carrinho-produtos',
  templateUrl: './carrinho-produtos.component.html',
  styleUrls: ['./carrinho-produtos.component.css']
})
export class CarrinhoProdutosComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  valorAnteriorQuantidade: number = 0;
  @Input() produto: IProdutoCarrinho;
  @Output() produtoRemovido: EventEmitter<number> = new EventEmitter();
  produtoGarantiaSelecionada: string = '';

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router

  ) {  this.produto = {} as IProdutoCarrinho;}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.carrinhoService.calcularTotal(this.itensCarrinho);
  }



  incrementar(item: IProdutoCarrinho) {
    if (item.quantidade < 1500) { 
      item.quantidade++;
      this.carrinhoService.obtemCarrinho();
      this.carrinhoService.calcularTotal(this.itensCarrinho);
      this.carrinhoService.calcularTotalAVistaComTaxa(this.itensCarrinho);
    }
  }

  decrementar(item: IProdutoCarrinho) {
    if (item.quantidade > 1) {
      item.quantidade--;
      this.carrinhoService.obtemCarrinho();      
      this.carrinhoService.calcularTotal(this.itensCarrinho);
      this.carrinhoService.calcularTotalAVistaComTaxa(this.itensCarrinho);
    }
  }

  validarQuantidadeMaxima() {
    const inputQuantidade = document.getElementById("input-quantidade") as HTMLInputElement;
    const valorMaximo = 1500;

    if (inputQuantidade.value !== "" && parseInt(inputQuantidade.value) > valorMaximo) {
      inputQuantidade.value = valorMaximo.toString();
    }
    this.carrinhoService.calcularTotal(this.itensCarrinho);
  }

  atualizarTotal(item: IProdutoCarrinho) {
    if (item.quantidade !== this.valorAnteriorQuantidade) {
      this.valorAnteriorQuantidade = item.quantidade;
      if (item.quantidade > 1500) {
        item.quantidade = 1500;
      }
      this.carrinhoService.calcularTotal(this.itensCarrinho);
      this.carrinhoService.calcularTotalAVistaComTaxa(this.itensCarrinho);
    }
  }

  removeProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.produtoRemovido.emit(produtoId);
    //this.calculaTotal();
  }

  selecionarGarantia(event: any, produto: any) {
    produto.garantiaSelecionada = event.target.value;
    this.produtoGarantiaSelecionada = produto.garantiaSelecionada;
  }
 
}
