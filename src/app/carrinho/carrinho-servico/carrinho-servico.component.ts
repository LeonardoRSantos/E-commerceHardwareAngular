  import { Component, OnInit, Input } from '@angular/core';
  import { CarrinhoService } from 'src/app/carrinho.service';
  import { IProdutoCarrinho } from 'src/app/produtos';

  @Component({
    selector: 'app-carrinho-servico',
    templateUrl: './carrinho-servico.component.html',
    styleUrls: ['./carrinho-servico.component.css']
  })


  export class CarrinhoServicoComponent implements OnInit {
    itensCarrinho: IProdutoCarrinho[] = [];

    valorGarantia12: number = 0;
    valorGarantia24: number = 0;
    valorGarantia36: number = 0;   
    valorGarantia: number = 0;   
    valorGarantiaSelecionada: number = 0;
    @Input() produto: IProdutoCarrinho;    
    //@Input() garantiaSelecionada: string = '';

    constructor(
      public carrinhoService: CarrinhoService,
    ) { this.produto = {} as IProdutoCarrinho;}

    ngOnInit(): void {
      this.itensCarrinho = this.carrinhoService.obtemCarrinho();
      this.calcularGarantias();
      this.produto.garantiaSelecionada = "sem garantia";      
    }

    
  


    calcularGarantias() {
      for (let item of this.itensCarrinho) {
        this.valorGarantia12 += this.carrinhoService.calcularGarantia(item.preco, 12);
        this.valorGarantia24 += this.carrinhoService.calcularGarantia(item.preco, 24);
        this.valorGarantia36 += this.carrinhoService.calcularGarantia(item.preco, 36);
      }      
    }  

    atualizarGarantia(event: any) {
      this.produto.garantiaSelecionada = event.target.value;
    
      // Atualiza o valor da garantia selecionada
      if (this.produto.garantiaSelecionada === '0') {
        this.valorGarantia = 0;
      } else if (this.produto.garantiaSelecionada === '+12 meses') {
        this.valorGarantia = this.valorGarantia12;
      } else if (this.produto.garantiaSelecionada === '+24 meses') {
        this.valorGarantia = this.valorGarantia24;
      } else if (this.produto.garantiaSelecionada === '+36 meses') {
        this.valorGarantia = this.valorGarantia36;
      }
    }

    // atualizarGarantia(event: any, produtoId: number) {
    //   const garantiaSelecionada = event.target.value;
      
    //   // Atualize o valor da garantia selecionada para o produto correspondente
    //   if (garantiaSelecionada === '0') {
    //     this.valoresGarantia[produtoId] = 0;
    //   } else if (garantiaSelecionada === '+12 meses') {
    //     this.valoresGarantia[produtoId] = this.valorGarantia12;
    //   } else if (garantiaSelecionada === '+24 meses') {
    //     this.valoresGarantia[produtoId] = this.valorGarantia24;
    //   } else if (garantiaSelecionada === '+36 meses') {
    //     this.valoresGarantia[produtoId] = this.valorGarantia36;
    //   }
    // }

    // atualizarGarantia(event: any, produtoId: number) {
    //   const garantiaSelecionada = event.target.value;
      
    //   // Atualize o valor da garantia selecionada para o produto correspondente
    //   if (garantiaSelecionada === '0') {
    //     this.valoresGarantia[produtoId] = 0;
    //   } else if (garantiaSelecionada === '+12 meses') {
    //     this.valoresGarantia[produtoId] = this.valorGarantia12;
    //   } else if (garantiaSelecionada === '+24 meses') {
    //     this.valoresGarantia[produtoId] = this.valorGarantia24;
    //   } else if (garantiaSelecionada === '+36 meses') {
    //     this.valoresGarantia[produtoId] = this.valorGarantia36;
    //   }
    
    //   // atualize a propriedade valorGarantiaSelecionada
    //   this.valorGarantiaSelecionada = this.valoresGarantia[produtoId];
    // }
  }






