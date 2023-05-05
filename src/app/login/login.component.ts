import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string = '';
  password: string= '';
  errorMessage: string= '';
  successMessage: string= '';

  constructor(private userService: UserService,private router: Router) {}

  onSubmit() {
    this.userService.authenticate(this.email, this.password).subscribe(
      response => {
        this.router.navigateByUrl('/produtos');
      },
      error => {
        this.errorMessage = 'Email ou senha inválidos.';
        this.successMessage = '';
      }
    );
  }
  


  ngOnInit(): void {
    document.body.classList.add('carrinho');
  }

  ngOnDestroy() {
    document.body.classList.remove('carrinho'); // remova a classe ao sair do componente
  }  

}

