import { Component, 
          OnInit, 
          OnDestroy, 
          ViewChild,
          OnChanges,
          DoCheck} from '@angular/core';
import { ListaPilotosComponent } from './lista-pilotos/lista-pilotos.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
    
  private _title = 'Bienvenido a nuestra app!!';
  private _subtitle = 'Cuarta sesion Angular =)';
  private _author = 'DayB';
  private _logoF1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Fk6WWn7q8RNTugVZF5Wmd8hl_h6iENlZ6jxBDQtJNhMU9v-ZiQ';
  usuarioLogado:boolean = false;
  msg:string = '';

  @ViewChild(ListaPilotosComponent) listaPilotos;

  get title():string {
    return this._title;
  }

  get subtitle():string {
    return this._subtitle;
  }

  get author():string {
    return this._author;
  }

  get logoF1():string {
    return this._logoF1;
  }
 
  //metodos
  ngOnInit(){

  }

  ngOnDestroy(): void {
    console.log('Este componente se ha destruido...');
  }

  ngOnChanges(): void {

  }

  /**
   * Se ejecuta cuando ocurre cualquier cambio
   */
  ngDoCheck(): void {
    //this.usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));
    //localStorage.removeItem('usuario_logado');
  }

  newItem() {
    this.listaPilotos.ngOnInit();
  }

  /*
  Recogiendo Booleano del Evento
  comprobarUsuario(checkUsuario:boolean){
    this.usuarioLogado = checkUsuario;
    this.msg = ((checkUsuario) ? '' : 'Error Username/Password');
    if(checkUsuario)   {
      this.msg = '';
    } else {
      this.msg = 'Error Username/Password';
    } 
  } */

  //Usando el LocalStorage
  comprobarUsuario(){
    this.usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));
    this.msg = ((this.usuarioLogado) ? '' : 'Error Username/Password');
    if(this.usuarioLogado)   {
      this.msg = '';
    } else {
      this.msg = 'Error Username/Password';
    } 
  } 

}
