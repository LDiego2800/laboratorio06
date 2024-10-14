const preguntaNombre = prompt("¿Cual es tu nombre?");
let preguntaGustos = prompt("¿Te gusta la programación?");
const colorFondo = prompt("Elige de que color quieres que se muestre esta pagina");
const preguntaEdad = prompt("¿Cual es tu edad?");

alert(preguntaNombre)
alert(preguntaGustos)
alert(colorFondo)


function calcularSiEsMayorDeEdad() {
    if (parseInt(preguntaEdad) >= 18) {
        alert("La persona es MAYOR de edad");
    } else {
        alert("La persona es MENOR de edad");
    }
}

calcularSiEsMayorDeEdad(); 




const preguntaCorreo = prompt("Si quieres recibir más infomación indicanos tu correo");