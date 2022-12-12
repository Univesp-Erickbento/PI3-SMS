import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { LoginComponent } from './componentes/pages/login/login.component';
import { SensoresComponent } from './componentes/cadastros/sensores/sensores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrosModule } from './componentes/modulo-cadastro';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SensoresComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CadastrosModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
