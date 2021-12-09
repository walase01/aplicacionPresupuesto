import { Component, Input, OnInit } from '@angular/core';
import { Logginegresos } from '../services/Logginegresos.service';
import { Logginingresos } from '../services/Logginingresos.service';

@Component({
  selector: 'app-cabezero',
  templateUrl: './cabezero.component.html',
  styleUrls: ['./cabezero.component.css']
})
export class CabezeroComponent implements OnInit {

  @Input() totalEgresos : number ;
  @Input() totalIngresos : number ; 
  @Input() totalDisponible : number; 
  porcentaje : number;

  constructor(private LogginIngresos : Logginingresos,
              private LogginEgresos : Logginegresos) { }

  ngOnInit(): void {
    //this.totalEgresos = this.LogginEgresos.totalegresos();
    //this.totalIngresos = this.LogginIngresos.tatalingresos();
    //this.totalDisponible = this.totalIngresos - this.totalEgresos; 
  }

  getPorcentajeTotal() : number{
    return this.totalEgresos / this.totalIngresos;
  }

}
