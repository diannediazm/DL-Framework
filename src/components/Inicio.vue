<template>
    <div class="container">
        <b-form @submit.prevent="login">
        <b-form-group
            id="input-group-1"
            label="Correo electrónico"
            label-for="input-1"
        >
            <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Escribe tu correo electrónico"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
            <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Escribe tu contraseña"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Iniciar sesión</b-button>
        <b-button type="reset" variant="danger" class="ml-3">Reset</b-button>
        </b-form>
        
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Inicio',
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      login(){
          if (this.form.email && this.form.password && this.form.password.length >= 6){
              console.log("ingresa");
              firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
              .then(resp => {
                  console.log(resp.user);
                  this.$router.push('/user');
              })
              .catch(error => {
                  console.error(error.code);
                  console.error(error.message);
                if (error.code == "auth/wrong-password") {
                    this.$notify.error({
                    title: 'Error',
                    message: 'Contraseña inválida'
                });
                } else if (error.code == "auth/user-not-found") {
                    this.$notify.error({
                    title: 'Error',
                    message: 'Usuario no encontrado'
                });
                this.$router.push('/registro')
                }                   
              })
          }
          else {
              console.log("No ingresa");
          }
      }
    },
  }
</script>

<style>
    
</style>