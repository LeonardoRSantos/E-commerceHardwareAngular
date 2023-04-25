import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{

  itensCarrinho: IProdutoCarrinho[] = [];

  total = 0;

  width: number = 0;

  produtoSelecionado: IProdutoCarrinho;

  carrinhoVazio = false;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
  ) {this.produtoSelecionado = {} as IProdutoCarrinho}

  ngOnInit(): void{
      this.itensCarrinho = this.carrinhoService.obtemCarrinho();      
      document.body.classList.add('carrinho');
      this.width = window.innerWidth;
      if (this.itensCarrinho.length === 0) {
        this.carrinhoVazio = true;
      }
  }

  getItensUnicos(carrinho: IProdutoCarrinho[]): IProdutoCarrinho[] {
    const produtosUnicos = carrinho.reduce((acc, item) => {
      const index = acc.findIndex(p => p.id === item.id);
      if (index === -1) {
        acc.push(item);
      }
      return acc;
    }, [] as IProdutoCarrinho[]);
    return produtosUnicos.filter(p => p !== undefined);
  }
  

  ngOnDestroy() {
    document.body.classList.remove('carrinho'); // remova a classe ao sair do componente
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {   
    this.width = (<Window>event.target).innerWidth;
  }

  removeProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);    
  }

  comprar(){
    alert("Parabéns, você finalizou a sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

  continuarComprando(){
    this.router.navigate(["produtos"]);
  }
  
  atualizaItensCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
  }
}
