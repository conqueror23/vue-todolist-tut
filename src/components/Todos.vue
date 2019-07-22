<template>
  <div>
    <div v-bind:key="item.id" v-for="item in todos">
      <Todoitem v-bind:todo="item" v-on:del-todo="$emit('del-todo',todo.id)" />
    </div>
  </div>
</template>

<script>
import Todoitem from "./Todoitem";
export default {
  name: "Todos",
  components: {
    Todoitem
  },
  props: ["todos"]
};
</script>


<style scoped>
</style>