alert("Bienvenidos");
console.log("Hola");

document.querySelector("H1").innerHTML = "Cambiamos el titulo";

document.querySelector("#boton").onclick = function(){

    document.body.style.backgroundColor = "lightblue";

}

let nombre = "Curso de programacion web"; 
let descripcion = "Aprendemos HTML, CSS y javascript";
let precio = 8900;

document.getElementById("nombreProducto").innerHTML = nombre;
document.getElementById("descripcionProducto").innerHTML = descripcion;
document.getElementById("precioProducto").innerHTML = "Precio: $" + precio;


let tituloCurso = "Curso de javascript";
let descripcionCurso = "Aprende js desde cero";
let precioCurso = 89898;
let estadoCurso = "Disponible";

document.getElementById("tituloCurso").innerHTML = tituloCurso;
document.getElementById("descripcionCurso").innerHTML = descripcionCurso;
document.getElementById("precioCurso").innerHTML = "Precio: $" + precioCurso;
document.getElementById("estadoCurso").innerHTML = "Estado: " + estadoCurso;
