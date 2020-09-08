

const store = new Vuex.Store({
    state:{
        numero:10,
        cursos:[]
    },
    mutations:{
        aumentar(state){
            state.numero++
        },
        disminuir(state){
            state.numero--
        },
        llenarCursos(state,cursosAccion){
            state.cursos = cursosAccion
        }
    },
    actions:{
        obtenerCursos:async function({commit}){
            const data = await fetch("./cursos.json")
            const cursos = await data.json();
            commit('llenarCursos',cursos)
        }
    }
})

Vue.component('titulo',{
    template:`
    <div>
        <h1>Numero {{ numero }}</h1> 
        <hijo></hijo>
    </div>
    `,
    computed:{
        ...Vuex.mapState(["numero"])
    }
})

Vue.component('hijo',{
    template:`
    <div>
        <button @click="aumentar">+</button>
        <button @click="disminuir">-</button>
        <button @click="obtenerCursos">Octener cursos</button>
        <h1>Numero {{ numero }}</h1>
        <ul>
            <li v-for="item of cursos">
                {{item.nombre}}
            </li>
        </ul>
    </div>
       `,
    computed:{
        ...Vuex.mapState(["numero","cursos"])
    },
    methods:{
        ...Vuex.mapMutations(['aumentar','disminuir']),
        ...Vuex.mapActions(['obtenerCursos'])
    },
    created(){
        this.obtenerCursos()
    }
})



new Vue({
    el:'#app',
    store:store
})