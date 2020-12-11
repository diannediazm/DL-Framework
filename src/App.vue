<template>
  <div>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="#">MI APP</b-navbar-brand>
      <div class="links">
      <b-nav-item href="/">Inicio</b-nav-item>
      <b-nav-item href="">Regístrate</b-nav-item>
      <b-nav-item href="/login">Login</b-nav-item>
      </div>
          <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Editar</b-nav-item>
          <b-nav-item href="#">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
   </b-navbar>
   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
