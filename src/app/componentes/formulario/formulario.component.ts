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
@Output() aoAdicionarusuario = new EventEmitter<any>();
formsCadastroUSuario!: FormGroup
 Usuarios: Array<Usuario> = []

  constructor(private cadastrarUsuarioService: CadastroUsuarioService) { }
    public textDoBotao(): void {
   
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
    console.log(this.Usuarios)
    this.aoAdicionarusuario.emit(this.Usuarios)
  }
}
