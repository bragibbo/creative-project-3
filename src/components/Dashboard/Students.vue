<template>
  <div class="students">
    <h2>Students</h2>
    <StudentTable :students="data"/>
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
     students: this.$root.$data.students
   }
  },
  computed: {
    data() {
      return this.$root.$data.students;
    }
  }
}
</script>

<style scoped>


</style>