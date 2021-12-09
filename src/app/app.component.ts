import { Component } from '@angular/core';
import { Logginegresos } from './services/Logginegresos.service';
import { Logginingresos } from './services/Logginingresos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuestoAPP';

  constructor(public ServicicosEgresos : Logginegresos, public ServiciosIngresos : Logginingresos){}

  totalEgresos() : number{
    let sumatoria = 0;

    this.ServicicosEgresos.egresos.forEach(egresos => {
        sumatoria+= egresos.precio;
    })

    return sumatoria;
  }

  totalIngresos(){
    let sumatoria = 0;

    this.ServiciosIngresos.ingresos.forEach(ingreso => {
      sumatoria += ingreso.precio;
    })

    return sumatoria;
  }

  totalDisponible(): number{
    return this.totalIngresos() - this.totalEgresos();
  }
}
