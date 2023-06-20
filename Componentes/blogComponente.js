app.component('publicacion-blog', {
    template:
    /*html*/
    `
       <article class="articulo">
        <p class="articulo_tiempoPublicado">{{tiempo_Publicacion}}</p>
        <img class="articulo_img" :src="imagen_Blog" alt="Imangen tokio" width="200"> <br/>
        
        <div class="aritulo_boton_likes">
          <button type="submit" class="articulo_boton" @click="meGusta()">Me gusta</button> 
          <p class="articulo_likes"><span id="numLikes" class="likes_count">200</span> likes</p>
        </div>
        
        <p class="articulo_comentario">Comentarios</p>

        <p><strong>Juan Perez</strong> ¡Wow, esa foto de tokio es impresionante! </p> <br>
        <p><strong>Kathleen J Rennie</strong> ¡Esta foto de Tokio es simplemente espectacular! Me trae tantos recuerdos.</p> <br>
        
        
        <span id="advertencia" class="articulo_advertencia">Por favor, verificar que los campos nombre de usuario y comentarios esten completos.</span>
        
        <div id="comentario"> </div>

        <input class="articulo_input" id="inputComentario" placeholder="Deja tu comentario...">
        
        <button type="submit" @click="comentar()" class="articulo_bot">Comentar</button>
      
      </article>
    </section>
    `,
    data(){
        return{
            imagen_Blog: "./Imagenes/tokio.jpeg",
            tiempo_Publicacion: "Publicado hace 1 semana",
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