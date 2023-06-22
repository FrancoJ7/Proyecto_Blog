const app = Vue.createApp({
  data(){

    return{
      nombreUsuario: ""
    }
  },
  methods: {
    actualizarNombre(nombreUsuario){
        this.nombreUsuario= nombreUsuario
    },
    
  }
})

