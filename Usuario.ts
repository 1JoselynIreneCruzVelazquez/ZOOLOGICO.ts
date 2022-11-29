
export class Usuario{


private CodEmpleado:number = 0;
private id:number = 0;
private Nombre:string = "";
private Telefono:string = "";
private Direccion:string = "";
private usuarios:any [] =[];



constructor( Nombre:string, Telefono:string, direccion:string){
    
    this.Nombre = Nombre;
    this.Telefono  = Telefono;
    this.Direccion  = direccion;
}

public set_CodEmpleado(CodEmpleado:number){
    this.CodEmpleado =CodEmpleado;
}
public get_CodEmpleado():number{
    return  this.CodEmpleado;
}
public set_Nombre(Nombre:string){
    this.Nombre = Nombre;
}
public get_Nombre():string{
    return this.Nombre;
}
public set_Telefono(Telefono:string){
    this.Telefono   = Telefono;
}
public get_Telefono():string{
    return this.Telefono;
}
public set_Direccion(Direccion:string){
    this.Direccion = Direccion;
}
public get_Direccion():string{
    return this.Direccion;
}
public listaUsuarios(){
    console.log(this.usuarios);
}
public agregarUsuario(Nombre:string, Telefono:string, Direccion:string,CodEmpleado:number){
    this.id++;
    let Usuarioo = {
        Usuarioo:this.id,
        nombre: Nombre,
        telefono:Telefono,
        direccion:Direccion,
        codEmpleado:CodEmpleado


    };
    this.usuarios.push(Usuarioo);
}

public buscarUsuario(nReg:Number)
{  for(var reg of this.usuarios){
    if(reg['Usuarioo'] == nReg){
        console.log("Usuarioo: " + reg['Usuarioo'] + "\n" + "nombre: " +reg['nombre'] + "\n" + 
        "telefono: " +reg[ 'telefono'] +   "\n" + "direccion: " +reg['direccion'] +
          "\n" + " codEmpleado: " +reg['codEmpleado'] );
        
        
}
}
}
  

}
