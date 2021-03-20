<template>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
  </template>

<script>
export default {
  name: 'TestTable',
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