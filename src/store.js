import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        todos: [],
    },
    getters: {
        allTodos: (state) => {
            return state.todos
        }
    },

    actions: {
        async fetchTodos({commit}) {
            const response = await axios.get('http://localhost:3000/todolist');
            commit('setTodos', response.data)
        },
        async deleteTodo({commit}, id) {
            const result = await axios.delete(`http://localhost:3000/todolist/${id}`)
            console.log(result)
            commit('removeTodo', id)
              // alert('Todo Deleted')

        },
        async addTodo({commit}, title) {
            const result = await axios.post(`http://localhost:3000/todolist/`,
                {title:title, completed: false})
            commit('addTodo', result.data)
        },
        // async filterTodos({commit},event){
        //     const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
        //     const response= await axios.get(`http://localhost:3000/todolist?_limit=${limit}`);
        //     commit ('setTodos', response.data)
        // }
    },

    mutations: {
        setTodos: (state, todos) => (state.todos = todos),

        removeTodo: (state, id) =>
        {
            state.todos = state.todos.filter((todo) => todo.id !== id)

        },
        addTodo: (state, newTodo) => state.todos.unshift(newTodo)
    }
})
export default store