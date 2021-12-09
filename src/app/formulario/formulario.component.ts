import { Component, OnInit } from '@angular/core';
import { egresos } from '../models/egresos.model';
import { ingresos } from '../models/ingreso.model';
import { Logginegresos } from '../services/Logginegresos.service';
import { Logginingresos } from '../services/Logginingresos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  obtenerValor : string[];
  descripcionValue : string;
  tipo : string = "ingresoOperacion";

  descripcionInput: string;
  precioInput : number;

  constructor(private Logginegresos : Logginegresos,
              private Logginingresos : Logginingresos) { }

  ngOnInit(): void {

  }

  tipoOperacion(event : any) : void{
    this.tipo = event.target.value;
  }

  agregarValor(){
    
    if(this.tipo === "ingresoOperacion"){
        this.Logginingresos.ingresos.push(new ingresos(this.descripcionInput,this.precioInput));
    }
    else{
      this.Logginegresos.egresos.push(new egresos(this.descripcionInput,this.precioInput));
    }
  }

}
