import { Injectable } from "@angular/core";
import { Cita } from "src/app/models/agendar-cita";
import {HttpClient} from '@angular/common/http';
import { Psicologo } from "../models/psicologos";
import { Carrera } from "../models/carreras";


@Injectable({
    providedIn: 'root'
  })

  export class CitaService {
    private localStorageKey = 'agendadata';
    URL_API= 'http://localhost:3000/citas'; //<-----
  
    public cita:Cita=
  {id_cita:'',id_psicologo:'',id_alumno:'',id_consultorio:'',tipo_consulta:'',motivo:'',fecha_propuesta:'',hora_propuesta:'',estatus:'solicitud'};

  public psicologo:Psicologo=
  {id_psicologo: '',
    nombre: '',
    ape_paterno: '',
    ape_materno: '',
    especialidad: '',
    e_mail: ''};
    public carrera:Carrera=
    {id_carrera: '',
      carrera: '',
      area: ''};

    psicologos: Psicologo[]=[];
    carreras: Carrera[]=[];
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
      getCarreras(){
        return this.http.get<Psicologo[]>('http://localhost:3000/carreras')
      }
      
      updateEstatusCita(id_cita: number, estatus: string) {
        return this.http.put(`${this.URL_API}/${id_cita}`, { estatus });
      }

    }
