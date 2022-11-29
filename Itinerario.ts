
export class Itinerario{

    private CodItinerario:string = "";
    private Duracion:string = "";
    private id:number = 0;
    private Longitud:string = "";
    private numEspecies:string = "";
    private itinerarios:any []=[];

    constructor(CodItinerario:string,Duracion:string, Longitud:string,numEspecies:string){
        this.CodItinerario = CodItinerario;
        this.Duracion =Duracion;
        this.Longitud= Longitud;
        this.numEspecies=numEspecies;
    }
    public set_CodItinerario(CodItinerario:string){
        this.CodItinerario=CodItinerario;
    }
    public get_CodItinerario(){
        return this.CodItinerario;
    }
    public set_Duracion(Duracion:string){
        this.Duracion=Duracion;
    }
    public get_Duracion(){
        return this.Duracion;
    }
    public set_Longitud(Longitud:string){
        this.Longitud=Longitud;
    }
    public get_Longitud(){
        return this.Longitud;
    }
    public set_numEspecies(numEspecies:string){
        this.numEspecies=numEspecies;
    }
    public get_numEspecies(){
        return this.numEspecies;
    }
    public listaItinerario(){
        console.log(this.itinerarios);
    }
    public agregarItinerario(CodItinerario:string,Duracion:string,Longitud:string,numEspecies:string){
        this.id++;
        let Itinerarioo = {
            Itinerarioo:this.id,
            codItinerario: CodItinerario,
            duracion:Duracion,
            longitud:Longitud,
            numeroespecies:numEspecies,

        };
        this.itinerarios.push(Itinerarioo);
    }


    public buscarItinerario(nReg:number){
        for (var reg of this.itinerarios){
            if (reg ['Itinerarioo']== nReg){
             console.log("Itinerario:" + reg['Itinerarioo'] + "\n" + "codItinerario: " + reg['codItinerario']
             + "\n" + "duracion: " + reg['duracion'] + "\n" + "longitud: " + reg['longitud'] + "\n" 
             + "numEspecies: " + reg['numeroespecies']);
            }
        }
    }

}
