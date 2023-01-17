import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CadastroUsuarioService, } from '../../serviços/cadastro-usuario.service';
import { Usuario} from './usuarioClass';
import { FormControl,Form,FormsModule,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  Usuarios: any=[];

  @Output() aoAdicionarUsuario = new EventEmitter <any> ();



  constructor(private cadastrarUsuarioService: CadastroUsuarioService) { }

  ngOnInit(): void {
  }

  adicionarusuario(idUsuario: string, nome: string,registro: string, setor: string,cargo: string,data: string ){

      let ObjectCadastro: any = {
        idUsuario : idUsuario,
        nome : nome,
        registro : registro,
        setor : setor,
        cargo : cargo,
        data: new Date()
      }

        this.aoAdicionarUsuario.emit(ObjectCadastro)

      let returnCadastro = this.cadastrarUsuarioService.cadastrarUsuario(ObjectCadastro)
      //console.log(ObjectCadastro)
      //console.log(returnCadastro)
      this.Usuarios.push(returnCadastro )
      console.log(this.Usuarios)

  }

}
