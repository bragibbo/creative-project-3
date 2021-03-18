<template>
<div class="wrapper">
  <div class="students">
    <div class="student" v-for="student in students" :key="student.id">
      <div class="info">
        <h1>{{student.first_name}}</h1>
        <p>{{student.email}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'StudentTable',
  props: {
    students: Array
  },
}
</script>

<style scoped>
    h1 {
      font-size:2em;  
    }
</style>