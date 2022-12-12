import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CadastroUsuarioService, } from '../../serviços/cadastro-usuario.service';
import { Usuario} from './usuarioClass';
import { FormularioComponent } from '../../formulario/formulario.component';
import { FormControl,Form,FormsModule,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
   textoDoBotao = 'Cadastrar';
   Usuarios: any[] = []
  novousuario: any;

  adicionarnovousuario($event: any){
    console.log($event)
    this.novousuario=$event
  }



  constructor() { }

  ngOnInit(): void {
  }

}
