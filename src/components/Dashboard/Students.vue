<template>
  <div class="students">
    <h2 class="mt-2">Students</h2>
    <p>{{students}}</p>
  </div>
</template>

<script>
export default {
  name: 'Students',
  components: {
  },
  data() {
   return {
     students: this.$root.$data.students
   }
  },
  computed: {
    Data() {
      console.log(this.students)
      return this.$root.$data.students;
    }
  }
}
</script>

<style scoped>
.students {
  
}

</style>