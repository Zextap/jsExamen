let nombre = document.getElementById("nombre");
let aficiones = document.getElementById("aficiones");
let enlace = document.getElementById("enlace");
let correo = document.getElementById("correo");
let selecion = document.getElementById("sel");

class alumno {
    constructor (nombre,apellidos,foto,aficiones,paginaWeb,correo){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.foto = foto;
        this.aficiones = aficiones;
        this.paginaWeb = paginaWeb;
        this.correo = correo;
    }

    visualiza(){
        nombre.value = this.nombre + this.apellidos;
        aficiones.value = this.aficiones
    }
}

const TablaAlumnos = [
    new alumno("Pedro"," Ramirez Ramos","a","futbol","www.google.com","correo@gmail.com"),
    new alumno("Victor Manuel"," Rivas Santos","a","futbol2","www.google.com","correo@gmail.com"),
    new alumno("Gustavo"," Romero Lopez","a","futbol3","www.google.com","correo@gmail.com"),
    new alumno("Jesus"," Gonzalez Peñalver","a","futbol4","www.google.com","correo@gmail.com"),
];

selecion.addEventListener('change',()=>{
    console.log(selecion.value);
    
    switch (selecion.value) {
        case "Pedro Ramirez Ramos":
            TablaAlumnos[0].visualiza();
            break;
        case "Victor Manuel Rivas Santos":
            TablaAlumnos[1].visualiza();
            break;
        case "Gustavo Romero Lopez":
            TablaAlumnos[2].visualiza();
            break;
        case "Jesús Gonzalez Peñalver":
            TablaAlumnos[3].visualiza();
            break;
        default:
            break;
    }
})