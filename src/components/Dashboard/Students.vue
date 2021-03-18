<template>
  <div class="students">
    <h2>Students</h2>
    <TestTable :students="data"/>
  </div>
</template>

<script>
import TestTable from "../TestTable.vue"
export default {
  name: 'Students',
  components: {
    TestTable
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