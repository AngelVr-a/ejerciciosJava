/*Ejercicios del 1 al 4 */
let numero1 = 10;
let numero2 = 50;
let numero3 = 5;
let masChico ;

console.log("Numero 1: ", numero1, " Numero 2: ", numero2);

if(numero1 == numero2){
    console.log("Los numeros son iguales");
}
else{
    if(numero1 > numero2)
        {
            console.log("El primer numero es mas grande");
        }
    else{
        console.log("El segundo numero es mas grande")
    }
    
}

masChico = numero1;

if(numero2 < masChico){
    masChico = numero2
}else{
    if(numero3 < masChico){
        masChico = numero3
    }
}

console.log("El numero más pequeño es: ", masChico);
/*Fin ejercicios del 1 al 4 */ 

/*Ejercicio 5*/

let persona1 = {
    nombre : "Juan",
    edad: 20,
    altura: 160
}

let persona2 = {
    nombre : "Roberto",
    edad: 50,
    altura: 150
}

if(persona1.edad > persona2.edad){
    console.log(persona1.nombre, ", tiene mayor edad con: ",persona1.edad, "años")
}
else{
    console.log(persona2.nombre, ", tiene mayor edad con: ",persona2.edad, "años")
}

if(persona1.altura > persona2.altura){
    console.log(persona1.nombre, ", tiene mayor altura con: ",persona1.altura)
}
else{
    console.log(persona2.nombre, ", tiene mayor altura con: ",persona2.altura)
}
/*Fin del Ejercicio 5*/


/*Ejercicio 6*/
/*let nombre = prompt("Dame tu nombre: ");
let edad = prompt("Dame tu edad: ");
let altura = prompt("Dame tu altura: ");
let vision = prompt("Que tipo de visión tienes 0 - 10: ");

if(edad >= 18 && altura > 150 && vision >= 8){
      alert("Usted puede conducir");
}
else{
    alert("Usted no puede conducir");
}*/

/*Fin del Ejercicio 6*/

/*Ejercicio 7*/
/*let nombre = prompt("Dame tu nombre");
let pase = prompt("Que pase tienes VIP o NORMAL");
let entrada = prompt("Tienes entrada S/N : ");
let usar
let comprar

if(nombre == "angel" || pase == "VIP"){
    alert("Bienvenido c:")
}
else{
    if(entrada == "S" || entrada == "s"){
        usar = prompt("Desea usar su entrada s/n: ")
        if(usar == "S" || usar == "s"){
            alert("Bienvenido c:")
        }
        else{
            alert("Adios vuelva pronto c:")
        }
    }
    else{
            comprar = prompt("Desea comprar una entrada s/n: ")
        if(comprar == "S" || comprar == "s"){
            let dineroDisponible = prompt("De cuanto dinero dispone: ")
            if(dineroDisponible >= 1000){
                alert("Entrada Vendida")
                alert("Bienvenido c:")
            }
            else{
                alert("Venta rechazada")
                alert("Adios vuelva pronto c:")
            }
        }
        else{
            alert("Adios vuelva pronto c:")
        }
    }
}
*/
/*FIn del Ejercicio 7*/


/*Ejercicio 8*/
/*
let numeroIncognita = 6
let cont = 3

do{
    numeroIngresado = prompt("Adivina el numero: ")

    if(numeroIngresado == numeroIncognita){
        alert("Ganaste, haz adivinado el numero")
        cont = 0
    }
    else{
        if(numeroIngresado > numeroIncognita){
            alert("El numero ingresado es mayor, vuelve a intertar")
        }
        else{
            alert("El numero ingresado es menor, vuelve a intentar")
        }
        cont --
        alert("Te quedan: " + cont + " Intentos")
    }
    


}while(cont >= 1)*/

/*Fin del Ejercicio 8*/


/*Ejercicio 9*/
/*
let edad = prompt("Dame tu edad: ")

if(edad >= 0 && edad <= 12){
    alert("Eres un infante")
}
else{
    if(edad >=13 && edad <= 18){
        alert("Eres un adolecente")
    }
    else{
        if(edad >=19 && edad <= 45){
            alert("Eres un mayor joven")
        }
        else{
            if(edad >= 46 && edad <100){
                alert("Eres un anciano")
            }
            else{
                if(edad >= 100){
                    alert("Talvez a colocado mal su edad")
                }
            }
        }
    }
}*/

