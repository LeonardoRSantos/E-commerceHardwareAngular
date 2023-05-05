"use strict";(self.webpackChunkcomputers=self.webpackChunkcomputers||[]).push([[738],{6738:(q,p,i)=>{i.r(p),i.d(p,{ProdutosModule:()=>x});var u=i(6895),s=i(8765),o=i(1571);const g=[{id:1,descricao:"Mouse gamer",preco:439,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-3.jpg",quantidadeEstoque:15},{id:2,descricao:"Monitor muito bom",preco:1200.5,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/monitor-1.jpg",quantidadeEstoque:10},{id:3,descricao:"Teclado excelente",preco:749.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-1.jpg",quantidadeEstoque:10},{id:4,descricao:"Fone para quem joga FPS",preco:599.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-2.jpg",quantidadeEstoque:10},{id:5,descricao:"Fone de ouvido",preco:299.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-1.jpg",quantidadeEstoque:10},{id:6,descricao:"Fone de ouvido bom",preco:399.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-3.jpg",quantidadeEstoque:10},{id:7,descricao:"HD 1TB",preco:499.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/hd.jpg",quantidadeEstoque:10},{id:8,descricao:"Combo de placa de v\xeddeos",preco:18449.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/placa-video.jpg",quantidadeEstoque:10},{id:9,descricao:"Processador Ryzen",preco:1e3,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/processador.jpg",quantidadeEstoque:10},{id:10,descricao:"Notebook bom",preco:2500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-1.jpg",quantidadeEstoque:10},{id:11,descricao:"Notebook excelente",preco:4500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-2.jpg",quantidadeEstoque:10},{id:12,descricao:"Mouse barato",preco:20,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-1.png",quantidadeEstoque:10},{id:13,descricao:"Mouse \xf3timo",preco:200,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-2.jpg",quantidadeEstoque:10},{id:14,descricao:"Mouse pequeno",preco:50,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-4.jpg",quantidadeEstoque:10},{id:15,descricao:"Teclado bom",preco:159.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-2.jpg",quantidadeEstoque:10}];let l=(()=>{class t{constructor(){this.produtos=g}getAll(){return this.produtos}getOne(e){return this.produtos.find(n=>n.id===e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=i(8881);let P=(()=>{class t{constructor(e){this.snackBar=e}notificar(e){this.snackBar.open(e,"Ok",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(m.ux))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=i(2136),a=i(433);let h=(()=>{class t{constructor(e,n,c,d){this.produtosService=e,this.route=n,this.notificacaoService=c,this.carrinhoService=d,this.quantidade=1}ngOnInit(){const n=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtosService.getOne(n)}adicionarAoCarrinho(){this.notificacaoService.notificar("O produto foi adicionado ao carrinho");const e={...this.produto,quantidade:this.quantidade},n=this.carrinhoService.itens.find(c=>c.id===e.id);n?n.quantidade+=this.quantidade:this.carrinhoService.adicionarAoCarrinho(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(l),o.Y36(s.gz),o.Y36(P),o.Y36(f.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-detalhes-produto"]],decls:20,vars:8,consts:[[1,"separadorendereco"],[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"card-title"],[1,"card-text"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"product__avaiability"],[1,"btn","btn-primary","btn-block",3,"click"]],template:function(e,n){1&e&&(o._UZ(0,"div",0),o.TgZ(1,"section",1)(2,"div",2),o._UZ(3,"img",3),o.qZA(),o.TgZ(4,"div",4)(5,"h2",5),o._uU(6),o.qZA(),o.TgZ(7,"h3",6),o._uU(8),o.ALo(9,"currency"),o.qZA(),o.TgZ(10,"p",6),o._uU(11,"Estoque dispon\xedvel:"),o.qZA(),o.TgZ(12,"label"),o._uU(13," Quantidade: "),o.TgZ(14,"input",7),o.NdJ("ngModelChange",function(d){return n.quantidade=d}),o.qZA(),o._uU(15," unidade(s) "),o.qZA(),o.TgZ(16,"p",8),o._uU(17),o.qZA(),o.TgZ(18,"button",9),o.NdJ("click",function(){return n.adicionarAoCarrinho()}),o._uU(19,"Adicionar ao carrinho"),o.qZA()()()),2&e&&(o.xp6(3),o.Q6J("src",null==n.produto?null:n.produto.imagem,o.LSH),o.xp6(3),o.Oqu(null==n.produto?null:n.produto.descricao),o.xp6(2),o.Oqu(o.xi3(9,5,null==n.produto?null:n.produto.preco,"BRL")),o.xp6(6),o.Q6J("ngModel",n.quantidade),o.xp6(3),o.hij(" ",null==n.produto?null:n.produto.quantidadeEstoque," unidade(s) em estoque "))},dependencies:[a.Fj,a.wV,a.JJ,a.qQ,a.On,u.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__availability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}.separadorendereco[_ngcontent-%COMP%]{height:100px}"]}),t})();function v(t,r){if(1&t&&(o.TgZ(0,"div",3)(1,"div",4)(2,"a",5),o._UZ(3,"img",6),o.TgZ(4,"div",7)(5,"h2",8),o._uU(6),o.qZA(),o.TgZ(7,"p",9),o._uU(8),o.qZA(),o.TgZ(9,"p",9),o._uU(10),o.ALo(11,"currency"),o.qZA()(),o.TgZ(12,"div",10)(13,"button",11),o._uU(14,"Comprar"),o.qZA()()()()()),2&t){const e=r.$implicit;o.xp6(2),o.MGl("routerLink","/produtos/",e.id,""),o.xp6(1),o.Q6J("src",e.imagem,o.LSH),o.xp6(3),o.Oqu(e.descricao),o.xp6(2),o.Oqu(e.descricaoPreco),o.xp6(2),o.Oqu(o.xi3(11,5,e.preco,"BRL"))}}const _=[{path:"",component:(()=>{class t{constructor(e,n){this.produtosService=e,this.route=n}ngOnInit(){const e=this.produtosService.getAll();this.route.queryParamMap.subscribe(n=>{const c=n.get("descricao")?.toLowerCase();this.produtos=c?e.filter(d=>d.descricao.toLowerCase().includes(c)):e})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(l),o.Y36(s.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-produtos"]],decls:3,vars:1,consts:[[1,"product-list"],[1,"row"],["class","col-sm-6 col-md-4 col-lg-3 mb-4",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","mb-4"],[1,"card","h-100"],[1,"product-list__link",3,"routerLink"],[1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"card-footer"],["type","button",1,"btn","btn-primary","btn-block"]],template:function(e,n){1&e&&(o.TgZ(0,"section",0)(1,"div",1),o.YNc(2,v,15,8,"div",2),o.qZA()()),2&e&&(o.xp6(2),o.Q6J("ngForOf",n.produtos))},dependencies:[u.sg,s.rH,u.H9],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center;margin-top:120px}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{color:#000}"]}),t})()},{path:":id",component:h}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.Bz.forChild(_),s.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.ez,b,a.u5]}),t})()}}]);