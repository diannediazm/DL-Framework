import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    RickandMorty: [],
  },
  getters: {
    mostrarPersonajes(state) {
      return state.RickandMorty;
    }
  },
  mutations: {
    mutarPersonajes(state, arreglo) {
      state.RickandMorty = arreglo;
    }
  },
  actions: {
    traerData ({commit}) {
      db.collection("RickandMorty").onSnapshot(respuesta => {
        let arreglo = [];
        respuesta.forEach(element => {
          arreglo.push ({
            id: element.data().id,
            name: element.data().name,
            image: element.data().image,
          })
        });
        commit('mutarPersonajes', arreglo);
      })
    }
  },
})
