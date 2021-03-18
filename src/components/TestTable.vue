<template>
<div class="wrapper">
  <div class="student-table"   v-for="student in students" :key="student.id">
    <div class="grid-container">
      <div class="grid-item">
        <p>{{student.last_name}}, {{student.first_name}}</p>
      </div>
      <div class="grid-item">
        <p>{{student.gender}}</p>
      </div>
      <div class="grid-item">
        <p>{{student.email}}</p>
      </div>
      <div class="grid-item">
        <p>{{student.student_since}}</p>
      </div>
      <div class="grid-item">
        <p>{{student.billing_price}}</p>
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
      font-size:1.5em;  
    }
    .grid-container {
      display: grid;
      border: 1px solid green;
      grid-template-columns: 2fr .25fr 3fr 1fr 1fr;
      grid-column-gap: 20px;
      
    }

    .grid-item {
      border: 1px solid red;
    }
</style>