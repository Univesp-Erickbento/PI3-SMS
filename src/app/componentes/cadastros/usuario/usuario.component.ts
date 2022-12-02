import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  textoDoBotao="Cadastrar"
  Usuarios: Array<Usuario> = []
  @Output()aoAdicionarusuario = new EventEmitter <any>();

 public c :Array<Usuario> = []
  constructor(private cadastrarUsuarioService: CadastroUsuarioService) { }

  ngOnInit(): void {
  }

  public usuarioNovo($event: any): void{
    
  }
  adicionarusuario(idUsuario: string, nome: string,registro: string, setor: string,cargo: string): any {

      let ObjectCadastro: Usuario = {
        idUsuario : idUsuario,
        nome : nome,
        registro : registro,
        setor : setor,
        cargo : cargo
      }

      let returnCadastro = this.cadastrarUsuarioService.cadastrarUsuario(ObjectCadastro)

      this.Usuarios.push(returnCadastro)
      console.log(this.Usuarios)
      return (this.Usuarios)
      this.c=returnCadastro
      this.aoAdicionarusuario.emit(returnCadastro)
     
  }

}