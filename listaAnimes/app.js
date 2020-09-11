(async function (l) {

  const {store} = await import("./store.js");  

  Vue.component("titulo", {
    template: `
    <div>
        <h1>{{ titulo }}</h1> 
    </div>
    `,
    data: function () {
      return {
        titulo: "Animes",
      };
    },
  });

  Vue.component("animes", {
    template: `
    <div>
        <input type="text" v-model="busqueda" @keyup.enter="filtrar(busqueda)">
        <ul v-for="anime of animes">
            <li v-for="nombre of anime.nombres">
                {{nombre}}
            </li>
            <br/>
        </ul>
    </div>
       `,
    computed: {
      ...Vuex.mapState(["animes"]),
    },
    methods: {
      ...Vuex.mapMutations(["filtrar"]),
      ...Vuex.mapActions(["loadAnimes"]),
    },
    data: function () {
      return { busqueda: "" };
    },
    created() {
      this.loadAnimes();
    },
  });

  new Vue({
    el: "#app",
    store: store,
  });
  
})(console.log);
