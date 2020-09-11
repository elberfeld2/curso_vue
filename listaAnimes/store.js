export const store = new Vuex.Store({
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
            state.animes = state.original //Del original
                .filter( a => //Filtramos
                    a.nombres.some( n => //Si en los nombres existe uno
                        n.includes(filtro.toLowerCase()))) //que incluya lo que se escribio 

            // state.animes = state.original.filter(a=>a.nombres.reduce((existe,n)=>(existe ? true : n.includes(filtro)),false))
            // console.log(state.animes)
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

export const h = "hola"