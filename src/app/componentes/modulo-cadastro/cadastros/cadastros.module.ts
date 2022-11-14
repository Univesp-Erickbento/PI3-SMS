import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from '../../cadastros/usuario';
import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { CadastroUsuarioService } from '../../serviços';
import { FormularioComponent } from '../../formulario/formulario.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    FormularioComponent
  
  ],
  
  imports: [
    CommonModule,
  
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

