import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  loginForm: FormGroup;
  isButtonDisabled = true;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  error_messages = {
    'name': [
      { type: 'required', message: 'É necessário informar seu nome completo.' },
    ],

    'cpf': [
      { type: 'required', message: 'É necessário informar um CPF.' }
    ],
    'telefone': [
      { type: 'required', message: 'É necessário informar o número completo no formato (DDD) 99999-9999.' }
    ],

    'email': [
      { type: 'required', message: 'É necessário informar um E-mail válido.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
    ],
    'dateBirth': [
      { type: 'required', message: 'É necessário informar sua data de nascimento completa, no formato DD/MM/AAAA.' }
    ],

    'password': [
      { type: 'required', message: 'É necessário informar uma senha.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'É necessário informar uma senha.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'passwordMatch', message: 'A confirmação de senha não coincide com a senha.' }
    ],
  }

  constructor(
    public formBuilder: FormBuilder, private userService: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      cpf: new FormControl('', Validators.compose([
        Validators.required
      ])),
      telefone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      dateBirth: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, {
      validators: this.password.bind(this)
    });
  }
  
  password(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmpassword');
    if (!passwordControl || !confirmPasswordControl) {
      return null; // or any other value you prefer
    }
    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  allFieldsValid() {
    return !this.loginForm.invalid;
  }

  onSubmit() {
    const { name, cpf, dateBirth, telefone, email, password } = this.loginForm.value;
    this.userService.register(name, cpf, dateBirth, telefone, email, password).subscribe(
      response => {
        console.log('Usuário cadastrado com sucesso!', response);
        this.successMessage = 'Usuário cadastrado com sucesso!';
        this.errorMessage = null;
      },
      error => {
        console.error(error);
        this.errorMessage = error.substring(error.indexOf(':') + 2);
        this.successMessage = null;
      }
    );
  }



  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(() => {
      this.isButtonDisabled = !this.allFieldsValid();
    });
    this.isButtonDisabled = !this.allFieldsValid();
    document.body.classList.add('carrinho');
  }

  ngOnDestroy() {
    document.body.classList.remove('carrinho'); // remova a classe ao sair do componente
  }



  togglePasswordVisibility(event: MouseEvent, inputId: string) {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (input.type === 'password') {
      input.type = 'text';
      (event.target as HTMLElement).classList.remove('fa-eye');
      (event.target as HTMLElement).classList.add('fa-eye-slash');
    } else {
      input.type = 'password';
      (event.target as HTMLElement).classList.remove('fa-eye-slash');
      (event.target as HTMLElement).classList.add('fa-eye');
    }
  }

}
