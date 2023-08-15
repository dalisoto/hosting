import { Injectable } from "@angular/core";
import { Cita } from "src/app/models/agendar-cita";
import {HttpClient} from '@angular/common/http';
import { Psicologo } from "../models/psicologos";


@Injectable({
    providedIn: 'root'
  })

  export class CitaService {
    private localStorageKey = 'agendadata';
    URL_API= 'http://localhost:3000/citas'; //<-----
  
    public cita:Cita=
  {id_cita:'',id_psicologo:'',id_alumno:'',id_consultorio:'',tipo_consulta:'',motivo:'',fecha_propuesta:'',hora_propuesta:'',estatus:''};

  public psicologo:Psicologo=
  {id_psicologo: '',
    nombre: '',
    ape_paterno: '',
    ape_materno: '',
    especialidad: '',
    e_mail: ''};

    psicologos: Psicologo[]=[];

    citas: Cita[]=[];
  
    constructor(private http:HttpClient){

    };

    createCita(cita: Cita) { 
      return this.http.post(this.URL_API,cita);
    }
  
    deleteCita(id_cita: number) {
      return this.http.delete(this.URL_API + '/' + id_cita);
    }
  
    updateCita(cita: Cita) {
        return this.http.put(this.URL_API + cita.id_cita ,cita);
      }

      getCitas(){
      return this.http.get<Cita[]>(this.URL_API);
      

    }
      getCita(id:number){
        return this.http.get<Cita[]>(this.URL_API + id);
      }
      getPsicologos(){
        return this.http.get<Psicologo[]>('http://localhost:3000/psicologos')
      }
      
      updateEstatusCita(id_cita: number, estatus: string) {
        return this.http.put(`${this.URL_API}/${id_cita}`, { estatus });
      }

    }
