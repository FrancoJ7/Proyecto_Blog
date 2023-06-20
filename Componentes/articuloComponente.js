app.component('articulo-blog',{
    template:
    /*html*/
    ` <aside class="aside">
        <h2 class="aside_titulo">{{titulo_Aside}}</h2>
        <p class="aside_contenido">{{descripcion}}</p>
      </aside>
    `,
    data(){
        return{
            titulo_Aside: "Sobre mi",
            descripcion: "¡Hola a todos! Soy Jane, y actualmente vivo en la vibrante y emocionante ciudad de Tokio, Japon. Me encanta capturar la esencia de la vida urbana atraves de mi lente, explorando el constraste entre la arquitectura moderna y las tradiciones centenarias que conviven en esta metropolis unica. Desde rascacielos deslumbrantes y calles bulliciosas hasta templos serenos y jardines tranquilos, enucneto inspiracion en cada rincon de esta increible ciudad.",
        }
    }
})