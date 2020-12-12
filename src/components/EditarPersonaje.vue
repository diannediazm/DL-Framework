<template>
    <div class="container my-5">
        <h1 class="text-center">Edita un personaje</h1>
        <b-form @submit.prevent="editar">
           <b-form-group
                id="input-group-1"
                label="ID"
                label-for="input-1"
                >
                <b-form-input
                id="input-1"
                v-model="form.id"
                type="number"
                required
                placeholder="Escribe el ID"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-2"
                label="Nombre"
                label-for="input-2"
                >
                <b-form-input
                id="input-2"
                v-model="form.name"
                type="text"
                required
                placeholder="Escribe tu nombre"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-3"
                label="Imagen"
                label-for="input-3"
                >
                <b-form-input
                id="input-3"
                v-model="form.image"
                type="text"
                required
                placeholder="Copia la URL de una imagen"
                ></b-form-input>
            </b-form-group>

        <b-button type="submit" variant="primary">Editar</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'EditarPersonaje',
    data() {
        return {
            form: {
                id: '',
                name: '',
                image: '',
            },
        }
    },
    created() {
        let datos = this.$store.getters.mostrarPersonaje.find(resp => resp.id === this.$route.params.id)
        console.log(datos);
    }
}
</script>