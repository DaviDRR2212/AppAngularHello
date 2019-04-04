import { Component, OnInit } from '@angular/core';
import { Piloto } from '../model/piloto';
import { PilotosService } from '../services/pilotos.service';
import { debug } from 'util';

@Component({
  selector: 'app-lista-pilotos',
  templateUrl: './lista-pilotos.component.html',
  styleUrls: ['./lista-pilotos.component.css']
})
export class ListaPilotosComponent implements OnInit {

  //Atributos
  _pilotos = [];
  mostrarPilotos:boolean = false;
  operacion: string = 'Mostrar';

  //Metodos
  constructor(private pilotosSrv:PilotosService) { }

  async ngOnInit() {
    //Forma Síncrona
    // this._pilotos = this.pilotosSrv.obtenerPilotos();
    
    // Forma Asíncrona Callback
    /* this.pilotosSrv.obtenerPilotosAsync((data)=> {
      //debugger;
      this._pilotos = data;
    }); 
    */

    //Forma Asíncrona Promise
    /* this.pilotosSrv.obtenerPilotosAsync()
    .then(data => {
      this._pilotos = data;
    })
    .catch( error => {
      console.log((`Ha habido un error ${error}`));     
    }); */

    //Forma Asíncrona Observable con `await`
    try {
      this._pilotos = await this.pilotosSrv.obtenerPilotosAsync();
    } catch (error) {
      console.log((`Ha habido un error ${error}`));
    }
  }

  //CRUD
  //Lectura
  verPilotos(){
    this.operacion = (this.operacion === 'Ocultar') ? 'Mostrar' : 'Ocultar';
    this.mostrarPilotos = !this.mostrarPilotos;    
  }

  //Borrado
  borrarItem(id:number) {
    this.pilotosSrv.borrarPiloto(id);
    this.ngOnInit();
  }

}
