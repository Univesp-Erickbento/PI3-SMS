import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { LoginComponent } from './componentes/pages/login/login.component';
import { UsuarioComponent } from './componentes/cadastros/usuario/usuario.component';
import { SensoresComponent } from './componentes/cadastros/sensores/sensores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    SensoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
