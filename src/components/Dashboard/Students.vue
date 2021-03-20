<template>
  <div class="students">
    <h1 class="page-title">Students</h1>
    <StudentTable :students="studentData"/>
 </div>
</template>

<script>
import StudentTable from "../StudentTable.vue"
export default {
  name: 'Students',
  components: {
    StudentTable
  },
  data() {
   return {
     
   }
  },
  computed: {
    studentData() {
      return this.$root.$data.students;
    }
  }
}
</script>

<style scoped>


</style>