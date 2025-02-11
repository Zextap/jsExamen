const valorNumerico = document.getElementById("cantidad");
const botonSumar = document.getElementById("sumar");
const botonBorrar = document.getElementById("borrar");
const resultado = document.getElementById("resultado");

botonSumar.addEventListener('click',()=>{
    let numero1 = valorNumerico.value;
    let numero2 = localStorage.getItem("suma");
    let resultadoSuma = sumar(numero1,numero2);
    localStorage.setItem("suma",resultadoSuma);
    resultado.textContent = localStorage.getItem("suma") 
})
botonBorrar.addEventListener('click',()=>{
    localStorage.clear();
    resultado.textContent = localStorage.getItem("suma");
})
resultado.textContent = localStorage.getItem("suma");

const sumar = (numero1,numero2) =>{
    if(numero2 == null){
        numero2 = 0;
    }
    let resultadoFinal = Number(numero1)+Number(numero2);
    return resultadoFinal;
}
