<template>
  <div>
    <div v-for="index in totalCalendarHours" :key="index">
      <div>{{this.startTime + index}}</div>
    </div>
    <div>
      {{this.schedule}}
    </div>
  </div>
</template>

<script>
// export default{
//   name: 'Schedule',
//   components: {

//   },
//   data() {
//     return {
//       days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//       calendar: [],
//       startTime: 6,
//       endTime: 18,
//       schedule: null,
//       totalCalendarHours: null
//     }
//   },
//   created() {
//     const date = new Date ()
//     this.schedule ={
//       date: date,
//       dayOfMonth: date.getDate(),
//       dayOfWeek: date.getDay()
//     }

//     this.totalCalendarHours = this.endTime - this.startTime
//   }
// }
</script>

<style scoped>

</style>
