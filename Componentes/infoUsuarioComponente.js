app.component('info-blog',{
    template:
    /*html*/
    `
    <section class="seccion">
    <div class="secc_contenedor">
      <img class="secc_foto" :src="imagen_Usuario" alt="Imagen de usuario" width="200">
    </div>

    <div class="secc_info">

      <h1>Jane Doe</h1>

      <div class="secc_contenido">

        <strong>Email:</strong> {{ email }}
        <p ><time  :datetime="tipo_Fecha"><strong>Fecha de nacimiento:</strong> {{ nacimiento }}</time> </p>
        <strong>Telefono:</strong> {{ numeroDeTelefono }}
        <p><strong>Ciudad:</strong> {{ciudad}}</p>
        <p class="secc_contenido_trabajo">Trabajando en <span class="negrita">Lawn N </span></p>

      </div>
    </div>
      
      <div class="secc_boton">
        <button type="submit" class="secc_bot" id="btnSeguir" @click="cambiarEstado()">Seguir</button>
      </div>
     
  </section>
    `,
    data(){
        return{
        email: 'jane_doe@email.com',
        email_url: 'malito:jane_doe@email.com',
        tipo_Fecha: '1991-07-26',
        nacimiento: '01/05/1996',
        telefono: 'tel:918-936-9585',
        numeroDeTelefono: '918-936-9585',
        ciudad: 'Tokio, Japon',
        imagen_Usuario:"./Imagenes/imagen2.jpeg",

    }},
        methods: {

          cambiarEstado(){
      
            const btnSeguir = document.getElementById("btnSeguir")
        
            if (btnSeguir.innerHTML === "Seguir"){
                btnSeguir.innerHTML = "Dejar de seguir"
            } else {
                btnSeguir.innerHTML = "Seguir"
            }
          }
    }
})