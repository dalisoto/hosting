// login.component.ts
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model'; // Importa el modelo de usuario

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLoginSubmit() {
    // Llamamos al servicio de autenticación para realizar el inicio de sesión
    this.authService.login(this.usuario, this.password)
      .subscribe(
        (response: any) => {
          // Si la autenticación es exitosa, redirigimos al usuario al componente "agendar-cita"
          this.router.navigate(['/agendar-cita']);
          alert('Inicio de sesión exitoso')
        },
        (error: any) => {
          // Manejar errores de autenticación aquí (credenciales incorrectas, etc.).
          console.error('Error en el inicio de sesión', error);
          alert('Usuario o Contraseña Incorrectos')
        }
      );
  }
}
