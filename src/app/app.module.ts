import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeUsuarioComponent } from './componentes/home-usuario/home-usuario.component';
import { AgendarCitaComponent } from './componentes/agendar-cita/agendar-cita.component';
import { HomePersonalComponent } from './componentes/home-personal/home-personal.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    HomeUsuarioComponent,
    AgendarCitaComponent,
    HomePersonalComponent,
    CitasComponent,
    AgendaComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
