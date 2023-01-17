import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../cadastros/usuario/usuarioClass';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

 private listaUsuario : any[];
 private url = 'http://localhost:3000/Usuarios';



  constructor( private httpClient : HttpClient) {
    this.listaUsuario = [];
  }

  get UsuarioNovo(){
    return this.listaUsuario;
  }

  todosUsuarios():Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url);
  }

    cadastrarUsuario(novoUsuario : Usuario) : any {

      localStorage.setItem(novoUsuario.idUsuario,novoUsuario.toString())
      return novoUsuario

    }
}
