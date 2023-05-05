import { Component, Input, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { IProdutoCarrinho } from 'src/app/produtos';

@Component({
  selector: 'app-carrinho-servico',
  templateUrl: './carrinho-servico.component.html',
  styleUrls: ['./carrinho-servico.component.css'],
})
export class CarrinhoServicoComponent implements OnInit {
  @Input() produto: IProdutoCarrinho;

  // aqui seria bom criar uma interface para representar a garantia
  garantias = [
    { nome: 'Sem garantia', descricao: 'Sem garantia', meses: null },
    { nome: '+12 meses', descricao: '+12 meses', tempo: 12 },
    { nome: '+24 meses', descricao: '+24 meses', tempo: 24 },
    { nome: '+36 meses', descricao: '+36 meses', tempo: 36 },
  ];

  // e aqui pode ser outra interface para representar a garantia com o valor calculado
  garantiasPorProduto: { nome: string; descricao: string; valor: number }[] =
    [];

  valorGarantia = 0;
 
  

  constructor(public carrinhoService: CarrinhoService) {
    this.produto = {} as IProdutoCarrinho;
  }

  ngOnInit(): void {
    this.calcularGarantias();
    this.produto.garantiaSelecionada = 'Sem garantia';    
  }

  calcularGarantias() {
    for (let garantia of this.garantias) {
      this.garantiasPorProduto.push({
        nome: garantia.nome,
        descricao: garantia.descricao,
        valor: this.carrinhoService.calcularGarantia(
          this.produto.preco,
          garantia.tempo ?? 0          
        ),        
      });      
    }
    
  }



  

  atualizarGarantia(garantia: any) {
    if (this.produto.garantiaSelecionada === 'SEM_GARANTIA') {
      this.valorGarantia = 0;
    } else if (this.produto.garantiaSelecionada === '+12 meses') {
      this.valorGarantia = garantia.valor;
    } else if (this.produto.garantiaSelecionada === '+24 meses') {
      this.valorGarantia = garantia.valor;
    } else if (this.produto.garantiaSelecionada === '+36 meses') {
      this.valorGarantia = garantia.valor;
    } else {
      this.valorGarantia = 0; // fallback para outras opções de garantia
    }
  }
}

  
 



