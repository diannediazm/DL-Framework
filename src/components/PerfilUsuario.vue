<template>
  <div>
    <b-container class="my-5 bv-example-row">
      <b-card-group>
      <b-row>
        <b-col class="mb-3" cols="6" sm="8" md="4" lg="4" xl="4" v-for="(personajes,index) in personajes" :key="index">
            <b-card>
              <img :src="personajes.imagen" img-alt="Card image" img-top>
              <b-card-text>
                {{personajes.nombre}}
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
    data(){
      return {
        personajes: [
          {
          'id' : 1 ,
          'nombre' : 'Morty' ,
          'imagen' :
          'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
          },
          {
          'id' : 2 ,
          'nombre' : 'Rick' ,
          'imagen' :
          'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          },
          {
          'id' : 3 ,
          'nombre' : 'Summer' ,
          'imagen' :
          'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
          },
          {
          'id' : 4 ,
          'nombre' : 'Beth' ,
          'imagen' :
          'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
          },
          {
          'id' : 5 ,
          'nombre' : 'Jerry' ,
          'imagen' :
          'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
          }
          ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>