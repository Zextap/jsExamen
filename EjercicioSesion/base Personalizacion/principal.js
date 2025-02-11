const valorColor = document.getElementById("bgcolor");
const fuente = document.getElementById("font");
const imagen = document.getElementById("image");
const i = document.querySelector("img");
const html = document.querySelector("html");
console.log(localStorage.getItem("color"))
html.style.backgroundColor = `#${localStorage.getItem("color")}`;
valorColor.value = localStorage.getItem("color");
if(localStorage.getItem("imagen")!=null){
    i.src = localStorage.getItem("imagen");
    imagen.value = localStorage.getItem("imagen")
}

imagen.addEventListener('change',(e)=>{
    localStorage.setItem("imagen",imagen.value);
    
    console.log(imagen.value)
})

fuente.addEventListener('change',()=>{
    localStorage.setItem("fuente",fuente.value);
})

valorColor.addEventListener('change',()=>{
    localStorage.setItem("color",valorColor.value);
    console.log(valorColor.value);
})

