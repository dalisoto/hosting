import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { AgendarCitaComponent } from './componentes/agendar-cita/agendar-cita.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomePersonalComponent } from './componentes/home-personal/home-personal.component';
import { HomeUsuarioComponent } from './componentes/home-usuario/home-usuario.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { CitasComponent } from './componentes/citas/citas.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'registro',component:RegistroComponent},
  {path:'agendar-cita',component:AgendarCitaComponent},
  {path: 'login',component:LoginComponent},
  {path: 'home-usuario',component:HomeUsuarioComponent},
  {path: 'home-personal',component:HomePersonalComponent},
  {path: 'citas',component:CitasComponent},
  {path: 'agenda',component:AgendaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
