import { Component, OnInit } from '@angular/core';
import { egresos } from '../models/egresos.model';
import { Logginegresos } from '../services/Logginegresos.service';
import { Logginingresos } from '../services/Logginingresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  public egresos : egresos[] = [];

  constructor(public Logginegresos : Logginegresos,
              public Logginingresos : Logginingresos) { }

  ngOnInit(): void {
    this.egresos = this.Logginegresos.egresos;
  }
  
  eliminarEgreso(egreso : egresos) : void {
    this.Logginegresos.eliminar(egreso);
  }
  
  porcentajeegreso(egreso : egresos){
    return egreso.precio / this.Logginingresos.tatalingresos();
  }

}
