import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from 'src/app/models/agendar-cita';

@Injectable({
  providedIn: 'root'
})
export class CitaValidadaService {
  URL_API = 'http://localhost:3000/citas-validadas'; // Ajusta la URL de la API para las citas validadas

  constructor(private http: HttpClient) {}

  // Método para agregar una cita validada a la tabla de "citas validadas"
  addCitaValidada(cita: Cita) {
    return this.http.post(this.URL_API, cita);
  }

  // Método para obtener todas las citas validadas
  getCitasValidadas() {
    return this.http.get<Cita[]>(this.URL_API);
  }

  // Otros métodos del servicio, si es necesario
}

