<template>
  <div>
    <ul>
        <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
            <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
                v-on:click="toggleComplete(todoItem, index)"></i>
            <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
            <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                <i class="fas fa-trash-alt"></i>
            </span>
        </li>
       
    </ul>

  </div>
</template>

<script>
export default {
    props:['propsdata'],
 
    methods: {
        removeTodo(todoItem, index) {
            console.log('remove item',todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
        },
        toggleComplete(todoItem, index) { 
            console.log(todoItem, index);
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    }
}
</script>

<style  scoped >
.checkBtn{
  color: skyblue;

}
.removeBtn {
    color:red;
}
.checkBtnCompleted {
    color:#b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>