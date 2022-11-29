import { Usuario } from "./Usuario"
import { Especie } from './Especie';
import { Itinerario } from './Itinerario';



let usuario = new Usuario("IRENE","6556","PEMEX");
usuario.agregarUsuario("Natalia","4668","Guillermo Prieto",2);
usuario.agregarUsuario("Sofia","56775","Callejon del metro",3);

//console.log(usuario.listaUsuarios());
//console.log(usuario.buscarUsuario(2));


let itinerario= new Itinerario("76","90 horas","3 metros","5");
itinerario.agregarItinerario("76","5 horas","1 metros","7");
itinerario.agregarItinerario("43","4 horas","3 metros","7");

//console.log(itinerario.listaItinerario());
//console.log(itinerario.buscarItinerario(1));


let especie = new Especie("3","Mamiferos","Mammalia","Poseen glandulas mamarias productoras de leche para sus crias");
especie.agregarEspecie("4","Gato","Felis Catus","No tienen sentido al sabor dulce, sus papilas gustativas carecen de lo mismo");
especie.agregarEspecie("5","Jirafa","Giraffa camelopardalis","Este rumiante africano es el animal mas alto conocido");

//console.log(especie.listaEspecie());
//console.log(especie.buscarEspecie(2));










    
    
    
    







    
    

