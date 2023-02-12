<template>
  <Header/>
<!--  <input type="text" class="form-control mt-4" v-model="search" placeholder="search here..">-->
  <table class="table mt-4">

    <tr class="table-primary font-weight-bold">
      <td>Id</td>
      <td>Title</td>
      <td>Completed</td>
      <td>Actions</td>
      <td>Delete</td>
    </tr>
    <tr v-for="todo in  displayedPosts" :key="todo.id"
        :class="{ completed: todo.completed }" data-test="displayedPosts">
      <td>{{ todo.id }}</td>
      <td><input type="checkbox" v-model="todo.completed">
        {{ todo.title }}
      </td>
      <td>{{ todo.completed }}</td>
      <td id="update">
        <router-link :to="'/updateTodo/'+todo.id"><button class="btn btn-secondary">Edit<i class="fa-sharp fa-solid fa-pen"></i></button></router-link>
      </td>
      <button class="btn btn-danger mt-2" @click="deleteTodo(todo.id)">Delete<i class="fa-solid fa-trash"></i></button>

    </tr>
  </table>
  <!--  pagination-->
  <div class="pagination">

    <button class="btn btn-outline-primary" v-if="page != 1" @click="page--"> Prev</button>
    <button @click="page++" v-if="page < pages.length" class="btn btn-outline-primary ml-2"> Next</button>

  </div>


</template>

<script>
// import axios from "axios";
import Header from "@/components/Header.vue";
import {mapActions} from "vuex";

export default {
  name: 'HomePage',

  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 5,
      totalPages: 0,
      search: '',
      page: 1,
      pages: [],
    }
  },
  components: {
    Header,
  },
  methods: {
    ...mapActions(['fetchTodos', "deleteTodo"]),

    setPages() {

      let numberOfPages = Math.ceil(this.todos.length / this.perPage);

      for (let index = 1; index <= numberOfPages; index++) {

        this.pages.push(index);
      }
    },
    paginate() {
      let page = this.page;

      let perPage = this.perPage;

      let from = (page * perPage) - perPage;

      let to = (page * perPage);

      return this.todos.slice(from, to);
    }
    // searchTodos(){
    // return this.todos.filter((todo) => {
    //   return todo.title.match(this.search)
    // })
    // }
    // },
  },

  computed: {
    displayedPosts() {
      return this.paginate();
    },
    todos() {
      return this.$store.state['todos']
    },
  },
  watch: {
    todos() {
      this.setPages();
    },
  },

  created() {
    this.$store.dispatch('fetchTodos');
    this.fetchTodos()
  },
}
</script>

<style scoped>
.completed {
  /*text-decoration: line-through;*/
  font-weight: bold;
  background-color: antiquewhite;
  border-color: #ddd;
}
td input {
  margin-right: 5px;
}
i{
  margin-left: 6px;
}
</style>