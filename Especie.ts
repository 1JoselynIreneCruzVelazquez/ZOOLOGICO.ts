export class Especie{
    private codEspecie:string ="";
    private Nombre:string = "";
    private NombreCientifico:string = "";
    private Descripcion:string = "";
    private id:number = 0;
    private especies:any [] = [];

    constructor(codEspecie:string, Nombre:string, NombreCientifico:string, Description:string)
    {
        this.codEspecie = codEspecie;
        this.Nombre = Nombre;
        this.NombreCientifico = NombreCientifico;
        this.Descripcion = Description;
    }
    public set_codEspecie(codEspecie:string){
        this.codEspecie = codEspecie;
    }
    public get_codEspecie():string{
        return this.codEspecie;
    }
    public set_Nombre(Nombre:string){
        this.Nombre=Nombre;
    }
    public get_Nombre():string{
        return this.Nombre;
    }
    public set_NombreCientifico(NombreCientifico:string){
        this.NombreCientifico=NombreCientifico;
    }
    public get_NombreCientifico():string{
        return this.NombreCientifico;
    }
    public set_Descripcion(Descripcion:string){
        this.Descripcion=Descripcion;
    }
    public get_Descripcion():string{
        return this.Descripcion;
    }
    public listaEspecie(){
        console.log(this.especies);
    }
    public agregarEspecie(codEspecie:string, Nombre:string, NombreCientifico:string, Descripcion:string){
        this.id++;
        let Especiess ={
            Especiess:this.id,
            codEspecie: codEspecie,
            nombre: Nombre,
            NombreCientifico: NombreCientifico,
            descripcion:Descripcion
        };
        this.especies.push(Especiess);
    }
    
    public buscarEspecie(nReg:number){
        for(var reg of this.especies){
            if (reg['Especiess']==nReg){
                console.log("Especiess:" + reg['Especiess'] +
                "\n" + "codEspecie" + reg['codEspecie'] + "\n" +
                "nombre: " + reg['nombre'] + "\n" + "nombreCientifico: " + reg['nombrecientifico'] +
                "\n" + "descripcion: " + reg['descripcion']);
            }
        }
    
   
        
    }



 

}