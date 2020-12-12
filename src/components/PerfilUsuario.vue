<template>
  <div>
    <b-container class="my-5 bv-example-row">
      <b-card-group>
      <b-row>
        <b-col class="mb-3" cols="6" sm="8" md="4" lg="4" xl="4" :data="dataUsers" v-for="(dataUsers,index) in dataUsers" :key="index">
            <b-card>
              <img :src="dataUsers.image" img-alt="Card image" img-top>
              <b-card-text>
                {{dataUsers.name}}
              </b-card-text>
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
      return this.$store.getters.mostrarPersonajes;
    }
  }
      }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>