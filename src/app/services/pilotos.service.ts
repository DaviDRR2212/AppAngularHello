import { Injectable } from '@angular/core';
import { Piloto } from '../model/piloto';

@Injectable({
  providedIn: 'root'
})
export class PilotosService {

  _pilotos: Piloto[] = [];
  
  constructor() { 
    //Cargamos Pilotos
    this._pilotos.push(new Piloto('Ayrton', 'Senna', 'McLaren',"asenna.jpg"));
    this._pilotos.push(new Piloto('Michael', 'Schumacher', 'Ferrari',"mschumacher.jpg"));
    this._pilotos.push(new Piloto('Fernando', 'Alonso', 'Renault',"falonso.jpg"));
  }

  /* Conexión Síncrona 
  obtenerPilotos() {
    return this._pilotos;
  }
 */

  /* Ejemplo Callback
  obtenerPilotosAsync(callback) {
    setTimeout(() => {
      //debugger;
      callback([...this._pilotos]);
    }, 2000);
  } */

  obtenerPilotosAsync():Promise<Array<Piloto>> {
    let promise = new Promise<Piloto[]>( (resolve, reject) => {
      try {
        resolve([...this._pilotos]);
      } catch (error) {
        reject(error);
      }
    });
    return promise;
  }

  //Baja
  borrarPiloto (id:number) {
    this._pilotos.splice(id, 1);
  }

  //Alta
  anyadirPiloto (nuevoPiloto:Piloto) {
    this._pilotos = [...this._pilotos, nuevoPiloto];
  }

}
