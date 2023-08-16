import { Injectable } from "@angular/core";
import { Registro } from "src/app/models/registro.model";
import {HttpClient} from '@angular/common/http';
import { Carrera } from "../models/carreras";


@Injectable({
    providedIn: 'root'
  })

  export class RegistroService {
    private localStorageKey = 'agendadata';
    URL_API= 'http://localhost:3000/registro'; //<-----
  
    public registro:Registro=
  {id_alumno: '',
    nombre: '',
    ape_paterno: '',
    ape_materno: '',
    telefono: '',
    e_mail: '',
    id_carrera: '',
    grupo: '',
    password: ''
   
   };
   public carrera:Carrera=
   {id_carrera: '',
     carrera: '',
     area: ''};

    registros: Registro[]=[];
    carreras: Carrera[]=[];
    constructor(private http:HttpClient){

    };

    createRegistro(cita: Registro) { 
      return this.http.post(this.URL_API,this.registro);
    }
    getCarreras(){
      return this.http.get<Carrera[]>('http://localhost:3000/carreras')
    }
    deleteRegistro(id_cita: number) {
      return this.http.delete(this.URL_API + '/' + id_cita);
    }
  
    updateRegistro(cita: Registro) {
        return this.http.put(this.URL_API + this.registro.id_alumno ,this.registro);
      }

      getRegistros(){
      return this.http.get<Registro[]>(this.URL_API);
      

    }
      getRegistro(id:number){
        return this.http.get<Registro[]>(this.URL_API + id);
      }

    }

