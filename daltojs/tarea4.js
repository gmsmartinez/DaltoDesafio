class Celular {
    constructor(color,peso,tamanio,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamanio = tamanio;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram; 
        this.encendido = false;

    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }

    }

    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado")
        }
    }

    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }

    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`);
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamanio: <b>${this.tamanio}</b><br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        
        `;
    }

}


celular1 = new Celular("rojo","150g","5pulgadas","hd","1GB");
celular2 = new Celular("negro","155g","5.4pulgadas","full hd","2GB");
celular3 = new Celular("blanco","156g","5.9pulgadas","full hd","2GB");

document.write(`
${celular1.mobileInfo()} <br>
${celular2.mobileInfo()} <br>
${celular3.mobileInfo()} <br>
`);


