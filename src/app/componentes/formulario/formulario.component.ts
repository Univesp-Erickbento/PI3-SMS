import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';

import { Usuario } from '../cadastros/usuario/usuarioClass';
import { CadastroUsuarioService, } from '../serviços/cadastro-usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
@Input() textoDoBotao!: string;

formsCadastroUSuario!: FormGroup
  Usuarios: any[] = []
  @Output()aoAdicionarusuario = new EventEmitter <any>();
  constructor(private cadastrarUsuarioService: CadastroUsuarioService) { }

  ngOnInit(): void {
    this.formsCadastroUSuario = new FormGroup({
      idUsuario: new FormControl('',[Validators.required]),
      nome: new FormControl(''),
      registro: new FormControl(''),
      setor: new FormControl(''),
      cargo: new FormControl(''),
    });
  }




get idUsuario (){
  return this.formsCadastroUSuario.get('idUsuario')!;
}
  adicionarusuario(idUsuario: string, nome: string,registro: string, setor: string,cargo: string){

  let ObjectCadastro: Usuario = {
    idUsuario : idUsuario,
    nome : nome,
    registro : registro,
    setor : setor,
    cargo : cargo
  }

  let returnCadastro = this.cadastrarUsuarioService.cadastrarUsuario(ObjectCadastro)

  this.Usuarios.push(returnCadastro)

  this.aoAdicionarusuario.emit(returnCadastro)

  //console.log("Enviando Formulario");
  //console.log(this.Usuarios);
// console.log(this.Usuarios.length)



  }


 }
