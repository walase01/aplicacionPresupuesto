import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabezeroComponent } from './cabezero/cabezero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';

import { Logginingresos } from './services/Logginingresos.service';
import { FormsModule } from '@angular/forms';
import { Logginegresos } from './services/Logginegresos.service';

@NgModule({
  declarations: [
    AppComponent,
    CabezeroComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [Logginingresos,Logginegresos],
  bootstrap: [AppComponent]
})
export class AppModule { }
