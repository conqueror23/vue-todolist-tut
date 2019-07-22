<template>
  <div v-bind:class="{'completed':todo.completed}">
    <p>
      {{todo.title}}
      <!-- trace back to where the data is  -->
      <button class="del" @click="$emit('del-todo',todo.id)">x</button>
    </p>

    <input type="checkbox" v-on:change="markComplete" />
  </div>
</template>


<script>
export default {
  name: "Todoitem ",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
