<template>
  <div id="app">
  <Header/>
  <AddToDo  v-on:add-todo='addToDo'/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "./components/Todos";
import Header from './layout/Header'
import AddToDo from './components/AddToDO'
import axios from 'axios'
export default {
  name: "app",
  components: {
    Todos,
    Header,
    AddToDo
  },
  // data here is a function 
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "todo one ",
          completed:true,
        },
        {
          id: 2,
          title: "todo two ",
          completed:false,

        },
        {
          id: 3,
          title: "Final Steps here ",
          completed:true,
        }
      ],
      apiTodo:[],

    };
  },
  deleteTodo(id){
    this.todos= this.todos.filters(item=>{item.id !==id
    })
  },
  addToDo(newTodo){
    this.todos=[...this.todos,newTodo];
  },
  created(){
    axios.post('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{this.apiTodo =res.data})
    .catch(err=>console.log(err))

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
