import { egresos } from "../models/egresos.model";

export class Logginegresos{

    egresos : egresos[] = [
        new egresos("compra de arroz",200),
        new egresos("compra de carro",300)
    ]

    totalegresos():number{
        let suma = 0;
        for(let ingresostotales of this.egresos){
            suma = suma + ingresostotales.precio;
        }
        return suma;
    }

    eliminar(egreso : egresos){
        let index : number = this.egresos.indexOf(egreso);
        this.egresos.splice(index,1);
    }

    Agregaregreso(descripcion : string, precio : number): void{
        this.egresos.push(new egresos(descripcion,precio));
    }

}

