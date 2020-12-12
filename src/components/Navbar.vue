<template>
    <div>
        <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="/">MI APP</b-navbar-brand>
      <div class="links">
      <b-nav-item href="/">Inicio</b-nav-item>
      <b-nav-item href="/registro">Regístrate</b-nav-item>
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
          <b-nav-item href="/cierre">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
   </b-navbar>
   <router-view/>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    
}
</script>

<style lang="">
    
</style>