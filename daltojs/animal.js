//PROGRAMACION ORIENTADA A OBJETOS. POO 
class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} anios y soy de color ${this.color}.`;
    }
    //Y AHORA CREAMOS UN METODO EN LA CLASE:
    verInfo = ()=>{
        document.write(this.info + "<br>")
    }
}


const perro = new animal("perro",5,"marron");
const gato = new animal("gato",2,"negro");
const pajaro = new animal("pajaro",1,"verde");


//document.write(perro.info + "<br>")
//document.write(gato.info + "<br>") 
//document.write(pajaro.info + "<br>")  

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

//METODOS GETTER Y SETTER.
//LOS GETTER SON PARA OBTENER UN VALOR
//LOS SETTER SON PARA MODIFICARLOS O DEFINIRLO
