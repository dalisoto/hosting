import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/services/agenda.service';
import { Consultorio } from 'src/app/models/consultorio';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-agenda-psico',
  templateUrl: './agenda-psico.component.html',
  styleUrls: ['./agenda-psico.component.css']
})
export class AgendaPsicoComponent implements OnInit {
  constructor (public agendaService:AgendaService) {}

  ngOnInit(): void {
    this.getConsultorio();
  }

  getConsultorio(){
    this.agendaService.getCosultorio().subscribe(
      res=>{
        this.agendaService.consultorios = res;
        console.log(res);
      },

      err => console.log(err)
    )
  }

  updateConsultorios(form:NgForm){
    alert('Actualizando');
      this.agendaService.editConsultorio(form.value).subscribe(
        res=> {
          this.getConsultorio();
          console.log(res);
          form.reset();
        },
        err=> console.log(err)
      )
  }

  createConsultorio(form:NgForm){
    this.agendaService.createConsultorio(form.value).subscribe(
      res=> {
        this.getConsultorio();
        form.reset();
      },
      err=> console.log(err)
    )
  }

  deleteConsultorio(id_consultorio:any){
    const resp = confirm('Quieres eliminarlo?');
    console.log('Eliminando '+id_consultorio);
    if(resp){
      this.agendaService.deleteConsultorio(id_consultorio).subscribe(
        res=>{
          this.getConsultorio();
        },
        err=> console.log(err)
      );
    }
  }

  editConsultorio(consultorio:Consultorio){
    this.agendaService.consultorio = consultorio;
  }

  formReset(form:NgForm){
    this.agendaService.consultorio=form.value;
    form.reset();
  }
}