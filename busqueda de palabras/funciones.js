document.addEventListener("DOMContentLoaded",()=>{

    let palabra = document.getElementById("palabra");
    palabra.addEventListener("keyup",()=>{
        llamarServidor(palabra.value);
    })

    const llamarServidor = (input) =>{
        
        const xhhtp = new XMLHttpRequest();
        xhhtp.onload = function (){
            if(xhhtp.status == 200){

                //?----USO DE TEXTO PLANO Y JSON-----
                /* let respuestaServidor = this.responseText; */
                /* let basePalabras = respuestaServidor.split(" "); */ //crea un array con la respues del servidor //!(opcion para texto plano)
                /* let basePalabras = JSON.parse(respuestaServidor); */ //!opcion para JSON

                //?----USO DE XML------
                let respuestaServidor = this.responseXML;
                let xmlNodos = respuestaServidor.getElementsByTagName('palabra')
                let basePalabras = [];
                for(let a = 0; a<xmlNodos.length; a++){
                    basePalabras.push(xmlNodos[a].textContent);
                }

                //*--------CREAR NODO CON LAS PALABRAS FILTRADAS-------
                let palabrasFiltradas = nombresSimilares(input,basePalabras);
                if(input == ""){ //si no hay palabra no muestra nada
                    crearObjeto("")
                }else{
                    crearObjeto(palabrasFiltradas); //creamos un elemto con las palabras filtradas
                }
            }
        }
        xhhtp.open('POST','pagina.php',true);
        xhhtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhhtp.send("palabra=2");
    }

    const crearObjeto = (array) =>{
        let almacenarPalabras = document.getElementById("palabras"); 

        if(!almacenarPalabras){ //si no existe un elemento con el id palabras se crea uno
            let cajaPalabras = document.createElement("div");
            for (let a = 0; a<array.length;a++ ){
                let  span = document.createElement("span");
                span.textContent = array[a];
                cajaPalabras.appendChild(span);
            }
            cajaPalabras.style.width = "100px";
            cajaPalabras.style.height = "auto";
            cajaPalabras.style.backgroundColor = "red";
            cajaPalabras.style.display = "flex";
            cajaPalabras.style.flexDirection = "column"
            cajaPalabras.id = "palabras";
            document.body.appendChild(cajaPalabras);
        }else{
            almacenarPalabras.textContent = " ";
            for (let a = 0; a<array.length;a++ ){
                let  span = document.createElement("span");
                span.textContent = array[a];
                almacenarPalabras.appendChild(span);
            }
        }
        console.log(palabra.value);
    }

    const nombresSimilares = (comprobar,array) => { //funcion para filtrar las palabras
        const valores = array.filter(valor => valor.startsWith(comprobar));
        return valores;
    }
})