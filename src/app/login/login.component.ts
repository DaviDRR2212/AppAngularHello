import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {


  /* Objeto JavaScript
  login:any = {
    user: '',
    password: ''
  }; */

  usuario:Usuario;

  @Output()
  //comprobarUsuario:EventEmitter<boolean> = new EventEmitter();
  comprobarUsuario:EventEmitter<void> = new EventEmitter();
  
  imageLogin:string = 'http://carein.com.mx/assets/img/General/login.jpg';
  constructor(private loginSrv:LoginService) { 

  }

  ngOnInit() {
    this.usuario = new Usuario('','','','');
  }

  autenticarUsuario(){
    console.log(`Datos Formulario: 
      ${this.usuario.username},
      ${this.usuario.password}`);
    try {
      /* Usando Promise y Evento
      this.loginSrv.autenticacionUsuario(
        new Usuario(
          this.usuario.nombre, 
          this.usuario.apellido, 
          this.usuario.password, 
          this.usuario.username))
          .then(res => {
            this.comprobarUsuario.emit(res);
          }).catch(error => {
            throw error;     
          }); */
      this.loginSrv.loginStorage(new Usuario(
                                  this.usuario.nombre, 
                                  this.usuario.apellido, 
                                  this.usuario.password, 
                                  this.usuario.username));
      this.comprobarUsuario.emit();
    } catch (error) {
      console.log('Ha habido un error al hacer Login');
    }  
    return false;
  }
  
}
