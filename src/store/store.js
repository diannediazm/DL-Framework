import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    RickandMorty: [],
  },
  getters: {
    mostrarRickandMorty(state) {
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
          }),
          console.log("entradata");
        });
        commit('mutarPersonajes', arreglo);
      });
    },
    agregandoPersonajes(context,data){
      db.collection("RickandMorty").add({
        id: data.id,
        name: data.name,
        image: data.image
      })     
      .then(resp => {
        console.log(resp);
      })
    },
    eliminarPersonaje(context, id) {
      db.collection("RickandMorty").doc(id).delete().then(() => {
        console.log('Personaje eliminado');
      }).catch (error => {
        console.log(error);
      })
    }
  },
})
