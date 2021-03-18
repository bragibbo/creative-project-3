<template>
  <div id="app">
    <div class="content">
      <div class="nav">
      </div>
      <Dashboard/>
    </div>
  </div>
</template>

<script>
import Dashboard from './views/Dashboard'

export default {
  name: 'App',
  components: {
    Dashboard
  }

}
</script>


<style>
#app {
  min-height: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  height: 100%;
  min-height: 100%;
  padding-bottom: -60px;
}

.footer {
  margin-top: -60px;
  height: 50px;
  background: #2c3e50;
}

.nav {
  background: red;
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
