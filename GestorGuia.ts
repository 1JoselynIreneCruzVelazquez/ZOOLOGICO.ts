import { Itinerario } from './Itinerario';
export class GestorGuia{

    private altaItinerario:string = "";
    public Empleado:string = "";
    private Itinerario:string = "";


    constructor(Itinerario:string,Empleado:string,altaItinerario:string){
        this.Empleado = Empleado;
        this.altaItinerario = altaItinerario;
        this.Itinerario = Itinerario;
    }
    public get_Itinerario():string {
        return this.Itinerario;
    }
    public get_altaItinerario():string{
        return this.altaItinerario;
    }

}