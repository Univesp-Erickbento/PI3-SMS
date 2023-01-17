import { SensoresViewComponent } from './../../cadastros/sensores/sensores-view/sensores-view.component';
import { CadastroSensorService } from './../../serviços/sensores/cadastro-sensor.service';
import { SensoresComponent } from './../../cadastros/sensores/sensores.component';
import { UsuarioViewComponent } from './../../cadastros/usuario/usuario-view/usuario-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from '../../cadastros/usuario';
import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { CadastroUsuarioService } from '../../serviços';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioViewComponent,
    SensoresComponent,
    SensoresViewComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule
  ],

  exports: [
    UsuarioComponent,
    SensoresComponent
  ],

  providers:[
    CadastroUsuarioService,
    CadastroSensorService
  ]
})
export class CadastrosModule { }

