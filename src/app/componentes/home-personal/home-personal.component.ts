import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/agendar.service';
import { Cita } from 'src/app/models/agendar-cita';
import { NgForm } from '@angular/forms';
import { CitaValidadaService } from 'src/app/services/cita-validada.service';

@Component({
  selector: 'app-home-personal',
  templateUrl: './home-personal.component.html',
  styleUrls: ['./home-personal.component.css']
})
export class HomePersonalComponent implements OnInit{
  citas: Cita[] = [];
  citasValidadas: Cita[] = [];

  constructor(
    public citaService: CitaService,
    public citaValidadaService: CitaValidadaService
  ) {}

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
    // Obtener la fecha actual del sistema
    const fechaActual = new Date().toISOString().split('T')[0];
  
    // Establecer la fecha actual en el formulario
    form.value.fecha_propuesta = fechaActual;
  
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

  validarCita(cita: Cita) {
    // Actualizar el estatus de la cita a "validada" en el servicio
    this.citaService.updateEstatusCita(cita.id_cita, 'Validada').subscribe(() => {
      // Eliminar la cita de la tabla actual
      alert('Cita Validada');
      this.citas = this.citas.filter(c => c.id_cita !== cita.id_cita);
      // Luego, deberías agregar la cita a la tabla de "citas validadas"
      // Puedes hacerlo de manera similar a cómo se hace en la tabla actual
      // Asegúrate de utilizar un servicio separado si tienes lógica adicional para las citas validadas
    });
  }

 



  loadCitas() {
    this.citaService.getCitas().subscribe(citas => {
      this.citas = citas;
    });
  }

  loadCitasValidadas() {
    this.citaValidadaService.getCitasValidadas().subscribe(citasValidadas => {
      this.citasValidadas = citasValidadas;
    });
  }
  cancelarCita(cita: Cita) {
    this.citaService.deleteCita(cita.id_cita).subscribe(() => {
      // Vuelve a cargar las citas después de eliminar la cita cancelada
      alert('Cita cancelada')
      this.loadCitas();
      this.loadCitasValidadas();
    });
  }

  formReset(form:NgForm){
    this.citaService.cita=form.value;
    form.reset();
  }

}

