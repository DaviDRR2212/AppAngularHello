import { Component, 
          OnInit, 
          Input, 
          Output, 
          EventEmitter } from '@angular/core';
import { Piloto } from '../model/piloto';

@Component({
  selector: 'app-piloto',
  //selector: 'tr[app-piloto]',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.css']
})
export class PilotoComponent implements OnInit {

  @Input()
  data:Piloto;

  @Input()  indice:number; 
  
  @Output()
  itemBorrado:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getRutaAvatar = (avatar:string) => {
    return `assets/images/${avatar}`;
  }

  borrar = (id:number) => {
    //Mejor hacerlo en el ts ya que cuanto menos código haya en el template mejor
    debugger;
    this.itemBorrado.emit(id-1);
  }
}
