

const store = new Vuex.Store({
    state:{
        animes:[],
        original:[]
    },
    mutations:{
        setanimes(state,animesAccion){
            state.animes = animesAccion
            state.original = animesAccion
        },
        filtrar(state,filtro){
            state.animes = state.original.filter(a=>a.nombres.reduce((existe,n)=>(existe ? true : n.includes(filtro)),false))
            console.log(state.animes)
        }
    },
    actions:{
        loadAnimes:async function({commit}){
            const data = await fetch("./niadd_1a5_u.json")
            const animes = await data.json();
            const animesCon = animes.forEach(a=>{ a.nombres = a.nombres.map(n=>n.toLowerCase()) })
            commit('setanimes',animes)
        }
    }
})

Vue.component('titulo',{
    template:`
    <div>
        <h1>{{ titulo }}</h1> 
    </div>
    `,
    data: function () {
    return {
      titulo: "Animes"
    }
  }
})

Vue.component('animes',{
    template:`
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
    computed:{
        ...Vuex.mapState(["animes"])
    },
    methods:{
        ...Vuex.mapMutations(['filtrar']),
        ...Vuex.mapActions(['loadAnimes'])
    },
    data:function () {    
        return { busqueda: "" };
    },
    created(){
        this.loadAnimes()
    }
})



new Vue({
    el:'#app',
    store:store
})