import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = { 
    fetch() { 
        const arr = [] ; 
        if(localStorage.length > 0) { 
            for( let i=0;  i<localStorage.length; i ++) {
   
               if(localStorage.key(i) !=='loglevel:webpack-dev-server' && localStorage.key(i) !== '') {
                  console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                  arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                 // this.todoItems.push(localStorage.key(i));
                   // console.log(localStorage.key(i));
              
               }
           }
   
        } 
        return arr;
    },
    
};


export const store = new Vuex.Store({
    state:{
        headerText:'TODO List!',
        todoItems:storage.fetch()
    },
    mutations: {
        addOneItem(state, todoItem ) { 
        console.log('recevied');
        const obj = { 
            completed: false,
            item: todoItem
        }
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);

      },
    }


});