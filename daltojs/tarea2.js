let free = false;

const validarCliente = (time)=>{
    let edad = prompt("cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free ==false) {
            alert("podes pasar gratis porque sos la primer persona desdepues de las 2 am");
            free = true;
        } else {
            alert(`son las ${time}:00hs y podes pasar, pero tenes que pagar entrada`);
        }
    } else {
        alert("mira pendejo, sos menor de edad, por ende, no podes pasar");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);