import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {
  produto: IProduto | undefined;
  quantidade = 1;
  

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }

  // adicionarAoCarrinho(){
  //     this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
  //     const produto: IProdutoCarrinho = {
  //       ...this.produto!,
  //       quantidade: this.quantidade
  //     }
  //     this.carrinhoService.adicionarAoCarrinho(produto);
  // }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }

    // verifica se o produto já existe no carrinho
    const produtoExistente = this.carrinhoService.itens.find(item => item.id === produto.id);

    if (produtoExistente) {
      // caso o produto já exista no carrinho, atualize apenas a quantidade
      produtoExistente.quantidade += this.quantidade;
    } else {
      // caso contrário, adicione o produto ao carrinho
      this.carrinhoService.adicionarAoCarrinho(produto);      
    }
  }

  
  
}


