import { ingresos } from "../models/ingreso.model";

export class Logginingresos{
    ingresos : ingresos[] = [
        new ingresos("motor",100),
        new ingresos("venta de cama",500)
    ]

    tatalingresos() : number{

        let sumatoria = 0;
        for(let ingreso of this.ingresos){
            sumatoria = sumatoria + ingreso.precio;
        }

        return sumatoria;
    }
    
    eliminar(ingreso : ingresos){
        const indice : number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }

}