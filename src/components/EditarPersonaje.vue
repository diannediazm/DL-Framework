<template>
    <div class="container my-5">
        <h1 class="text-center">Edita un personaje</h1>
        <div v-if="this.$route.params.idFB">
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
        let datos = {}; 
        datos = this.$store.getters.mostrarRickandMorty.find(resp => resp.idFB === this.$route.params.idFB)
            if (datos){
                    this.form.id = datos.id;
                    this.form.name = datos.name;
                    this.form.image = datos.image;
                }
            },
    methods: {
                editar(){
                    if (this.form.id && this.form.name && this.form.name.length > 2 && this.form.image){
                        let data = {
                            id: this.form.id,
                            name: this.form.name,
                            image: this.form.image,
                        }
                        this.$confirm('¿Quieres editar este personaje?', 'Informativo', {
                                    confirmButtonText: 'Sí',
                                    cancelButtonText: 'No',
                                    type: 'info',
                                    center: true
                                    }).then(() => {
                                    this.$message({
                                        type: 'success',
                                        message: 'Personaje editado'
                                    });
                                    this.$store.dispatch('editarPersonaje', data);
                                    }).catch(() => {
                                    this.$message({
                                        type: 'info',
                                        message: 'Acción cancelada'
                                    });          
                                });               
                    } else {
                        console.log("No se puede");
                    }
                }
            },        
}
</script>