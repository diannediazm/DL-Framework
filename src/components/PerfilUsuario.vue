<template>
  <div>
    <b-container class="my-5 bv-example-row">
      <h1 class="text-center my-5">Rick and Morty</h1>
      <b-button href="/agregando" variant="primary" class="mb-4">Agregar personaje</b-button>
      <b-card-group :data="dataUsers">
      <b-row>
        <b-col class="mb-3" cols="6" sm="8" md="4" lg="4" xl="4" v-for="(dataUser,index) in dataUsers" :key="index">
            <b-card>
              <img :src="dataUser.image" img-alt="Card image" img-top>
              <b-card-text>
                {{dataUser.name}}
              </b-card-text>
              <b-button href="#" variant="primary" class="mr-3" @click="handleEdit(dataUser.idFB)">Editar</b-button>
              <b-button href="#" variant="danger" @click="handleDelete(dataUser.idFB)">Eliminar</b-button>
            </b-card>
        </b-col>
      </b-row>
      </b-card-group>
    </b-container>
  </div>
  
</template>

<script>  
export default {
  name: 'PerfilUsuario',
  computed: {
    dataUsers() {
      return this.$store.getters.mostrarRickandMorty;
    }
  },
  methods: {
    handleDelete(idFB) {
      this.$store.dispatch('eliminarPersonaje', idFB);
    },
    handleEdit(idFB) {
      this.$router.push({name: "Editar", params: {idFB:idFB}});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>