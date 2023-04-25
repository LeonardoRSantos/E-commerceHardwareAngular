import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
                        { path: "", redirectTo: "produtos", pathMatch: "full"},
                        { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
                        { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
                        { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
                        { path: 'login', component: LoginComponent },
                        { path: "**", component: NaoEncontradoComponent}];


@NgModule({
 declarations: [],
 imports:[
  RouterModule.forRoot(routes)
 ],
 exports:[
  RouterModule
 ]
})
export class AppRoutingModule { }
