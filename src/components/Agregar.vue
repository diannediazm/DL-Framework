<template>
    <div class="container my-5">
        <h1 class="text-center">Agrega un personaje</h1>
        <b-form @submit.prevent="agregar">
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
                label="Imagen"
                label-for="input-2"
                >
                <b-form-input
                id="input-2"
                v-model="form.image"
                type="text"
                required
                placeholder="Copia la URL de una imagen"
                ></b-form-input>
            </b-form-group>

        <b-button type="submit" variant="primary">Agregar</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'Agregar',
    data() {
    return {
      form: {
        name: '',
        image: '',
      },
    }
  },
  methods: {
    agregar() {
      if (this.form.name && this.form.image){
        this.$store.dispatch('agregandoPersonajes', this.form),
        this.$router.push('/user')
      } else {
        console.log('no carga');
      }
    }
  },
}
</script>