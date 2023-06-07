//PARTE BOTON SEGUIR / DEJAR DE SEGUIR
function cambiarEstado(){

    const btnSeguir = document.getElementById("btnSeguir")

    if (btnSeguir.innerHTML === "Seguir"){
        btnSeguir.innerHTML = "Dejar de seguir"
    } else {
        btnSeguir.innerHTML = "Seguir"
    }

}

//PARTE BOTON CONTADOR DE ME GUSTA

let unMegusta = false;

function meGusta() {

    if (!unMegusta) {

        let numLikes = document.getElementById("numLikes")

        let totalLikes = parseInt(numLikes.innerHTML);
        totalLikes++;

        numLikes.innerHTML = totalLikes
        unMegusta = true;
    }
}

//PARTE DE COMENTARIOS
function comentar() {

    const inputUsuario = document.getElementById("inputUsuario").value;
    const inputComentario = document.getElementById("inputComentario").value;
    const advertencia = document.getElementById("advertencia");
    const comentarios = document.getElementById("comentario");
  
    if (inputUsuario === "" || inputComentario === "") {

      advertencia.style.display = "inline";

    } else {

      advertencia.style.display = "none";
  
      const nuevoComentario = document.createElement("p");
      const nombreUsuario = document.createTextNode(inputUsuario);
      const comentarioUsuario = document.createTextNode(inputComentario);
  
      //EL ELEMENTO P LO AGREGO AL DIV
      comentarios.appendChild(nuevoComentario);
  
      //CREO EL <STRONG> </STRONG>
      const nombreUsuarioStrong = document.createElement("strong");
      nombreUsuarioStrong.style.color = "black";

      //AGREGO EL STRONG AL P
      nuevoComentario.appendChild(nombreUsuarioStrong);

     //AGREGO EL NOMBRE DEL USUARIO AL STRONG QUE YA ESTA EN EL P
      nombreUsuarioStrong.appendChild(nombreUsuario);
  
      nuevoComentario.appendChild(document.createTextNode(" "));
      nuevoComentario.appendChild(comentarioUsuario);

      botonEliminar(nuevoComentario, comentarios);

    }
  }

function botonEliminar(nuevoComentario, comentarios) 
{
      const botonEliminar = document.createElement("button")
      const textBoton = document.createTextNode("Eliminar")
      
      botonEliminar.classList.add("eliminar");

      botonEliminar.appendChild(textBoton) //CORREGIR

      nuevoComentario.appendChild(document.createTextNode(" "));
      nuevoComentario.appendChild(botonEliminar);

      botonEliminar.addEventListener("click", () =>{
        comentarios.removeChild(nuevoComentario)
      })
}
