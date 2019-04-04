import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule}  from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PilotoComponent } from './piloto/piloto.component';
import { ListaPilotosComponent } from './lista-pilotos/lista-pilotos.component';
import { AltaPilotoComponent } from './alta-piloto/alta-piloto.component';
import { ListaBolidosComponent } from './lista-bolidos/lista-bolidos.component';
import { LoginComponent } from './login/login.component';
import { ReversexPipe } from './pipes/reversex.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PilotoComponent,
    ListaPilotosComponent,
    AltaPilotoComponent,
    ListaBolidosComponent,
    LoginComponent,
    ReversexPipe    
    ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
