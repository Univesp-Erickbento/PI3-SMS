import { Component, OnInit } from '@angular/core';
import { CadastroUsuarioService, } from '../../serviços/cadastro-usuario.service';
import { Usuario} from './usuarioClass';
import { FormControl,Form,FormsModule,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  NOVOUSUARIOS =[
    Usuario
  ]
  USUARIOS=[]
 

  constructor(private cadastrarUsuarioService: CadastroUsuarioService) { }

  ngOnInit(): void {
  }

  adicionarusuario(idUsuario: string, nome: string,registro: string, setor: string,cargo: string) {
    let uid, unome, uregistro,usetor,ucargo:string;

      uid = idUsuario,
      unome=nome,
      uregistro=registro
      usetor= setor
      ucargo =cargo

      this.NOVOUSUARIOS.push()

      this.USUARIOS=this.cadastrarUsuarioService.cadastrarUsuario( idUsuario,nome,registro, setor,cargo)


}
}