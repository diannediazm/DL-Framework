<template>
  <div>
    <b-container class="my-5 bv-example-row">
      <b-card-group :data="dataUsers">
      
      <b-row>
        <b-col class="mb-3" cols="6" sm="8" md="4" lg="4" xl="4" v-for="(dataUsers,index) in dataUsers" :key="index">
            <b-card>
              <img :src="dataUsers.image" img-alt="Card image" img-top>
              <b-card-text>
                {{dataUsers.id}}
                {{dataUsers.name}}
              </b-card-text>
              <b-button href="#" variant="primary" class="mr-3">Editar</b-button>
              <b-button href="#" variant="danger" @click="handleDelete(dataUsers.id)">Eliminar</b-button>
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
    handleDelete(id) {
      this.$store.dispatch('eliminarRickandMorty', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>