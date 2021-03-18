<template>
  <div class="dashboard">
    <div class="sidebar">
      <router-link class="links" to='/'>Home</router-link>
      <router-link class="links" to='/students'>Students</router-link>
    </div>
    <div class="sidebar-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Home from '../components/Dashboard/Home'
import Students from '../components/Dashboard/Students'

export default {
  name: 'Dashboard',
  component: {
    Home, 
    Students
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.sidebar {
  width: 150px;
  background: lightgrey;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.links {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
}
</style>