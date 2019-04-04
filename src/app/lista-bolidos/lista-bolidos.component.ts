import { Component, OnInit } from '@angular/core';
import { BolidosService } from '../services/bolidos.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-lista-bolidos',
  templateUrl: './lista-bolidos.component.html',
  styleUrls: ['./lista-bolidos.component.css'],
  providers: [BolidosService]
})
export class ListaBolidosComponent implements OnInit {

  bolidos = [];
  //Una variable con $ indica que esta reciviendo un Observable directo
  bolidos$:Observable<string[]>;

  //Suscribe
  subscripcion:Subscription;

  constructor(private bolidoSrv:BolidosService) { }

  ngOnInit() {
    //Peticion de Bolidos
    /* this.subscripcion = this.bolidoSrv.obtenerBolidos()
      .subscribe(data => {
        this.bolidos = data;
      }); */
      this.bolidos$ = this.bolidoSrv.obtenerBolidos();
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }
}
