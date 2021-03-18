<template>
  <div>
    <div v-for="index in this.totalCalendarHours" :key="index">
      <div>{{this.startTime + index}}</div>
    </div>
    <div>
      {{this.schedule}}
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'

export default{
  name: 'Schedule',
  components: {

  },
  data: () => {
    return {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      calendar: [],
      startTime: 6,
      endTime: 18
    }
  },
  computed: {
    schedule () {
      const date = new Date()
      return {
        date: date,
        dayOfMonth: date.getDate(),
        dayOfWeek: date.getDay()
      }
    },
    totalCalendarHours() {
      return this.data.endTime - this.data.startTime
    }
  }
}
</script>

<style scoped>

</style>
