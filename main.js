function saludar(){
    let nombre = prompt("Ingrese su nombre");
    alert(nombre + " " + "bienvenido a ZonaGaming elija un producto de nuestro catalogo");
}


function comprarComponentes(){
    producto = prompt(
        "Elija uno de nuestros productos \n 1: Tarjeta Gráfica \n 2: Procesador \n 3: Memoria RAM"
    )
    if (producto ==="1") {
        alert("Elegiste Tarjeta Gráfica");
    }
    else if (producto ==="2") {
        alert("Elegiste Procesador");
    }
    else if (producto ==="3") {
        alert("Elegiste Memoria RAM");
    }
    opcion=prompt(
        "Elija una opción \n 2: Precio Final \n 3: Terminar "
    );
    
}



function finalizarCompra() {
    if (producto ==="1") {
        alert("El precio es de" + " " + ((tarjetaGrafica * iva) + (tarjetaGrafica)) + " " + "dólares");
    }
    if (producto ==="2") {
        alert("El precio es de" + " " + ((procesador * iva) + (procesador)) + " " + "dólares");
    }
    if (producto ==="3") {
        alert("El precio es de" + " " + ((memoriaRam * iva) + (memoriaRam)) + " " + "dólares");
    }

}




let producto;
let tarjetaGrafica = 500;
let procesador = 300;
let memoriaRam = 90;
let opcion;
let iva = 0.22

saludar();
opcion=prompt(
    "Elija una opción \n 1: Comprar Componentes \n 2: Precio Final \n 3: Terminar "
);

while (opcion !== "3") {
    if (opcion ==="1") {
        comprarComponentes();
    }
    if (opcion === "2") {
        finalizarCompra();
        opcion = "3";
    }
        
}

alert("Gracias por su compra!");