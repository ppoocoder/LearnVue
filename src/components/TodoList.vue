<template>
  <div>
    <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
            <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
                v-on:click="toggleComplete(todoItem, index)"></i>
            <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
            <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                <i class="fas fa-trash-alt"></i>
            </span>
        </li>     
  </transition-group>
  </div>
</template>

<script>
export default {
    // props:['propsdata'],
 
    methods: {
        removeTodo(todoItem, index) {
            console.log('remove item',todoItem, index);
            this.$emit('removeItem',todoItem,index);
    
        },
        toggleComplete(todoItem, index) { 
            console.log(todoItem, index);
            this.$emit('toggleItem', todoItem, index);
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

/* 리스트 아이템 트렌지션 효과 */

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>