/*FIn del Ejercicio 9*/

/*Ejercicio 10*/
/*
alert("PIEDRA, PAPEL O TIJERA")

let jugador1 = prompt("Eligue tu tirada")
let jugador2 = prompt("Eligue tu tirada")

switch (jugador1){

    case "PIEDRA" :
        if(jugador2 == jugador1){
            alert("A habido un empate")
        }
        else{
            if(jugador2 == "PAPEL")
                {
                    alert("A ganado el jugador 2")
                }
            else{
                if(jugador2 == "TIJERA"){
                    alert("A ganado el jugador 1")
                }
                else{
                    alert("Se a detectado una trampa jugador 2")
                }
            }
        }
        break

    case "PAPEL":
        if(jugador2 == jugador1){
            alert("A habido un empate")
        }
        else{
            if(jugador2 == "TIJERA")
                {
                    alert("A ganado el jugador 2")
                }
            else{
                if(jugador2 == "PIEDRA"){
                    alert("A ganado el jugador 1")
                }
                else{
                    alert("Se a detectado una trampa jugador 2")
                }
            }
        }
        break

    case "TIJERA":
        if(jugador2 == jugador1){
            alert("A habido un empate")
        }
        else{
            if(jugador2 == "PIEDRA")
                {
                    alert("A ganado el jugador 2")
                }
            else{
                if(jugador2 == "PAPEL"){
                    alert("A ganado el jugador 1")
                }
                else{
                    alert("Se a detectado una trampa jugador 2")
                }
            }
        }
        break

    default:
        alert("Se a detectado una trampa jugador 1")
        break

}
*/
/*Fin del Ejercicio 10*/


/*Ejercicio 11*/
/*
let color = prompt("Ingresa un color: ")

switch (color.toUpperCase()){
    case "BLANCO":
        alert("Falta de color")
        break

    case "NEGRO":
        alert("Falta de color")
        break

    case "VERDE":
        alert("El color de la naturaleza")
        break

    case "AZUL":
        alert("El color del agua")
        break

    case "AMARILLO":
        alert("El color del sol")
        break

    case "ROJO":
        alert("El color del fuego")
        break

    case "MARRON":
        alert("El color de la tierra")
        break

    default:
        alert("Excelente eleccion, no la habiamos pensado")
        break

}
*/
/*Fin del Ejercicio 11*/


/*Ejercicio 12*/
/*
let num1 = parseInt(prompt("Dame un numero:"))
let num2 = parseInt(prompt("Dame un numero:"))

let operacion = prompt("Dime que operacion realizar 1.-suma 2.-resta 3.-producto 4.-division: ")

switch(operacion){
    case "1":
        alert("El resultado de la suma de: " + num1 + " + " + num2 + " = " + (num1+num2))
        break
    case "2":
        alert("El resultado de la suma de: " + num1 + " - " + num2 + " = " + (num1-num2))
        break
    case "3":
        alert("El resultado de la suma de: " + num1 + " * " + num2 + " = " + (num1*num2))
        break
    case "4":
        if(num2 === 0){
            console.error("Error");
        }
        else{
            alert("El resultado de la suma de: " + num1 + " / " + num2 + " = " + (num1/num2))
        }
        break
    default:
        alert("Porfavor ingrese una opción valida")
        break
}
*/
/*Fin del Ejercicio 12*/

/*Ejercicio 13*/
/*
let nombre = prompt("Nombre: ")
let apellidoP = prompt("Apellido Paterno: ")
let apellidoM = prompt("Apellido Materno: ")
let nombreCompleto = nombre + " " + apellidoP + " " + apellidoM
let edad = prompt("Edad: ")
let curp = prompt("Curp: ")
let sexo = prompt("Sexo M/F: ")

alert("Nombre: " + nombreCompleto + "\n" 
    + "Edad: " + edad + "\n"
    + "Curp: " + curp + "\n"
    + "Sexo: " + sexo
)

let res = prompt("Los datos son correctos s/n")

if(res == "s" || res == "S"){   
    let dni ={
        nombre: nombreCompleto,
        edad: edad,
        curp: curp,
        sexo: sexo
    }

    console.table(dni)
    alert("Registro exitoso")
}
else{
    alert("Vuelva a intentarlo en 1 mes")
}
*/
/*Fin del Ejercicio 13*/















