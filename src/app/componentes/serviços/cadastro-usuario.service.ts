import { Injectable } from '@angular/core';
import { Usuario } from '../cadastros/usuario/usuarioClass';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {
 
  NOVOUSUARIO!:Usuario

  constructor( ) { }

    cadastrarUsuario(novoUsuario : Usuario) : any {

      localStorage.setItem(novoUsuario.idUsuario,novoUsuario.toString())
      return novoUsuario
      
    }
}
