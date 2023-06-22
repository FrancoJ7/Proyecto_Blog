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
  
       <comentario-blog :comentarios="comentarios" :nombre-usuario="nombreUsuario"  @agregar-comentarios="agregarComentarios"></comentario-blog>
  
       <span id="advertencia" class="articulo_advertencia">Por favor, verificar que los campos nombre de usuario y comentarios esten completos.</span>
      </article>

    `,
    data(){
        return{
            imagen_Blog: "./Imagenes/tokio.jpeg",
            tiempo_Publicacion: "Publicado hace 1 semana",
            unMegusta: false,
            comentarios:[]
        }
    },
    props:{
      nombreUsuario:{
        type: String,
        required: true
      }
    }, 
    methods: {
  
      meGusta() {
  
        if (!this.unMegusta) {
  
          let numLikes = document.getElementById("numLikes")
  
          let totalLikes = parseInt(numLikes.innerHTML);
          totalLikes++;
  
          numLikes.innerHTML = totalLikes
          this.unMegusta = true;
       }
     },
     agregarComentarios(datosComentario){ //ESE REVIEW ES EL OBJETO QUE RECIBIMOS DE this.$emit('review-submitted', productoReview)
      this.comentarios.push(datosComentario)                    //Y POR ULTIMO VA A CREAR UN COMPONENTE PARA MOSTRAR EL RESULTADO DE COMENTARIOS

    },
    }

})