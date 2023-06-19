const app = Vue.createApp({
  data(){

    return{
      email: 'jane_doe@email.com',
      email_url: 'malito:jane_doe@email.com',
      tipo_Fecha: '1991-07-26',
      nacimiento: '01/05/1996',
      telefono: 'tel:918-936-9585',
      numeroDeTelefono: '918-936-9585',
      ciudad: 'Tokio, Japon',
      logo_Pagina:"./Imagenes/imagen.png",
      imagen_Usuario:"./Imagenes/imagen2.jpeg",
      imagen_Blog: "./Imagenes/tokio.jpeg",
      tiempo_Publicacion: "Publicado hace 1 semana",
      titulo_Aside: "Sobre mi",
      descripcion: "¡Hola a todos! Soy Jane, y actualmente vivo en la vibrante y emocionante ciudad de Tokio, Japon. Me encanta capturar la esencia de la vida urbana atraves de mi lente, explorando el constraste entre la arquitectura moderna y las tradiciones centenarias que conviven en esta metropolis unica. Desde rascacielos deslumbrantes y calles bulliciosas hasta templos serenos y jardines tranquilos, enucneto inspiracion en cada rincon de esta increible ciudad.",
      unMegusta: false
    }
  },

  methods: {

    cambiarEstado(){

      const btnSeguir = document.getElementById("btnSeguir")
  
      if (btnSeguir.innerHTML === "Seguir"){
          btnSeguir.innerHTML = "Dejar de seguir"
      } else {
          btnSeguir.innerHTML = "Seguir"
      }
    },

    meGusta() {

      if (!this.unMegusta) {

        let numLikes = document.getElementById("numLikes")

        let totalLikes = parseInt(numLikes.innerHTML);
        totalLikes++;

        numLikes.innerHTML = totalLikes
        this.unMegusta = true;
     }
   },

   comentar() {

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

      //BOTON ELIMINAR 
      const botonEliminar = document.createElement("button"); //CREO EL BOTON
      botonEliminar.textContent = "Eliminar"; //LE UN TEXTO PARA MOSTRAR DENTRO DE EL

      botonEliminar.classList.add("eliminar"); //LE ASIGNO LA CLASE PARA LOS ESTILOS CSS

      nuevoComentario.appendChild(document.createTextNode(" ")); //ESPACIO ENTRE EL TEXTO Y EL BOTON
      nuevoComentario.appendChild(botonEliminar); //Se agrega el botón de eliminar como un hijo del elemento <p> que representa el comentario.

      botonEliminar.addEventListener("click", () => { comentarios.removeChild(nuevoComentario)}) //Se agrega un evento de clic al botón de eliminar.
      //Cuando se hace clic en el botón, se ejecuta una función anónima que elimina el comentario correspondiente al que se le dio clic.
      
      document.getElementById("inputComentario").value = ""; //SE LIMPIA EL CONTENIDO DEL INPUT
       }
  },
  }
})

