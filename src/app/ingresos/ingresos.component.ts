import { Component, OnInit } from '@angular/core';
import { ingresos } from '../models/ingreso.model';
import { Logginingresos } from '../services/Logginingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingresos : ingresos[] = [];
  totalIngresos : number = 0;

  constructor(private LogginIngresos : Logginingresos) { }

  ngOnInit(): void {
    this.ingresos = this.LogginIngresos.ingresos;
  }
  
  EliminarRegistro(ingreso : ingresos): void{
    this.LogginIngresos.eliminar(ingreso);
  }

}
