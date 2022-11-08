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

  Usuarios: Array<Usuario> = []
 
  constructor(private cadastrarUsuarioService: CadastroUsuarioService) { }

  ngOnInit(): void {
  }

  adicionarusuario(idUsuario: string, nome: string,registro: string, setor: string,cargo: string) {

      let ObjectCadastro: Usuario = {
        idUsuario : idUsuario,
        nome : nome,
        registro : registro,
        setor : setor,
        cargo : cargo
      }

      let returnCadastro = this.cadastrarUsuarioService.cadastrarUsuario(ObjectCadastro)

      this.Usuarios.push(returnCadastro)
  }

}