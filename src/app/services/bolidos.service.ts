import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class BolidosService {

  bolidos:Array<string> = ['a1-2018-MAX','a2-2018-MAX','A3-2018-max','A4-2018-MAX','A5-2018-MAX'];

  constructor() { 

  }

  obtenerBolidos(): Observable<string[]> {
    return of([...this.bolidos]);
  }

}
