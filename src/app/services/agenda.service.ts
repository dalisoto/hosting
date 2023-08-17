import { Injectable } from '@angular/core';
import { Consultorio } from '../models/consultorio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  public consultorio:Consultorio={
    id_consultorio: 0,
    nomPsico: '',
    nombre_consultorio: '',
    ubicacion: 'Edificio F',
    Fecha: new Date(),
    Hora: new Date(),
    }

  public consultorios:Consultorio[]=[];

  URL_API='http://localhost:3000/consultorio/';

  constructor(private http: HttpClient) { }

  getCosultorio(){
    return this.http.get<Consultorio[]>(this.URL_API);
  }

  createConsultorio(consultorio:Consultorio){
    return this.http.post(this.URL_API,consultorio);
  }

  deleteConsultorio(id_consultorio:number){
    return this.http.delete(this.URL_API+id_consultorio);
  }
  editConsultorio(consultorio:Consultorio){
    return this.http.put(this.URL_API+this.consultorio.id_consultorio,consultorio);
  }
}