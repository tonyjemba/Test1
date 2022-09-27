<script setup>

defineProps({
  listItems: {type:Array,required:true}
})


</script>

<template v-for>
  <h1>Todo List</h1>

  <ul
    v-for="listItem in listItems"
    :key="listItem.id"
  >
    <li>{{ listItem.value }}</li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
