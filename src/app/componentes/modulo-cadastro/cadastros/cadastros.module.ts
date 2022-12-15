import { UsuarioViewComponent } from './../../cadastros/usuario/usuario-view/usuario-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from '../../cadastros/usuario';
import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { CadastroUsuarioService } from '../../serviços';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioViewComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,

  ],

  exports: [
    UsuarioComponent,
  ],

  providers:[
    CadastroUsuarioService
  ]
})
export class CadastrosModule { }

