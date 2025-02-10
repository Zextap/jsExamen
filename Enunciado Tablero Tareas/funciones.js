let cajaTexto = document.getElementById("tareaAnadir");
let botonAnadir = document.getElementById("boton");
let tareaSinHcer = document.querySelector(".sinhacer .tasks")
let id = 0;

//?-------------FUNCION PARA CREAR ELEMENTOS-------------------
const crearElemento = (texto) => {
    const tarea = document.createElement('div');
    const nombreTarea = document.createElement('p');
    const cerrarTarea = document.createElement('p');
    nombreTarea.textContent = texto;
    cerrarTarea.textContent = "X";
    cerrarTarea.classList = "close";
    tarea.id = `tarea-${id++}`
    tarea.appendChild(nombreTarea);
    tarea.appendChild(cerrarTarea);
    tarea.classList = "tarea"
    tarea.draggable = true; //añadimos para que sea arrastrable

    //!-----------BORRAR TAREA-------------
    cerrarTarea.addEventListener('click', () => {
        tarea.remove();
    })

    //!------------INICIAR ARRASTRE DEL ELEMTO----------
    tarea.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);//almacenamos el tipo de informacion que vamos a arrastrar
    });
    return tarea;
}

//?--------------EVENTO PARA CREAR ELEMENTOS----------------
botonAnadir.addEventListener('click', () => {
    let elemento = crearElemento(cajaTexto.value)
    tareaSinHcer.appendChild(elemento);
})


let tarea = document.querySelector(".tarea")
tarea.draggable = true;
tarea.id = "tarea"

//?---------------EVENTO PARA CERRAR LAS TAREAS--------------------------
let cerrar = document.querySelector(".close");
cerrar.addEventListener('click', () => {
    tarea.remove();
})

//?---------------EVENTOS PARA PODER SOLTAR EL ELMENTO-----------------------
let cajaTareas = document.querySelectorAll(".tasks");
cajaTareas.forEach(cajaTareas => {

    cajaTareas.addEventListener('dragstart', (e) => {
        elemento = e.target;
        e.dataTransfer.setData('text/plain', e.target.id);
    })

    cajaTareas.addEventListener('dragover', (e) => {
        e.preventDefault();
    })

    cajaTareas.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        e.currentTarget.appendChild(document.getElementById(`${data}`))
        elemento = null;
    })
})