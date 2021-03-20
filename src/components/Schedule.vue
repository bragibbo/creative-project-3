<template>
  <div class="d-flex flex-row justify-content-between">
    <div class="schedule-box d-flex flex-column">
      <h3>{{days[schedule.dayOfWeek]}}</h3>
      <div v-for="index in times" :key="index">
        <div class="time-slot d-flex flex-row">{{schedule[index].hour}}</div>
        <div v-for="(item, index) in schedule[index].appointments" :key="index">
          <div>{{item}}</div>
        </div>
      </div>
    </div>
    <ScheduleAdd :hours="times" @add="(e) => addToSchedule(e)"/>
  </div>
</template>

<script>
import moment from 'moment'
import ScheduleAdd from './ScheduleAdd'

export default{
  name: 'Schedule',
  data() {
    return {
      date: new Date(),
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      startTime: 6,
      endTime: 18,
      times: [],
      schedule: {},
    }
  },
  components: {
    ScheduleAdd
  },
  created() {
    this.schedule ={
      date: this.date,
      dayOfMonth: this.date.getDate(),
      dayOfWeek: this.date.getDay()
    }
    for(let i=this.startTime; i <= this.endTime; i++) {
      this.times.push(i)
      this.schedule[i] = {
        label: i,
        hour: moment(i, 'HH').format('h a'),
        appointments: []
      }
    }
  },
  methods: {
    addToSchedule(e) {
      console.log(e)
      this.schedule[e.hour].appointments.push(e)
    }
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
</style>
