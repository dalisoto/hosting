import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/agendar.service';
import { Cita } from 'src/app/models/agendar-cita';
import { NgForm } from '@angular/forms';
import { Psicologo } from 'src/app/models/psicologos';


@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class CitaComponent implements OnInit{

  // Define la relación entre los nombres y los valores numéricos

  consultorios: { nombre: string, valor: number }[] = [
    { nombre: 'Consultorio 1', valor: 1 },
    { nombre: 'Consultorio 2', valor: 2 },
    { nombre: 'Consultorio 3', valor: 3 },
  ];

  constructor(public citaService: CitaService) {
  }

  ngOnInit(): void {
    //console.log(this.empleadoService.getEmpleados());
    this.getCitas();
    this.getPsicologos();
  }

  getPsicologos() {
    this.citaService.getPsicologos().subscribe(
      res => {
        this.citaService.psicologos = res;
      },
      err => console.log(err)
    );
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

    // Buscar el objeto Psicologo correspondiente al nombre seleccionado
    const psicologoSeleccionado = this.citaService.psicologos.find(
      (psicologo) => psicologo.nombre === this.citaService.cita.id_psicologo
    );

      // Asignar el id_psicologo al objeto cita
      if (psicologoSeleccionado) {
        this.citaService.cita.id_psicologo = psicologoSeleccionado.id_psicologo;
      }


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
