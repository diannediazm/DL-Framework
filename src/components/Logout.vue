<template>
    <div class="container text-center">
        <h1 class="my-5">¡Nos vemos!</h1>
        <b-button type="submit" variant="danger" @click="logout">Cerrar sesión</b-button>
        <div class="background-logout"></div>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Logout',
    methods: {
        logout() {
      firebase.auth().signOut().then((resp) => {
          this.$message({
            message:  "¡Vuelve pronto!",
            type: 'success'
        });
          console.log(resp);
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          console.error(error);
        });
    }
    }
}
</script>

<style>
.background-logout {
  background-image: url('../assets/images/viejo.jpg');
  background-repeat: no-repeat;
  background-size: 50%;
  height: 665px;
  margin-left: 360px;
  margin-top: 50px;

}
    
</style>