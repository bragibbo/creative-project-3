<template>
  <div>
    <div class="time-slot d-flex flex-row">{{hourData.hour}}</div>
    <div v-for="(item, index) in hourData.appointments" :key="index">
      <div>{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hourData: Object
  }
}
</script>

<style scoped>
.time-slot{
  border: 1px solid red;
  height: 75px;
}

</style>