<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name='title' placeholder="Add Todo..">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
import uuid from 'uuid'
export default {
    name:'AddToDo',
    data(){
        return {
            title:''
        }
    },
    methods:{
        addTodo(e){
            e.preventDefault();
            const newTodo={
                id:uuid.v4(),
                title:this.title,
            }
            this.$emit('add-todo',newTodo);
            this.title='';
        }
        // 
    }
}
</script>

<style scoped>

    
</style>