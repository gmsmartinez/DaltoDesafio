let nombre = prompt("decime tu nombre");

alert("hola " + nombre)

let numero = 10;
numero += 5

frase = `<div>
<h1>nueva forma</h1>
<h2>no lo sabia</h2>
</div>`;

document.write(numero, frase);

num1 = 12;
num2 = 15;

let afirmacion1 = num1 > num2;
let afirmacion2 = num1 != num2;

document.write(afirmacion1 || afirmacion2);  



//ARRAYS:

let frutas = ["banana", "manzana", "pera"];

document.write(frutas[0]) 


//ARRAYS ASOCIATIVOS:

let pc1 = {
    nombre: "daltoPC",
    procesador: "intel core i7",
    ram: "16GB",
    espacio: "1TB"

};

let pc2 = ["daltoPC", "Intel core i7", "16GB"];

document.write(pc1["ram"])

//SENTENCIA FOR IN (DEVUELVE EL INDICE)
// Y SENTENCIA FOR OF (DEVUEVE VALOR)
//SENTENCIA LABEL

let animales = ["gato", "perro", "dinosaurio"];
animales.edad = 20;

for (animal in animales){
    document.write(animal + "<br>");

}

document.write("<br>");

for (animal of animales){
    document.write(animal + "<br>");
}
document.write(animales.edad + "<br>");

//SENTENCIA LABEL:

array1 = ["maria", "joseja", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

forRancio:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1){
            if (array == "maria") {
                continue forRancio;
            }

            document.write(array + "<br>");
        }

    } else {
        document.write(array2[array] + "<br>");
    }
}


//FUNCIONES. PRIMERO, LA DECLARAS, DESPUES LA EJECUTAS


function suma(num1, num2) {
    let res = num1 + num2;
    document.write(res);
    document.write("<br>")
}

suma(12, 32)
suma(22, 55)



//function saludar(nombre) {
//    let frase = `hola ${nombre} como estas?`;
//    document.write(frase)
//}

//saludar("pedro")

//OTRA FORMA DE HACERLO:
// const saludar = function(nombre){
    //let frase = `hola ${nombre} como estas?;
    //document.write(frase)
//}

//saludar("pedro")



//FUNCIONES FLECHITA (OTRA FORMA DE HACER LA MISMA FUNCION DE ARRIBA)

const saludar = (nombre)=>{
    let frase = `hola ${nombre} como estas?`;
    document.write(frase) 
}

saludar("paulino")

//OTRA FORMA:
// cons saludar = (nombre)=> {
//    document.write("hola, todo bien" + nombre)
//}

//saludar("peedro")