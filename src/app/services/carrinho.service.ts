import {Input} from '@angular/core';
import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from '../produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];
  private _total: number = 0;
  private _totalComTaxa: number = 0;  
  @Input() produto: IProdutoCarrinho;
  // produtos: IProdutoCarrinho;
  constructor() {this.produto = {} as IProdutoCarrinho;}

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho")|| "[]");    
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  get total(): number {
    return this._total;
  }

  get totalComTaxa(): number{
    return this._totalComTaxa;
  }

  calcularTotal(itensCarrinho: IProdutoCarrinho[]): void {
    this._total = itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  } 

  calcularTotalAVistaComTaxa(itensCarrinho: IProdutoCarrinho[]){
      this._totalComTaxa = itensCarrinho.reduce((prev, curr) => prev + ((curr.preco * (1 + 0.0349)) * curr.quantidade), 0);
  }

   
   calcularGarantia(valorProduto: number, tempoGarantia: number): number {
    switch (tempoGarantia) {
      case 12:
        return valorProduto * 0.18;
      case 24:
        return valorProduto * 0.42;
      case 36:
        return valorProduto * 0.63;
      default:
        return 0;
    }
  }
}
