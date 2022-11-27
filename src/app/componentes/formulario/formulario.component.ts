import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

import { Usuario } from '../cadastros/usuario/usuarioClass';
import { CadastroUsuarioService, } from '../serviços/cadastro-usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
@Input() textoDoBotao!: string;
@Output() usuarioNovo = new EventEmitter<string>();
formsCadastroUSuario!: FormGroup
 Usuarios: Array<Usuario> = []

  constructor(private cadastrarUsuarioService: CadastroUsuarioService) { }
public textDoBotao(): void {
    this.usuarioNovo.emit("ErickBento")
}
  ngOnInit(): void {
    this.formsCadastroUSuario = new FormGroup({
      id: new FormGroup('',[Validators.required]),
      nome: new FormGroup(''),
      registro: new FormGroup(''),
      setor: new FormGroup(''),
      cargo: new FormGroup(''),
    });
  }
get id(){
  return this.formsCadastroUSuario.get('id')!;
}

  submit(){
    if (this.formsCadastroUSuario.invalid) {
      return;
    }
    console.log("Enviando Formulario");
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
    console.log(this.Usuarios)

  }
}
