import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';
import router from '../router/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    RickandMorty: [],
    user: ''
  },
  getters: {
    mostrarRickandMorty(state) {
      return state.RickandMorty;
    }
  },
  mutations: {
    mutarPersonajes(state, arreglo) {
      state.RickandMorty = arreglo;
    },
    mutandoUser(state, usuario) {
      console.log(usuario);
      state.user = usuario.uid;
    }
  },
  actions: {
    traerData ({commit}) {
      db.collection("RickandMorty").onSnapshot(respuesta => {
        let arreglo = [];
        respuesta.forEach(element => {
          arreglo.push ({
            idFB:element.id,
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
    eliminarPersonaje(context, idFB) {
      db.collection("RickandMorty").doc(idFB).delete().then(() => {
        console.log('Personaje eliminado');
      }).catch (error => {
        console.log(error);
      })
    },
    editarPersonaje(context, data){
      db.collection("RickandMorty").doc(data.idFB).update({
        id: data.id,
        name: data.name,
        image: data.image,
      }).then(()=>{
        console.log("Editado");
        setTimeout(()=>{
          router.replace('/editar');
        },1000);
      })
    },
    agregarUser({commit}, usuario) {
      commit('mutandoUser', usuario);
    }
  },
})
