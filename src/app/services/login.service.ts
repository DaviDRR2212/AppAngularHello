import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable()
export class LoginService {

  //usuarios:Usuario[];
  usuario:Usuario;
  correct:boolean;
  constructor() {
    /* this.usuarios.push(new Usuario('admin','admin','admin','admin'));
    this.usuarios.push(new Usuario('admin','admin','admin','admin'));
    this.usuarios.push(new Usuario('admin','admin','admin','admin')); */
    this.usuario = new Usuario('admin','admin','admin','admin');
  }

  autenticacionUsuario(user:Usuario):Promise<boolean> {
    return new Promise<boolean>( (resolve, reject) => {
      try {        
        resolve(this.compruebaUsuario(user))
      } catch (error) {
        reject(error);
      }
    });
    /* let promise = new Promise<boolean>( (resolve, reject) => {
      try {        
        resolve(this.compruebaUsuario(user))
      } catch (error) {
        reject(error);
      }
    });
    return promise; */
  }

  loginStorage(user:Usuario) {
    //No se pueden enviar Objetos hay que Serializarlo
    localStorage.setItem('usuario_logado', JSON.stringify(this.compruebaUsuario(user)));   
    /* if(this.compruebaUsuario(user)) {
      localStorage.setItem('usuario_logado', JSON.stringify(true)); 
    } else {
      localStorage.setItem('usuario_logado', JSON.stringify(false)); 
    } */
  }

  compruebaUsuario(user:Usuario):boolean {
    return (this.usuario.username === user.username 
      && this.usuario.password === user.password);
  }
  
}
