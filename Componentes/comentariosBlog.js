app.component('comentario-blog', {

    props:{
        comentarios: { 
            type: Array, 
            required: true
        }, 
        nombreUsuario: {
            type: String,
            required: true,
          },
    },

    template:
    /*html*/
    `   <form class="review-form" @submit.prevent="comentar">
        <div v-for="(comentario, indice) in comentarios" :key="indice"><strong>{{ comentario.nuevosUsuarios }}</strong>: {{ comentario.nuevosComentarios }}</div>

        <input class="articulo_input" id="inputComentario" placeholder="Deja tu comentario..." v-model="nuevoComentario">
        
        <button type="submit" class="articulo_bot">Comentar</button>
        </form>
    `
,
data(){
    return{
    nuevoComentario:"",
    }
},
methods: {
    comentar() {
      const advertencia = document.getElementById("advertencia");
  
      if (this.nombreUsuario === "" || this.nuevoComentario === "") {
        advertencia.style.display = "inline";
      } else {
        advertencia.style.display = "none";
  
        let datosComentario = {
          nuevosUsuarios: this.nombreUsuario,
          nuevosComentarios: this.nuevoComentario,
        };
  
        this.$emit('agregar-comentarios', datosComentario);

        this.nuevoComentario= " ";
      }
    }
  }
})