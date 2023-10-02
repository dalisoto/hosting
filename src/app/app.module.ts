import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeUsuarioComponent } from './componentes/home-usuario/home-usuario.component';
import { CitaComponent } from './componentes/agendar-cita/agendar-cita.component';
import { HomePersonalComponent } from './componentes/home-personal/home-personal.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { AgendaPsicoComponent } from './componentes/agenda-psico/agenda-psico.component';
import { GeoComponent } from './componentes/geo/geo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    HomeUsuarioComponent,
    CitaComponent,
    AgendaComponent,
    NavegacionComponent,
    EquipoComponent,
    PerfilComponent,
    HomePersonalComponent,
    AgendaPsicoComponent,
    CitasComponent,
    GeoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
