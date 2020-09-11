import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      frutas:[
          {nombre:"Manzana",cantidad:0},
          {nombre:"Platano",cantidad:0},
          {nombre:"Guayaba",cantidad:0}
      ]
  },
  mutations: {
      aumentar(state,index){
          state.frutas[index].cantidad++;
      },
      reiniciar(state){
          state.frutas.forEach(f=>{f.cantidad=0;})
      }
  },
  actions: {
  },
  modules: {
  }
})
