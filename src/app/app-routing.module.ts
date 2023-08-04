import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { CitaComponent } from './componentes/agendar-cita/agendar-cita.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomePersonalComponent } from './componentes/home-personal/home-personal.component';
import { HomeUsuarioComponent } from './componentes/home-usuario/home-usuario.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'registro',component:RegistroComponent},
  {path:'agendar-cita',component:CitaComponent},
  {path: 'login',component:LoginComponent},
  {path: 'home-usuario',component:HomeUsuarioComponent},
  {path: 'home-personal',component:HomePersonalComponent},
  {path: 'citas',component:CitasComponent},
  {path: 'agenda',component:AgendaComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'perfil', component: PerfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
