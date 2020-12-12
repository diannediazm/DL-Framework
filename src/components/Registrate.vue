<template>
    <div class="container mt-5">
      <h1 class="text-center">Crea tu usuario</h1>
        <b-form @submit.prevent="registro">
            <b-form-group
                id="input-group-1"
                label="Nombre"
                label-for="input-1"
                >
                <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                required
                placeholder="Escribe tu nombre"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Correo electrónico"
                label-for="input-2"
                >
                <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                required
                placeholder="Escribe tu correo electrónico"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Contraseña" label-for="input-3">
                <b-form-input
                id="input-3"
                v-model="form.password"
                type="password"
                required
                placeholder="Escribe tu contraseña"
                ></b-form-input>
            </b-form-group>

        <b-button type="submit" variant="primary">Crear usuario</b-button>
        </b-form>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Registrate',
    data () {
        return {
            form: {
                valid: false,
                name: '',
                email: '',
                password: '',
            } 
        }
    },
    methods: {
        registro(){
            if (this.form.name && this.form.name.length > 2 && this.form.email && this.form.password && this.form.password > 6) {
                console.log("funciona");
                firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
                .then(resp => { 
                    console.log(resp.user);
                    return resp.user.updateProfile({
                        displayName: this.form.name
                    }).then(() => {
                        this.$message({
                        message:  `¡Bienvenid@ ${this.form.name}`,
                        type: 'success'
                        });
                        this.$router.push('/user');
                    })
                })
                .catch(error => {
                    console.error(error.code);
                    console.error(error.message);
                    if (error.code == "auth/email-already-in-use") {
                    this.errores(error);
                    } else if(error.code == "auth/invalid-email") {
                    this.errores(error);
                    } else if(error.code == "auth/weak-password"){
                    this.errores(error);
                    } else {
                    this.errores(error);
                    }
                })
            } else {
                console.error("no se puede registrar");
            }
        }  
    }  
}
</script>

<style>
    
</style>