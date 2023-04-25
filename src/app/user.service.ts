import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {}

  register(name: string, cpf: string, dateBirth: Date, telefone: string, email: string, password: string) {
    const body = { name, cpf, dateBirth, telefone, email, password };
    return this.http.post(`${this.apiUrl}/register`, body).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleHttpError(error);
      })
    );
  }

  authenticate(login: string, password: string) {
    const body = {
      login: login,
      password: password
    };
    return this.http.post(`${this.apiUrl}/authenticate`, body);
  }

  private handleHttpError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erro do cliente
      return throwError(`Erro: ${error.error.message}`);
    } else if (error.status === 400 && error.error.message) {
      // Erro de DataIntegrityViolationException
      return throwError(`Erro: ${error.error.message}`);
    } else {
      // Erro genérico do servidor
      return throwError('Erro desconhecido. Por favor, tente novamente mais tarde.');
    }
  }
}
