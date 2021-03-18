<template>
  <div class="d-flex flex-row justify-content-between">
    <div class="schedule-box d-flex flex-column">
      <div v-for="index in totalCalendarHours" :key="index">
        <div class="time-slot d-flex flex-row">{{startTime + index}}</div>
      </div>
    </div>
    <div class="add-schedule">
      {{schedule}}
    </div>
  </div>
</template>

<script>
export default{
  name: 'Schedule',
  data() {
    return {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      calendar: [],
      startTime: 6,
      endTime: 18,
      schedule: null,
      totalCalendarHours: null
    }
  },
  created() {
    const date = new Date ()
    this.schedule ={
      date: date,
      dayOfMonth: date.getDate(),
      dayOfWeek: date.getDay()
    }

    this.totalCalendarHours = this.endTime - this.startTime
  }
}
</script>

<style scoped>
.schedule-box {
  width: 45%;
}

.time-slot{
  border: 1px solid red;
  height: 75px;
}

.add-schedule {
  width: 45%;
}
</style>
