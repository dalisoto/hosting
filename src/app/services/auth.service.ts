// auth.service.ts
import { User } from 'src/app/models/user.model'; // Importa el modelo de usuario
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  apiUrl = 'http://localhost:3000';
  public user:User=
  {id_alumno:0, usuario: '', password:''};

    users: User[]=[];


  constructor(private http: HttpClient) {}

  login(usuario: string, password: string): Observable<User> {
    const data = { usuario, password };
    return this.http.post<User>(`${this.apiUrl}/login`, data);
  }
}

