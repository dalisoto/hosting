import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/agendar.service';
import { Cita } from 'src/app/models/agendar-cita';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class CitaComponent implements OnInit{

  constructor(public citaService: CitaService) {
  }

  ngOnInit(): void {
    //console.log(this.empleadoService.getEmpleados());
    this.getCitas();
  }

  getCitas(){
    this.citaService.getCitas().subscribe(
      res => {
        this.citaService.citas= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createCita(form: NgForm) {
    const fechaPropuesta = form.value.fecha_propuesta;

    // Establecer el valor del campo fecha_propuesta en el objeto cita del servicio
    this.citaService.cita.fecha_propuesta = fechaPropuesta;
  
    alert('Creando Registro');
    this.citaService.createCita(form.value).subscribe(
      res => {
        this.getCitas();
        form.reset();
      },
      err => console.log(err)
    );
  }

  deleteCita(id: number) {
    //alert('Borrando');
    const resp= confirm('Estas seguro de eliminarlo?');
    console.log('eliminando '+id);
    if(resp){
      this.citaService.deleteCita(id).subscribe(
       (res)=>{
         this.getCitas();
         console.table(res);
       },
       (err)=> console.log(err)
      );
    }
  }

  editCita(cita: Cita) {
    this.citaService.cita = cita;
  }


  formReset(form:NgForm){
    this.citaService.cita=form.value;
    form.reset();
  }

}
