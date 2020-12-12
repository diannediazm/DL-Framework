<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import firebase from 'firebase';
export default {
  name: 'App',
  components: {
    Navbar,
  },
  created(){
    this.$store.dispatch('traerData');
  },
   mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('agregarUser', user)
        console.log("Si hay usuario con sesión activa");
      } else {
        console.log("No hay usuario con sesión activa...")
        this.$store.dispatch('agregarUser','')
      }
    });
   }
}
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap.scss';
 .links {
  list-style: none;
  display: flex;
  margin-left: 1000px;
  }
  .nav-link {
    color: white;
  }
</style>
