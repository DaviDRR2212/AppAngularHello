import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Piloto } from '../model/piloto';
import { PilotosService } from '../services/pilotos.service';

@Component({
  selector: 'app-alta-piloto',
  templateUrl: './alta-piloto.component.html',
  styleUrls: ['./alta-piloto.component.css']
})
export class AltaPilotoComponent implements OnInit {

  piloto:Piloto;

  @Output('new-Pilot')
  nuevoPilotoAnyadido:EventEmitter<void> = new EventEmitter();

  constructor(private pilotosSrv:PilotosService) { 
  }

  ngOnInit() {
    this.piloto = new Piloto('','','','');
  }

  anyadirPiloto(){
    console.log(`Datos Formulario: 
      ${this.piloto.nombre},
      ${this.piloto.apellidos}, 
      ${this.piloto.escuderia} y
      ${this.piloto.avatar}`);
    try {
      this.pilotosSrv.anyadirPiloto(new Piloto(this.piloto.nombre, this.piloto.apellidos, this.piloto.escuderia, this.piloto.avatar)); 
      this.nuevoPilotoAnyadido.emit(); 
    } catch (error) {
      console.log('Ha habido un error en el Alta...');
    }  
    return false;
  }

  //Anyadir
  /* añadirPiloto (nuevoPiloto:Piloto) {
    this.pilotosSrv.añadirPiloto(nuevoPiloto);
    this.ngOnInit();
  } */
}
